import { ArrowRightIcon, SearchIcon, RefreshCwIcon, RocketIcon } from 'lucide-react';
import { Footer } from '../components/Footer';
import { RippleButton } from '../components/RippleButton';
import { Rationale } from '../components/Rationale';
import { Newsletter } from '../components/Newsletter';
import { Testimonials } from '../components/Testimonials';

const processes = [
  {
    icon: SearchIcon,
    title: 'Diagnose',
    description: 'Uncover the unconscious decision patterns keeping you stuck. Most decisions are made automatically—we surface what\'s actually driving yours.',
    detail: 'We start by mapping your current decision patterns. Through targeted questioning and assessment, we identify the specific loops, triggers, and blind spots that are holding you back. Most people are surprised to discover how much of their decision-making happens below conscious awareness.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Diagnose decision patterns'
  },
  {
    icon: RefreshCwIcon,
    title: 'Rebuild',
    description: 'Replace faulty decision loops with a new system. Not theory—a practical framework you can apply to every major business decision.',
    detail: 'Once we\'ve identified the patterns, we systematically rebuild your decision framework. You\'ll learn practical techniques to interrupt old habits and install new, more effective decision protocols. This isn\'t about theory—it\'s about creating real, lasting change.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Rebuild decision system'
  },
  {
    icon: RocketIcon,
    title: 'Execute',
    description: 'Apply your new decision system consistently. No more second-guessing—just clear, aligned action that matches your potential.',
    detail: 'With your new system in place, you\'ll learn to apply it consistently across every area of your business. No more second-guessing. No more hesitation. Just clear, confident decisions that move you toward your goals with momentum and clarity.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Execute with confidence'
  }
];

export function HowItWorksPage() {
  return (
    <main className="w-full bg-[#f6f7f5] text-[#0951f6] px-[16px] py-[16px]">
      <div className="mx-auto flex flex-col gap-5 sm:gap-7 max-w-[1600px]">

        {/* Hero Section - Image Left, Content Right */}
        <div className="rounded-[24px] overflow-hidden bg-[#eee]">
          <section className="rounded-[24px] overflow-hidden">
            <div className="relative p-6 sm:p-8 md:p-12 lg:p-[48px]">
              <div className="relative z-10 mx-auto flex flex-col lg:flex-row lg:gap-12">
                
                {/* Left: Image */}
                <div className="flex-1 mb-8 lg:mb-0">
                  <div className="w-full overflow-hidden rounded-[20px] md:rounded-[24px]">
                    <img
                      src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80"
                      alt="Business leader"
                      className="w-full h-auto object-cover max-h-[400px] md:max-h-[500px]"
                    />
                  </div>
                </div>

                {/* Right: Content */}
                <div className="flex-1 flex flex-col justify-between min-h-[320px]">
                  {/* Heading - Top */}
                  <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#000000]">
                      How It Works
                    </p>
                    
                    <h1 className="font-display text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#0951f6] sm:text-4xl lg:text-5xl">
                      One System.
                      <br />
                      <span className="text-[#000000]">Three Phases.</span>
                    </h1>
                  </div>

                  {/* Description + CTA - Bottom */}
                  <div>
                    <p className="text-base leading-relaxed text-[#4d6259] sm:text-lg">
                      Diagnose. Rebuild. Execute. A single, integrated system 
                      designed to fix how you make decisions—permanently.
                    </p>
                    
                    <div className="mt-6">
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
            </div>
          </section>
        </div>

        {/* Process Section - Z-Pattern (single process per row) */}
        <section className="rounded-[24px] overflow-hidden px-5 py-16 sm:px-10 lg:px-[50px]">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#000000]">
                One System. Three Phases.
              </p>
              <h2 className="font-display mt-2 text-3xl font-semibold text-[#001e61] sm:text-4xl">
                Diagnose. Rebuild. Execute.
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-base leading-relaxed text-[#4d6259]">
                This isn't a menu of separate programs. It's one integrated system 
                designed to fix how you make decisions—permanently.
              </p>
            </div>

            {/* Z-Pattern Processes */}
            <div className="space-y-32">
              {processes.map((process, index) => (
                <div 
                  key={process.title}
                  className={`flex flex-col gap-8 items-center ${
                    index % 2 === 0 
                      ? 'lg:flex-row' 
                      : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Image */}
                  <div className="flex-1 w-full">
                    <div className="overflow-hidden rounded-[20px]">
                      <img
                        src={process.image}
                        alt={process.imageAlt}
                        className="w-full h-64 md:h-80 object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef3f0] text-[#000000]">
                          <process.icon size={20} />
                        </div>
                        <h3 className="font-display text-4xl font-semibold text-[#001e61]">
                          {process.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-base font-medium leading-relaxed text-[#000]">
                      {process.description}
                    </p>
                    
                    <p className="mt-3 text-sm leading-relaxed text-[#4d6259]">
                      {process.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="mt-12 text-center">
              <div className="mt-4">
                <RippleButton 
                  href="/contact" 
                  icon={<ArrowRightIcon size={16} />}
                >
                  Start Your Decision Diagnosis
                </RippleButton>
              </div>
            </div>
          </div>
        </section>
        <Rationale />
        <Testimonials />
        <Newsletter />

        <Footer />
      </div>
    </main>
  );
}