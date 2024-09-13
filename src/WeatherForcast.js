import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForcast.css";
import axios from "axios";

export default function WeatherForcast(props) {
  function handleResponse(response) {

  }

  let apiKey = "ca0db41e2e878c74a1dfc7ffece370d4";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForcast">
      <div className="row">
        <div className="col">
          <div className="WeatherForcast-day">Tue</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForcast-temperature">
            <span className="WeatherForcast-temperature-max">22°</span>
            <span className="WeatherForcast-temperature-min">12°</span>
          </div>
        </div>
      </div>
    </div>
  );
}