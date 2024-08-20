import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Weather city="Mokopane" />
      <footer>
        This project was coded by{" "}
        <a href="https://Github/Mel-mok" target="_blank" rel="noreferrer">
          Melba Mokoena
        </a>{" "}
        and is open-sourced on{" "}
        <a
          href="https://Github/Mel-mok/Homework-React"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://homework-with-react.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  )
}
