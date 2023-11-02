"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { type IssueForm, createIssueSchema } from "@/zod/validationSchema";
import Spinner from "@/components/spinner";

export default function NewIssue() {
  const router = useRouter();
  const { toast } = useToast();
  const issueFormResolver = zodResolver(createIssueSchema);
  const form = useForm<IssueForm>({
    resolver: issueFormResolver,
  });
  const create = async (data: IssueForm) => {
    try {
      const response = await axios.post("/api/issues", data);
      if (response.status === 201) {
        router.push("/issues");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(create)}
        className="space-y-6 w-[90vw] sm:w-[450px] mx-auto mt-10 sm:m-10"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Example title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Example description..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="w-40"
        >
          {form.formState.isSubmitting ? (
            <Spinner size={15} color="white" />
          ) : (
            "Create issue"
          )}
        </Button>
      </form>
    </Form>
  );
}
