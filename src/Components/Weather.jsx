import React, { useEffect, useState } from 'react'
import {response} from 'express'


const Weather = () => {

    const [weather, setWeather] = useState(null)

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const latitude = position.coords.latitude
                const longitude = position.coords.longitude
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid={0a8b70f32de832c364366def717b7145}`)
                    .then((response)=>response.json())
                    .then((data) => setWeather(data))
            })
        }
    },[])

    return (
        <div>
            {weather ? (
                <div>
                    <h2>current weather</h2>
                    <h2>Temperature:{weather.main.temp}</h2>
                    <h2>Conditions:{weather.weather[0].description}</h2>
                </div>

            ) : (
                <p>
                    Loding...
                </p>
            )
            }
        </div>
    )
}

export default Weather