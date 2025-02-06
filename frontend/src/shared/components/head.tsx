import { useState, useEffect } from "react";

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
    <header className="text-center h-9 bg-gray-800 shadow-lg w-full flex fixed justify-center items-center z-50">
      <div
        id="container-header"
        className="w-full pl-3 pr-3 flex justify-between items-center"
      >
        <div id="container-label" className="flex flex-col items-center">
          <div id="container-logo" className="flex w-62 pb-0.8">
            <img
              src="/src/shared/style/icon/terre.png"
              alt="icon"
              className="w-4 h-4 mr-1 filter invert"
            />
            <div id="text-label" className="text-left w-76 pl-1">
              <h1 className="text-3 font-bold">Dashboard Météo</h1>
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
          <div className="flex w-full px-4 *:">
            <input
              type="text"
              id="location-input"
              placeholder="Entrez une ville..."
              data-search="location"
              className="flex-1 p-1 bg-[rgba(2,2,2,0.484)] border-none outline-none text-white focus:ring focus:ring-blue-500 focus:bg-[rgba(2,2,2,0.484)] text-3 rounded-1"
            />
          </div>
        </div>

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
