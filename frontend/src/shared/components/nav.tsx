import React from "react";
import useStore from "./context/store";

export default function Nav() {
  const weather = useStore((state) => state.weather);
  const setActiveMode = useStore((state) => state.setActiveMode);

  const handleOnClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    const value = e.currentTarget.dataset.value;
    if (!weather) return;
    if (value === "current") {
      setActiveMode(value);
    } else if (value === "forecast-hour") {
      setActiveMode(value);
    } else if (value === "forecast-day") {
      setActiveMode(value);
    }
  };

  return (
    <nav className="bg-#2E3440 fixed h-full top-0 left-0 w-12 flex justify-center py-4 shadow-lg z-40">
      <div className="flex flex-col items-center justify-center space-y-12 h-full">
        <a
          onClick={handleOnClick}
          id="current-conditions-nav"
          className="cursor-pointer hover:text-gray-200 flex flex-col items-center"
          data-value="current"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 hover:stroke-[#F4B400] transition-colors hover:drop-shadow-[0_0_6.7px_#F4B400]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <span className="text-2 mt-1">Actuelle</span>
        </a>

        <a
          id="hourly-forecast-nav"
          className="cursor-pointer hover:text-gray-200 flex flex-col items-center"
          onClick={handleOnClick}
          data-value="forecast-hour"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 hover:stroke-[#80CBC4] transition-colors hover:drop-shadow-[0_0_6.7px_#80CBC4]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-2 mt-1">Horaires</span>
        </a>

        <a
          id="tomorrow-forecast-nav"
          className="cursor-pointer hover:text-gray-200 flex flex-col items-center"
          onClick={handleOnClick}
          data-value="forecast-day"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 hover:stroke-[#FF7043] transition-colors hover:drop-shadow-[0_0_6.7px_#FF7043]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
          <span className="text-2 mt-1">Demain</span>
        </a>
      </div>
    </nav>
  );
}
