import React from "react";


import "./ForecastDay.css";

export default function ForecastDay(props) { 
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dt = new Date(props.data.time * 1000);
    let day = days[dt.getDay()];
    return (
        <div className="ForecastDay">
        <ul>
        <li>{day.slice(0,3)}</li>
        <li className="ForecastIcon"> <img
            className="icon"
            src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.data.condition.icon}.png`}
            alt="weather-icon"
            /></li>
            <li><span className="Maximum">{Math.round(props.data.temperature.maximum)}°</span> <span className="Minimum">{Math.round(props.data.temperature.minimum)}°</span></li>
        </ul>
        </div>
    );
}
