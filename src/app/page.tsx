import Container from "@/components/common/Container";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HeroSection from "@/components/landing/HeroSection";
import Link from "next/link";


export default function Home() {
  return (
    <Container className=" relative max-sm:px-4 ">
      <HeroSection />
      <FeaturesSection/>

      <div className="pb-6 mt-12 max-sm:mt-10 max-sm:pb-4 flex justify-center">
        <p className=" text-sm max-sm:text-xs">Product by <Link href="https://lokesh-singh.vercel.app/" className=" font-medium underline">Lokesh Singh</Link></p>
      </div>

      <div className=" w-[1px] h-full absolute bg-gradient-to-b from-neutral-300/20 via-neutral-300/60 to-neutral-300/20 top-0 left-0 max-sm:left-2"/>
        <div className=" w-[1px] h-full absolute bg-gradient-to-b from-neutral-300/20 via-neutral-300/60 to-neutral-300/20 top-0 right-0 max-sm:right-2"/>
    </Container>
  );
}
