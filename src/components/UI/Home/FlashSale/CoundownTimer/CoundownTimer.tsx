import { useCallback, useEffect, useState } from "react";

interface CountdownTime {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const CountdownTimer: React.FC = () => {
  const [countDownTime, setCountDownTime] = useState<CountdownTime>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const getTimeDifference = (targetTime: number) => {
    const currentTime = new Date().getTime();
    const timeDifference = targetTime - currentTime;

    if (timeDifference < 0) {
      setCountDownTime({ days: "00", hours: "00", minutes: "00", seconds: "00" });
      return;
    }

    const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000)).toString().padStart(2, "0");
    const hours = Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (60 * 1000))
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000).toString().padStart(2, "0");

    setCountDownTime({ days, hours, minutes, seconds });
  };

  const startCountdown = useCallback(() => {
    const customDate = new Date();
    const countdownTarget = new Date(
      customDate.getFullYear(),
      customDate.getMonth(),
      customDate.getDate() + 6,
      customDate.getHours(),
      customDate.getMinutes(),
      customDate.getSeconds() + 1
    ).getTime();

    const interval = setInterval(() => {
      getTimeDifference(countdownTarget);
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    const cleanup = startCountdown();
    return cleanup;
  }, [startCountdown]);

  return (
    <div >

      <div className="flex justify-center gap-2 sm:gap-4 ">
        {["days", "hours", "minutes", "seconds"].map((unit, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <div className="h-12 w-12 sm:h-16 sm:w-16 flex items-center justify-center bg-[#008ECC]  rounded-md">
              <span className="text-xl sm:text-3xl font-semibold text-white">
                {countDownTime[unit as keyof CountdownTime]}
              </span>
            </div>
            <span className="text-xs sm:text-sm text-[#8486A9] capitalize">
              {countDownTime[unit as keyof CountdownTime] === "01" ? unit.slice(0, -1) : unit}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
