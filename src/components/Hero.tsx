import { ArrowRightIcon } from 'lucide-react';
import { ProofBar } from './ProofBar';
import { WhiteRippleButton } from './WhiteRippleButton';

export function Hero() {
  return (
    <div className="rounded-[24px] bg-[#17362f] overflow-hidden">
      <section id="top" aria-labelledby="hero-heading" className="rounded-[24px] overflow-hidden">
        <div className="relative min-h-[710px] px-6 py-6 text-white sm:px-10 lg:min-h-[760px] lg:px-[50px] lg:py-8">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1800&q=85"
            alt="Business leader facing a ceiling of constraints"
            className="absolute inset-0 h-full w-full object-cover"
          />
          
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#0f2922]/80" />

          <div className="relative z-10 mx-auto flex flex-col items-center pt-24 text-center sm:pt-32">
            {/* Eyebrow */}
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#d7e9dc]">
              For Business Owners Who Know They're Capable of More
            </p>
            
            {/* Main Headline */}
            <h1
              id="hero-heading"
              className="font-display text-4xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-7xl"
            >
              You Don't Have a Business Ceiling.
              <br />
              <span>You Have a Decision Constraint.</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              If your business feels stuck, inconsistent, or out of alignment, 
              it's not strategy. It's how you're making decisions.
            </p>

            {/* Primary CTA - Preserving your original RippleButton design */}
            <div className="mt-8">
              <WhiteRippleButton 
                href="#diagnosis" 
                icon={<ArrowRightIcon size={16} />}
              >
                Start Your Decision Diagnosis
              </WhiteRippleButton>
              <p className="mt-3 text-xs text-white/60 tracking-wide">
                Takes 15–20 minutes. No pressure, just clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ProofBar - Bottom Rounded */}
      <div className="rounded-b-[24px] overflow-hidden">
        <ProofBar embedded />
      </div>
    </div>
  );
}