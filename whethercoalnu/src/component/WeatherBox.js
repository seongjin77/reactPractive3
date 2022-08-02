import React from 'react'

const WeatherBox = ({weather}) => {

  return (
    <div className="weather-box">
        <div>{weather?.name}</div>
        <h2>{weather?.main.temp} / {weather?.main.temp *(9/5) +32}</h2>
        <div>{weather && weather.weather[0].description}</div>
    </div>
  )
}

export default WeatherBox