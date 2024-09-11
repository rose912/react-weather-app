import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForcast.css";

export default function WeatherForcast() {
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