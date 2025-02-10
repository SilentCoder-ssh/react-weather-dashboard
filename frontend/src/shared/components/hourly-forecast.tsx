import React from "react";
import type { HourlyWeather } from "../types/types";

interface HourForecastProps {
  hour: HourlyWeather[];
}

const HourForecast: React.FC<HourForecastProps> = ({ hour }) => {
  return (
    <section className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-2xl max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-white">
        Prévisions horaires
      </h2>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="inline-flex gap-4 pb-4 px-2">
          {hour.map((hour) => (
            <div
              key={hour.time_epoch}
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-5 min-w-[150px] 
                        transform hover:scale-105 transition-all duration-300
                        border border-white/10 hover:border-white/20"
            >
              {/* Heure */}
              <p className="font-semibold text-center text-lg text-white mb-3">
                {new Date(hour.time).toLocaleTimeString("fr-FR", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>

              {/* Icon et température */}
              <div className="relative">
                <img
                  src={hour.condition.icon}
                  alt={hour.condition.text}
                  className="w-16 h-16 mx-auto mb-2 drop-shadow-lg"
                />
                <p className="text-3xl font-bold text-center text-white mb-1">
                  {Math.round(hour.temp_c)}°
                </p>
                <p className="text-sm text-center text-gray-300">
                  Ressenti {Math.round(hour.feelslike_c)}°
                </p>
              </div>

              {/* Infos météo */}
              <div className="mt-4 space-y-2 text-sm text-gray-300">
                <div className="flex items-center justify-between">
                  <span>Pluie</span>
                  <span className="font-medium">{hour.chance_of_rain}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Humidité</span>
                  <span className="font-medium">{hour.humidity}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Vent</span>
                  <span className="font-medium">
                    {Math.round(hour.wind_kph)} km/h
                  </span>
                </div>
                <div className="text-center mt-2 text-xs font-medium">
                  {hour.wind_dir}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HourForecast;
