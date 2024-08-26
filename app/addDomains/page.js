"use client";
import DomainCard from "@/components/domain-card";
import LogCard from "@/components/log-card";
import DomainStatusCard from "@/components/domain-status-card";
import { useState } from "react";

export default function Component() {
  const [status, setStatus] = useState({});
  return (
    <div className="flex flex-col min-h-screen p-6 gap-6">
      <div className="flex flex-row gap-6">
        <div className="w-1/3">
          <DomainCard setStatus={setStatus} />
        </div>
        <div className="flex-grow">
          <LogCard />
        </div>
      </div>
      <div className="mt-6">
        <DomainStatusCard status={status} />
      </div>
    </div>
  );
}
