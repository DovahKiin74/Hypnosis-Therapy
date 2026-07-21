import { ArrowRightIcon } from "lucide-react";
import { RippleButton } from "./RippleButton";

interface CircleOfExcellenceHeroProps {
  onOpenModal: () => void;
}
export function CircleOfExcellenceHero({ onOpenModal }: CircleOfExcellenceHeroProps) {
  return (
    <div className="rounded-[24px] overflow-hidden bg-[#eee]">
      <section aria-labelledby="circle-hero-heading" className="rounded-[24px] overflow-hidden">
        <div className="relative px-6 py-16 sm:px-8 sm:py-20 md:px-12 md:py-24 lg:px-[48px] lg:py-36">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/Circle-of-excellence.png"
              alt="Circle of Excellence background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          {/* Content - Centered */}
          <div className="relative z-10 mx-auto flex flex-col items-center text-center max-w-4xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/80">
              Discover Your Balance
            </p>
            
            <h1
              id="circle-hero-heading"
              className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#fff] sm:text-5xl lg:text-6xl"
            >
              The Circle of Excellence
            </h1>
            
            <p className="mt-6 text-base font-normal leading-relaxed text-white/90 sm:text-lg lg:text-xl max-w-2xl">
              Assess your life across 10 key areas and visualize your personal 
              wheel of excellence to identify where you're thriving and where 
              you need growth.
            </p>
            
            <div className="mt-8 flex flex-col items-center">
              <RippleButton 
                icon={<ArrowRightIcon size={16} />}
                onClick={onOpenModal}
              >
                Start Your Assessment
              </RippleButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}