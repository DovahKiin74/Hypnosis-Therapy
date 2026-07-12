import { ArrowRightIcon } from 'lucide-react';
import { ProofBar } from './ProofBar';
import { RippleButton } from './RippleButton';

export function Hero() {
  return (
    <div className="rounded-[24px] bg-[#17362f] overflow-hidden">
      {/* Hero Section - Rounded ALL sides */}
      <section id="top" aria-labelledby="hero-heading" className="rounded-[24px] overflow-hidden">
        <div className="relative min-h-[710px] px-6 py-6 text-white sm:px-10 lg:min-h-[760px] lg:px-[50px] lg:py-8">
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1800&q=85"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          
          <div className="absolute inset-0 bg-[#102a23]/70" />

          <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center pt-24 text-center sm:pt-32">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#d7e9dc]">
              Hypnotherapy for business leaders
            </p>
            <h1
              id="hero-heading"
              className="font-display max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-8xl"
            >
              Stop Overthinking.
              <br />
              Start Leading.
            </h1>
          </div>

          <div className="relative z-10 mt-16 flex flex-col gap-8 lg:absolute lg:bottom-9 lg:left-[50px] lg:right-[50px] lg:mt-0 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-md">
              <p className="text-sm leading-relaxed text-white/88 sm:text-base">
                I help founders replace the inner noise with calm, clear
                decision-making—so the business you lead can finally match the
                vision you hold.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <RippleButton 
                  href="#newsletter" 
                  icon={<ArrowRightIcon size={16} />}
                >
                  Book a Discovery Call
                </RippleButton>
              </div>
            </div>

            <aside className="w-full max-w-[370px] rounded-[20px] border border-white/25 bg-white/15 p-5 shadow-2xl backdrop-blur-xl sm:p-6">
              <p className="text-[11px] font-bold tracking-[0.16em] text-[#d7e9dc]">
                TRUSTED BY
              </p>
              <div className="mt-3 flex items-center gap-4 border-b border-white/20 pb-4 text-[10px] font-bold tracking-tight text-white/80">
                <span>FOUNDER</span>
                <span>NORTHSTAR</span>
                <span>VERGE</span>
                <span>UPSHIFT</span>
              </div>
              <h2 className="font-display mt-4 text-xl font-semibold">
                Trusted by 399+ SMB Owners
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-white/75">
                From founders to CEOs — real results, real transformation.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* ProofBar - ONLY BOTTOM ROUNDED */}
      <div className="rounded-b-[24px] overflow-hidden">
        <ProofBar embedded />
      </div>
    </div>
  );
}