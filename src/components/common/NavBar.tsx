"use client";

import { NAV_LINKS } from "@/lib/data";
import Container from "./Container";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { SignInButton, useAuth, UserButton, UserProfile } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const { scrollYProgress } = useScroll();
  const { isSignedIn } = useAuth();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const pathname = usePathname();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {

    if (latest > 0.2) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <Container className=" z-[12] fixed top-0 left-1/2 -translate-x-1/2 w-full  mt-2  flex justify-center   ">
      <motion.nav
        className={cn(
          " w-full flex justify-between items-center transition-all duration-300 ease-linear border px-4 py-2 rounded-full bg-muted/40 backdrop-blur-md "
        )}
        animate={{
          width: scrolled ? "80%" : "90%",
        }}
        transition={{
          duration: 0.1,
          ease: "linear",
        }}
      >
        <Link href="/" className=" font-medium">U<span className=" text-emerald-600">r</span>lbit</Link>

        <div
          className={cn(" flex  items-center gap-4", {
            hidden: pathname === "/dashboard",
          })}
        >
          <ul className=" flex items-center gap-4">
            {NAV_LINKS.map((linkObj, _) => (
              <li key={linkObj.label}>
                <Link href={linkObj.href} className=" text-sm text-muted-foreground hover:text-primary">
                  {linkObj.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className=" h-8 w-[1px] bg-gradient-to-b from-transparent via-muted-foreground/40 to-transparent" />
          {isSignedIn ? (
            <Button size="sm" asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          ) : (
            <div className=" flex items-center gap-2">
              <SignInButton oauthFlow="popup" mode="modal">
                <Button size="sm">Sign in</Button>
              </SignInButton>
              <SignInButton oauthFlow="popup" mode="modal">
                <Button variant="outline" size="sm">
                  Sign up
                </Button>
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
      </motion.nav>
    </Container>
  );
}
