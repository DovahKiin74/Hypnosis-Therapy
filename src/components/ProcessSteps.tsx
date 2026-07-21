import { PlainButton } from './PlainButton';
import { 
  SearchIcon, 
  RefreshCwIcon, 
  RocketIcon
} from 'lucide-react';

const steps = [
  {
    icon: SearchIcon,
    title: 'Diagnose',
    description: 'Uncover the unconscious decision patterns keeping you stuck. Most decisions are made automatically—we surface what\'s actually driving yours.',
    stepNumber: '01',
    bottomText: 'Identify the constraint'
  },
  {
    icon: RefreshCwIcon,
    title: 'Rebuild',
    description: 'Replace faulty decision loops with a new system. Not theory—a practical framework you can apply to every major business decision.',
    stepNumber: '02',
    bottomText: 'Install the system'
  },
  {
    icon: RocketIcon,
    title: 'Execute',
    description: 'Apply your new decision system consistently. No more second-guessing—just clear, aligned action that matches your potential.',
    stepNumber: '03',
    bottomText: 'Consistent execution'
  }
];

export function ProcessSteps() {
  return (
    <div className="rounded-[24px] overflow-hidden">
      <section
        id="process"
        className="rounded-[24px] overflow-hidden px-5 py-14 sm:px-10 sm:py-16 lg:px-[50px] lg:py-20 bg-[#eee]"
        aria-labelledby="process-heading"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#000000]">
            One System. Three Phases.
          </p>
          <h2
            id="process-heading"
            className="font-display mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#001e61] sm:text-5xl"
          >
            Diagnose. Rebuild. Execute.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#4d6259] sm:text-base max-w-2xl mx-auto">
            This isn't a menu of separate programs. It's one integrated system 
            designed to fix how you make decisions—permanently.
          </p>
          <div className="mx-auto mt-9 max-w-2xl text-center">
            <PlainButton href="/contact">
              Start Your Decision Diagnosis
            </PlainButton>
          </div>
        </div>

        {/* Steps Grid - 3 columns */}
        <div className="mx-auto mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-[20px] bg-[#001e61] overflow-hidden flex flex-col border border-[#001e61]"
            >
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center px-6 py-12 flex-1 rounded-[16px] bg-[#eee] overflow-hidden">
                {/* Giant Number */}
                <span 
                  className="absolute -right-2 -top-2 font-display text-[148px] font-bold leading-none text-[#000]/10 select-none pointer-events-none"
                  style={{ opacity: 0.5 }}
                >
                  {step.stepNumber}
                </span>
                
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C5C5C5] text-[#001e61] relative z-10">
                  <step.icon size={24} />
                </div>
                
                {/* Title */}
                <h3 className="font-display mt-4 text-base font-semibold text-[#001e61] relative z-10">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="mt-2 text-sm leading-relaxed text-[#5a6b62] max-w-xs text-center relative z-10">
                  {step.description}
                </p>
              </div>

              {/* Footer */}
              <div className="relative z-10 px-6 py-3 text-center">
                <span className="text-xs font-medium uppercase tracking-[0.1em] text-white">
                  {step.bottomText}
                </span>
              </div>

              {/* Arrow connector between steps - hidden on mobile */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-[#d0dcd4]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}