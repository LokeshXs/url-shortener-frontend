import LinkShortenerFormLandingPage from "../forms/LandingLinkShortenerForm";
import { Button } from "../ui/button";
import {
  IconArrowDown,
  IconCopy,
  IconQrcode,
} from "@tabler/icons-react";
import { StripedPattern } from "../ui/stripe-pattern";

export default function HeroSection() {
  return (
    <div className=" min-h-screen  pt-32  px-10 ">
      <div className=" relative py-12 ">
        <div className=" flex flex-col items-center gap-4 relative z-[2]">
          <div className=" text-xs hover:bg-muted border border-accent-foreground/20 py-1 px-2 rounded-full text-primary">
          ✨ Next-Gen Link Shortener
        </div>
        <h1 className=" text-5xl max-w-2xl text-center leading-tight font-medium">
          Make Every <span className=" text-emerald-600">Link</span> Count.
        </h1>
        <p className=" text-base max-w-lg text-center text-secondary-foreground">
          Transform long, messy links into short, shareable URLs with built-in
          analytics.
        </p>

        <div className=" flex gap-4 items-center mt-6">
          <Button className="[&_svg:not([class*='size-'])]:size-3 ">
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

      <div className=" mt-24 max-w-4xl mx-auto border p-6 pb-20 rounded-xl">
        <LinkShortenerFormLandingPage />
      </div>

      <div className=" max-w-4xl w-[80%] p-4 bg-primary mx-auto flex items-center gap-6 justify-between rounded-xl -translate-y-6 ">
        <div className="w-full flex items-center gap-6 ">
          <Button className=" bg-neutral-700">
            <IconCopy />
          </Button>
          <p className=" text-primary-foreground text-sm">
            https://app.dub.co/ashwa-creation
          </p>
        </div>
        <Button
          variant="secondary"
          className="[&_svg:not([class*='size-'])]:size-5 w-24"
        >
          QR <IconQrcode />
        </Button>
      </div>
    </div>
  );
}
