"use client";
import DKIMDomainCard from "@/components/dkim_input";
import DKIMLogCard from "@/components/dkim_logs";
import DKIMDomainStatusCard from "@/components/dkim_status";
import { useState } from "react";

export default function GenerateDKIM() {
  const [status, setStatus] = useState({});
  return (
    <div className="flex flex-col min-h-screen p-6 gap-6">
      <div className="flex flex-row gap-6">
        <div className="w-1/3">
          <DKIMDomainCard setStatus={setStatus} />
        </div>
        <div className="flex-grow">
          <DKIMLogCard />
        </div>
      </div>
      <div className="mt-6">
        <DKIMDomainStatusCard status={status} />
      </div>
    </div>
  );
}
