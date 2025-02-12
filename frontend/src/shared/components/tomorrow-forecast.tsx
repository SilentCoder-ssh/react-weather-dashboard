import React from "react";
import type { DailyWeather } from "../types/types";

interface DayForecastProps {
  day: DailyWeather;
}

const DayForecast: React.FC<DayForecastProps> = ({ day }) => {
  return (
    <section className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-2xl max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-white">Prévisions du jour</h2>

      {/* Card principale */}
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10">
        {/* En-tête avec condition et températures */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img
                src={day.condition.icon}
                alt={day.condition.text}
                className="w-20 h-20 drop-shadow-lg"
              />
              <div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white/20 
                           px-3 py-1 rounded-full backdrop-blur-sm"
              >
                <span className="text-sm text-white font-medium">
                  {day.condition.text}
                </span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-baseline space-x-2">
              <span className="text-4xl font-bold text-white">
                {Math.round(day.maxtemp_c)}°
              </span>
              <span className="text-2xl text-gray-400">
                {Math.round(day.mintemp_c)}°
              </span>
            </div>
            <span className="text-sm text-gray-400">Min/Max</span>
          </div>
        </div>

        {/* Grille d'informations */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Chance de pluie */}
          <div
            className="bg-white/5 rounded-lg p-4 border border-white/5 hover:border-white/20 
                        transition-all duration-300"
          >
            <p className="text-gray-400 mb-1 text-sm">Chance de pluie</p>
            <p className="text-2xl font-semibold text-white">
              {day.daily_chance_of_rain}%
            </p>
          </div>

          {/* Humidité */}
          <div
            className="bg-white/5 rounded-lg p-4 border border-white/5 hover:border-white/20 
                        transition-all duration-300"
          >
            <p className="text-gray-400 mb-1 text-sm">Humidité</p>
            <p className="text-2xl font-semibold text-white">
              {day.avghumidity}%
            </p>
          </div>

          {/* Vent */}
          <div
            className="bg-white/5 rounded-lg p-4 border border-white/5 hover:border-white/20 
                        transition-all duration-300"
          >
            <p className="text-gray-400 mb-1 text-sm">Vent max</p>
            <p className="text-2xl font-semibold text-white">
              {Math.round(day.maxwind_kph)}
              <span className="text-base font-normal text-gray-400 ml-1">
                km/h
              </span>
            </p>
          </div>

          {/* UV Index */}
          <div
            className="bg-white/5 rounded-lg p-4 border border-white/5 hover:border-white/20 
                        transition-all duration-300"
          >
            <p className="text-gray-400 mb-1 text-sm">Index UV</p>
            <p className="text-2xl font-semibold text-white">
              {day.uv}
              <span className="text-base font-normal text-gray-400 ml-1">
                / 10
              </span>
            </p>
          </div>
        </div>

        {/* Informations supplémentaires */}
        <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-400">
          <p>Température moyenne: {Math.round(day.avgtemp_c)}°C</p>
          <p>Visibilité moyenne: {day.avgvis_km} km</p>
          <p>Chance de neige: {day.daily_chance_of_snow}%</p>
          <p>Précipitations: {day.totalprecip_mm} mm</p>
        </div>
      </div>
    </section>
  );
};

export default DayForecast;
