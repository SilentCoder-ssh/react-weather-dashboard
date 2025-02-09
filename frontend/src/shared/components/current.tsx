import React, { useEffect } from "react";
import useStore from "./context/store";

const Current: React.FC = () => {
  const { cityName, weather, setWeather } = useStore();

  useEffect(() => {
    if (!cityName) return;
    setWeather("current", cityName);
  }, [cityName]);

  if (!weather) return <p>Chargement des données météo...</p>;

  return (
    <section
      id="current-weather"
      data-section="current"
      className="bg-#2B2F3A p-6 rounded-lg shadow-lg w-70% absolute top-3/5.8 left-1/1.93 transform -translate-x-1/2 -translate-y-1/2"
    >
      <h2 className="text-5 font-semibold flex justify-between items-center">
        Conditions Actuelles à {weather.location?.name},{" "}
        {weather.location?.region}
      </h2>
      <h3 className="text-3 opacity-80 mt-2">
        ( Date des dernières données :
        <span className="text-2.7 text-blue-400">
          {" "}
          {weather.current.last_updated}
        </span>{" "}
        )
      </h3>
      <div className="weather-info grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 items-center justify-items-start">
        <p className="flex items-center">
          <strong className="text-3">Code Météo:</strong>
          <span className="ml-2 text-#D6E6F2">
            {weather.current.condition?.code}
          </span>
        </p>
        <p className="flex items-center">
          <strong className="text-3">Conditions météorologiques:</strong>
          <span className="ml-2 text-#D6E6F2">
            {weather.current.condition?.text}
          </span>
          {weather.current.condition?.icon && (
            <img
              src={weather.current.condition.icon}
              alt="Weather Icon"
              className="ml-2 w-12 h-12 md:w-12 md:h-12 lg:w-8 lg:h-8 scale-110 hover:scale-125 transition-transform"
            />
          )}
        </p>
        <p>
          <strong className="text-3">Température:</strong>
          <span className="text-#D6E6F2">
            {" "}
            {weather.current.temp_c}°C / {weather.current.temp_f}
            °F
          </span>
        </p>
        <p>
          <strong className="text-3">Température ressentie:</strong>
          <span className="text-#D6E6F2">
            {" "}
            {weather.current.feelslike_c}°C / {weather.current.feelslike_f}°F
          </span>
        </p>
        <p>
          <strong className="text-3">Point de rosée:</strong>
          <span className="text-#D6E6F2">
            {" "}
            {weather.current.dewpoint_c}°C / {weather.current.dewpoint_f}
            °F
          </span>
        </p>
        <p>
          <strong className="text-3">Humidité:</strong>
          <span className="text-#D6E6F2"> {weather.current.humidity}%</span>
        </p>
        <p>
          <strong className="text-3">Pression:</strong>
          <span className="text-#D6E6F2">
            {" "}
            {weather.current.pressure_mb} mb / {weather.current.pressure_in} in
          </span>
        </p>
        <p>
          <strong className="text-3">Visibilité:</strong>
          <span className="text-#D6E6F2">
            {" "}
            {weather.current.vis_km} km / {weather.current.vis_miles} miles
          </span>
        </p>
        <p>
          <strong className="text-3">Vitesse du vent:</strong>
          <span className="text-#D6E6F2">
            {" "}
            {weather.current.wind_kph} km/h / {weather.current.wind_mph} mph
          </span>
        </p>
        <p>
          <strong className="text-3">Rafales:</strong>
          <span className="text-#D6E6F2">
            {" "}
            {weather.current.gust_kph} km/h / {weather.current.gust_mph} mph
          </span>
        </p>
        <p>
          <strong className="text-3">Direction du vent:</strong>
          <span className="text-#D6E6F2">
            {" "}
            {weather.current.wind_dir} ({weather.current.wind_degree}°)
          </span>
        </p>
      </div>
    </section>
  );
};

export default Current;
