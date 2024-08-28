"use client";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  addDomains,
  getDomainsStatus,
  matchCredentials,
  setCredentials,
} from "@/lib/helpers";
import IsRunning from "./../lib/isRunning";

function handleSet(
  gsuitEmailRef,
  gsuitPassRef,
  cfEmailRef,
  cfIDRef,
  cfKeyRef,
  setStatusLoading
) {
  setStatusLoading(true);
  setCredentials({
    GSUIT_EMAIL: gsuitEmailRef.current.value,
    GSUIT_PASSWORD: gsuitPassRef.current.value,
    CLOUDFLARE_EMAIL: cfEmailRef.current.value,
    CLOUDFLARE_ACCOUNT_ID: cfIDRef.current.value,
    CLOUDFLARE_KEY: cfKeyRef.current.value,
  }).then((res) => setStatusLoading(false));
}

function handleGet(
  gsuitEmailRef,
  gsuitPassRef,
  cfEmailRef,
  cfIDRef,
  cfKeyRef,
  setStatusLoading
) {
  setStatusLoading(true);
  matchCredentials({
    GSUIT_EMAIL: gsuitEmailRef.current.value,
    GSUIT_PASSWORD: gsuitPassRef.current.value,
    CLOUDFLARE_EMAIL: cfEmailRef.current.value,
    CLOUDFLARE_ACCOUNT_ID: cfIDRef.current.value,
    CLOUDFLARE_KEY: cfKeyRef.current.value,
  }).then((res) => {
    console.log(res);
    setStatusLoading(false);
  });
}

export default function Credentials({ setStatus }) {
  const ref = useRef();
  const [statusLoading, setStatusLoading] = useState(false);
  const gsuitEmailRef = useRef();
  const gsuitPassRef = useRef();
  const cfEmailRef = useRef();
  const cfIDRef = useRef();
  const cfKeyRef = useRef();
  const [isRunning, setIsRunning] = IsRunning(true);
  return (
    <Card className="flex flex-col h-[calc(100vh-3rem)]">
      <CardHeader>
        <CardTitle>Credentials</CardTitle>
        <CardDescription>
          Set credentials or get credentials from the server
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow overflow-y-auto">
        <div className="space-y-4">
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-row">
              <div className="w-full">
                <h3 className="text-lg font-semibold mb-2">
                  GSuit Credentials
                </h3>

                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">GSuit Email</Label>
                    <Input
                      id="email"
                      type="email"
                      ref={gsuitEmailRef}
                      placeholder="your-email@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">GSuit Password</Label>
                    <Input id="password" type="password" ref={gsuitPassRef} />
                  </div>
                </form>
              </div>
              <div className="px-5" />
              <div className="w-full">
                <h3 className="text-lg font-semibold mb-2 w-full">
                  Cloudflare Credentials
                </h3>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Cloudflare Email</Label>
                    <Input
                      id="cf_email"
                      type="email"
                      ref={cfEmailRef}
                      placeholder="your-email@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Cloudflare Account ID</Label>
                    <Input id="cf_password" type="text" ref={cfIDRef} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="text">Cloudflare API Key</Label>
                    <Input id="cf_api" type="text" ref={cfKeyRef} />
                  </div>
                </form>
              </div>
              {/* <Textarea
                // ref={cemailRef}
                id="domains"
                placeholder="Enter emails (one per line)"
                rows={12}
              /> */}
              <div className="px-5" />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {/* <handleShowStatus /> */}
        <Button
          disabled={statusLoading || isRunning}
          variant="secondary"
          onClick={() =>
            handleGet(
              gsuitEmailRef,
              gsuitPassRef,
              cfEmailRef,
              cfIDRef,
              cfKeyRef,
              setStatusLoading
            )
          }>
          {statusLoading ? "Loading" : "Match Credentials"}
        </Button>
        <Button
          disabled={isRunning && isRunning}
          onClick={() => {
            setIsRunning(true);
            handleSet(
              gsuitEmailRef,
              gsuitPassRef,
              cfEmailRef,
              cfIDRef,
              cfKeyRef,
              setStatusLoading
            );
          }}>
          {isRunning ? "Running" : "Set Credentials"}
        </Button>
      </CardFooter>
    </Card>
  );
}
