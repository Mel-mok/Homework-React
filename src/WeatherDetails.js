import React from "react";
import CalibratedDate from "./CalibratedDate";
import "./WeatherDetails.css";


export default function WeatherDetails(props) {
    return (
        <div className="WeatherDetails">
      <div className="container">
        <h1>{props.data.city}</h1>
        <ul>
          <li><CalibratedDate date={props.data.date}/></li>
          <li>{props.data.description}</li>
        </ul>
        <div className="row">
          <div className="col-6 column1">
            <img
              className="img-fluid icon"
              src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.data.icon}.png`}
              alt="weather-icon"
            />
            <span className="Temperature">{props.data.temperature}</span>
            <span className="Unit">°C | F</span>
          </div>
          <div className="col-6 column2">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    );

}