import React from 'react'
import { useEffect, useState } from 'react';
import { db } from '../firebase'
import { getDocs, collection } from 'firebase/firestore'

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

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDataFromDb();
      setNewsData(data);
    }
    fetchData()
  }, []);

  return (
    <div>
      {newsData.map((news) => (
        <div key={news.id}>
          <h1>{news.text}</h1>
          <p>{news.link}</p>
        </div>
      ))}
    </div>
  )
}

export default Suspensions
