"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import useLogs from "@/lib/useLogs";

export default function DKIMLogCard() {
  const logs = useLogs();
  return (
    <Card className="flex flex-col h-[calc(100vh-3rem)]">
      <CardHeader>
        <CardTitle>Logs</CardTitle>
        <CardDescription>View the logs of the operations</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow overflow-y-auto">
        <Textarea
          id="logs"
          disabled
          value={logs}
          className="h-full resize-none"
          placeholder="Logs will appear here..."
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="secondary"
          onClick={() => fetch(`${process.env.NEXT_PUBLIC_URL}/clearLogs`)}>
          Clear
        </Button>
        <Button onClick={() => fetch(`${process.env.NEXT_PUBLIC_URL}/stop`)}>
          Stop
        </Button>
      </CardFooter>
    </Card>
  );
}
