import { useState, useEffect } from "react";

export default function IsRunning() {
  const [isRunning, setIsRunning] = useState(true);
  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}//isRunning`);
      if (res.ok) {
        const data = await res.json();
        // console.log(data);
        setIsRunning(data.status);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return [isRunning, setIsRunning];
}
