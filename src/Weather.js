import "./Weather.css";
import WeatherCard from "./WeatherCard";

export default function Weather({ weather }) {
  return (
    <div className="Weather">
      <WeatherCard weather={weather} />
    </div>
  );
}
