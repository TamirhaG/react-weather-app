import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by {""}
          <a href="https://www.linkedin.com/in/tamirha/" target="_blank">
            Tamirha Giraldo
          </a>
          {""} and is {""}
          <a
            href="https://github.com/TamirhaG/react-weather-app"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
