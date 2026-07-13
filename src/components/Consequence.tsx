import { ArrowRightIcon, XIcon, CheckIcon } from 'lucide-react';
import { RippleButton } from './RippleButton';

export function Consequence() {
  return (
    <section className="rounded-[24px] overflow-hidden bg-[#f6f7f5] px-5 py-16 sm:px-10 lg:px-[50px]">
      <div className="mx-auto max-w-5xl">
        {/* Section Label */}
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-[#4e7b64]">
          The Cost of Inaction
        </p>

        {/* Heading */}
        <h2 className="font-display mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#17362f] text-center sm:text-5xl mx-auto">
          What's at stake?
        </h2>

        {/* Two Column Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {/* Without Column */}
          <div className="rounded-[16px] bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f5e6e6]">
                <XIcon size={16} className="text-[#a64444]" />
              </span>
              <h3 className="text-lg font-semibold text-[#17362f]">Without fixing this</h3>
            </div>
            <ul className="mt-4 space-y-2.5">
              <li className="flex items-center gap-3 text-sm leading-relaxed text-[#4d6259] sm:text-base">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#a64444]" />
                Stuck revenue that won't budge
              </li>
              <li className="flex items-center gap-3 text-sm leading-relaxed text-[#4d6259] sm:text-base">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#a64444]" />
                Second-guessing every major decision
              </li>
              <li className="flex items-center gap-3 text-sm leading-relaxed text-[#4d6259] sm:text-base">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#a64444]" />
                More effort, same disappointing results
              </li>
              <li className="flex items-center gap-3 text-sm leading-relaxed text-[#4d6259] sm:text-base">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#a64444]" />
                Feeling stuck while others pass you by
              </li>
              <li className="flex items-center gap-3 text-sm leading-relaxed text-[#4d6259] sm:text-base">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#a64444]" />
                Strategy that works on paper but fails in reality
              </li>
              <li className="flex items-center gap-3 text-sm leading-relaxed text-[#4d6259] sm:text-base">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#a64444]" />
                Waking up at 3 AM replaying decisions
              </li>
              <li className="flex items-center gap-3 text-sm leading-relaxed text-[#4d6259] sm:text-base">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#a64444]" />
                Your business running you, not the other way around
              </li>
              <li className="flex items-center gap-3 text-sm leading-relaxed text-[#4d6259] sm:text-base">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#a64444]" />
                Burnout disguised as "just how it is"
              </li>
              <li className="flex items-center gap-3 text-sm leading-relaxed text-[#4d6259] sm:text-base">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#a64444]" />
                Watching opportunities slip through your fingers
              </li>
              <li className="flex items-center gap-3 text-sm leading-relaxed text-[#4d6259] sm:text-base">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#a64444]" />
                Knowing you're capable of more — but staying where you are
              </li>
            </ul>
          </div>

          {/* With Column */}
          <div className="rounded-[16px] bg-[#17362f] p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#cbe0d0]">
                <CheckIcon size={16} className="text-[#17362f]" />
              </span>
              <h3 className="text-lg font-semibold text-white">With fixing this</h3>
            </div>
            <ul className="mt-4 space-y-2.5">
              <li className="flex items-center gap-3 text-sm leading-relaxed text-white/85 sm:text-base">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#b8d9c4]" />
                Clear, confident decisions every time
              </li>
              <li className="flex items-center gap-3 text-sm leading-relaxed text-white/85 sm:text-base">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#b8d9c4]" />
                Consistent execution without second-guessing
              </li>
              <li className="flex items-center gap-3 text-sm leading-relaxed text-white/85 sm:text-base">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#b8d9c4]" />
                Your business finally matching your potential
              </li>
              <li className="flex items-center gap-3 text-sm leading-relaxed text-white/85 sm:text-base">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#b8d9c4]" />
                Revenue growth without exhausting yourself
              </li>
              <li className="flex items-center gap-3 text-sm leading-relaxed text-white/85 sm:text-base">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#b8d9c4]" />
                Strategy that actually turns into action
              </li>
              <li className="flex items-center gap-3 text-sm leading-relaxed text-white/85 sm:text-base">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#b8d9c4]" />
                Peace of mind and quality sleep
              </li>
              <li className="flex items-center gap-3 text-sm leading-relaxed text-white/85 sm:text-base">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#b8d9c4]" />
                You running your business with authority
              </li>
              <li className="flex items-center gap-3 text-sm leading-relaxed text-white/85 sm:text-base">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#b8d9c4]" />
                Energy and momentum instead of burnout
              </li>
              <li className="flex items-center gap-3 text-sm leading-relaxed text-white/85 sm:text-base">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#b8d9c4]" />
                Opportunities you actually seize and execute
              </li>
              <li className="flex items-center gap-3 text-sm leading-relaxed text-white/85 sm:text-base">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#b8d9c4]" />
                Finally operating at your true level
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
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