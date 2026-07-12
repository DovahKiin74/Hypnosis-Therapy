import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import { RippleButton } from './RippleButton';

const benefits = [
  'Stop second-guessing every major decision',
  'Break free from burnout and mental fatigue',
  'Speak with confidence in high-stakes moments',
  'Regain clarity when your business depends on it'
];

const painPoints = [
  'You have the strategy, but your mind keeps getting in the way.',
  'You\'re tired of carrying the weight of every decision alone.',
  'You know you\'re capable of more — but something holds you back.'
];

export function Rationale() {
  return (
    <section
      className="relative overflow-hidden rounded-[24px] lg:min-h-[570px] px-[16px] py-[16px]"
      aria-labelledby="rationale-heading"
    >
      <img
        src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85"
        alt="Business owner in deep thought"
        className="absolute inset-0 h-full w-full object-cover"
      />
      
      <div className="absolute inset-0 bg-[#14352c]/50" />
      
      <div className="relative max-w-2xl rounded-[20px] bg-[#fbfcf9]/95 p-7 shadow-xl backdrop-blur-sm sm:p-10 lg:p-12">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4e7b64]">
          Built for business leaders
        </p>
        
        <h2
          id="rationale-heading"
          className="font-display mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#17362f] sm:text-4xl lg:text-5xl"
        >
          Why SMB Owners Choose Hypnotherapy
        </h2>
        
        <p className="mt-5 text-sm leading-relaxed text-[#4d6259] sm:text-base">
          You've got the vision, the drive, and the plan. But the inner critic, the doubt, and the burnout?
          That's not a strategy problem — that's a mindset problem. And it's costing you more than you think.
        </p>

        {/* Pain Points */}
        <div className="mt-6 space-y-2 border-l-2 border-[#397366] pl-4">
          {painPoints.map((point) => (
            <p key={point} className="text-sm font-medium text-[#26483d] sm:text-base">
              {point}
            </p>
          ))}
        </div>
        
        <ul className="mt-7 space-y-4">
          {benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-start gap-3 text-sm font-medium text-[#26483d] sm:text-base"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#cbe0d0]">
                <CheckIcon size={13} strokeWidth={3} />
              </span>
              {benefit}
            </li>
          ))}
        </ul>

        <div className="mt-9">
          <RippleButton 
            href="#services"
            icon={<ArrowRightIcon size={16} />}
          >
            Explore Services
          </RippleButton>
        </div>
      </div>
    </section>
  );
}