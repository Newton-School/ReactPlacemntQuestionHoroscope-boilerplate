import React from 'react'
import { useState, useEffect } from 'react';

const Horoscope = ({ sunsign, timeframe }) => {

    const [horoscope, setHoroscope] = useState([])
    const [loading, setLoading] = useState(true)
    /* Implement the use effect hook to call the second api here */
    {return loading ?  (<>Loading...</>) :   <div>{horoscope.horoscope}</div> }
   
}

export default Horoscope