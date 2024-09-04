import React from "react";
import Weather from "./Weather";
import './App.css';

 export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Rosemary Obioma and is{" "}
          <a
            href="https://github.com/rose912/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}


