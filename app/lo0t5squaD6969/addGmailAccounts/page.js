"use client";
import DomainCard from "@/components/SI";
import LogCard from "@/components/log-card";
import { useState } from "react";

export default function Component() {
  const [status, setStatus] = useState({});
  return (
    <div className="flex flex-col min-h-screen p-6 gap-6">
      <div className="flex flex-row gap-6">
        <div className="w-full">
          <DomainCard setStatus={setStatus} />
        </div>
      </div>
      <div className="mt-6">
        <LogCard />
      </div>
    </div>
  );
}
