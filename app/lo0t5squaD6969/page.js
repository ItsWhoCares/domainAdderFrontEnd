import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col space-y-4 w-full max-w-md px-4">
        <Button asChild className="w-full">
          <Link href="/lo0t5squaD6969/setCredentials">Set Credentials</Link>
        </Button>
        <Button asChild className="w-full">
          <Link href="/lo0t5squaD6969/addDomains">Add Domains To GSuit</Link>
        </Button>
        <Button asChild className="w-full">
          <Link href="/lo0t5squaD6969/generateDKIM">
            Generate DKIM Keys For Domains
          </Link>
        </Button>
        <Button asChild className="w-full">
          <Link href="/lo0t5squaD6969/enableIMAP">Enable IMAP For Gmail</Link>
        </Button>
        <Button asChild className="w-full">
          <Link href="/lo0t5squaD6969/addGmailAccounts">
            Add Gmail Accounts To Instantly/Smartlead
          </Link>
        </Button>
      </div>
    </div>
  );
}
