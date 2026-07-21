import { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { PlainButton } from './PlainButton';

const questions = [
  {
    question: 'What is the Circle of Excellence assessment?',
    answer:
      'The Circle of Excellence (also known as the Wheel of Life) is a powerful self-assessment tool that helps you visualize your current satisfaction across 10 key areas of life. It provides a clear snapshot of where you\'re thriving and where there\'s room for growth.'
  },
  {
    question: 'How long does the assessment take?',
    answer:
      'The assessment takes about 1-2 minutes to complete. You\'ll rate 10 areas of your life on a scale from 1-10, and immediately see your personalized Circle of Excellence visualization.'
  },
  {
    question: 'Is my data saved or shared with anyone?',
    answer:
      'Your responses are stored locally in your browser and are never sent to any server or shared with third parties. You have full control over your data and can download your results as a PNG image.'
  },
  {
    question: 'What do the 10 areas cover?',
    answer:
      'The assessment covers: Health, Friends, Family, Significant Other/Romance, Spirituality, Personal Growth, Physical Environment, Fun & Recreation, Business/Career, and Money/Finance. These areas represent the key pillars of a balanced life.'
  },
  {
    question: 'What do the scores mean?',
    answer:
      'Each area is rated from 1-10, where 1 represents very low satisfaction and 10 represents complete satisfaction. The visualization helps you quickly identify which areas are thriving (High) and which might need more attention (Low).'
  },
  {
    question: 'Can I retake the assessment?',
    answer:
      'Yes! Each time you open the assessment, it starts fresh with no saved data. This allows you to track your progress over time by taking the assessment periodically and comparing your results.'
  },
  {
    question: 'What should I do with my results?',
    answer:
      'Your results provide valuable insights into your life balance. Download your Circle of Excellence PNG to keep as a reference, and consider reaching out for guidance if you\'d like to work on improving specific areas.'
  },
  {
    question: 'Is this different from a standard Wheel of Life?',
    answer:
      'While it follows the same proven framework, this assessment is specifically designed for business owners and professionals who want to understand how their work and personal life interact. It\'s about achieving harmony, not just balance.'
  }
];

export function CircleOfExcellenceFaq() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  
  return (
    <section
      className="rounded-[24px] px-5 py-14 sm:px-10 sm:py-16 lg:px-[50px] lg:py-20"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0951f6]">
          Frequently Asked Questions
        </p>
        <h2
          id="faq-heading"
          className="font-display mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#001e61] sm:text-4xl lg:text-5xl"
        >
          Everything You Need to Know
        </h2>
        <p className="mt-3 text-[#52665d] max-w-2xl mx-auto">
          Get answers to common questions about the Circle of Excellence assessment
        </p>
      </div>
      
      <div className="mx-auto mt-10 max-w-3xl divide-y divide-[#e5e7eb] border-y border-[#e5e7eb]">
        {questions.map((item, index) => {
          const isOpen = openQuestion === index;
          return (
            <div key={item.question} className="transition-all duration-200">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-5 py-5 text-left text-sm font-semibold text-[#17362f] hover:text-[#0951f6] transition-colors sm:text-base"
                onClick={() => setOpenQuestion(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span className="pr-4">{item.question}</span>
                <ChevronDownIcon
                  size={18}
                  className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#0951f6]' : 'text-[#52665d]'}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-sm leading-relaxed text-[#52665d]">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-7 text-center">
        <PlainButton href="/faqs">
          View All FAQs
        </PlainButton>
      </div>
    </section>
  );
}