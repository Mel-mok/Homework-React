import React from "react";
import axios from "axios";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This project was coded by{" "}
        <a href="" target="_blank" rel="noreferrer">
          Melba Mokoena
        </a>{" "}
        and is open-sourced on{" "}
        <a href="" target="_blank" rel="noreferrer">
          Github
        </a>{" "}
        and hosted on{" "}
        <a href="" target="_blank" rel="noreferrer">
          Netlify
        </a>
      </footer>
    </div>
  );
}

