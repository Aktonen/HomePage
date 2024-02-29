import React from 'react'
import { useEffect, useState } from 'react';
import { db } from '../firebase'
import { getDocs, collection } from 'firebase/firestore'

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

const Suspensions = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const query = await getDocs(
          collection(db, "news"),
        );

        const data = [];
        query.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });

        // Sort data array in descending order:
        data.sort((a, b) => {
          const dateA = a.date.split('.').reverse();
          const dateB = b.date.split('.').reverse();

          for (let i = 0; i < dateA.length; i++) {
            if (dateA[i] !== dateB[i]) {
              return dateB[i] - dateA[i];
            }
          }
          return 0;
        });

        setNewsData(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <h1>Liigan kurinpidon päätökset</h1>
      <div
        style={{
          display: 'inline-block',
        }}
      >
        {newsData.map((news) => (
          <Card
            variant='outlined'
            className='suspension-card'
            style={{
              alignContent: 'middle',
              justifyContent: 'center',
              marginTop: '10px',
            }}
          >
            <React.Fragment>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Kurinpito
                </Typography>
                <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
                  {news.date}
                </Typography>
                <Typography variant="h5" component="div">
                  {news.text}
                </Typography>
              </CardContent>
              <CardActions
                style={{
                  alignContent: 'middle',
                  justifyContent: 'center',
                }}
              >
                <Button
                  className='suspension-news-link'
                  target='_blank'
                  href={`https://liiga.fi${news.link}`}
                >
                  Lue uutinen
                </Button>
              </CardActions>
            </React.Fragment>
          </Card>
        ))}
      </div>
    </>
  )
}

export default Suspensions
