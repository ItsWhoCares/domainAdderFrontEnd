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
import { addDKIM, enableIMAP, getDKIMStatus } from "@/lib/helpers";
import IsRunning from "./../lib/isRunning";

function handleEnable(emailRef, passRef) {
  let tempEmail = emailRef.current.value;
  let tempPass = passRef.current.value;
  console.log(tempEmail);
  console.log(tempPass);
  if (tempEmail == "" || tempPass == "") {
    alert("Please enter data");
    return;
  }
  let data = tempEmail.split("\n");
  let pass = tempPass.split("\n");
  if (data.length == 0 || pass.length == 0) {
    alert("Please enter a domain");
    return;
  }
  if (data.length != pass.length) {
    alert("Email and password count mismatch");
    return;
  }
  let send = [];
  for (let i = 0; i < data.length; i++) {
    send.push({ email: data[i], password: pass[i] });
  }

  enableIMAP(send).then((res) => {
    console.log(res);
  });
}

export default function IMAPCredCard({ setStatus }) {
  const emailRef = useRef();
  const passRef = useRef();
  const [statusLoading, setStatusLoading] = useState(false);
  const [isRunning, setIsRunning] = IsRunning(true);
  return (
    <Card className="flex flex-col h-[calc(100vh-3rem)]">
      <CardHeader>
        <CardTitle>Enable IMAP For Gmail Accounts</CardTitle>
        <CardDescription>
          Provide list of emails and passwords to enable IMAP setting.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow overflow-y-auto">
        <div className="space-y-4">
          <form>
            <div className="grid w-full items-center gap-4">
              <Label htmlFor="domains">Email and Password</Label>
              <div className="flex flex-row">
                <Textarea
                  ref={emailRef}
                  id="domains"
                  placeholder="Enter emails (one per line)"
                  rows={12}
                />
                <div className="px-5" />
                <Textarea
                  ref={passRef}
                  id="domains"
                  placeholder="Enter passwords (one per line)"
                  rows={12}
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
      <CardFooter className="flex justify-end">
        {/* <handleShowStatus /> */}
        {/* <Button
          disabled={statusLoading}
          variant="secondary"
          onClick={() => handleShowStatus(ref, setStatus, setStatusLoading)}>
          {statusLoading ? "Loading" : "Show Status"}
        </Button> */}
        <Button
          disabled={isRunning}
          onClick={() => {
            setIsRunning(true);
            handleEnable(emailRef, passRef);
          }}>
          {isRunning ? "Running" : "Enable IMAP"}
        </Button>
      </CardFooter>
    </Card>
  );
}
