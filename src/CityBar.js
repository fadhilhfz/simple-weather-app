import "./CityBar.css";
import popIcon from "./team.png";
import sunriseIcon from "./sunrise.png";
import sunsetIcon from "./sunset.png";
const moment = require("moment");

export default function CityBar({ weather }) {
  return (
    <div className="CityBar">
      <div className="CityBar-card">
        <div className="CityBar-info">
          <h1>
            {`${weather.city.name} (${weather.city.coord.lat}, ${weather.city.coord.lon})`}
          </h1>
          <div>
            <img
              src={popIcon}
              alt=""
              style={{ width: 22, height: 22, marginRight: 10 }}
            />
            {parseInt(weather.city.population).toLocaleString() + " population"}
          </div>
          <div>
            <img
              src={sunriseIcon}
              alt=""
              style={{ width: 22, height: 22, marginRight: 10 }}
            />
            {moment.unix(weather.city.sunrise).format("LTS").toString()}
          </div>
          <div>
            <img
              src={sunsetIcon}
              alt=""
              style={{ width: 22, height: 22, marginRight: 10 }}
            />
            {moment.unix(weather.city.sunset).format("LTS").toString()}
          </div>
        </div>
        <div className="CityBar-flag" key={weather.city.id}>
          <img
            src={`https://countryflagsapi.com/png/${weather.city.country}`}
            alt=""
            crossorigin="anonymous"
          />
        </div>
      </div>
    </div>
  );
}
