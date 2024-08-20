import React from "react";

export default function CalibratedDate(props) {
    let dt = new Date(props.date * 1000);

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let hours = dt.getHours();
    let day = days[dt.getDay()];
    let minutes = dt.getMinutes();
    
    if (hours < 10) {
        hours = `0${hours}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return (
        <div>
        {day} {hours}:{minutes}
       </div>);
}