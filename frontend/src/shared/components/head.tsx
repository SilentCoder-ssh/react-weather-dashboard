import { useState, useEffect } from "react";
import InputComponent from "./input";


export default function Head() {
  let [time, setTime] = useState("");

  useEffect(() => {
    const padS = (element: any) => String(element).padStart(2, "0");

    const convert = (ms: number) => {
      const [hourMs, minMs, sMs]: number[] = [36e5, 6e4, 1e3];

      const h: number = Math.floor(ms / hourMs);
      const min: number = Math.floor((ms % hourMs) / minMs);
      const s: number = Math.floor((ms % minMs) / sMs);

      return `${padS(h)} : ${padS(min)} : ${padS(s)}`;
    };

    const currentTimeMs = () => {
      const now = new Date();
      return (
        now.getHours() * 36e5 +
        now.getMinutes() * 6e4 +
        now.getSeconds() * 1e3 +
        now.getMilliseconds()
      );
    };

    const updateClock = () => {
      setTime(convert(currentTimeMs()));
    };

    updateClock();

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="text-center h-9 bg-#2E3440 shadow-lg top-0 w-full flex fixed justify-center items-center z-50">
      <div
        id="container-header"
        className="w-full pl-3 pr-3 flex justify-between items-center"
      >
        <div
          id="container-logo"
          className="flex justify-center items-center w-auto cursor-pointer"
        >
          <img
            src="/src/shared/style/icon/terre.png"
            alt="icon"
            className="w-4 h-4 mr-1 filter invert"
          />
          <div id="text-label" className="text-left pl-1 pr-1">
            <h1 className="text-3 font-bold">Dashboard Météo</h1>
          </div>
          <a href="http://localhost:5174/"></a>
        </div>

        <InputComponent />

        <span id="date-live">
          <div>
            <span id="clock" className="text-4">
              {time}
            </span>
          </div>
        </span>
      </div>
    </header>
  );
}
