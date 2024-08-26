"use client";
import DomainCard from "@/components/imap_card";
import LogCard from "@/components/log-card";
import { useState } from "react";

export default function Component() {
  const [status, setStatus] = useState({});
  return (
    <div className="flex flex-col min-h-screen p-6 gap-6">
      <div className="flex flex-row gap-6">
        <div className="w-2/3">
          <DomainCard setStatus={setStatus} />
        </div>
      </div>
      <div className="mt-6">
        <LogCard />
      </div>
    </div>
  );
}
