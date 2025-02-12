import React from "react";
import useStore from "../context/store";

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
  <nav className="transition-all bg-[#262624] opacity-80 hover:opacity-100 fixed top-12% transform translate-y-1/12 left-3.5% flex z-40 border-rounded-3xl">
    <div
      id="container-tabs"
      className="flex flex-col h-full"
    >
      <div className="flex justify-center transition-all hover:stroke-[#F4B400] transition-colors hover:drop-shadow-[0_0_6.7px_#F4B400]">
        <a
          onClick={handleOnClick}
          id="current-conditions-nav"
          className="cursor-pointer flex items-center"
          data-value="current"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[5vh] w-[5vh]"
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
          <span className="text-[2vh]">Actuelle</span>
        </a>
      </div>

      <div className="flex justify-center transition-all hover:stroke-[#80CBC4] transition-colors hover:drop-shadow-[0_0_6.7px_#80CBC4]">
        <a
          id="hourly-forecast-nav"
          className="cursor-pointer flex items-center"
          onClick={handleOnClick}
          data-value="forecast-hour"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[5vh] w-[5vh]"
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
          <span className="text-[2vh]">Horaires</span>
        </a>
      </div>

      <div className="flex justify-center transition-all hover:stroke-[#FF7043] transition-colors hover:drop-shadow-[0_0_6.7px_#FF7043]">
        <a
          id="tomorrow-forecast-nav"
          className="cursor-pointer flex items-center"
          onClick={handleOnClick}
          data-value="forecast-day"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[5vh] w-[5vh]"
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
          <span className="text-[2vh]">Demain</span>
        </a>
      </div>

      <div className="flex justify-center transition-all hover:stroke-[#6D28D9] transition-colors hover:drop-shadow-[0_0_6.7px_#6D28D9]">
        <a
          id="weekly-forecast-nav"
          className="cursor-pointer flex items-center"
          onClick={handleOnClick}
          data-value="forecast-week"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[5vh] w-[5vh]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-[2vh]">7 jours</span>
        </a>
      </div>

      <div className="flex justify-center transition-all hover:stroke-[#059669] transition-colors hover:drop-shadow-[0_0_6.7px_#059669]">
        <a
          id="radar-nav"
          className="cursor-pointer flex items-center"
          onClick={handleOnClick}
          data-value="radar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[5vh] w-[5vh]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20 12a8 8 0 11-16 0 8 8 0 0116 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v4m0 4v4m4-8h-4m4 4h-4"
            />
          </svg>
          <span className="text-[2vh]">Radar</span>
        </a>
      </div>

      <div className="flex justify-center transition-all hover:stroke-[#DC2626] transition-colors hover:drop-shadow-[0_0_6.7px_#DC2626]">
        <a
          id="alerts-nav"
          className="cursor-pointer flex items-center"
          onClick={handleOnClick}
          data-value="alerts"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[5vh] w-[5vh]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="text-[2vh]">Alertes</span>
        </a>
      </div>
    </div>
  </nav>
);}
