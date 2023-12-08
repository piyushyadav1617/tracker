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
import {  signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import Spinner from "@/components/spinner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { GoogleSvg,GithubSvg } from "../socialIcons";
import {
  type Credentials,
  userCredentialsSchema,
} from "@/zod/validationSchema";
import Link from "next/link";

export default function Signin() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const error = searchParams.get("error");
  const { toast } = useToast();

  const [loading, setLoading] = React.useState(false);
  const [loading2, setLoading2] = React.useState(false);

  const issueFormResolver = zodResolver(userCredentialsSchema);
  const form = useForm<Credentials>({
    resolver: issueFormResolver,
  });
  const create = async (data: Credentials) => {
    return signIn("credentials", {
      ...data,
      redirect: true,
      callbackUrl: callbackUrl || "http://localhost:3000",
    });
  };
    const googleLogin = async () => {
      setLoading(true);
      return signIn("google", {
        redirect: true,
        callbackUrl: callbackUrl || "http://localhost:3000",
      });
    };
    const githubLogin = async () => {
      setLoading2(true);
      return signIn("github", {
        redirect: true,
        callbackUrl: callbackUrl || "http://localhost:3000",
      });
    };
  React.useEffect(() => {
    if (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error,
      });
      console.log(error);
    }
  }, [error]);

  return (
    <div className="w-full h-[60vh] my-20 flex items-center justify-center">
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
            <Button
              className="w-full flex justify-between  text-slate-600 bg-slate-200 hover:bg-slate-300"
              disabled={loading}
              onClick={githubLogin}
            >
              {loading2 ? <Spinner size={15} color="black" /> : "Github"}
              <GithubSvg />
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

          <Form {...form}>
            <form onSubmit={form.handleSubmit(create)} className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="xyz" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="*******" {...field} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                className="w-full"
              >
                {form.formState.isSubmitting ? (
                  <Spinner size={15} color="white" />
                ) : (
                  "Signin"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          {" "}
          <p className="text-sm">
            Dont have an account?{" "}
            <Link className="text-blue-600" href={"/auth/signup"}>
              Signup
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
