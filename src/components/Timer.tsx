import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setSeconds((previousSeconds) => previousSeconds + 1);
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="rounded-xl border border-slate-700 p-6">
      <p className="text-slate-400">Time on this page</p>
      <p className="mt-2 text-3xl font-bold text-cyan-400">
        {seconds} seconds
      </p>
    </div>
  );
}

export default Timer;