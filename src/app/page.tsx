import Container from "@/components/common/Container";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HeroSection from "@/components/landing/HeroSection";


export default function Home() {
  return (
    <Container className=" relative h-[3000px]">
      <HeroSection />
      <FeaturesSection/>

      <div className=" w-[1px] h-full absolute bg-gradient-to-b from-neutral-300/20 via-neutral-300/60 to-neutral-300/20 top-0 left-0"/>
        <div className=" w-[1px] h-full absolute bg-gradient-to-b from-neutral-300/20 via-neutral-300/60 to-neutral-300/20 top-0 right-0"/>
    </Container>
  );
}
