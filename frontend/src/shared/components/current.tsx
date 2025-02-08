import React, { useEffect } from "react";
import  useStore  from "./context/store";

const Current: React.FC = () => {
  const { currentWeather, setCurrentWeather } = useStore();

  useEffect(() => {
    setCurrentWeather();
  }, []);

  if (!currentWeather) return <p>Chargement des données météo...</p>;

  return (
    <section
      id="current-weather"
      data-section="current"
      className="bg-gray-800 p-6 rounded-lg shadow-lg mt-6"
    >
      <h2 className="text-2xl font-semibold flex justify-between items-center">
        Conditions Actuelles à {currentWeather.location?.name},{" "}
        {currentWeather.location?.region}
      </h2>
      <h3 className="text-sm opacity-80 mt-2">
        (Date des dernières données :
        <span className="text-sm text-blue-400">
          {" "}
          {currentWeather.last_updated}
        </span>
        )
      </h3>
      <div className="weather-info grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <p className="flex items-center">
          <strong className="text-base">Code Météo:</strong>
          <span className="ml-2 text-blue-300">
            {currentWeather.condition?.code}
          </span>
        </p>
        <p className="flex items-center">
          <strong className="text-base">Conditions météorologiques:</strong>
          <span className="ml-2 text-blue-300">
            {currentWeather.condition?.text}
          </span>
          {currentWeather.condition?.icon && (
            <img
              src={currentWeather.condition.icon}
              alt="Weather Icon"
              className="ml-2"
            />
          )}
        </p>
        <p>
          <strong className="text-base">Température:</strong>
          <span className="text-blue-300">
            {" "}
            {currentWeather.temp_c}°C / {currentWeather.temp_f}°F
          </span>
        </p>
        <p>
          <strong className="text-base">Température ressentie:</strong>
          <span className="text-blue-300">
            {" "}
            {currentWeather.feelslike_c}°C / {currentWeather.feelslike_f}°F
          </span>
        </p>
        <p>
          <strong className="text-base">Point de rosée:</strong>
          <span className="text-blue-300">
            {" "}
            {currentWeather.dewpoint_c}°C / {currentWeather.dewpoint_f}°F
          </span>
        </p>
        <p>
          <strong className="text-base">Humidité:</strong>
          <span className="text-blue-300"> {currentWeather.humidity}%</span>
        </p>
        <p>
          <strong className="text-base">Pression:</strong>
          <span className="text-blue-300">
            {" "}
            {currentWeather.pressure_mb} mb / {currentWeather.pressure_in} in
          </span>
        </p>
        <p>
          <strong className="text-base">Visibilité:</strong>
          <span className="text-blue-300">
            {" "}
            {currentWeather.vis_km} km / {currentWeather.vis_miles} miles
          </span>
        </p>
        <p>
          <strong className="text-base">Vitesse du vent:</strong>
          <span className="text-blue-300">
            {" "}
            {currentWeather.wind_kph} km/h / {currentWeather.wind_mph} mph
          </span>
        </p>
        <p>
          <strong className="text-base">Rafales:</strong>
          <span className="text-blue-300">
            {" "}
            {currentWeather.gust_kph} km/h / {currentWeather.gust_mph} mph
          </span>
        </p>
        <p>
          <strong className="text-base">Direction du vent:</strong>
          <span className="text-blue-300">
            {" "}
            {currentWeather.wind_dir} ({currentWeather.wind_degree}°)
          </span>
        </p>
      </div>
    </section>
  );
};

export default Current;