// forecast 
export type WeatherForecast = {
  forecastday: {
    date: string;
    day: DailyWeather;
    hour: HourlyWeather[];
  }[];
};

export type ForecastDayData = {
  date: string;
  day: DailyWeather;
  hour: HourlyWeather[];
  [key: string]: unknown; // Permet l'accès dynamique aux propriétés
};


export interface DailyWeather {
  avghumidity: number;
  avgtemp_c: number;
  avgtemp_f: number;
  avgvis_km: number;
  avgvis_miles: number;
  condition: WeatherCondition;
  daily_chance_of_rain: number;
  daily_chance_of_snow: number;
  daily_will_it_rain: number;
  daily_will_it_snow: number;
  maxtemp_c: number;
  maxtemp_f: number;
  maxwind_kph: number;
  maxwind_mph: number;
  mintemp_c: number;
  mintemp_f: number;
  totalprecip_in: number;
  totalprecip_mm: number;
  totalsnow_cm: number;
  uv: number;
}

export interface HourlyWeather {
  time: string;
  time_epoch: number;
  temp_c: number;
  temp_f: number;
  condition: WeatherCondition;
  is_day: number;
  chance_of_rain: number;
  chance_of_snow: number;
  wind_kph: number;
  wind_dir: string;
  humidity: number;
  feelslike_c: number;
  feelslike_f: number;
  precip_mm: number;
  uv: number;
}

// location 
export interface LocationData {
  country: string;
  lat: number;
  localtime: string;
  localtime_epoch: number;
  lon: number;
  name: string;
  region: string;
  tz_id: string;
}

// current
export interface CurrentWeather {
  cloud: number;
  condition: WeatherCondition;
  dewpoint_c: number;
  dewpoint_f: number;
  feelslike_c: number;
  feelslike_f: number;
  gust_kph: number;
  gust_mph: number;
  heatindex_c: number;
  heatindex_f: number;
  humidity: number;
  is_day: number;
  last_updated: string;
  last_updated_epoch: number;
  precip_in: number;
  precip_mm: number;
  pressure_in: number;
  pressure_mb: number;
  temp_c: number;
  temp_f: number;
  uv: number;
  vis_km: number;
  vis_miles: number;
  wind_degree: number;
  wind_dir: string;
  wind_kph: number;
  wind_mph: number;
  windchill_c: number;
  windchill_f: number;
}

//shared
export interface WeatherCondition {
  code: number;
  icon: string;
  text: string;
}

//global

export interface WeatherDatas {
  location: LocationData;
  current:  CurrentWeather;
  forecast: WeatherForecast;
}


export type WeatherData = LocationData | CurrentWeather | WeatherForecast;
export type WeatherProps =  "location" | "current" | "forecast" 


