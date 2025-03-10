"use client"
// components/PriceDisplay.js

import { useEffect, useState } from 'react';
// import axios from 'axios';

const useTetherRub = () => {
  const [price, setPrice] = useState(null);
  const [rubPrice, setRubPrice] = useState(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        // Fetch USDT price in USD from CoinGecko
        const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=usd,rub');
        const response = await res.json()
        console.log(response)
        const priceInUsd = response.tether.usd;
        const priceInRub = response.tether.rub;

        setPrice(priceInUsd);
        setRubPrice(priceInRub);
      } catch (error) {
        console.error('Error fetching the price:', error);
      }
    };

    // Fetch price initially
    fetchPrice();

    // Fetch the price every 10 seconds
    const interval = setInterval(() => {
      fetchPrice();
    }, 5000);

    // Cleanup interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return rubPrice?.toFixed(2)
};

export default useTetherRub;
