import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <h1>Mokopane</h1>
        <ul>
          <li>Friday 09:00</li>
          <li>Sunny</li>
        </ul>
        <div className="row">
          <div className="col-6 column1">
            <img
              className="img-fluid icon"
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="weather-icon"
            />
            <span className="Temperature">26</span>
            <span className="Unit">°C | F</span>
          </div>
          <div className="col-6 column2">
            <ul>
              <li>Humidity: 81%</li>
              <li>Wind: 2 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
