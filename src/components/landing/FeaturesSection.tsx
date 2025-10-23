import { IconGraph, IconRocket, IconShieldCheck } from "@tabler/icons-react";

export default function FeaturesSection(){

    return (
        <section id="features" className="p-12 max-md:p-6 max-sm:p-4 bg-muted mt-12 max-md:mt-10">

                <div className=" flex items-start gap-8 max-md:flex-col">

                    <div className=" px-4 relative group">
                        <IconRocket/>
                        <p className=" text-sm font-medium mt-2 max-sm:mt-1">Lightning-Fast Link Shortening</p>
                        <p className=" text-sm max-sm:text-xs text-muted-foreground mt-4  max-sm:mt-3 ">Transform long, messy URLs into sleek short links instantly. Built with Go for speed and reliability, ensuring low latency even under heavy load.</p>
                        <div className=" absolute top-1/2 -translate-y-1/2 left-0 h-[60%] group-hover:h-full w-[1px] bg-gradient-to-b from-transparent via-emerald-600  to-transparent transition-all duration-300"/>
                    </div>
                      <div className=" px-4 relative group">
                        <IconShieldCheck/>
                        <p className=" text-sm font-medium mt-2 max-sm:mt-1">Safe, Simple, and Secure</p>
                        <p className=" text-sm max-sm:text-xs text-muted-foreground mt-4 max-sm:mt-3 ">Your links are protected with top-tier security. Create, share, and manage short links with complete peace of mind.</p>
                        <div className=" absolute top-1/2 -translate-y-1/2 left-0 h-[60%] group-hover:h-full w-[1px] bg-gradient-to-b from-transparent via-emerald-600  to-transparent transition-all duration-300"/>
                    </div>
                     <div className=" px-4 relative group">
                        <IconGraph/>
                        <p className=" text-sm font-medium mt-2 max-sm:mt-1">Track Every Click</p>
                        <p className=" text-sm max-sm:text-xs text-muted-foreground mt-4 max-sm:mt-3 ">Track clicks, manage link lifespans, and stay in control with automatic expiration and detailed usage stats for every shortened URL.</p>
                        <div className=" absolute top-1/2 -translate-y-1/2 left-0 h-[60%] group-hover:h-full w-[1px] bg-gradient-to-b from-transparent via-emerald-600  to-transparent transition-all duration-300"/>
                    </div>
                </div>
        </section>
    )
}