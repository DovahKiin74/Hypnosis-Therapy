import { ArrowRightIcon, CheckIcon, SparklesIcon, BrainCircuitIcon, UsersIcon, TargetIcon, AwardIcon, BookOpenIcon } from 'lucide-react';
import { RippleButton } from '../components/RippleButton';
import { Footer } from '../components/Footer';
import { Testimonials } from '../components/Testimonials';
import { Newsletter } from '../components/Newsletter';
import { ProcessSteps } from '../components/ProcessSteps';
import { Rationale } from '../components/Rationale';

const differentiators = [
  {
    icon: BrainCircuitIcon,
    title: '3 Disciplines, 1 Approach',
    description: 'NLP + Hypnotherapy + Business Coaching — integrated as one system that works at the subconscious level.'
  },
  {
    icon: SparklesIcon,
    title: '29+ Years of Real Results',
    description: 'Since 1997, I\'ve helped 399+ business owners break through mental barriers and build businesses they love.'
  },
  {
    icon: TargetIcon,
    title: 'Built for SMB Owners',
    description: 'I work with founders, CEOs, and business owners who are ready to get out of their own way.'
  },
  {
    icon: UsersIcon,
    title: 'Real Change, Real Fast',
    description: 'Results in weeks, not months. No years of therapy or endless sessions.'
  },
  {
    icon: BookOpenIcon,
    title: 'Author & Speaker',
    description: 'Author of "Designing The Ultimate You" and international speaker on mindset transformation.'
  },
  {
    icon: AwardIcon,
    title: 'Founder, NY Institute of Hypnosis',
    description: 'Training and certifying the next generation of hypnotherapists and NLP practitioners.'
  }
];

export function AboutPage() {
  return (
    <main className="w-full bg-[#f6f7f5] text-[#17362f] px-[16px] py-[16px]">
      <div className="mx-auto flex flex-col gap-5 sm:gap-7 max-w-[1600px]">
        
        {/* Hero Section - Image Right, Content Left */}
        <section className="overflow-hidden rounded-[24px] bg-[#ECEFEB] px-[32px] py-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
            {/* Left - Content */}
            <div className="lg:w-1/2">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4e7b64]">
                About Mark Siegel
              </p>
              <h1 className="font-display mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#17362f] sm:text-5xl lg:text-6xl">
                Your Personal Mind Trainer
              </h1>
              <p className="mt-5 text-base leading-relaxed text-[#4d6259] sm:text-lg">
                With over <span className="font-bold text-[#17362f]">29 years</span> of experience as a
                Professional Hypnotherapist, Master Practitioner, and Trainer of
                NLP, I've helped <span className="font-bold text-[#17362f]">399+</span> business owners
                break through mental barriers and build businesses they truly love.
              </p>
              
              {/* Stats */}
              <div className="mt-6 grid grid-cols-3 gap-4 border-t border-b border-[#e8edea] py-5">
                <div>
                  <p className="font-display text-2xl font-bold text-[#17362f] sm:text-3xl">
                    399+
                  </p>
                  <p className="text-xs text-[#718078] sm:text-sm">Clients Supported</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-[#17362f] sm:text-3xl">
                    29+
                  </p>
                  <p className="text-xs text-[#718078] sm:text-sm">Years Experience</p>
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-[#17362f] sm:text-3xl">
                    87%
                  </p>
                  <p className="text-xs text-[#718078] sm:text-sm">Report Change</p>
                </div>
              </div>

              {/* Key Points */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#cbe0d0]">
                    <CheckIcon size={13} strokeWidth={3} />
                  </span>
                  <p className="text-sm text-[#4d6259]">
                    <span className="font-medium text-[#17362f]">NLP Master Practitioner</span> — Certified Trainer
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#cbe0d0]">
                    <CheckIcon size={13} strokeWidth={3} />
                  </span>
                  <p className="text-sm text-[#4d6259]">
                    <span className="font-medium text-[#17362f]">Clinical Hypnotherapist</span> — 29+ Years
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#cbe0d0]">
                    <CheckIcon size={13} strokeWidth={3} />
                  </span>
                  <p className="text-sm text-[#4d6259]">
                    <span className="font-medium text-[#17362f]">Business Mindset Coach</span> — SMB Specialist
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <RippleButton 
                  href="/contact" 
                  icon={<ArrowRightIcon size={16} />}
                >
                  Book a Discovery Call
                </RippleButton>
              </div>
            </div>

            {/* Right - Image */}
            <div className="lg:w-1/2">
              <div className="relative rounded-[20px] overflow-hidden bg-[#eef3f0]">
                <img
                  src="/mark.jpg"
                  alt="Mark Siegel - Personal Mind Trainer"
                  className="h-full w-full object-cover"
                  style={{ maxHeight: '550px', minHeight: '400px' }}
                />
                <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-[#4e7b64]/10"></div>
                <div className="absolute -top-4 -left-4 h-16 w-16 rounded-full bg-[#4e7b64]/10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Me Different Section - Matching Process Steps Style */}
        <div className="rounded-[24px] overflow-hidden">
          <section className="rounded-[24px] overflow-hidden px-5 py-14 sm:px-10 sm:py-16 lg:px-[50px] lg:py-20">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4e7b64]">
                What Makes Me Different
              </p>
              <h2 className="font-display mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#17362f] sm:text-4xl lg:text-5xl">
                I Don't Just Talk — I Transform
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#4d6259] sm:text-base max-w-2xl mx-auto">
                Most coaches give you strategies. I rewire how you think at the deepest level.
                Here's what sets me apart from the rest.
              </p>
            </div>

            {/* Grid - 3 columns with Process Steps styling */}
            <div className="mx-auto mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="relative rounded-[20px] overflow-hidden flex flex-col border border-[#397366]"
                >
                  {/* Content Div */}
                  <div className="relative z-10 flex flex-col items-center px-6 py-12 flex-1 rounded-[16px] overflow-hidden">
                    {/* Icon */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C5C5C5] text-[#17362F] relative z-10">
                      <item.icon size={24} />
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-display mt-4 text-base font-semibold text-[#17362f] relative z-10">
                      {item.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="mt-2 text-sm leading-relaxed text-[#5a6b62] max-w-xs text-center relative z-10">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mx-auto mt-10 max-w-3xl text-center">
              <p className="text-sm text-[#4d6259]">
                Ready to experience the difference?
              </p>
              <div className="mt-4">
                <RippleButton 
                  href="/contact" 
                  icon={<ArrowRightIcon size={16} />}
                >
                  Start Your Transformation
                </RippleButton>
              </div>
            </div>
          </section>
        </div>

        <Testimonials />
        <ProcessSteps />
        <Rationale />
        <Newsletter />
        <Footer />
      </div>
    </main>
  );
}