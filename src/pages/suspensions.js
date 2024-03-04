import React, { useEffect, useState } from 'react';

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
  const [visibleItems, setVisibleItems] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleUpdateClick = async () => {
    // Send an update POST to my own app
    try {
      const response = await fetch('https://liigasafety-t5vi.onrender.com/update_data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': '193bb1eef15752d64f22f6b87d6874e6'
        }
      });

      if (response.ok) {
        console.log('Data updated successfully!'); 
      } else {
        console.error('Error updating data:', response.status);
      }
    } catch (error) {
      console.error('Error during update:', error);
    }
  };

  const loadMore = () => {
    // Show loading indicator
    setIsLoading(true);
  
    // Simulate fetching additional data
    setTimeout(() => { 
        setVisibleItems(prevItems => prevItems + 10);
        setIsLoading(false); // Hide loading indicator
    }, 1000); // Simulate a 1-second delay 
  };

  return (
    <>
      <h1>Liigan kurinpidon päätökset</h1>
      <div
        style={{
          display: 'inline-block',
        }}
      >
        <Button
          variant="contained"
          onClick={handleUpdateClick}
        >
          Päivitä tiedot
        </Button>
        {/* From the newsData get items and remove them from the array */}
        {newsData.slice(0, visibleItems).map((news) => (
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
        <div style={{ display: 'inline-block', textAlign: 'center' }}>
          <Button
            variant="contained"
            onClick={loadMore}
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Load More'}
          </Button>
        </div>
      </div>
    </>
  )
}

export default Suspensions
