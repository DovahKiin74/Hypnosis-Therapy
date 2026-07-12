import { PlainButton } from './PlainButton';
import { 
  PhoneIcon, 
  MessageSquareIcon, 
  SparklesIcon,
  CheckCircleIcon
} from 'lucide-react';

const steps = [
  {
    icon: PhoneIcon,
    title: 'Discovery Call',
    description: 'A no-pressure conversation to understand your needs and see if we\'re a good fit.',
    stepNumber: '01',
    bottomText: '15-min free call'
  },
  {
    icon: MessageSquareIcon,
    title: 'Deep Assessment',
    description: 'Identify the root patterns holding you back and map out exactly what needs to shift.',
    stepNumber: '02',
    bottomText: 'Pattern identification'
  },
  {
    icon: SparklesIcon,
    title: 'Session Plan',
    description: 'A tailored approach designed specifically for your unique challenges and goals.',
    stepNumber: '03',
    bottomText: 'Customized strategy'
  },
  {
    icon: CheckCircleIcon,
    title: 'Ongoing Support',
    description: 'Continuous refinement and support until you see real, lasting change.',
    stepNumber: '04',
    bottomText: 'Results & refinement'
  }
];

export function ProcessSteps() {
  return (
    <div className="rounded-[24px] overflow-hidden">
      {/* Main Process Section */}
      <section
        id="process"
        className="rounded-[24px] overflow-hidden px-5 py-14 sm:px-10 sm:py-16 lg:px-[50px] lg:py-20"
        aria-labelledby="process-heading"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4e7b64]">
            How we work
          </p>
          <h2
            id="process-heading"
            className="font-display mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#17362f] sm:text-5xl"
          >
            Your Path to Clarity
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#4d6259] sm:text-base max-w-2xl mx-auto">
            A simple, proven process designed to get you from stuck to unstoppable.
          </p>
          <div className="mx-auto mt-9 max-w-2xl text-center">
            <PlainButton href="#contact">
              Start Your Journey
            </PlainButton>
          </div>
        </div>

        {/* Steps Grid - 4 columns with giant numbers */}
        <div className="mx-auto mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            // PARENT DIV - holds both content and footer
            <div
              key={step.title}
              className="relative rounded-[20px] bg-[#397366] overflow-hidden flex flex-col border border-[#397366]"
            >
              {/* CONTENT DIV - with background and giant number inside */}
              <div className="relative z-10 flex flex-col items-center px-6 py-12 flex-1 rounded-[16px] bg-[#ECEFEB] overflow-hidden">
                {/* Giant Number - INSIDE the content div */}
                <span 
                  className="absolute -right-2 -top-2 font-display text-[148px] font-bold leading-none text-[#000]/10 select-none pointer-events-none"
                  style={{ opacity: 0.5 }}
                >
                  {step.stepNumber}
                </span>
                
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C5C5C5] text-[#17362F] relative z-10">
                  <step.icon size={24} />
                </div>
                
                {/* Title */}
                <h3 className="font-display mt-4 text-base font-semibold text-[#17362f] relative z-10">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="mt-2 text-sm leading-relaxed text-[#5a6b62] max-w-xs text-center relative z-10">
                  {step.description}
                </p>
              </div>

              {/* FOOTER DIV - only the bottom span */}
              <div className="relative z-10 bg-[#397366] px-6 py-3 text-center">
                <span className="text-xs font-medium uppercase tracking-[0.1em] text-white">
                  {step.bottomText}
                </span>
              </div>

              {/* Arrow connector between steps - hidden on mobile */}
              {steps.indexOf(step) < steps.length - 1 && (
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