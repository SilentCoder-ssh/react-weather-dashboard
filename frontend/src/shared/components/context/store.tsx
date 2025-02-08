import { create } from "zustand";
import { WeatherCurrentData } from "../../types/types";

interface UseStore {
  currentWeather: WeatherCurrentData | null;
  setCurrentWeather: (cityName: string) => Promise<void>;
}

const findData = async (Time: string, cityName: string): Promise<any> => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const racine = "https://api.weatherapi.com/v1";
  const url = `${racine}/${Time}.json?key=${apiKey}&lang=fr&q=${cityName}`;
  let data;

  try {
    const response: Response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    data = await response.json();
    //console.log("Données reçues : ", data);
  } catch (error) {
    console.error("Erreur lors de la récupération des données : ", error);
    throw error;
  }

  return data;
};

const useStore = create<UseStore>((set) => ({
  currentWeather: null,

  setCurrentWeather: async (cityName: string) => {
    const currentData = await findData("current", cityName)

    set({ currentWeather: currentData })
  },
}));


export default useStore