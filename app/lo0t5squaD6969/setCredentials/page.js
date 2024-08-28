"use client";
import DomainCard from "@/components/domain-card";
import LogCard from "@/components/log-card";
import DomainStatusCard from "@/components/domain-status-card";
import { useState } from "react";
import Credentials from "@/components/credentials";

export default function SetCredentials() {
  const [status, setStatus] = useState({});
  return (
    <div className="flex min-h-screen p-6 gap-6 justify-center align-middle">
      <div className="w-1/2">
        <Credentials setStatus={setStatus} />
      </div>
    </div>
  );
}
