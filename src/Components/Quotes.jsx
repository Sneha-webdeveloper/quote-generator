import axios from 'axios'
import React, { useEffect, useState } from 'react'

import './quotes.css'



function Quotes() {
    const [quote,SetQuote]=useState([])


    // const url='https://dummyjson.com/quotes'
    const fetchData = async ()=>{
        try{
            const response = await axios.get(`https://dummyjson.com/quotes`);
            console.log(response.data.quotes);
            const index = Math.floor(Math.random() * (response.data.quotes).length);
            SetQuote(response.data.quotes[index]);

        }catch(err){
            throw err;
        }
    }

    useEffect(() => {
        fetchData(); 
    }, []);

    const quoteChange = () => {
        fetchData();
    }

  return (
    <>
    
<div className='container'>
        <h1>{quote?.quote}</h1>
        <p>-{quote?.author}</p>
        <button onClick={quoteChange}>QUOTE OF THE DAY</button>
    
</div>    </>
  )
}

export default Quotes