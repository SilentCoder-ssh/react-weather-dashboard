import { create } from "zustand";
import { WeatherDatas, WeatherProps, ForecastDayData } from "../../types/types";
import { searchData } from "../../../utils/get-data";

export type ActiveMode = "forecast-hour" | "forecast-day" | "current";
interface UseStore {
  mode: "forecast";
  currentWeatherKey: WeatherProps;
  weather: WeatherDatas | null;
  activeMode: ActiveMode;
  setActiveMode: (mode: ActiveMode) => void;
  setCurrentWeatherKey: (key: WeatherProps) => void;
  setWeather: (cityName: string) => Promise<void>;
  setCityName: (name: string) => void;
  dataWeatherKey: any;
  cityName: string;
}

const useStore = create<UseStore>((set, get) => ({
  weather: null,
  cityName: "",
  mode: "forecast",
  activeMode: "current",
  setActiveMode: (mode) => set({ activeMode: mode }),
  currentWeatherKey: "current",
  dataWeatherKey: null,
  setCurrentWeatherKey: (key) => set({ currentWeatherKey: key }),
  setCityName: (name: string) => set({ cityName: name }),
  setWeather: async (cityName: string) => {
    const state = get();
    const datas = await searchData(state.mode, cityName);
    if (!datas) return;
    set({ weather: datas });
  },
}));

export default useStore;
