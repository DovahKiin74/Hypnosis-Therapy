import {
  BrainCircuitIcon,
  PresentationIcon,
  WindIcon,
} from 'lucide-react';
import { PlainButton } from './PlainButton';

const services = [
  {
    icon: BrainCircuitIcon,
    title: 'Business Performance',
    description:
      'Stop second-guessing every decision. Clear the mental noise that keeps you stuck in analysis paralysis. Finally execute with the speed and precision your business demands.',
    painPoints: [
      'Overthinking every major decision',
      'Feeling stuck despite having the right strategy',
      'Inconsistent performance under pressure'
    ],
    bgColor: 'bg-[#e8f4f0]',
    iconBg: 'bg-[#b8d9ce]',
    textColor: 'text-[#1a4d3e]',
    borderColor: 'border-[#b8d9ce]',
  },
  {
    icon: WindIcon,
    title: 'Anxiety & Stress Relief',
    description:
      'The weight of leadership is crushing your ability to think clearly. Learn to stay calm when everything is on fire. Protect your energy and make better decisions under pressure.',
    painPoints: [
      'Constant anxiety about business survival',
      'Burnout from carrying everything alone',
      'Unable to switch off even when you try'
    ],
    bgColor: 'bg-[#f0ece8]',
    iconBg: 'bg-[#d6cdc4]',
    textColor: 'text-[#5a3f2e]',
    borderColor: 'border-[#d6cdc4]',
  },
  {
    icon: PresentationIcon,
    title: 'Public Speaking Confidence',
    description:
      'Nerves ruin your ability to connect with your audience. Transform fear into magnetic presence. Speak with authority in boardrooms, pitches, and stages without your voice shaking.',
    painPoints: [
      'Sweating and shaking before every presentation',
      'Losing your train of thought in important meetings',
      'Avoiding speaking opportunities that could grow your business'
    ],
    bgColor: 'bg-[#e8edf4]',
    iconBg: 'bg-[#b8cde0]',
    textColor: 'text-[#1a3a5a]',
    borderColor: 'border-[#b8cde0]',
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="rounded-[24px] px-5 py-14 sm:px-10 sm:py-16 lg:px-[50px] lg:py-20"
      aria-labelledby="services-heading"
    >
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4e7b64]">
            What we solve
          </p>
          <h2
            id="services-heading"
            className="font-display mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#17362f] sm:text-5xl"
          >
            The real problems behind the pressure.
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-[#65766d]">
          These aren't surface-level issues. We go straight to the root.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, description, painPoints, bgColor, iconBg, textColor, borderColor }) => (
          <article
            key={title}
            className={`rounded-[20px] border ${borderColor} ${bgColor} p-6 sm:p-7`}
          >
            <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconBg} ${textColor}`}>
              <Icon size={22} />
            </span>
            <h3 className={`font-display mt-5 text-xl font-semibold tracking-[-0.025em] ${textColor}`}>
              {title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#4a5a52]">
              {description}
            </p>
            
            {/* Pain Points */}
            <div className="mt-4 space-y-1.5 border-t border-[#d4e0da] pt-4">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#4e7b64]">
                We solve:
              </p>
              {painPoints.map((point) => (
                <p key={point} className="text-sm text-[#4a5a52] flex items-start gap-2">
                  <span className="text-[#4e7b64] mt-0.5">•</span>
                  {point}
                </p>
              ))}
            </div>

            <div className="mt-5">
              <PlainButton 
                href="#services"
                className={`${textColor} hover:${textColor}`}
              >
                Learn More
              </PlainButton>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}