import { useEffect, useState } from 'react';
import './App.css';
import { db } from './firebase'
import { getDocs, collection } from 'firebase/firestore'

async function fetchDataFromDb() {
  const query = await getDocs(collection(db, "news"))

  const data = [];
  query.forEach((doc) => {
    data.push({id: doc.id, ...doc.data()})
  });
  return data;
}

function App() {
  const [newsData, setNewsData] = useState([]);

  useEffect (() => {
    async function fetchData() {
      const data = await fetchDataFromDb();
      setNewsData(data);
    }
    fetchData()
  }, []);

  return (
    <div className="App">
      <h1>Hello!</h1>
      <div>
        {newsData.map((news) => (
          <div key={news.Title}>
            <h1>{news.Title}</h1>
            <p>{news.id}</p>
            <p>{news.link}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
