import React, { useState } from "react";
import axios from "axios";
import WeatherDetails from "./WeatherDetails";

import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.city);
  const [WeatherInfo, setWeatherInfo] = useState({ ready: false });

  function handleData(response) {
    console.log(response.data);
    setWeatherInfo({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      humidity: Math.round(response.data.temperature.humidity),
      description: response.data.condition.description,
      wind: Math.round(response.data.wind.speed),
      city: response.data.city,
      icon: response.data.condition.icon,
      date: response.data.time,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "03036dt370ce468aff36bf274ca02od3";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleData);
  }
  function handleChange(event) {
    setCity(event.target.value);
  }
  if (WeatherInfo.ready === true) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit} keyDown={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city.."
            className="Cities"
            autoFocus="on"
            onChange={handleChange}
            
          />
          <input type="submit" value="Search" className="btn btn-primary"/>
        </form>
        <WeatherDetails data={WeatherInfo}/>
      </div>
    );
  } else {
    let apiKey = "03036dt370ce468aff36bf274ca02od3";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleData);

    return (
     <h1>Loading....</h1>
    );
  }
}
