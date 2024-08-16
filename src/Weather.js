import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
        
          <h1>Mokopane</h1>
          <ul>
        <li>Friday 09:00</li>
        <li>Sunny</li>

        <li>
          <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="weather-icon" />
          26 °C|F
        </li>
      </ul>
      <ul>
        <li>Humidity: 81%</li>
        <li>Wind: 2 km/h</li>
        <li>
          <img src="" />
          26 °C|F
        </li>
      </ul>
    </div>
  );
}