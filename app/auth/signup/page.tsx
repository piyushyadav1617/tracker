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

import { useRouter, useSearchParams } from "next/navigation";
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

import {
  type SignupCredentials,
  userSignupSchema,
} from "@/zod/validationSchema";
import Link from "next/link";
import axios from "axios";

export default function Signup() {
  const searchParams = useSearchParams();

  const { toast } = useToast();
  const router = useRouter();

  const issueFormResolver = zodResolver(userSignupSchema);
  const form = useForm<SignupCredentials>({
    resolver: issueFormResolver,
  });
  const create = async (data: SignupCredentials) => {
    try {
      const res = await axios.post("/api/user", data);

      if (res.status === 200) {
        return router.push("/api/auth/signin");
      }
    } catch (error: any) {
      if (error.response) {
        if (error.response.status === 409) {
          return toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "Username already exists",
          });
        }
      }
      return toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.message,
      });
    }
  };

  return (
    <div className="w-full h-[60vh] my-20 flex items-center justify-center">
      <Card className="w-[95vw] sm:w-[350px] sm:p-4 border-border shadow-xl shadow-border ">
        <CardHeader>
          <CardTitle>Sign up</CardTitle>
          <CardDescription>Create account with credentials</CardDescription>
        </CardHeader>
        <CardContent>
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
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
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
                  "Signup"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          {" "}
          <p className="text-sm">
            Already have an account?{" "}
            <Link className="text-blue-600" href={"/api/auth/signin"}>
              Sigin here
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
