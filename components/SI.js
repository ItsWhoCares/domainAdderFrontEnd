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
import { addToSmartlead, addToInstantly, addToEmailbison } from "@/lib/helpers";
import IsRunning from "./../lib/isRunning";
import { Input } from "./ui/input";

function handleSL(emailRef, passRef, cemailRef, cpassRef) {
  let tempEmail = cemailRef.current.value;
  let tempPass = cpassRef.current.value;
  //   console.log(tempEmail);
  //   console.log(tempPass);
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
  let acc_email = emailRef.current.value;
  let acc_pass = passRef.current.value;
  if (acc_email == "" || acc_pass == "") {
    alert("Please enter account credentials");
    return;
  }
  let all = {
    smartlead_email: acc_email,
    smartlead_password: acc_pass,
    accounts: send,
  };
  console.log(all);
  addToSmartlead(all).then((res) => {
    console.log(res);
  });
}

function handleEB(emailRef, passRef, cemailRef, cpassRef, fnameRef, ebUrlRef) {
  let tempEmail = cemailRef.current.value;
  let tempPass = cpassRef.current.value;
  let tempName = fnameRef.current.value;
  let ebUrl = ebUrlRef.current.value;

  if (ebUrl == "" || ebUrl == null) {
    alert("Please enter Emailbison URL");
    return;
  }
  //   console.log(tempEmail);
  //   console.log(tempPass);
  if (tempEmail == "" || tempPass == "" || tempName == "") {
    alert("Please enter data");
    return;
  }
  let data = tempEmail.split("\n");
  let pass = tempPass.split("\n");
  let name = tempName.split("\n");
  if (data.length == 0 || pass.length == 0 || name.length == 0) {
    alert("Please enter a domain");
    return;
  }
  if (data.length != pass.length || data.length != name.length) {
    alert("Email and password count mismatch");
    return;
  }
  let send = [];
  for (let i = 0; i < data.length; i++) {
    send.push({ email: data[i], password: pass[i], full_name: name[i] });
  }
  let acc_email = emailRef.current.value;
  let acc_pass = passRef.current.value;
  if (acc_email == "" || acc_pass == "") {
    alert("Please enter account credentials");
    return;
  }
  let all = {
    emailbison_email: acc_email,
    emailbison_password: acc_pass,
    url: ebUrl,
    accounts: send,
  };
  // console.log(all);
  addToEmailbison(all).then((res) => {
    console.log(res);
  });
}

function handleIN(emailRef, passRef, cemailRef, cpassRef, orgRef) {
  let tempEmail = cemailRef.current.value;
  let tempPass = cpassRef.current.value;
  //   console.log(tempEmail);
  //   console.log(tempPass);
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
  let acc_email = emailRef.current.value;
  let acc_pass = passRef.current.value;
  if (acc_email == "" || acc_pass == "") {
    alert("Please enter account credentials");
    return;
  }
  let all = {
    instantly_email: acc_email,
    instantly_password: acc_pass,
    org_name: orgRef.current.value || "",
    accounts: send,
  };
  console.log(all);
  addToInstantly(all).then((res) => {
    console.log(res);
  });
}

export default function SI({ setStatus }) {
  const emailRef = useRef();
  const passRef = useRef();
  const cemailRef = useRef();
  const cpassRef = useRef();
  const orgRef = useRef();
  const fnameRef = useRef();
  const ebUrlRef = useRef();

  const [isRunning, setIsRunning] = IsRunning(true);
  return (
    <Card className="flex flex-col h-[calc(100vh-3rem)]">
      <CardHeader>
        <CardTitle>
          Connect Gmail To Instantly / Smartlead / Emailbison
        </CardTitle>
        <CardDescription>
          Provide credentials for gmail accounts to add them to Instantly /
          Smartlead / Emailbison
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow overflow-y-auto">
        <div className="space-y-4">
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-row">
              <div className="w-full">
                <h3 className="text-lg font-semibold mb-2">Credentials</h3>

                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      ref={emailRef}
                      placeholder="your-email@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" ref={passRef} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="text">Emailbison URL</Label>
                    <Input id="eb_url" type="text" ref={ebUrlRef} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="text">Organisation Name (Optional)</Label>
                    <Input id="orgName" type="text" ref={orgRef} />
                  </div>
                </form>
              </div>
              <div className="px-5" />
              <Textarea
                ref={cemailRef}
                id="domains"
                placeholder="Enter emails (one per line)"
                rows={12}
              />
              <div className="px-5" />
              <Textarea
                ref={cpassRef}
                id="domains"
                placeholder="Enter passwords (one per line)"
                rows={12}
              />
              <div className="px-5" />
              <Textarea
                ref={fnameRef}
                id="fname"
                placeholder="Enter full names (one per line) (Optional)"
                rows={12}
              />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {/* <handleShowStatus /> */}
        <Button
          disabled={isRunning}
          onClick={() => {
            setIsRunning(true);
            handleIN(emailRef, passRef, cemailRef, cpassRef, orgRef);
          }}>
          {isRunning ? "Running" : "Add To Instantly"}
        </Button>
        <Button
          disabled={isRunning}
          onClick={() => {
            setIsRunning(true);
            handleSL(emailRef, passRef, cemailRef, cpassRef);
          }}>
          {isRunning ? "Running" : "Add To Smartlead"}
        </Button>
        <Button
          disabled={isRunning}
          onClick={() => {
            setIsRunning(true);
            handleEB(
              emailRef,
              passRef,
              cemailRef,
              cpassRef,
              fnameRef,
              ebUrlRef
            );
          }}>
          {isRunning ? "Running" : "Add To Emailbison"}
        </Button>
      </CardFooter>
    </Card>
  );
}
