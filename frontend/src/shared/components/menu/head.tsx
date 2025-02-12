//import { useState, useEffect } from "react";
import InputComponent from "../menu/input";
import Clock from "./options/clock";

export default function Head() {
  return (
    <header className="text-center h-[12vh] top-0 w-full pl-2% pr-2% fixed flex justify-center items-center z-50 left-1/2 -translate-x-1/2">
      <div
        id="container-header"
        className="w-91.2% h-auto flex justify-between items-center"
      >
        <div
          id="container-logo"
          className="flex justify-center items-center w-auto cursor-pointer"
        >
          <img
            src="/src/shared/style/icon/terre.png"
            alt="icon"
            className="sky-pulse w-[1.5vw] h-[3vh] mr-1 filter invert"
          />
          <div id="text-label" className="text-left pl-1 pr-1">
            <h1 className="text-[1.8vh] font-bold ml-1">SkyPulse</h1>
          </div>
          <a href="http://localhost:5174/"></a>
        </div>

        <InputComponent />
        <Clock />
      </div>
    </header>
  );
}
