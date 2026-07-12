import React, { useState } from 'react';
import { CheckCircle2Icon, ChevronDownIcon, InstagramIcon, LinkedinIcon, MailIcon } from 'lucide-react';
const questions = [
{
  question: 'What does a hypnotherapy session actually feel like?',
  answer:
  'You remain aware and in control throughout. Most clients describe it as a deeply focused, calm state—similar to being absorbed in a book or a great conversation.'
},
{
  question: 'Is this only for a specific kind of challenge?',
  answer:
  'No. Sessions are tailored to your particular pattern, whether that is chronic overthinking, performance anxiety, stress, confidence, or decision fatigue.'
},
{
  question: 'How many sessions will I need?',
  answer:
  'That depends on your goal, but this work is designed to be focused. We will discuss a clear recommendation after your first conversation.'
}];

export function FaqSection() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  return (
    <>
      <section
        className="rounded-[24px] bg-[#e5eee7] px-5 py-14 sm:px-10 sm:py-16 lg:px-[50px] lg:py-20"
        aria-labelledby="faq-heading">
        
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4e7b64]">
            The details
          </p>
          <h2
            id="faq-heading"
            className="font-display mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
            
            Quick Questions, Straight Answers
          </h2>
        </div>
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-[#c9d8cc] border-y border-[#c9d8cc]">
          {questions.map((item, index) => {
            const isOpen = openQuestion === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-5 py-5 text-left text-sm font-bold text-[#17362f] sm:text-base"
                  onClick={() => setOpenQuestion(isOpen ? null : index)}
                  aria-expanded={isOpen}>
                  
                  {item.question}
                  <ChevronDownIcon
                    size={18}
                    className={`shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  
                </button>
                {isOpen &&
                <p className="max-w-2xl pb-5 text-sm leading-relaxed text-[#53675d]">
                    {item.answer}
                  </p>
                }
              </div>);

          })}
        </div>
        <div className="mt-7 text-center">
          <a
            href="#newsletter"
            className="text-sm font-bold text-[#17362f] underline decoration-[#7fa58a] underline-offset-4 hover:text-[#4e7b64]">
            
            See All FAQs →
          </a>
        </div>
      </section>
    </>);

}
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
    <>
      <section
        id="newsletter"
        className="rounded-[24px] bg-[#d4e7d8] px-5 py-14 sm:px-10 sm:py-16 lg:px-[50px] lg:py-20"
        aria-labelledby="newsletter-heading">
        
        <div className="mx-auto max-w-3xl text-center">
          <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-[#275b43]">
            <MailIcon size={20} />
          </span>
          <h2
            id="newsletter-heading"
            className="font-display mt-5 text-3xl font-semibold tracking-[-0.045em] text-[#17362f] sm:text-5xl">
            
            Join 399+ SMB Owners Who Start Their Week with Clarity
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#496156] sm:text-base">
            A short weekly note on clear thinking, confident leadership, and
            building a business without losing yourself in it.
          </p>

          {submitted ?
          <div
            className="mx-auto mt-8 flex max-w-lg items-center justify-center gap-3 rounded-2xl bg-white px-5 py-4 text-sm font-medium text-[#275b43]"
            role="status">
            
              <CheckCircle2Icon size={20} /> You’re on the list. Your first note
              is on its way.
            </div> :

          <form
            className="mx-auto mt-8 max-w-xl"
            onSubmit={handleSubmit}
            noValidate>
            
              <div className="flex flex-col gap-3 sm:flex-row">
                <label className="sr-only" htmlFor="newsletter-email">
                  Email address
                </label>
                <input
                id="newsletter-email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-1 rounded-full border border-transparent bg-white px-5 py-3.5 text-sm text-[#17362f] placeholder:text-[#89978f] shadow-sm focus:border-[#6e9f7c] focus:outline-none"
                aria-describedby={
                error ? 'newsletter-error' : 'newsletter-help'
                } />
              
                <button
                type="submit"
                className="rounded-full bg-[#17362f] px-6 py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5">
                
                  Subscribe
                </button>
              </div>
              {error &&
            <p
              id="newsletter-error"
              className="mt-3 text-left text-xs font-medium text-[#a33e35]"
              role="alert">
              
                  {error}
                </p>
            }
              <p id="newsletter-help" className="mt-3 text-xs text-[#587164]">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          }
        </div>
      </section>
    </>);

}
export function Footer() {
  return (
    <>
      <footer
        className="rounded-[24px] bg-[#17362f] px-6 py-10 text-white sm:px-10 lg:px-[50px]"
        aria-label="Footer">
        
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div>
            <p className="font-display text-xl font-bold tracking-tight">
              MARK <span className="font-normal text-[#c2dfca]">Seigel</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/65">
              Clinical hypnotherapy for leaders who want to think clearly and
              lead calmly.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm text-white/75">
            <a className="hover:text-[#c2dfca]" href="#approach">
              Approach
            </a>
            <a className="hover:text-[#c2dfca]" href="#services">
              Services
            </a>
            <a className="hover:text-[#c2dfca]" href="#stories">
              Stories
            </a>
            <a className="hover:text-[#c2dfca]" href="#newsletter">
              Newsletter
            </a>
          </div>
          <div className="flex gap-2">
            <a
              href="#newsletter"
              aria-label="Email Mark Seigel"
              className="rounded-full border border-white/20 p-2.5 text-white/80 transition-colors hover:bg-white hover:text-[#17362f]">
              
              <MailIcon size={17} />
            </a>
            <a
              href="#newsletter"
              aria-label="Mark Seigel on LinkedIn"
              className="rounded-full border border-white/20 p-2.5 text-white/80 transition-colors hover:bg-white hover:text-[#17362f]">
              
              <LinkedinIcon size={17} />
            </a>
            <a
              href="#newsletter"
              aria-label="Mark Seigel on Instagram"
              className="rounded-full border border-white/20 p-2.5 text-white/80 transition-colors hover:bg-white hover:text-[#17362f]">
              
              <InstagramIcon size={17} />
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-white/15 pt-5 text-xs text-white/45">
          © {new Date().getFullYear()} Mark Seigel Hypnotherapy. All rights
          reserved.
        </div>
      </footer>
    </>);

}