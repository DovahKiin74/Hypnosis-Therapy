import { ArrowRightIcon, XIcon } from 'lucide-react';
import { RippleButton } from './RippleButton';

const problems = [
  'Business is good, but you\'ve hit a ceiling you can\'t break through',
  'You know exactly what to do, but you don\'t do it consistently',
  'You\'ve built real success, but it doesn\'t feel aligned anymore'
];

export function Rationale() {
  return (
    <section
      className="relative overflow-hidden rounded-[24px] lg:min-h-[570px] px-[16px] py-[16px]"
      aria-labelledby="problem-heading"
    >
      <img
        src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85"
        alt="Business owner facing a ceiling"
        className="absolute inset-0 h-full w-full object-cover"
      />
      
      <div className="absolute inset-0 bg-[#14352c]/55" />
      
      <div className="relative max-w-2xl rounded-[20px] bg-[#fbfcf9]/95 p-7 shadow-xl backdrop-blur-sm sm:p-10 lg:p-12">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4e7b64]">
          The Real Problem
        </p>
        
        <h2
          id="problem-heading"
          className="font-display mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#17362f] sm:text-4xl lg:text-5xl"
        >
          You're Not Broken.
          <br />
          <span className="text-[#397366]">Your Decision Patterns Are.</span>
        </h2>
        
        <p className="mt-5 text-sm leading-relaxed text-[#4d6259] sm:text-base">
          Sound familiar? You've done the work. You've built the business. 
          But something's off. And it's not your strategy.
        </p>

        {/* Problem List */}
        <div className="mt-6 space-y-3">
          {problems.map((problem) => (
            <div key={problem} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e8d4d4]">
                <XIcon size={13} strokeWidth={3} className="text-[#a64444]" />
              </span>
              <p className="text-sm font-medium text-[#26483d] sm:text-base">
                {problem}
              </p>
            </div>
          ))}
        </div>

        {/* Conclusion - The reframe */}
        <div className="mt-6 rounded-[12px] bg-[#17362f]/5 p-4 border-2 border-[#397366]">
          <p className="text-sm font-semibold text-[#17362f] sm:text-base">
            Conclusion: These are <span className="text-[#397366]">decision pattern problems</span>, 
            not strategy problems.
          </p>
          <p className="mt-1 text-sm text-[#5a6b62]">
            Your strategy is fine. Your decision system is broken.
          </p>
        </div>

        <div className="mt-8">
          <RippleButton 
            href="#diagnosis"
            icon={<ArrowRightIcon size={16} />}
          >
            Start Your Decision Diagnosis
          </RippleButton>
        </div>
      </div>
    </section>
  );
}