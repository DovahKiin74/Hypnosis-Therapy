import { ArrowRightIcon } from 'lucide-react';
import { RippleButton } from './RippleButton';

export function Hero() {
  return (
    <div className="rounded-[24px] overflow-hidden bg-[#eee]">
      <section id="top" aria-labelledby="hero-heading" className="rounded-[24px] overflow-hidden">
        <div className="relative px-6 py-8 sm:px-8 sm:py-12 md:px-12 md:py-16 lg:px-[48px] lg:py-20">
          <div className="relative z-10 mx-auto flex flex-col items-start text-left lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12">
            
            {/* Left: Heading */}
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#4e7b64]">
                For Business Owners Who Know They're Capable of More
              </p>
              
              <h1
                id="hero-heading"
                className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#17362f] sm:text-5xl lg:text-6xl"
              >
                You Don't Have a Business Ceiling.
                You Have a Decision Constraint.
              </h1>
            </div>

            {/* Right: CTA and Description */}
            <div className="max-w-xl">
              <p className="text-base font-normal leading-relaxed text-[#000] sm:text-lg lg:text-xl">
                If your business feels stuck, inconsistent, or out of alignment, 
                it's not strategy. It's how you're making decisions.
              </p>
              
              <div className="mt-6 flex flex-col items-start">
                <RippleButton 
                  href="/contact" 
                  icon={<ArrowRightIcon size={16} />}
                >
                  Start Your Decision Diagnosis
                </RippleButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Row Image - rounded corners */}
      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-[48px] pb-6 sm:pb-8 md:pb-12 lg:pb-[48px]">
        <div className="w-full overflow-hidden rounded-[20px] md:rounded-[24px]">
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1800&q=85"
            alt="Business leader facing a ceiling of constraints"
            className="w-full h-auto object-cover max-h-[500px] md:max-h-[600px]"
          />
        </div>
      </div>
    </div>
  );
}