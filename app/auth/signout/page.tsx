"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { signOut } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import Spinner from "@/components/spinner";

export default function SignOut() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const [loading, setLoading] = React.useState(false);

  const logout = async () => {
    setLoading(true);
    return signOut({
      redirect: true,
      callbackUrl: callbackUrl || "http://localhost:3000",
    });
  };

  return (
    <div className="w-full h-[60vh] flex items-center justify-center bg-opacity-20">
      <Card className="w-[95vw] sm:w-[350px] sm:p-4 border-border shadow-2xl shadow-border">
        <CardHeader>
          <CardTitle>Sign out</CardTitle>
          <CardDescription>Are you sure you want to sign out?</CardDescription>
        </CardHeader>
        <CardContent>
          <Button disabled={loading} className="w-full" onClick={logout}>
            {loading ? <Spinner size={15} color="white" /> : "Continue"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
