import type {
  WeatherData,
  WeatherDatas,
  WeatherProps,
} from "../shared/types/types";

export const apiKey = import.meta.env.VITE_API_KEY;
export const racine = "https://api.weatherapi.com/v1";

interface WeatherStore {
  weather: WeatherDatas | null; // Changé WeatherData en WeatherDatas
  cityName: string;
}

type SetState = (
  partial:
    | Partial<WeatherStore>
    | ((state: WeatherStore) => Partial<WeatherStore>)
) => void;

// Pas besoin de useCallback ici car c'est une fonction utilitaire
export const getData = async (
  time: WeatherProps,
  cityName: string
): Promise<WeatherDatas> => {
  const url = `${racine}/${time}.json?key=${apiKey}&lang=fr&q=${encodeURIComponent(
    cityName
  )}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    throw error;
  }
};

export const searchData = async (
  weatherProps: WeatherProps,
  cityName: string
): Promise<WeatherDatas | null> => {
  try {
    return await getData(weatherProps, cityName);
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la météo :", error);
    return null; // Retourne null en cas d'erreur plutôt que de propager l'erreur
  }
};
