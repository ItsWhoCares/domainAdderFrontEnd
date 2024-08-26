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

import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { addDomains, getDomainsStatus } from "@/lib/helpers";
import IsRunning from "./../lib/isRunning";

function handleAddDomains(ref) {
  let temp = ref.current.value;
  console.log(temp);
  if (temp == "") {
    alert("Please enter a domain");
    return;
  }
  let data = temp.split("\n");
  if (data.length == 0) {
    alert("Please enter a domain");
    return;
  }
  addDomains(data).then((res) => {
    console.log(res);
  });
}

function handleShowStatus(ref, setStatus, setStatusLoading) {
  //   console.log("Show status");
  //   console.log(ref.current.value);
  setStatusLoading(true);
  let temp = ref.current.value;
  if (temp == "") {
    alert("Please enter a domain");
    setStatusLoading(false);
    return;
  }
  let data = temp.split("\n");
  if (data.length == 0) {
    alert("Please enter a domain");
    setStatusLoading(false);
    return;
  }
  getDomainsStatus(data).then((res) => {
    setStatus(res);
    setStatusLoading(false);
  });
}

export default function DomainCard({ setStatus }) {
  const ref = useRef();
  const [statusLoading, setStatusLoading] = useState(false);
  const [isRunning, setIsRunning] = IsRunning(true);
  return (
    <Card className="flex flex-col h-[calc(100vh-3rem)]">
      <CardHeader>
        <CardTitle>Domains</CardTitle>
        <CardDescription>
          Provide list of domains to add or get status
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow overflow-y-auto">
        <div className="space-y-4">
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="domains">Domain List</Label>
                <Textarea
                  ref={ref}
                  id="domains"
                  placeholder="Enter domains (one per line)"
                  rows={13}
                />
              </div>
            </div>
          </form>

          {/* <div>
            <h3 className="text-lg font-semibold mb-2">
              Google Workspace Credentials
            </h3>

            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your-email@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
            </form>
          </div> */}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {/* <handleShowStatus /> */}
        <Button
          disabled={statusLoading}
          variant="secondary"
          onClick={() => handleShowStatus(ref, setStatus, setStatusLoading)}>
          {statusLoading ? "Loading" : "Show Status"}
        </Button>
        <Button
          disabled={isRunning}
          onClick={() => {
            setIsRunning(true);
            handleAddDomains(ref);
          }}>
          {isRunning ? "Running" : "Add Domains"}
        </Button>
      </CardFooter>
    </Card>
  );
}
