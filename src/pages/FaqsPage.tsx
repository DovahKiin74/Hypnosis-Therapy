import { useState } from 'react';
import { 
  ChevronDownIcon, 
  SearchIcon, 
  MailIcon, 
  UserIcon, 
  MessageCircleIcon,
  SendIcon,
  HelpCircleIcon,
  CheckIcon
} from 'lucide-react';
import { RippleButton } from '../components/RippleButton';
import { Footer } from '../components/Footer';
import { Newsletter } from '../components/Newsletter';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  // ─── GENERAL QUESTIONS ───
  {
    question: 'What is hypnotherapy, and how does it work?',
    answer: 'Hypnotherapy is a therapeutic technique that uses guided relaxation, focused attention, and suggestion to help you access your subconscious mind. Unlike stage hypnosis, clinical hypnotherapy is a safe, collaborative process where you remain fully aware and in control. I help you rewire limiting beliefs, break negative patterns, and install new empowering behaviors — all at the subconscious level where real change happens.',
    category: 'General'
  },
  {
    question: 'Is hypnotherapy safe?',
    answer: 'Yes, hypnotherapy is completely safe when practiced by a trained professional. It\'s a natural state of focused awareness — similar to being deeply absorbed in a book or a movie. You remain in control at all times and cannot be made to do anything against your will. I\'m a Board Certified Clinical Hypnotherapist with over 29 years of experience.',
    category: 'General'
  },
  {
    question: 'How is hypnotherapy different from regular therapy or coaching?',
    answer: 'Traditional therapy and coaching work at the conscious level — they talk about problems, analyze patterns, and create strategies. Hypnotherapy works directly with your subconscious mind, where 95% of your beliefs, habits, and behaviors are stored. By accessing this deeper level, we create lasting change much faster — often in weeks instead of years. I combine both approaches for maximum results.',
    category: 'General'
  },
  {
    question: 'Will I lose control or reveal secrets during a session?',
    answer: 'Absolutely not. You remain fully aware and in complete control throughout the session. You cannot be forced to say or do anything you don\'t want to. Think of it as a deeply relaxed, focused state where you\'re simply more open to positive suggestions — like being in a state of deep concentration while reading a book.',
    category: 'General'
  },
  {
    question: 'How many sessions will I need?',
    answer: 'It depends on your specific goals. Some clients see significant shifts in just 1-3 sessions, while others benefit from a longer commitment (6-12 sessions) for deeper transformation. During your free Discovery Call, I\'ll assess your situation and recommend a personalized plan. The goal is always to get you results as efficiently as possible — I\'m not interested in keeping you in sessions forever.',
    category: 'General'
  },

  // ─── SMB OWNER SPECIFIC ───
  {
    question: 'Why should SMB owners consider hypnotherapy?',
    answer: 'SMB owners face unique challenges: decision fatigue, constant pressure, isolation, and the weight of responsibility. These aren\'t just "stress" — they\'re mindset blocks that directly impact your bottom line. Hypnotherapy helps you break through these barriers, make decisions with clarity, lead with confidence, and build a business that supports your life instead of consuming it.',
    category: 'SMB Owners'
  },
  {
    question: 'I\'m not "broken" — why would I need this?',
    answer: 'You\'re absolutely right — you\'re not broken. You\'re a high-performing business owner who\'s hit a ceiling. The strategies that got you here won\'t get you to the next level. Hypnotherapy isn\'t about fixing what\'s wrong — it\'s about upgrading your mental operating system so you can perform at your highest potential without burning out.',
    category: 'SMB Owners'
  },
  {
    question: 'How does this help with business performance?',
    answer: 'Business performance is 80% mindset and 20% strategy. Most SMB owners have the strategy — they know what to do. But mental blocks, fear, doubt, and overthinking prevent them from executing consistently. I help you eliminate these blocks so you can take decisive action, stay calm under pressure, and lead with clarity. The result? More revenue, less stress, and a business that actually works for you.',
    category: 'SMB Owners'
  },
  {
    question: 'I\'ve tried coaching before — how is this different?',
    answer: 'Coaching gives you strategies and accountability. Hypnotherapy gives you transformation. Most people know WHAT they need to do — they just can\'t seem to DO it. That\'s because the subconscious mind is running the show. I work at that level to remove the internal resistance, so your conscious strategies can actually work. It\'s like upgrading your operating system so your apps run smoothly.',
    category: 'SMB Owners'
  },

  // ─── SESSION DETAILS ───
  {
    question: 'What happens during a typical session?',
    answer: 'Each session is tailored to your unique goals. Generally, we start with a brief conversation to check in on your progress. Then, I guide you into a state of deep relaxation through progressive relaxation techniques. Once you\'re in this focused state, I use NLP, visualization, and hypnotic language patterns to help you reframe limiting beliefs and install new empowering patterns. You\'ll leave feeling calm, clear, and motivated to take action.',
    category: 'Session Details'
  },
  {
    question: 'How long is a session?',
    answer: 'Standard sessions are 60 minutes. This gives us enough time to do the deep work without rushing. For intensive work, we can also do 90-minute sessions. During your Discovery Call, we\'ll discuss what works best for your schedule and goals.',
    category: 'Session Details'
  },
  {
    question: 'Do I need to prepare anything before a session?',
    answer: 'No preparation needed — just come as you are. I\'ll guide you through everything. The only thing I ask is that you find a quiet, private space where you won\'t be disturbed (for online sessions). Wear comfortable clothing and have a glass of water nearby.',
    category: 'Session Details'
  },
  {
    question: 'Can I do sessions online?',
    answer: 'Yes! All sessions are available online via Zoom. Many clients actually prefer this because they can be in the comfort of their own home or office. The experience is just as effective as in-person sessions. I\'ve worked with clients all over the world this way.',
    category: 'Session Details'
  },
  {
    question: 'What if I fall asleep during a session?',
    answer: 'Don\'t worry — it happens! Many clients experience such deep relaxation that they drift off. This is actually a sign that you\'re letting go of control. If you do fall asleep, it\'s perfectly fine. The subconscious is still receiving the suggestions. I\'ll gently guide you back to full awareness at the end of the session.',
    category: 'Session Details'
  },

  // ─── NLP & HYPNOSIS TRAINING ───
  {
    question: 'Do you offer NLP or Hypnosis training?',
    answer: 'Yes! As a Master Trainer of NLP and Founder of the New York Institute of Hypnosis, I offer comprehensive training programs. I train business coaches, therapists, and professionals who want to add these powerful tools to their skillset. We offer both certification and advanced training programs.',
    category: 'Training'
  },
  {
    question: 'I\'m not a coach — can I still learn NLP?',
    answer: 'Absolutely. NLP is for anyone who wants to communicate better, understand themselves and others more deeply, and create lasting change in their life. Business owners, leaders, salespeople, and anyone in a people-facing role benefit immensely from NLP training. You don\'t need to be a coach to learn these skills.',
    category: 'Training'
  },
  {
    question: 'What is "Influence with Integrity™"?',
    answer: 'Influence with Integrity™ is my signature framework that combines ethical influence, NLP, and hypnotic communication. It\'s designed for business coaches, consultants, and leaders who want to help their clients transform without manipulation or hype. It\'s about becoming the kind of person others naturally trust and follow — not because you\'re pushy, but because you\'re authentic and effective.',
    category: 'Training'
  },

  // ─── INVESTMENT ───
  {
    question: 'What is the investment for sessions?',
    answer: 'I offer different packages to fit various needs and goals. The best way to discuss investment is during a Discovery Call — that way I can understand your specific situation and recommend the right package. What I can tell you is that my clients typically see a significant return on investment, whether it\'s increased revenue, reduced stress, or both. Book a call and we\'ll talk about it.',
    category: 'Investment'
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes, I offer flexible payment plans to make transformation accessible. We can discuss payment options during your Discovery Call. I believe in making this work accessible to those who are serious about their growth.',
    category: 'Investment'
  },
  {
    question: 'Is there a refund policy?',
    answer: 'Your satisfaction and results matter to me. I offer a satisfaction guarantee — if you\'re not happy after your first session, we\'ll either adjust the approach or refund your investment. My goal is to help you get results, period. We\'ll discuss the details during your call.',
    category: 'Investment'
  },

  // ─── RESULTS & EXPECTATIONS ───
  {
    question: 'How soon will I see results?',
    answer: 'Many clients notice a shift after just one session — they feel calmer, clearer, and more focused. Real, lasting transformation typically happens over 3-6 sessions as we work through deeper patterns. The exact timeline depends on your goals and how consistently you practice the techniques I teach you. I\'ll help you track your progress every step of the way.',
    category: 'Results'
  },
  {
    question: 'What kind of results can I expect?',
    answer: 'Results vary by person, but my clients typically report: reduced anxiety and stress, clearer decision-making, increased confidence, better sleep, improved focus, more revenue (from taking action), and a greater sense of control over their life and business. The transformation happens at the identity level — you become the person who naturally achieves these results.',
    category: 'Results'
  },
  {
    question: 'What if I don\'t see results?',
    answer: 'If you\'re not seeing results, we\'ll adjust the approach. I\'ve been doing this for over 29 years and have a deep toolkit to pull from. The key is communication — if something isn\'t working, we\'ll figure out why and try something else. My commitment is to your success, not to a particular method.',
    category: 'Results'
  },

  // ─── LOGISTICS ───
  {
    question: 'Where are you located?',
    answer: 'I\'m based in Huntington, New York, and serve clients both locally and globally via Zoom. If you\'re in the NY area, we can discuss in-person options. Otherwise, online sessions are just as effective.',
    category: 'Logistics'
  },
  {
    question: 'What if I need to reschedule?',
    answer: 'No problem — life happens. I just ask for 24-hour notice if possible. We\'ll find a time that works better for you. I\'m flexible and want to make this as easy as possible for you.',
    category: 'Logistics'
  }
];

