"use client";

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
import { useRouter } from "next/navigation";

 const formScheama = z.object({
    destinationUrl:z.string().min(6,{message:"Too short url!"}),
});

export default function LandingLinkShortenerForm() {
  const { isSignedIn } = useAuth();
  const router = useRouter();
  const { openSignIn } = useClerk();
  const form = useForm<z.infer<typeof formScheama>>({
    resolver: zodResolver(formScheama),
    defaultValues: {
      destinationUrl: "",
    },
  });

   function submitHandler(values: z.infer<typeof formScheama>) {

    if (!isSignedIn) {
      openSignIn();
    }else{
      router.push("/dashboard")
    }
  }

  return (
    <div>
      <Form {...form} >
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
                    className=" placeholder:text-neutral-400 focus-visible:ring-neutral-200  max-md:placeholder:text-sm"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className=" flex justify-end max-sm:justify-start">
            <Button type="submit" >
              Generate <IconLink />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
