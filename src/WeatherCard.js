import "./WeatherCard.css";
import celciusIcon from "./celsius.png";
import seaLevelIcon from "./sea-level.png";
import windIcon from "./windy.png";
// import rainfallIcon from "./weather.png";
// import sunIcon from "./sun.png";
// import rainIcon from "./rain.png";
import { v4 as uuidv4 } from "uuid";
const _ = require("lodash");
const moment = require("moment");

export default function WeatherCard({ weather }) {
  let groupedResults = _.groupBy(weather.list, (data) =>
    moment.unix(data.dt).startOf("day").format("dddd, MMMM Do YYYY")
  );
  const entries = Object.entries(groupedResults);
  console.log(entries);
  const newArr = entries.map((i) => (
    <div className="WeatherCard" key={uuidv4()}>
      <div className="WeatherCard-info">
        <div className="WeatherCard-title">
          <h1>{i[0]}</h1>
        </div>
      </div>
      <div className="WeatherCard-carousel">
        {i[1].map((d) => (
          <div className={`WeatherCard-carousel-card`} key={uuidv4()}>
            <h2>{moment.unix(d.dt).format("LT")}</h2>
            <h3>{d.weather[0].main}</h3>
            <span>
              <img
                src={celciusIcon}
                alt=""
                style={{ width: 22, height: 22, marginRight: 10 }}
              />
              {d.main.temp}
            </span>
            <span>
              <img
                src={seaLevelIcon}
                alt=""
                style={{ width: 22, height: 22, marginRight: 10 }}
              />
              {d.main.sea_level}
            </span>
            <span>
              <img
                src={windIcon}
                alt=""
                style={{ width: 22, height: 22, marginRight: 10 }}
              />
              {d.wind.speed}
            </span>
            <img
              src={`http://openweathermap.org/img/w/${d.weather[0].icon}.png`}
              alt=""
              crossorigin="anonymous"
            />
          </div>
        ))}
      </div>
    </div>
  ));
  // const keys = Object.keys(groupedResults);
  // console.log(keys.forEach((k) => console.log(k, groupedResults[k])));

  return newArr;
  // <div className="WeatherCard">
  //   <div className="WeatherCard-info">
  //     <div className="WeatherCard-title">
  //       <h1>Sunday, December 18, 2022</h1>
  //     </div>
  //   </div>
  //   <div className="WeatherCard-carousel">
  //     <div className="WeatherCard-carousel-card bg-yellow">
  //       <h2>03:00 AM</h2>
  //       <h3>Rain</h3>
  //       <span>
  //         <img
  //           src={celciusIcon}
  //           alt=""
  //           style={{ width: 22, height: 22, marginRight: 10 }}
  //         />
  //         32.01 °C
  //       </span>
  //       <span>
  //         <img
  //           src={seaLevelIcon}
  //           alt=""
  //           style={{ width: 22, height: 22, marginRight: 10 }}
  //         />
  //         1002 hPa
  //       </span>
  //       <span>
  //         <img
  //           src={windIcon}
  //           alt=""
  //           style={{ width: 22, height: 22, marginRight: 10 }}
  //         />
  //         3.21 m/s
  //       </span>
  //       <span>
  //         <img
  //           src={rainfallIcon}
  //           alt=""
  //           style={{ width: 22, height: 22, marginRight: 10 }}
  //         />
  //         0.17 mm
  //       </span>
  //       <img src={sunIcon} alt="" />
  //     </div>
  //     <div className="WeatherCard-carousel-card bg-aliceblue">
  //       <h2>03:00 AM</h2>
  //       <h3>Rain</h3>
  //       <span>
  //         <img
  //           src={celciusIcon}
  //           alt=""
  //           style={{ width: 22, height: 22, marginRight: 10 }}
  //         />
  //         32.01 °C
  //       </span>
  //       <span>
  //         <img
  //           src={seaLevelIcon}
  //           alt=""
  //           style={{ width: 22, height: 22, marginRight: 10 }}
  //         />
  //         1002 hPa
  //       </span>
  //       <span>
  //         <img
  //           src={windIcon}
  //           alt=""
  //           style={{ width: 22, height: 22, marginRight: 10 }}
  //         />
  //         3.21 m/s
  //       </span>
  //       <span>
  //         <img
  //           src={rainfallIcon}
  //           alt=""
  //           style={{ width: 22, height: 22, marginRight: 10 }}
  //         />
  //         0.17 mm
  //       </span>
  //       <img src={rainIcon} alt="" />
  //     </div>
  //     <div className="WeatherCard-carousel-card">
  //       <h2>03:00 AM</h2>
  //       <h3>Rain</h3>
  //       <span>
  //         <img
  //           src={celciusIcon}
  //           alt=""
  //           style={{ width: 22, height: 22, marginRight: 10 }}
  //         />
  //         32.01 °C
  //       </span>
  //       <span>
  //         <img
  //           src={seaLevelIcon}
  //           alt=""
  //           style={{ width: 22, height: 22, marginRight: 10 }}
  //         />
  //         1002 hPa
  //       </span>
  //       <span>
  //         <img
  //           src={windIcon}
  //           alt=""
  //           style={{ width: 22, height: 22, marginRight: 10 }}
  //         />
  //         3.21 m/s
  //       </span>
  //       <span>
  //         <img
  //           src={rainfallIcon}
  //           alt=""
  //           style={{ width: 22, height: 22, marginRight: 10 }}
  //         />
  //         0.17 mm
  //       </span>
  //     </div>
  //   </div>
  // </div>
}
