import { useState } from "react";
import "./App.css";
import CityBar from "./CityBar";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Weather from "./Weather";
import axios from "axios";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  // const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=6a36ca10329a818abc045da6ffec45ea&units=metric`;
    const result = await axios.get(url);
    const data = await result.data;
    console.log(data);
    setWeatherData(data);
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <>
      <Navbar>5 Day - Weather Forecast</Navbar>
      <SearchBar onChangeCity={handleChange} onSubmitCity={handleSubmit} />
      {weatherData && <CityBar weather={weatherData} />}
      {weatherData && <Weather weather={weatherData} />}
    </>
  );
}

export default App;
