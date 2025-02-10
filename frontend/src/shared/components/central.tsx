import useStore from "./context/store";
import Current from "./current";
import DayForecast from "./day-forecast";
import HourlyForecast from "./hourly-forecast";

export default function Central() {
  const activeMode = useStore((state) => state.activeMode);
  const weather = useStore((state) => state.weather);

  if (!weather) return null;

  return (
    <>
      {activeMode === "current" && (
        <Current current={weather.current} location={weather.location} />
      )}
      {activeMode === "forecast-day" && (
        <DayForecast day={weather.forecast.forecastday[0].day} />
      )}
      {activeMode === "forecast-hour" && (
        <HourlyForecast hour={weather.forecast.forecastday[0].hour} />
      )}
    </>
  );
}
