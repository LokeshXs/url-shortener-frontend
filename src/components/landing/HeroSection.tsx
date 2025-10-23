import LinkShortenerFormLandingPage from "../forms/LandingLinkShortenerForm";
import { Button } from "../ui/button";
import { IconArrowDown, IconCopy, IconQrcode } from "@tabler/icons-react";
import { StripedPattern } from "../ui/stripe-pattern";
import CopyButton from "../common/CopyButton";
import SampleUrlCard from "./SampleUrlCard";

export default function HeroSection() {
  return (
    <div className=" sm:min-h-screen   pt-32  px-10 max-md:px-6 max-sm:px-1 max-md:pt-28 max-sm:pt-24 ">
      <div className=" relative py-12 ">
        <div className=" flex flex-col items-center  gap-4 relative z-[2]">
          <div className=" text-xs hover:bg-muted border border-accent-foreground/20 py-1 px-2 rounded-full text-primary">
            ✨ Next-Gen Link Shortener
          </div>
          <h1 className=" text-5xl max-sm:text-3xl max-w-2xl text-center leading-tight font-medium">
            Make Every <span className=" text-emerald-600">Link</span> Count.
          </h1>
          <p className=" text-base max-sm:text-sm max-w-lg text-center text-secondary-foreground">
            Transform long, messy links into short, shareable URLs with built-in
            analytics.
          </p>

          <div className=" flex gap-4 items-center mt-6">
            <Button className="[&_svg:not([class*='size-'])]:size-3 max-sm: ">
              Generate Now
              <span className="bg-secondary rounded-full p-1  ">
                <IconArrowDown className="  text-secondary-foreground " />
              </span>
            </Button>
          </div>
        </div>
        <div className=" absolute top-0 left-0 w-full h-full border-[1px] rounded-xl border-muted">
          <StripedPattern className="[mask-image:radial-gradient(600px_circle_at_center,transparent,white)] z-[0] opacity-20 " />
        </div>
      </div>

      <div className=" mt-24 max-md:mt-14 max-w-4xl mx-auto border p-6  pb-20 max-sm:p-3 max-sm:pb-12 rounded-xl">
        <LinkShortenerFormLandingPage />
      </div>

     <SampleUrlCard/>
    </div>
  );
}
