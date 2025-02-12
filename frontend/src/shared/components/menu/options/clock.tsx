import { useEffect, useState } from "react";

const Clock = () => {
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
    <span id="date-live">
      <div>
        <span id="clock" className="text-[2vh]">
          {time}
        </span>
      </div>
    </span>
  );
}

export default Clock;