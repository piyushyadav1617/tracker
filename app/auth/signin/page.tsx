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
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import Spinner from "@/components/spinner";
import Image from "next/image";
import { GoogleSvg } from "../socialIcons";

export default function Signin() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const [loading, setLoading] = React.useState(false);

  const googleLogin = async () => {
    setLoading(true);
    return signIn("google", {
      redirect: true,
      callbackUrl: callbackUrl || "http://localhost:3000",
    });
  };

  return (
    <div className="w-full h-[60vh] flex items-center justify-center">
      <Card className="w-[95vw] sm:w-[350px] sm:p-4 border-border shadow-xl shadow-border ">
        <CardHeader>
          <CardTitle>Sign in</CardTitle>
          <CardDescription>to your account with</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Button
              className="w-full flex justify-between  text-slate-600 bg-slate-200 hover:bg-slate-300"
              disabled={loading}
              onClick={googleLogin}
            >
              {loading ? <Spinner size={15} color="black" /> : "Google"}
              <GoogleSvg />
            </Button>
          </div>
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-xs text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" type="text" placeholder="xyz" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="********" type="password" />
            </div>
            <Button>Submit</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
