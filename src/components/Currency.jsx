"use client";

import { useEffect, useState } from "react";
import { inter } from "./DateDropdown";

const CurrencyRate = () => {

    const [rate, setRate] = useState(90)


    // useEffect(() => {
    //     // Initialize the WebSocket connection
    //     let socket = new WebSocket('wss://stream.binance.com:9443/ws/usdttrc20rub@trade');

    //     // When receiving data from the WebSocket
    //     socket.onmessage = (event) => {
    //         const data = JSON.parse(event.data);
    //         const price = data.p;  // 'p' contains the price in RUB
    //         console.log(data)
    //         setRate(price);
    //     };

    //     // Handle WebSocket errors
    //     socket.onerror = (error) => {
    //         console.error('WebSocket Error:', error);
    //     };

    //     // Handle WebSocket close
    //     socket.onclose = () => {
    //         console.log('WebSocket connection closed. Reconnecting...');
    //         // setTimeout(() => {
    //         //     socket = new WebSocket('wss://stream.binance.com:9443/ws/usdttrc20rub@trade');
    //         // }, 1000); // Retry after 1 second
    //     };

    //     // Clean up when the component unmounts
    //     return () => {
    //         socket.close();
    //     };
    // }, []);


    return (
        <p className={`${inter.className} text-[#002269] text-[14px] font-bold mb-1`}>{rate}</p>
    )
}

export default CurrencyRate