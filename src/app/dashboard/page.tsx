"use client";

import Container from "@/components/common/Container";
import LinkShortenerForm from "@/components/forms/LinkShortenerForm";
import { Button } from "@/components/ui/button";

import { IconCopy, IconQrcode } from "@tabler/icons-react";
import { useState } from "react";
import { motion } from "motion/react";
import DataTable from "@/components/tables/urlStatsTable/DataTable";

export default function Page() {
  const [short_URL, setShortURL] = useState("");
  const [error, setError] = useState("");

  return (
    <Container className="min-h-screen  pt-28 pb-12 px-28">
   
      <main>
        <div className=" flex justify-center">
          <h2 className=" text-center mb-4 font-semibold bg-muted w-fit px-4 py-1 rounded-md ">
            {" "}
            ✨ Generate a Short URL
          </h2>
        </div>
        <div className=" border p-6 rounded-xl">
          <LinkShortenerForm setShortURL={setShortURL} setError={setError} />
        </div>
        {short_URL.length > 0 && (
          <motion.div
            key={short_URL}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className=" max-w-4xl w-[90%]  p-4 bg-primary mx-auto flex items-center gap-6 justify-between rounded-xl mt-12 "
          >
            <div className="w-full flex items-center gap-6 ">
              <Button className=" bg-neutral-700">
                <IconCopy />
              </Button>
              <p className=" text-primary-foreground text-sm">{short_URL}</p>
            </div>
            <Button
              variant="secondary"
              className="[&_svg:not([class*='size-'])]:size-5 w-24"
            >
              QR <IconQrcode />
            </Button>
          </motion.div>
        )}

        {error.length > 0 && (
          <motion.div
            key={error}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className=" max-w-4xl w-[90%]  p-4 bg-red-500 mx-auto flex items-center gap-6 justify-between rounded-xl mt-12 "
          >
            <div className="w-full flex items-center gap-6 ">
              <p className=" text-primary-foreground text-sm">{error}</p>
            </div>
          </motion.div>
        )}

        <div className="  mt-20">
          <div className=" flex justify-center">
            <h2 className=" text-center mb-4 font-semibold bg-muted w-fit px-4 py-1 rounded-md ">
              🚀 Track Your Short Links
            </h2>
          </div>
          <DataTable />
        </div>
      </main>
    </Container>
  );
}
