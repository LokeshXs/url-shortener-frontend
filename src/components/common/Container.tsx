import { cn } from "@/lib/utils";
import React from "react";

export default function Container({children,className}:{children:React.ReactNode,className?:string}){

    return (
        <section className={cn("max-w-5xl mx-auto",className)}>
            {children}
        </section>
    )
}