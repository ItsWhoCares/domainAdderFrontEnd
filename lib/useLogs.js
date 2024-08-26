import { useState, useEffect } from "react";

export default function UseLogs() {
  const [logs, setLogs] = useState(true);
  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/getLogs`);
      if (res.ok) {
        const data = await res.text();
        setLogs(data);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return logs;
}
