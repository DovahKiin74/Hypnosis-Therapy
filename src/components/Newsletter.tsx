import React, { useState } from 'react';
import { CheckCircle2Icon, MailIcon, ArrowRightIcon } from 'lucide-react';
import { RippleButton } from './RippleButton';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  }

  return (
    <section
      id="newsletter"
      className="rounded-[24px] px-5 py-14 sm:px-10 sm:py-16 lg:px-[50px] lg:py-20 relative overflow-hidden"
      aria-labelledby="newsletter-heading"
      style={{
        backgroundImage: `radial-gradient(circle, #4e7b64 1.5px, transparent 1.5px)`,
        backgroundSize: '24px 24px',
        backgroundColor: '#eef3f0',
      }}
    >
      {/* Overlay to soften the dots */}
      <div className="absolute inset-0 bg-[#eef3f0]/60"></div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#4e7b64]/10 text-[#4e7b64]">
          <MailIcon size={22} />
        </span>
        <h2
          id="newsletter-heading"
          className="font-display mt-5 text-3xl font-semibold tracking-[-0.045em] text-[#17362f] sm:text-4xl lg:text-5xl"
        >
          Stop Overthinking. Start Leading.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#496156] sm:text-base">
          One short email per week. No fluff. Just actionable insights to help
          you think clearer, lead better, and build a business that doesn't run
          you.
        </p>

        {submitted ? (
          <div
            className="mx-auto mt-8 flex max-w-lg items-center justify-center gap-3 rounded-2xl bg-white px-5 py-4 text-sm font-medium text-[#275b43] shadow-sm"
            role="status"
          >
            <CheckCircle2Icon size={20} />
            You're on the list. Your first note is on its way.
          </div>
        ) : (
          <form
            className="mx-auto mt-8 max-w-xl"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="flex items-center gap-2 rounded-full bg-white p-1 shadow-sm focus-within:ring-2 focus-within:ring-[#4e7b64] focus-within:ring-offset-2">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border-0 bg-transparent px-5 py-3 text-sm text-[#17362f] placeholder:text-[#89978f] focus:outline-none focus:ring-0"
                aria-describedby={
                  error ? 'newsletter-error' : 'newsletter-help'
                }
              />
              <RippleButton
                className="shrink-0 rounded-full px-5 py-3 text-sm"
                icon={<ArrowRightIcon size={16} />}
              >
                Subscribe
              </RippleButton>
            </div>
            {error && (
              <p
                id="newsletter-error"
                className="mt-3 text-left text-xs font-medium text-[#a33e35]"
                role="alert"
              >
                {error}
              </p>
            )}
            <p id="newsletter-help" className="mt-3 text-xs text-[#587164]">
              No spam. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}