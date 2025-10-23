"use client";

import { IconQrcode } from "@tabler/icons-react";
import CopyButton from "../common/CopyButton";
import { Button } from "../ui/button";
import { useState } from "react";
import QrCodeModal from "../common/QrCodeModal";

export default function SampleUrlCard(){

   const [open,setOpen]= useState(false);
    return (
         <div className=" max-w-4xl w-[80%] max-md:w-[90%] max-sm:w-[95%] p-4 max-md:p-2 bg-primary mx-auto flex items-center gap-6 justify-between rounded-xl -translate-y-6 ">
        <div className="w-full flex items-center gap-6 max-sm:gap-4 ">
          <CopyButton text=" https://urlbit.vercel.app/u/9q1U1q" />
          <p className=" text-primary-foreground text-sm truncate max-sm:max-w-36 ">
            https://urlbit.vercel.app/u/9q1U1q
          </p>
        </div>
        <Button 
        onClick={()=>{setOpen(true)}}
          variant="secondary"
          className="[&_svg:not([class*='size-'])]:size-5 w-24 max-sm:hidden"
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
        <QrCodeModal open={open} setOpen={setOpen} shorturl="https://urlbit.vercel.app/u/9q1U1q"/>
      </div>
    )
}