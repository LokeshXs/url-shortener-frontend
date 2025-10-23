"use client";

import { IconCheck, IconCopy } from "@tabler/icons-react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function CopyButton({ text }: { text: string }) {
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
    <Button onClick={() => copyhandler()} className=" bg-neutral-700 relative w-10 cursor-pointer">
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
            <IconCheck />
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
            <IconCopy />
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  );
}
