import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, City, handleCityChange }) => {
  return (
    <div>
      <Button
        variant={`${City === '' ? "info" : "warning"}`}
        onClick={() => handleCityChange("current")}
      >
        Current Location
      </Button>
      {cities.map((item, index) => (
        <Button
          key={index}
          variant={`${City === item ? "info" : "warning"}`}
          onClick={() => {
            handleCityChange(item);
          }}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
