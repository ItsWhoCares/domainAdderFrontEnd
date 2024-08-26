"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckIcon, XIcon } from "lucide-react";

const domains = [
  {
    name: "example.com",
    added: true,
    verified: true,
    gmailActivated: true,
    allGood: true,
  },
  {
    name: "mydomain.net",
    added: true,
    verified: true,
    gmailActivated: false,
    allGood: false,
  },
  {
    name: "testsite.org",
    added: true,
    verified: true,
    gmailActivated: true,
    allGood: true,
  },
];

export default function DomainStatusCard({ status }) {
  console.log("status", status);
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Domain Status</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Domains</TableHead>
              <TableHead>Added</TableHead>
              <TableHead>Verified</TableHead>
              <TableHead>Gmail Activated</TableHead>
              <TableHead>All Good</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.keys(status).map((domain) => (
              <TableRow key={domain}>
                <TableCell className="font-medium">{domain}</TableCell>
                <TableCell>
                  {status[domain].isAdded ? (
                    <CheckIcon className="text-green-500" />
                  ) : (
                    <XIcon className="text-red-500" />
                  )}
                </TableCell>
                <TableCell>
                  {status[domain].isVerified ? (
                    <CheckIcon className="text-green-500" />
                  ) : (
                    <XIcon className="text-red-500" />
                  )}
                </TableCell>
                <TableCell>
                  {status[domain].isGmail ? (
                    <CheckIcon className="text-green-500" />
                  ) : (
                    <XIcon className="text-red-500" />
                  )}
                </TableCell>
                <TableCell>
                  {status[domain].isGmail &&
                  status[domain].isAdded &&
                  status[domain].isVerified ? (
                    <CheckIcon className="text-green-500" />
                  ) : (
                    <XIcon className="text-red-500" />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      {/* <CardFooter>
        <p className="text-sm text-muted-foreground">
          All domains ready to proceed
        </p>
      </CardFooter> */}
    </Card>
  );
}