// Categories for filtering
const categories = ['All', 'General', 'SMB Owners', 'Session Details', 'Training', 'Investment', 'Results', 'Logistics'];

export function FaqsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="w-full bg-[#f6f7f5] text-[#17362f] px-[16px] py-[16px]">
      <div className="mx-auto flex flex-col gap-5 sm:gap-7 max-w-[1600px]">
        
        {/* Hero Section - Smexy */}
        <section className="overflow-hidden rounded-[24px] bg-[#17362f] px-5 py-14 sm:px-10 sm:py-16 lg:px-[50px] lg:py-20 relative">
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#4e7b64]/10"></div>
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#4e7b64]/10"></div>
          
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#4e7b64]/20 text-[#d7e9dc]">
              <HelpCircleIcon size={28} />
            </div>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-[#d7e9dc]">
              Got Questions?
            </p>
            <h1 className="font-display mt-3 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Answers, Without the Fluff
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-relaxed text-white/80 sm:text-lg">
              Everything you need to know about hypnotherapy, NLP, and working with Mark.
              Straight answers. No BS.
            </p>
            
            {/* Search Bar */}
            <div className="mx-auto mt-8 max-w-xl">
              <div className="flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 focus-within:ring-2 focus-within:ring-[#4e7b64] focus-within:border-transparent transition-all">
                <SearchIcon size={18} className="text-white/50" />
                <input
                  type="text"
                  placeholder="Search your question..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 bg-transparent px-2 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-[#4e7b64] text-white'
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="overflow-hidden rounded-[24px] px-5 py-14 sm:px-10 sm:py-16 lg:px-[50px] lg:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4e7b64]">
                {filteredFAQs.length} Questions
              </p>
              <h2 className="font-display mt-2 text-2xl font-semibold text-[#17362f] sm:text-3xl">
                Everything You Want to Know
              </h2>
            </div>

            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-[#718078]">No questions found matching your search.</p>
              </div>
            ) : (
              <div className="divide-y divide-[#e8edea] border-t border-[#e8edea]">
                {filteredFAQs.map((faq, index) => (
                  <div key={index} className="py-4">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="flex w-full items-start justify-between gap-4 text-left hover:text-[#4e7b64] transition-colors"
                    >
                      <div>
                        <span className="text-xs font-medium text-[#4e7b64] uppercase tracking-[0.08em]">
                          {faq.category}
                        </span>
                        <h3 className={`font-display mt-1 text-base font-semibold ${
                          openIndex === index ? 'text-[#4e7b64]' : 'text-[#17362f]'
                        }`}>
                          {faq.question}
                        </h3>
                      </div>
                      <ChevronDownIcon 
                        size={20} 
                        className={`shrink-0 mt-1 text-[#718078] transition-transform duration-300 ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openIndex === index && (
                      <div className="mt-3 pl-0 pr-6">
                        <p className="text-sm leading-relaxed text-[#5a6b62]">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Still Have Questions CTA */}
            <div className="mt-10 text-center">
              <p className="text-sm text-[#718078]">
                Still have questions? I'm here to help.
              </p>
              <div className="mt-4">
                <RippleButton 
                  onClick={() => setShowContactForm(!showContactForm)}
                  icon={<MessageCircleIcon size={16} />}
                >
                  Ask Your Question
                </RippleButton>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        {showContactForm && (
          <section className="overflow-hidden rounded-[24px] bg-[#eef3f0] px-5 py-14 sm:px-10 sm:py-16 lg:px-[50px] lg:py-20">
            <div className="mx-auto max-w-2xl">
              <div className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#4e7b64]/10 text-[#4e7b64]">
                  <MailIcon size={24} />
                </div>
                <h2 className="font-display mt-4 text-2xl font-semibold text-[#17362f] sm:text-3xl">
                  Ask Your Question
                </h2>
                <p className="mt-2 text-sm text-[#4d6259]">
                  Fill in the form and I'll get back to you within 24 hours.
                </p>
              </div>

              {formSubmitted ? (
                <div className="mt-8 rounded-[20px] bg-white p-8 text-center border border-[#e8edea]">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#cbe0d0] text-[#275b43]">
                    <CheckIcon size={24} />
                  </div>
                  <h3 className="font-display mt-4 text-xl font-semibold text-[#17362f]">
                    Question Sent!
                  </h3>
                  <p className="mt-2 text-sm text-[#4d6259]">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 text-sm font-medium text-[#4e7b64] hover:underline"
                  >
                    Ask Another Question
                  </button>
                </div>
              ) : (
                <form 
                  className="mt-8 space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSubmitted(true);
                  }}
                >
                  <div>
                    <label htmlFor="faq-name" className="block text-sm font-medium text-[#17362f] mb-1.5">
                      Your Name
                    </label>
                    <div className="relative">
                      <UserIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#89978f]" />
                      <input
                        id="faq-name"
                        type="text"
                        placeholder="Enter your name"
                        required
                        className="w-full rounded-full border border-[#dce6e0] bg-white px-11 py-3.5 text-sm text-[#17362f] placeholder:text-[#89978f] focus:border-[#4e7b64] focus:outline-none focus:ring-2 focus:ring-[#4e7b64]/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="faq-email" className="block text-sm font-medium text-[#17362f] mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <MailIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#89978f]" />
                      <input
                        id="faq-email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="w-full rounded-full border border-[#dce6e0] bg-white px-11 py-3.5 text-sm text-[#17362f] placeholder:text-[#89978f] focus:border-[#4e7b64] focus:outline-none focus:ring-2 focus:ring-[#4e7b64]/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="faq-question" className="block text-sm font-medium text-[#17362f] mb-1.5">
                      Your Question
                    </label>
                    <div className="relative">
                      <MessageCircleIcon size={18} className="absolute left-4 top-4 text-[#89978f]" />
                      <textarea
                        id="faq-question"
                        placeholder="Type your question here..."
                        required
                        rows={4}
                        className="w-full rounded-[20px] border border-[#dce6e0] bg-white px-11 py-3.5 text-sm text-[#17362f] placeholder:text-[#89978f] focus:border-[#4e7b64] focus:outline-none focus:ring-2 focus:ring-[#4e7b64]/20 resize-none"
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <RippleButton 
                      icon={<SendIcon size={16} />}
                    >
                      Send Question
                    </RippleButton>
                  </div>
                </form>
              )}
            </div>
          </section>
        )}

        <Newsletter />
        <Footer />
      </div>
    </main>
  );
}