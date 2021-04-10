import React, {useState, useEffect} from 'react';
import {WeatherContainer} from './Weather-styles';


const api = {

    key: process.env.REACT_APP_Weather_API_KEY,
    base: 'https://api.openweathermap.org/data/2.5/',
    lat: 51.45460,
    lon: -0.03777,

}

export const Weather = () => {

    const [weatherData, setWeatherData] = useState({});
    
    useEffect(() => {

        fetch((`${api.base}weather?lat=${api.lat}&lon=${api.lon}&units=metric&APPID=${api.key}`))
        .then(res => res.json())
        .then(result => {
            setWeatherData(result);
        })

    }, [])

    return (
        <WeatherContainer>

            <h2>{weatherData.weather ? weatherData.weather[0].main : null}</h2>
            <h2>{Math.round(weatherData.weather ? weatherData.main.temp : null) }°</h2>
            <h2>Brockley</h2>
  
        </WeatherContainer>
    )
}

