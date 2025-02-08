import { WeatherCurrentData } from "./../shared/types/types";
import type { WeatherProps } from "../shared/types/types";

export const apiKey = import.meta.env.VITE_API_KEY;
export const racine = "https://api.weatherapi.com/v1";

interface WeatherStore {
  weather: WeatherCurrentData | null;
  cityName: string;
}

type SetState = (
  partial:
    | Partial<WeatherStore>
    | ((state: WeatherStore) => Partial<WeatherStore>)
) => void;

const getData = async (
  time: WeatherProps,
  cityName: string
): Promise<WeatherCurrentData> => {
  const url = `${racine}/${time}.json?key=${apiKey}&lang=fr&q=${encodeURIComponent(
    cityName
  )}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();
    const formattedData: WeatherCurrentData = {
      location: data.location,
      current: data.current,
      forecast: data.forecast,
    };

    return formattedData;
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    throw error;
  }
};

export const searchData = async (
  weatherProps: WeatherProps,
  cityName: string,
  set: SetState
) => {
  try {
    const weatherData = await getData(weatherProps, cityName);
    set({ weather: weatherData });
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la météo :", error);
    throw error;
  }
};
