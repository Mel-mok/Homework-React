import React, { useState} from "react";

import "./WeatherDetails.css";

export default function TemperatureUnit(props){
    let [unit, setUnit] = useState("celsuis");

    function displayCelsius(event) {
        event.preventDefault();
        setUnit("celsius")
    }
    function displayFahren(event) {
        event.preventDefault();
        setUnit("Fahrenheit")
    }

    if (unit === "celsius") {
        return (
            <div className="TemperatureUnit">
                <span className="Temperature">{props.celsius}</span>
                <span className="Unit">°C | <a href="/" onClick={displayFahren}>°F</a></span>
            </div>);
    } else {
        let fahren = Math.round((props.celsius * 9) / 5 + 32);
        return (
            <div className="TemperatureUnit">
                <span className="Temperature">{fahren}</span>
                <span className="Unit"><a href="/" onClick={displayCelsius}>°C</a> | °F</span>
            </div>);
    }
}