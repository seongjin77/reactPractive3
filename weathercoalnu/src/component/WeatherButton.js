import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities }) => {
  const getWeatherByCity = async (city) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=499d737b2bec38bd9d9551149102200a`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setCityWeather(data);
  };

  return (
    <div>
      {cities.map((item) => (
        <Button variant="warning">{item}</Button>
      ))}
    </div>
  );
};

export default WeatherButton;
