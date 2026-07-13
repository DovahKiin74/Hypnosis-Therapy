import { ArrowRightIcon } from 'lucide-react';
import { RippleButton } from './RippleButton';

export function Reframe() {
  return (
    <section
      className="rounded-[24px] overflow-hidden px-5 sm:px-10 lg:px-[50px] py-32 bg-[#c4ffbb]"
      aria-labelledby="reframe-heading"
    >
      <div className="mx-auto max-w-3xl text-center">
        {/* Heading */}
        <h2
          id="reframe-heading"
          className="font-display mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#17362f] sm:text-5xl"
        >
          Every result comes from decisions,
          <br className='hidden md:flex'/>
          most of which are unconscious.
        </h2>

        {/* Body text */}
        <p className="mt-3 text-base leading-relaxed text-[#4d6259] sm:text-base max-w-2xl mx-auto">
          Your unconscious patterns are running the show. Until you see them, 
  you can't change them.
        </p>

        {/* CTA */}
        <div className="mt-8">
          <RippleButton 
            href="#diagnosis" 
            icon={<ArrowRightIcon size={16} />}
          >
            Start Your Decision Diagnosis
          </RippleButton>
          <p className="mt-3 text-xs text-[#5a6b62]">
            Takes 15–20 minutes. No pressure, just clarity.
          </p>
        </div>
      </div>
    </section>
  );
}