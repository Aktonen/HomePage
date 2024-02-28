import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Electricity = () => {
  const [price, setPrice] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD format
        const hour = new Date().getHours(); // 0-23 format

        const response = await axios.get(`https://api.porssisahko.net/v1/price.json?date=${today}&hour=${hour}`);

        // const allData = await axios.get(`https://api.porssisahko.net/v1/latest-prices.json`);

        // console.log(allData);

        setPrice(response.data.price);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPrice();
  }, []);

  return (
    <div>
      <h2>Electricity Price (snt/kWh):</h2>
      {price ? (
        <p>{price.toFixed(2)}</p>
      ) : error ? (
        <p className="error">Error fetching price: {error}</p>
      ) : (
        <p>Loading price...</p>
      )}
    </div>
  );
};

export default Electricity;
