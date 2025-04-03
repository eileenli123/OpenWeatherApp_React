import React, { useEffect, useState } from 'react'


const WeatherDisplay = ({ city }) => {

    const API_KEY = '9ef1e583f2036afba84533ae7473074c';
    const [weatherData, setWeatherData] = useState(null);

    const fetchWeather = async (city) => {
        console.log(`trying to fetch ${city}`);
        try {
            //get data from openWeatherAPI
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );

            //check response 
            if (!response.ok) throw new Error('City not found');

            //else set data 
            const data = await response.json();
            setWeatherData(data);
            //console.log(data); -- see server response in 'network' tab of dev tools

        } catch (err) {
            console.error(err.message);
            setWeatherData(null);
        }
    };

    //useEffect() hook to only call effect when a state changes (otherwise, it will fetch every re-render which is a lot of loops)
    useEffect(() => {
        if (!city) return; //city should default to chicago, but just in-case to preent empty requests
        console.log(city);
        fetchWeather(city);

    }, [city]);

    if (!weatherData) return <p>Loading weather for {city}...</p>; //wait for data to be fetched

    const { main, name, weather } = weatherData; //object decontructing to get selected data we want from weatherData
    const weatherInfo = weather[0]; //weather is stored as an array

    //from api desription : For code 500 - light rain icon = "10d". See below a full list of codes
    //URL is https://openweathermap.org/img/wn/10d@2x.png
    const weather_icon_url = `https://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`

    return (
        <div className='weather-card'>
            <h2> {name} </h2>
            <img src={weather_icon_url}
                alt={weatherInfo.description}
                className='weather-icon' />
            <p> {weatherInfo.description}</p>
            <p className='temp'> Temperature: {main.temp}°C </p>
            <p>Feels like: {main.feels_like}°C </p>
        </div>
    )
}

export default WeatherDisplay