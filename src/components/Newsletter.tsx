import React, { useState } from 'react';
import { CheckCircle2Icon, MailIcon, ArrowRightIcon } from 'lucide-react';

const API_URL = 'https://purposedrivenhero.com/';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {    
    event.preventDefault();    
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setLoading(true);

    try {
      const url = `${API_URL}/api.php?path=subscribers`;
      
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });      
      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setEmail(''); // Clear the input
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Unable to sign up. Please try again later.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="newsletter"
      className="rounded-[24px] px-5 py-14 sm:px-10 sm:py-16 lg:px-[50px] lg:py-20 relative overflow-hidden"
      aria-labelledby="newsletter-heading"
      style={{
        backgroundImage: `radial-gradient(circle, #000 1.5px, transparent 1.5px)`,
        backgroundSize: '24px 24px',
        backgroundColor: '#eef3f0',
      }}
    >
      <div className="absolute inset-0 bg-[#eef3f0]/60"></div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#000]/10 text-[#000000]">
          <MailIcon size={22} />
        </span>
        <h2
          id="newsletter-heading"
          className="font-display mt-5 text-3xl font-semibold tracking-[-0.045em] text-[#001e61] sm:text-4xl lg:text-5xl"
        >
          Let's Find Your Constraint.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#496156] sm:text-base">
          One short email per week. No fluff. Just actionable insights to help
          you think clearer, lead better, and build a business that doesn't run
          you.
        </p>

        <form
          className="mx-auto mt-8 max-w-xl"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="flex items-center gap-2 rounded-full bg-white p-1 shadow-sm focus-within:ring-2 focus-within:ring-[#000] focus-within:ring-offset-2">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full border-0 bg-transparent px-5 py-3 text-sm text-[#0951f6] placeholder:text-[#89978f] focus:outline-none focus:ring-0"
              aria-describedby={
                error ? 'newsletter-error' : 'newsletter-help'
              }
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-full bg-[#0951f6] px-5 py-3 text-sm font-bold text-white transition-all hover:bg-black focus:outline-none focus:ring-2 focus:ring-[#000] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Subscribing...' : 'Subscribe'}
              <ArrowRightIcon size={16} />
            </button>
          </div>

          {/* Success Message - Below the input, doesn't replace the form */}
          {submitted && (
            <div
              className="mt-4 flex items-center justify-center gap-3 rounded-2xl bg-emerald-50 px-5 py-3 text-sm font-medium text-emerald-700 border border-emerald-200"
              role="status"
            >
              <CheckCircle2Icon size={18} />
              You're on the list. Your first note is on its way.
            </div>
          )}

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
      </div>
    </section>
  );
}