"use client";

import { NAV_LINKS } from "@/lib/data";
import Container from "./Container";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { SignInButton, useAuth, UserButton  } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { IconBrandGithubFilled } from "@tabler/icons-react";

export default function MobileNavBar() {

  const { isSignedIn } = useAuth();

  const pathname = usePathname();


  return (
    <Container className=" z-[12] fixed top-0 left-1/2 -translate-x-1/2 w-full   flex justify-center   ">
      <nav
        className={cn(
          " w-full flex justify-between items-center transition-all duration-300 ease-linear border px-2 py-2  bg-muted/40 backdrop-blur-md "
        )}
      
      >
       <p className=" font-medium">U<span className=" text-emerald-600">r</span>lbit</p>

        <div
          className={cn(" flex  items-center gap-2", {
            hidden: pathname === "/dashboard",
          })}
        >
       
          {/* <ul className=" flex items-center gap-4">
            {NAV_LINKS.map((linkObj, _) => (
              <li key={linkObj.label}>
                <Link href={linkObj.href} className=" text-sm text-muted-foreground hover:text-primary">
                  {linkObj.label}
                </Link>
              </li>
            ))}
          </ul> */}
              <Button size="sm" asChild className=" bg-muted text-primary rounded-full border border-emerald-600 hover:ring-emerald-100 text-xs"><Link target="_blank" href="https://github.com/LokeshXs/urlbit_url-shortener"><IconBrandGithubFilled className=" text-emerald-600"/> Star on Github</Link></Button>
          <div className=" h-8 w-[1px] bg-gradient-to-b from-transparent via-muted-foreground/40 to-transparent" />
          {isSignedIn ? (
            <Button size="sm"  asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          ) : (
            <div className=" flex items-center gap-2">
              <SignInButton oauthFlow="popup" mode="modal">
                <Button size="sm">Sign in</Button>
              </SignInButton>
             
            </div>
          )}
        </div>

        <div
          className={cn("", {
            hidden: pathname !== "/dashboard",
          })}
        >
          <UserButton />
        </div>
      </nav>
    </Container>
  );
}
