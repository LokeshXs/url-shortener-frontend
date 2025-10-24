"use client";

import { IconCheck, IconCopy } from "@tabler/icons-react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function CopyButton({ text,variant="primary" }: { text: string,variant?:"primary"|"secondary" }) {
  const [copying, setCopying] = useState(false);

  function copyhandler() {
    setCopying(true);
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Url Copied");
      })
      .catch((_) => {
        toast.error("Failed to copy url");
      });

    setTimeout(() => {
      setCopying(false);
    }, 1000);
  }

  return (
    <Button onClick={() => copyhandler()} className={cn(" bg-neutral-700 relative w-10 cursor-pointer",{
      "bg-transparent hover:ring-0 ":variant==="secondary"
    })}>
      <AnimatePresence mode="wait">
        {copying ? (
          <motion.span
            key="copy"
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{
              scale: 0.4,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className=" absolute"
          >
            <IconCheck className={cn("",{
              "text-muted-foreground":variant === "secondary"
            })} />
          </motion.span>
        ) : (
          <motion.span
            key="check"
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{
              scale: 0.4,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
             className=" absolute"
          >
            <IconCopy className={cn("",{
              "text-muted-foreground":variant === "secondary"
            })} />
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  );
}
