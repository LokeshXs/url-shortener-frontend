"use client";
import { formScheama } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { IconLink } from "@tabler/icons-react";
import { Dispatch, SetStateAction, useState, useTransition } from "react";
import { useAuth } from "@clerk/nextjs";
import axios, { AxiosError } from "axios";
import Loader from "../ui/Loader";
import { DateTimePickerForm } from "../common/DateTimePicker";
import { server_url } from "@/lib/config";

export default function LinkShortenerForm({
  setShortURL,
  setError,
}: {
  setShortURL: Dispatch<SetStateAction<string>>;
  setError: Dispatch<SetStateAction<string>>;
}) {
  const form = useForm<z.infer<typeof formScheama>>({
    resolver: zodResolver(formScheama),
    defaultValues: {
      destinationUrl: "",
      customShortCode:""
    },
  });
  const [isPending, startTransition] = useTransition();
  const { getToken } = useAuth();


  async function submitHandler(values: z.infer<typeof formScheama>) {
    startTransition(async () => {
      try {
        setShortURL("");
        setError("");

        const token = await getToken({ template: "default" });
        const expirationTime = values.time;
        const res = await axios.post(
          `${server_url}/shorten`,
          {
            long_url: values.destinationUrl,
            expired_at: expirationTime?.toISOString() || null,
            shortcode: values.customShortCode,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = res.data;

        const short_url = data.short_url as string;
        setShortURL(short_url);
        form.reset();
      } catch (err) {
        const error = err as AxiosError;
        const data = error.response?.data as { message?: string };

        setError("Failed to generate short url - " + data?.message);
      }
    });
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
                    disabled={isPending}
                    placeholder="https://tailwindcss.com/docs/hover-focus-and-other-states"
                    {...field}
                    className=" placeholder:text-neutral-400 focus-visible:ring-neutral-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="customShortCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Custom Code</FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    placeholder="code20"
                    {...field}
                    className=" placeholder:text-neutral-400 focus-visible:ring-neutral-200 max-w-40"
                  />
                </FormControl>
                <FormMessage />
                <FormDescription className=" text-xs">
                Minimum length 6 (optional)
              </FormDescription>
              </FormItem>
            )}
          />

          <div className=" flex justify-between items-end">
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Expiration (Date/Time)</FormLabel>
                  <FormControl>
                    <DateTimePickerForm form={form} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              disabled={isPending}
              type="submit"
              className="min-w-[120px]"
            >
              {isPending ? (
                <Loader />
              ) : (
                <p className=" flex items-center gap-2">
                  Generate <IconLink />
                </p>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
