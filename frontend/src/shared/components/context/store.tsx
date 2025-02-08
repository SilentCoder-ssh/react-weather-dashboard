import { create } from "zustand";
import { WeatherCurrentData, WeatherProps } from "../../types/types";
import { searchData } from "../../../utils/get-data";

interface UseStore {
  weather: WeatherCurrentData | null;
  setWeather: (weatherProps: WeatherProps, cityName: string) => Promise<void>;
  setCityName: (name: string) => void;
  cityName: string;
}

const useStore = create<UseStore>((set) => ({
  weather: null,
  cityName: "",
  setCityName: (name: string) => set({ cityName: name }),
  setWeather: async (weatherProps: WeatherProps, cityName: string) => {
    await searchData(weatherProps, cityName, set);
  },
}));

export default useStore; 