"use client";

import Container from "@/components/common/Container";
import LinkShortenerForm from "@/components/forms/LinkShortenerForm";
import { Button } from "@/components/ui/button";

import {  IconQrcode } from "@tabler/icons-react";
import { useState } from "react";
import { motion } from "motion/react";
import DataTable from "@/components/tables/urlStatsTable/DataTable";
import CopyButton from "@/components/common/CopyButton";
import QrCodeModal from "@/components/common/QrCodeModal";

export default function Page() {
  const [short_URL, setShortURL] = useState("");
  const [error, setError] = useState("");
  const [open,setOpen] = useState(false);

 

  return (
    <Container className="min-h-screen  pt-28 pb-12 px-28 max-lg:px-12 max-lg:pb-6 max-md:pt-24 max-sm:px-4">
   
      <main>
        <div className=" flex justify-center">
          <h2 className=" text-center mb-4 font-semibold bg-muted w-fit px-4 py-1 rounded-md max-sm:text-sm ">
            {" "}
            ✨ Generate a Short URL
          </h2>
        </div>
        <div className=" border p-6 max-sm:p-4 rounded-xl">
          <LinkShortenerForm setShortURL={setShortURL} setError={setError} />
        </div>
        {short_URL.length > 0 && (
          <motion.div
            key={short_URL}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className=" max-w-4xl w-[90%] max-sm:w-full  p-4 max-sm:p-2 bg-primary mx-auto flex items-center gap-6 max-sm:gap-4 justify-between rounded-xl mt-12 max-sm:mt-6 "
          >
            <div className="w-full flex items-center gap-6 max-sm:gap-2 ">
              <CopyButton text={short_URL}/>
              <p className=" text-primary-foreground text-sm max-sm:text-xs ">{short_URL}</p>
            </div>
            <Button
              variant="secondary"
              className="[&_svg:not([class*='size-'])]:size-5 w-24 max-sm:hidden"
              onClick={()=>setOpen(true)}
            >
              QR <IconQrcode />
            </Button>
            <Button
         onClick={()=>{setOpen(true)}}
          size="icon"
          variant="secondary"
          className="[&_svg:not([class*='size-'])]:size-5  sm:hidden"
        >
          <IconQrcode />
        </Button>
          </motion.div>
        )}

        {error.length > 0 && (
          <motion.div
            key={error}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className=" max-w-4xl w-[90%] max-sm:w-full  p-4 max-sm:p-2 bg-red-500 mx-auto flex items-center gap-6 max-sm:gap-4 justify-between rounded-xl mt-12  "
          >
            <div className="w-full flex items-center gap-6 ">
              <p className=" text-primary-foreground text-sm max-sm:text-xs">{error}</p>
            </div>
          </motion.div>
        )}

        <div className="  mt-20 max-sm:mt-12">
          <div className=" flex justify-center">
            <h2 className=" text-center mb-4 font-semibold bg-muted w-fit px-4 py-1 rounded-md max-sm:text-sm ">
              🚀 Track Your Short Links
            </h2>
          </div>
          <DataTable />
        </div>
      </main>
      <QrCodeModal open={open} setOpen={setOpen} shorturl={short_URL}/>
    </Container>
  );
}
