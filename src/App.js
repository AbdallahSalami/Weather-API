import React, { Component } from "react";

import Search from "./components/Search";
import WeatherNow from "./components/WeatherNow";
import Weather24 from "./components/Weather24";

// import fakeWeatherData from "./fakeWeatherData.json";
// import imgClear from "./img/weather-icons/clear.svg";
// import imgCloudy from "./img/weather-icons/cloudy.svg";
// import imgDrizzle from "./img/weather-icons/drizzle.svg";
// import imgFog from "./img/weather-icons/fog.svg";
// import imgMostlyCloudy from "./img/weather-icons/mostlycloudy.svg";
// import imgPartlyCloudy from "./img/weather-icons/partlycloudy.svg";
// import imgRain from "./img/weather-icons/rain.svg";
// import imgSnow from "./img/weather-icons/snow.svg";
// import imgStorm from "./img/weather-icons/storm.svg";
// import imgUnknow from "./img/weather-icons/unknown.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Abdallah",
    };
  }

  render() {
    return (
      <div className="app">
        <div id="london">
          <Search />
          <WeatherNow />
          <Weather24 />
        </div>
      </div>
    );
  }
}

export default App;
