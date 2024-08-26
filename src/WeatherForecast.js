import React, { useState} from "react";
import Axios from "axios";
import ForecastDay from "./ForecastDay";


import "./WeatherDetails.css";

export default function WeatherForecast(props){
    const [Loaded, setLoaded] = useState(false);
    const [ForecastInfo, setForecastInfo]= useState({});
    function handleResponse(response) {
        setLoaded(true);
        console.log(response.data);
        setForecastInfo(response.data.daily);
    }
    if(Loaded === true){
    
        return (
            <div className="WeatherForecast">
                <ForecastDay data={ForecastInfo[0]} />
            </div>  
            );
    } else {
        let apiKey="03036dt370ce468aff38bf274ca02od3";
        let apiUrl=`https://api.shecodes.io/weather/v1/forecast?query=${props.forecast.city}&key=${apiKey}&units=metric`;
        Axios.get(apiUrl).then(handleResponse);
        return null;
    }     
}