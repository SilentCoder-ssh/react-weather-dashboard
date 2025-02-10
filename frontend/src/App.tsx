import "./shared/style/App.css";
import Head from "./shared/components/head";
import Nav from "./shared/components/nav";
import Footer from "./shared/components/footer";
import Central from "./shared/components/central";
import useStore from "./shared/components/context/store";
import { useEffect } from "react";

function App() {
  const city = useStore((state) => state.cityName);
  const fetchWeather = useStore((state) => state.setWeather);

  useEffect(() => {
    if (!city) return;
    fetchWeather(city);
  }, [city]);

  return (
    <>
      <Head />
      <Nav />
      <Central />
      <Footer />
    </>
  );
}

export default App;
