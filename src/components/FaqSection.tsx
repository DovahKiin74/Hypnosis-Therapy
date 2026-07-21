import { useState } from 'react';
import { ChevronDownIcon} from 'lucide-react';
import { PlainButton } from './PlainButton';
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
  },
  {
    question: 'Is hypnotherapy safe?',
    answer:
      'Yes, hypnotherapy is completely safe and non-invasive. You are always in control and cannot be made to do anything against your will. It is a natural state of focused attention that many people experience daily.'
  },
  {
    question: 'Can anyone be hypnotized?',
    answer:
      'Most people can be hypnotized if they are willing and open to the process. The key factor is your receptiveness and desire to make positive changes. During our first session, we will determine the best approach for you.'
  },
  {
    question: 'How long do the results last?',
    answer:
      'Results are typically long-lasting because hypnotherapy works at the subconscious level to create lasting change. Many clients find that the shifts they experience continue to deepen and integrate into their daily lives over time.'
  },
  {
    question: 'Do I need to prepare for my session?',
    answer:
      'No special preparation is required. Just come with an open mind and a willingness to explore. Wear comfortable clothing and think about what you\'d like to achieve. We\'ll handle the rest during our session.'
  }
];

export function FaqSection() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  return (
    <>
      <section
        className="rounded-[24px] px-5 py-14 sm:px-10 sm:py-16 lg:px-[50px] lg:py-20"
        aria-labelledby="faq-heading">
        
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#000000]">
            The details
          </p>
          <h2
            id="faq-heading" className="font-display mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-5xl text-[#001e61]">            
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
                  className="flex w-full items-center justify-between gap-5 py-5 text-left text-sm font-bold text-[#001e61] sm:text-base"
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
          <PlainButton href="/contact">            
            See All FAQs
          </PlainButton>
        </div>
      </section>
    </>);

}