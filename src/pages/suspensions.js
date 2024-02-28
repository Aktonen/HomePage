import React from 'react'
import { useEffect, useState } from 'react';
import { db } from '../firebase'
import { getDocs, collection } from 'firebase/firestore'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

async function fetchDataFromDb() {
  const query = await getDocs(collection(db, "news"))

  const data = [];
  query.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() })
  });
  return data;
}

const Suspensions = () => {

  const [newsData, setNewsData] = useState([]);

  let link = 

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDataFromDb();
      setNewsData(data);
    }
    fetchData()
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
                <a target='_blank' href={`https://liiga.fi${news.link}`}>liiga.fi</a>
              </CardActions>
            </React.Fragment>
          </Card>
        ))}
      </div>
    </>
  )
}

export default Suspensions
