import { StarIcon } from 'lucide-react';
import { ProofBar } from './ProofBar';

export function Rationale() {
  return (
    <div className="rounded-[24px] overflow-hidden bg-[#17362f]">
      <section
        className="relative px-6 py-12 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-[48px] lg:py-24"
        aria-labelledby="problem-heading"
      >
        <div className="relative z-10 mx-auto flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          
          {/* LEFT: Heading + Description */}
          <div className="flex-1 max-w-4xl">
            <h2
              id="problem-heading"
              className="font-display text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl"
            >
              You've built success, but something feels off — it's not strategy, it's your decision patterns holding you back.
            </h2>
            
            <p className="mt-8 text-base leading-relaxed text-white/80">
              You've put in the work, built the business, and achieved real results. But despite the success, something still doesn't feel right. You're second-guessing yourself more than you should. You know what to do, but you don't always follow through. And the alignment you expected to feel by now just isn't there. The truth is, your strategy isn't the problem — the way you're making decisions is. And until that changes, nothing else will.
            </p>
          </div>
          {/* RIGHT: 5 Golden Stars */}
          <div className="flex-shrink-0 flex flex-col items-center lg:items-end">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon 
                  key={i} 
                  size={32} 
                  className={`${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'fill-yellow-400/30 text-yellow-400/30'}`}
                />
              ))}
            </div>
            <p className="mt-2 text-sm font-medium text-white/80">
              Rated 4.7 • 200+ Reviews
            </p>
            <p className="text-xs text-white/50">
              Trusted by business owners like you
            </p>
          </div>
        </div>
      </section>

      {/* Full ProofBar */}
      <ProofBar embedded />
    </div>
  );
}