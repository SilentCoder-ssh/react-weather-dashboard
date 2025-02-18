import React from "react";
import type { CurrentWeather, LocationData } from "../types/types";

interface CurrentProps {
  current: CurrentWeather;
  location: LocationData;
}

const Current: React.FC<CurrentProps> = ({ current }) => {
  return (
    <section
      id="current-weather"
      data-section="current"
      className="bg-#2B2F3A p-6 rounded-lg shadow-lg w-80% absolute top-3/5.8 left-1/1.93 transform -translate-x-1/2 -translate-y-1/2"
    >
      <h3 className="text-3 opacity-75 mt-2">
        ( Date des dernières données :
        <span className="text-2.7 text-blue-500"> {current.last_updated}</span>{" "}
        )
      </h3>
      <div className="weather-info grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 items-center justify-items-start">
        <p className="flex items-center">
          <strong className="text-3">Code Météo:</strong>
          <span className="ml-2 text-#D6E6F2">{current.condition?.code}</span>
        </p>
        <p className="flex items-center">
          <strong className="text-3">Conditions météorologiques:</strong>
          <span className="ml-2 text-#D6E6F2">{current.condition?.text}</span>
          {current.condition?.icon && (
            <img
              src={current.condition.icon}
              alt="Weather Icon"
              className="ml-2 w-12 h-12 md:w-12 md:h-12 lg:w-8 lg:h-8 scale-110 hover:scale-125 transition-transform"
            />
          )}
        </p>
        <p>
          <strong className="text-3">Température:</strong>
          <span className="text-#D6E6F2">
            {" "}
            {current.temp_c}°C / {current.temp_f}°F
          </span>
        </p>
        <p>
          <strong className="text-3">Température ressentie:</strong>
          <span className="text-#D6E6F2">
            {" "}
            {current.feelslike_c}°C / {current.feelslike_f}°F
          </span>
        </p>
        <p>
          <strong className="text-3">Point de rosée:</strong>
          <span className="text-#D6E6F2">
            {" "}
            {current.dewpoint_c}°C / {current.dewpoint_f}°F
          </span>
        </p>
        <p>
          <strong className="text-3">Humidité:</strong>
          <span className="text-#D6E6F2"> {current.humidity}%</span>
        </p>
        <p>
          <strong className="text-3">Pression:</strong>
          <span className="text-#D6E6F2">
            {" "}
            {current.pressure_mb} mb / {current.pressure_in} in
          </span>
        </p>
        <p>
          <strong className="text-3">Visibilité:</strong>
          <span className="text-#D6E6F2">
            {" "}
            {current.vis_km} km / {current.vis_miles} miles
          </span>
        </p>
        <p>
          <strong className="text-3">Vitesse du vent:</strong>
          <span className="text-#D6E6F2">
            {" "}
            {current.wind_kph} km/h / {current.wind_mph} mph
          </span>
        </p>
        <p>
          <strong className="text-3">Rafales:</strong>
          <span className="text-#D6E6F2">
            {" "}
            {current.gust_kph} km/h / {current.gust_mph} mph
          </span>
        </p>
        <p>
          <strong className="text-3">Direction du vent:</strong>
          <span className="text-#D6E6F2">
            {" "}
            {current.wind_dir} ({current.wind_degree}°)
          </span>
        </p>
      </div>
    </section>
  );
};

export default Current;
