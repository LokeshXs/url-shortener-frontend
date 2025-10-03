"use client";
import { formScheama } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { IconLink } from "@tabler/icons-react";
import { useAuth } from "@clerk/nextjs";
import { useClerk } from "@clerk/nextjs";

export default function LandingLinkShortenerForm() {
  const { isSignedIn } = useAuth();
  const { openSignIn } = useClerk();
  const form = useForm<z.infer<typeof formScheama>>({
    resolver: zodResolver(formScheama),
    defaultValues: {
      destinationUrl: "",
    },
  });

  async function submitHandler(_values: z.infer<typeof formScheama>) {
    if (!isSignedIn) {
      openSignIn();
    }
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submitHandler)}
          className=" space-y-6"
        >
          <FormField
            control={form.control}
            name="destinationUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Destination URL</FormLabel>
                <FormControl>
                  <Input
                    placeholder="https://tailwindcss.com/docs/hover-focus-and-other-states"
                    {...field}
                    className=" placeholder:text-neutral-400 focus-visible:ring-neutral-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className=" flex justify-end">
            <Button type="submit">
              Generate <IconLink />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
