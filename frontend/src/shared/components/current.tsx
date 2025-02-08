import React, { useEffect } from "react";
import useStore from "./context/store";

const Current: React.FC = () => {
  const { cityName, weather, setWeather } = useStore();

  useEffect(() => {
    if (!cityName) return
    setWeather("current", cityName);
  }, [cityName]);

  if (!weather) return <p>Chargement des données météo...</p>;

  return (
    <section
      id="current-weather"
      data-section="current"
      className="bg-gray-800 p-6 rounded-lg shadow-lg mt-6"
    >
      <h2 className="text-2xl font-semibold flex justify-between items-center">
        Conditions Actuelles à {weather.location?.name},{" "}
        {weather.location?.region}
      </h2>
      <h3 className="text-sm opacity-80 mt-2">
        (Date des dernières données :
        <span className="text-sm text-blue-400">
          {" "}
          {weather.current.last_updated}
        </span>
        )
      </h3>
      <div className="weather-info grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <p className="flex items-center">
          <strong className="text-base">Code Météo:</strong>
          <span className="ml-2 text-blue-300">
            {weather.current.condition?.code}
          </span>
        </p>
        <p className="flex items-center">
          <strong className="text-base">Conditions météorologiques:</strong>
          <span className="ml-2 text-blue-300">
            {weather.current.condition?.text}
          </span>
          {weather.current.condition?.icon && (
            <img
              src={weather.current.condition.icon}
              alt="Weather Icon"
              className="ml-2"
            />
          )}
        </p>
        <p>
          <strong className="text-base">Température:</strong>
          <span className="text-blue-300">
            {" "}
            {weather.current.temp_c}°C / {weather.current.temp_f}
            °F
          </span>
        </p>
        <p>
          <strong className="text-base">Température ressentie:</strong>
          <span className="text-blue-300">
            {" "}
            {weather.current.feelslike_c}°C / {weather.current.feelslike_f}°F
          </span>
        </p>
        <p>
          <strong className="text-base">Point de rosée:</strong>
          <span className="text-blue-300">
            {" "}
            {weather.current.dewpoint_c}°C / {weather.current.dewpoint_f}
            °F
          </span>
        </p>
        <p>
          <strong className="text-base">Humidité:</strong>
          <span className="text-blue-300"> {weather.current.humidity}%</span>
        </p>
        <p>
          <strong className="text-base">Pression:</strong>
          <span className="text-blue-300">
            {" "}
            {weather.current.pressure_mb} mb / {weather.current.pressure_in} in
          </span>
        </p>
        <p>
          <strong className="text-base">Visibilité:</strong>
          <span className="text-blue-300">
            {" "}
            {weather.current.vis_km} km / {weather.current.vis_miles} miles
          </span>
        </p>
        <p>
          <strong className="text-base">Vitesse du vent:</strong>
          <span className="text-blue-300">
            {" "}
            {weather.current.wind_kph} km/h / {weather.current.wind_mph} mph
          </span>
        </p>
        <p>
          <strong className="text-base">Rafales:</strong>
          <span className="text-blue-300">
            {" "}
            {weather.current.gust_kph} km/h / {weather.current.gust_mph} mph
          </span>
        </p>
        <p>
          <strong className="text-base">Direction du vent:</strong>
          <span className="text-blue-300">
            {" "}
            {weather.current.wind_dir} ({weather.current.wind_degree}°)
          </span>
        </p>
      </div>
    </section>
  );
};

export default Current;
