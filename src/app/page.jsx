import HeroSection from "@/components/manual-ui/HeroSection";
import TimeCapsule from "@/components/manual-ui/TimeCapsule";
import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";
import PrizeSection from "@/components/manual-ui/PrizeSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-[100%] h-[100%]">
      <HeroSection />
      <div className="text-4xl md:text-8xl text-white bg-black tracking-widest w-full text-center items-center p-2 md:p-4">
        <SplitText
          text="TIME CAPSULE"
          className="border-black border-2"
          delay={50}
          duration={0.8}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </div>
      <TimeCapsule />
      <PrizeSection/>
    </div>
  );
}
