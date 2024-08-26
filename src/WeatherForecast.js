import React, { useState , useEffect} from "react";
import Axios from "axios";
import ForecastDay from "./ForecastDay";


import "./WeatherDetails.css";
import "./WeatherForecast.css";

export default function WeatherForecast(props){
    const [Loaded, setLoaded] = useState(false);
    const [ForecastInfo, setForecastInfo]= useState({});

    useEffect(() => { setLoaded(false) }, [props.forecast.city]);
    
    function handleResponse(response) {
        setLoaded(true);
        setForecastInfo(response.data.daily);
    }
    if(Loaded === true){
    
        return (
            <div className="WeatherForecast">
                {ForecastInfo.map(function (Forecast, index) {
                    if (index < 6) {
                        return (
                            <ul key={index}>
                                <ForecastDay data={Forecast} />
                            </ul>
                        );
                    } else { return null; }
                })}
            </div>
        );
                
    } else {
        let apiKey="03036dt370ce468aff38bf274ca02od3";
        let apiUrl=`https://api.shecodes.io/weather/v1/forecast?query=${props.forecast.city}&key=${apiKey}&units=metric`;
        Axios.get(apiUrl).then(handleResponse);
        return null;
    }     
}