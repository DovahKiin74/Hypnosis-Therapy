import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon, QuoteIcon } from 'lucide-react';
import { OutlineRippleButton } from './OutlineRippleButton';

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  image: string;
};

const testimonials: Testimonial[] = [
  // ─── STEVEN WALTON ───
  {
    name: 'Steven Walton',
    role: 'Founder/President | Small Business Specialist',
    quote:
      'It has been both a pleasure and an honor to work alongside Mark Siegel. Mark is truly in the upper echelon of the AI space; his extensive background in recursive AI marks him as a pioneer in the field. Beyond his technical mastery, Mark possesses an infectious personality and has mastered the art of personal development.',
    image: '/testimonials/steven.jpg'
  },
  // ─── BEAU CARLISLE ───
  {
    name: 'Beau Carlisle',
    role: 'Discovery & Compliance Advocate',
    quote:
      'Mark doesn\'t just share ideas — he shapes thinking, helping people shift from reactionary patterns to intentional leadership and high-impact results. I\'ve watched Mark consistently demonstrate deep expertise in the psychology of success, the power of strategic questioning, and the influence of language as a tool for clarity and confidence.',
    image: '/testimonials/beau.jpg'
  },
  // ─── RENEE REISCH ───
  {
    name: 'Renee Reisch',
    role: 'Your Inner VOICE Coach | Emotional Mastery Guide',
    quote:
      'Mark is a wonderful mentor. He has created a system to help you transform your life....one step at a time. He has created great courses to help his clients along their personal journey and guide you along yours. If you haven\'t yet connected with Mark, now is the time.',
    image: '/testimonials/renee.jpg'
  },
  // ─── TIFFANY HARRIS ───
  {
    name: 'Tiffany Harris',
    role: 'Millionaire T | Stage Mastery Expert | Speaker Trainer',
    quote:
      'Working alongside Mark has been a transformative experience. His depth of knowledge in business mindset, emotional rewiring, and high-performance coaching is unmatched. Mark doesn\'t just teach — he activates. His guidance helped me refine my leadership framework and align my legacy-driven mission with actionable strategy.',
    image: '/testimonials/tiffany.jpg'
  },
  // ─── JUDITH COSTA ───
  {
    name: 'Judith Costa',
    role: 'Unconditional Love Coach, Self-Love Expert',
    quote:
      'It\'s not every day you meet someone like Mark Siegel. Yes, he\'s a masterful speaker and coach, a gifted NLP practitioner, an incredible hypnotherapist, and a brilliant strategist who can rewire your mindset. But beyond all the methods and frameworks, what truly sets Mark apart is the quality of his heart.',
    image: '/testimonials/judith.jpg'
  },
  // ─── LESLIE TANKERSLEY ARBOLEDA ───
  {
    name: 'Leslie Tankersley Arboleda',
    role: 'Leadership Consultant | Speaker | Author',
    quote:
      'Mark isn\'t just a "mind trainer"—he\'s a mental architect. He doesn\'t hand you hype or empty motivation. He rewires how you think, so you can finally get out of your own way. Working with Mark is like installing a high-performance operating system in your brain.',
    image: '/testimonials/leslie.jpg'
  },
  // ─── FRANK MCNSeigel ───
  {
    name: 'Frank McNSeigel',
    role: 'Business & Mindset Coach',
    quote:
      'Mark Siegel has the unique ability to share a wealth of knowledge and experience in order to support others to make transformative growth and changes in their lives. As a Master Practitioner and Trainer of NLP and Hypnosis, Mark is at the top of his field, and is truly dedicated to helping people reach their highest potential.',
    image: '/testimonials/frank.jpg'
  },
  // ─── KATHLEEN CARLSON ───
  {
    name: 'Kathleen Carlson',
    role: 'Success Strategist & Mindset Mentor | Author | Speaker',
    quote:
      'If your mind is your greatest business asset—but also your biggest bottleneck—Mark Siegel is the guy who will help you get out of your own way. I\'ve seen firsthand how Mark doesn\'t just talk mindset—he rebuilds it. His approach blends deep NLP mastery, business acumen, and a no-BS understanding of what actually holds high-performers back.',
    image: '/testimonials/kathleen.jpg'
  },
  // ─── BRANDON J. HERNDON W. ───
  {
    name: 'Brandon J. Herndon',
    role: 'Tax-Advantaged Wealth & Retirement Strategist',
    quote:
      'I\'ve worked with a lot of people over the years, but Mark Siegel stands out for one simple reason—he truly gives a damn. When it comes to mental performance and personal transformation, Mark isn\'t just another "mindset coach" throwing around buzzwords. He lives this work.',
    image: '/testimonials/brandon.jpg'
  },
  // ─── EMMA TOOPS ───
  {
    name: 'Emma Toops',
    role: 'Operations & Leadership Partner | Army Major (Ret.)',
    quote:
      'What I find especially fascinating about Mark is his powerful blend of mindset mastery, neurolinguistics, and hypnosis. His approach to transformation is methodical and intuitive, creating lasting shifts at the mental level that drive real-world success.',
    image: '/testimonials/emma.jpg'
  },
  // ─── LISA JONES ───
  {
    name: 'Lisa Jones',
    role: 'Consultant, Speaker & Humorist',
    quote:
      'Mark is one of those rare people who instantly brings a sense of calm clarity to the chaos of entrepreneurship. The way he talks about mindset, systems, and the emotional side of business is powerful, but it\'s his energy that really sticks with you. There\'s a grounded confidence in everything he shares.',
    image: '/testimonials/lisa.jpg'
  },
  // ─── ANGEL MOSLEY ───
  {
    name: 'Angel Mosley',
    role: 'Cybersecurity Consultant | Risk Management Professional',
    quote:
      'I used to overthink everything. The inner chatter. The self-doubt. The loop of "what ifs" that played on repeat. Then I met Mark Siegel... He hacked my mindset (in a good way) and gave me tools to clear the noise! I now envision the future I want, and inspire myself to consistent action.',
    image: '/testimonials/angel.jpg'
  },
  // ─── RONAY HERSHEY ───
  {
    name: 'Ronay Hershey',
    role: 'Fractional CFO & Strategic Financial Partner',
    quote:
      'If you\'re an entrepreneur who\'s serious about growth but tired of the stress and mental roadblocks that come with it, you need to know Mark Siegel. Mark is more than just a mindset coach—he\'s a personal mind trainer with a proven track record of helping high-level entrepreneurs rewire their thinking, eliminate burnout, and actually build businesses that support their lives.',
    image: '/testimonials/ronay.jpg'
  },
  // ─── LIZ FORMAN ───
  {
    name: 'Liz Forman',
    role: 'Behavior Change & Health Coach',
    quote:
      'I had the opportunity to work alongside Mark in a focused coaching group, and he struck me as someone who walks his talk when it comes to mindset and personal growth. Mark brings both presence and professionalism to the work. He\'s grounded, intentional, and always shows up with clarity and curiosity.',
    image: '/testimonials/liz.jpg'
  },
  // ─── JOSHUA LEE ───
  {
    name: 'Joshua Lee',
    role: 'LinkedIn Event Producer | Audio Host',
    quote:
      'I can confidently say Mark is one of the most reliable and results-driven professionals I\'ve come across. What stood out most was his ability to lead with clarity. Mark consistently delivered high-quality work, communicated effectively, and brought a positive energy that uplifted the entire team.',
    image: '/testimonials/joshua.jpg'
  },
  // ─── MARY JANE WILLIAMS ───
  {
    name: 'Mary Jane Williams',
    role: 'Future Freedom Architect | Disability System Expert',
    quote:
      'I had the privilege of working alongside Mark Siegel in a group presentation on time management, and I can confidently say that Mark is a true expert in his field. As a Personal Mind Trainer with over two decades of experience, Mark brings an exceptional depth of knowledge, insight, and practical strategies that help entrepreneurs overcome mental roadblocks.',
    image: '/testimonials/maryjane.jpg'
  },
  // ─── DANYELLE H. BRIDGES ───
  {
    name: 'Danyelle H. Bridges',
    role: 'Leadership Strategist | Speaker | Author | CEO',
    quote:
      'Mark Siegel is an intelligent, kind, and deeply insightful individual with a rare gift for shaping and shifting people\'s mindsets. His ability to help others break through mental barriers and step into their full potential is truly remarkable. Mark\'s passion for his work is evident in the way he uplifts and supports individuals.',
    image: '/testimonials/danyelle.jpg'
  },
  // ─── TINA LARSSON ───
  {
    name: 'Tina Larsson',
    role: 'Coop & Condo Board Consultant',
    quote:
      'I had the pleasure of working with Mark H. Siegel, and I highly recommend him as a phenomenal resource for business owners looking to scale their operations! His expertise in NLP and hypnosis is truly impressive, and he has a unique ability to help clients achieve a stress-free mindset while driving profitability.',
    image: '/testimonials/tina.jpg'
  },
  // ─── JEAN TINDLE ───
  {
    name: 'Jean Tindle',
    role: 'Energy Leadership Expert | Resilience Trainer',
    quote:
      'I\'ve had the privilege of witnessing Mark Siegel\'s unmatched expertise as a Professional Hypnotherapist and Master Trainer of NLP firsthand. If you\'re serious about transforming your mindset and creating a secure, profitable future, Mark is the go-to guy. Mark\'s ability to help individuals and businesses unlock their highest potential is nothing short of extraordinary.',
    image: '/testimonials/jean.jpg'
  },
  // ─── JEFF MARCONETTE JR. ───
  {
    name: 'Jeff Marconette Jr.',
    role: 'International Resilience & Mindset Speaker | Author',
    quote:
      'Mark Siegel is a true master of the mind. His ability to help people rewire their thinking, break through mental barriers, and unlock their full potential is nothing short of incredible. I\'ve had the privilege of knowing Mark and seeing firsthand how his expertise in mindset training changes lives.',
    image: '/testimonials/jeff.jpg'
  },
  // ─── KELLY FISHER ───
  {
    name: 'Kelly Fisher',
    role: 'Corporate Wellness Coach & Trainer | TEDx Speaker',
    quote:
      'It\'s an honor to recommend Mark Siegel, a true pioneer in the world of business growth and personal development. As "Your Personal Mind Trainer," Mark combines over 29 years of experience in Neuro-Linguistic Programming (NLP), hypnosis, and business mindset coaching to help business owners achieve remarkable success.',
    image: '/testimonials/kelly.jpg'
  },
  // ─── JENNIFER LONNBERG ───
  {
    name: 'Jennifer Lonnberg',
    role: 'Transformational Leadership Strategist | Speaker | Author',
    quote:
      'I\'m happy to recommend Mark Siegel, a leader in the fields of hypnosis and Neuro-Linguistic Programming (NLP). As the Founder of the New York Institute of Hypnosis (NYIH) and a seasoned Professional Hypnotherapist, Mark has been transforming lives since 1992, helping individuals and businesses alike achieve their highest potential.',
    image: '/testimonials/jennifer.jpg'
  },
  // ─── ROYALKYE AURELIUS FUNK ───
  {
    name: 'RoyalKye Aurelius Funk',
    role: 'Identity Architect | Author | Founder',
    quote:
      'It\'s a pleasure to recommend Mark Siegel, a transformative mind trainer who has helped countless individuals and businesses reach new levels of success by tapping into the power of the subconscious mind. With over 29 years of expertise as a Professional Hypnotherapist, Master Practitioner, and Trainer of NLP, Mark is a respected thought leader.',
    image: '/testimonials/royalkye.jpg'
  },
  // ─── MOONIEK SEEBREGTS ───
  {
    name: 'Mooniek Seebregts',
    role: 'Intentional Leadership Trainer | Speaker | Founder',
    quote:
      'I\'ve had the pleasure of working with Mark Siegel, whose expertise in hypnosis and Neuro-Linguistic Programming (NLP) empowers people to create the secure and successful future they envision. With over 29 years of experience, Mark brings a wealth of knowledge and a transformative approach to individuals and business leaders alike.',
    image: '/testimonials/mooniek.jpg'
  },
  // ─── AMY COOK-PORTER ───
  {
    name: 'Amy Cook-Porter',
    role: 'Pain & Mobility Strategist | Health Advocate',
    quote:
      'I had the pleasure of meeting Mark during an intensive training, where his strategic insights had a lasting impact on my business approach. We spent several hours together reworking my business strategies, and his guidance provided actionable ideas that I was able to implement immediately.',
    image: '/testimonials/amy.jpg'
  },
  // ─── KELLEY O'HARA ───
  {
    name: 'Kelley O\'Hara',
    role: 'Authority Architect for Experts & Leaders',
    quote:
      'I had the pleasure of spending three days in Montana with Mark Siegel, and let me tell you, his dedication to helping people unlock their highest potential is undeniable. Mark\'s approach to personal, business, and spiritual success is refreshingly direct and grounded in true expertise.',
    image: '/testimonials/kelley.jpg'
  },
  // ─── ROXANNE MESTRE ───
  {
    name: 'Roxanne Mestre',
    role: 'Real Estate Advisor | Leadership & Alignment Strategist',
    quote:
      'I\'ve had the privilege of connecting with Mark through our mutual studies, and I can say he\'s genuinely dedicated to his craft of guiding entrepreneurs toward both business success and personal fulfillment. Mark brings a fresh, holistic approach to coaching that goes beyond traditional strategies.',
    image: '/testimonials/roxanne.jpg'
  },
  // ─── VATSAL SOOD ───
  {
    name: 'Vatsal Sood',
    role: 'Keynote Speaker | Public Speaking Coach',
    quote:
      'I have had the pleasure of witnessing Mark Siegel\'s incredible coaching expertise firsthand. His ability to guide individuals through personal breakthroughs and help business owners cultivate a powerful success mindset is truly remarkable. With decades of experience in NLP and hypnotherapy, Mark brings a wealth of knowledge to every session.',
    image: '/testimonials/vatsal.jpg'
  },
  // ─── SAM WIEDER ───
  {
    name: 'Sam Wieder',
    role: 'Keynote Speaker | Transformational Storyteller',
    quote:
      'There is a special kind of person who can quickly help others to feel better about themselves. Mark Siegel is part of that rare breed. When I first met Mark at a 5-day business-building event, I felt like I was re-connecting with a long-lost friend.',
    image: '/testimonials/sam.jpg'
  },
  // ─── RICH BUYER ───
  {
    name: 'Rich Buyer',
    role: 'Web Designer & Brand Strategist',
    quote:
      'Mark Siegel is a gifted and insightful person. Mark and I met many years ago through business networking. While he\'s a soft spoken man, that doesn\'t diminish his bon mots! When you talk to Mark, you know he is listening and engaged. And the advice you\'ll get will be truthful, compassionate and substantive!',
    image: '/testimonials/rich.jpg'
  },
  // ─── DALE CAMPBELL ───
  {
    name: 'Dale Campbell',
    role: 'Trademark & Patent Attorney',
    quote:
      'Mark coached me and his wisdom, inspiration, insights have enabled me to develop strategies for my business and personal life. These have enabled me to start implementing the dreams that I have for reaching my purpose. I would highly recommend working with Mark to anyone who is looking for authentic guidance.',
    image: '/testimonials/dale.jpg'
  },
  // ─── JUAN VIDES ───
  {
    name: 'Juan Vides',
    role: 'VP Sales | Entrepreneur',
    quote:
      'Mark is an exceptional professional, a strong communicator, and a natural connector. I highly recommend scheduling a one-on-one with him.',
    image: '/testimonials/juan.jpg'
  },
  // ─── STEFANI HAVEL ───
  {
    name: 'Stefani Havel',
    role: 'Sales Strategist | Global Trainer | Keynote Speaker',
    quote:
      'I had the pleasure of studying alongside Mark Siegel, and I can confidently say he is an exceptional mind trainer and coach. Mark\'s deep knowledge of Neuro-Linguistic Programming (NLP) and Hypnosis, combined with his 29+ years of experience in business and mindset coaching, makes him a true expert in helping business owners unlock their full potential.',
    image: '/testimonials/stefani.jpg'
  },
  // ─── GINA M. LONGO ───
  {
    name: 'Gina M. Longo',
    role: 'Communication Systems Risk Advisor | Airline Captain',
    quote:
      'I highly recommend Mark Siegel for his exceptional ability to empower business owners! I had the unique privilege of collaborating with Mark during a recent speakers\' conference, and his kindness, empathy, and willingness to go above and beyond to help were highlights of the event.',
    image: '/testimonials/gina.jpg'
  },
  // ─── NATALIE J. MCQUEEN ───
  {
    name: 'Natalie J. McQueen',
    role: 'Publisher | Legacy Architect | Author | Speaker',
    quote:
      'I had the pleasure of spending a week with Mark Siegel during a speaker training, and I was thoroughly impressed by his professionalism, expertise, and genuinely compassionate nature. Mark\'s unique approach to mindset coaching, which blends hypnosis, NLP, and decades of experience, truly sets him apart in a crowded field.',
    image: '/testimonials/natalie.jpg'
  },
  // ─── STEVEN C TUCKER ───
  {
    name: 'Steven C Tucker',
    role: 'IT Leader | Software Architect',
    quote:
      'I highly recommend Mark Siegel as an exceptional personal mind trainer and transformational coach. Mark\'s expertise in neuro-linguistic programming (NLP) and hypnotherapy, combined with his background in business and technology, makes him a uniquely qualified professional in the field of personal development.',
    image: '/testimonials/steven2.jpg'
  },
  // ─── ERIC YAILLEN ───
  {
    name: 'Eric Yaillen',
    role: 'Founder | Marketing Automation & AI Expert',
    quote:
      'I am pleased to recommend Mark Siegel, a talented professional and founder of the New York Institute of Hypnosis. For nearly a year, I have had the privilege of working with Mark, initially assisting him in organizing his marketing programs and managing leads.',
    image: '/testimonials/eric.jpg'
  },
  // ─── MICHAEL ALEXANDER ───
  {
    name: 'Michael Alexander',
    role: 'Keynote Speaker | Creative Problem Solving Expert',
    quote:
      'Mark Siegel is an exceptional business mindset coach who knows how to cut through the noise and help you achieve real results. His unique approach, blending hypnosis, NLP, and decades of experience, makes him stand out in a crowded field. Over the years, Mark has mastered the art of re-patterning unconscious behaviors.',
    image: '/testimonials/michael.jpg'
  },
  // ─── BRENDA RING WOOD ───
  {
    name: 'Brenda Ring Wood',
    role: 'Founder | International Speaker & Trainer',
    quote:
      'I was at an event with Mark in Montana and I was impressed with how experienced he is with his craft! Wow....his life experiences will help anyone in their quest for a mind-shift! I love how open he is to hear about you and your story but yes gets right down to business!',
    image: '/testimonials/brenda.jpg'
  },
  // ─── MARLA PRESS ───
  {
    name: 'Marla Press',
    role: 'Expressive Intelligence Activator | Speaker Trainer',
    quote:
      'I\'ve had the pleasure of working with Mark Siegel several times recently and I am always impressed at how he adds value to every conversation and interaction. Not only does he have decades of study and experience, but his curiosity and insights are 2nd to none. Mark is genuinely interested in everyone he meets.',
    image: '/testimonials/marla.jpg'
  },
  // ─── KATHRYN DAGER M.A. ───
  {
    name: 'Kathryn Dager',
    role: 'Leadership & Culture Expert',
    quote:
      'I am delighted to offer this stellar recommendation for Mark Siegel, The Personal Mind Trainer, an expert in NLP and hypnosis, and the author of the inspirational and instructional book, "Designing The Ultimate You." Mark has dedicated his career to helping individuals calm the consistent stress and discord that can inhibit personal growth.',
    image: '/testimonials/kathryn.jpg'
  },
  // ─── CARROLL S. GOLDEN ───
  {
    name: 'Carroll S. Golden',
    role: 'Speaker | Coach | Author',
    quote:
      'Mark is a truly delightful person, a rare blend of professionalism, humor, and genuine care. He has an incredible ability to make people feel comfortable right from the start, creating an environment where growth and joy naturally follow. Getting to know him has been both fun and insightful.',
    image: '/testimonials/carroll.jpg'
  },
  // ─── WILLIAM K BALASH ───
  {
    name: 'William K Balash',
    role: 'Business Development Through Logistics Expert',
    quote:
      'Mark has a unique ability to combine personal breakthroughs with practical tools and systems that empower business owners to grow profitable businesses. His approach integrates deep work on the subconscious level of mindset, which is truly transformative.',
    image: '/testimonials/william.jpg'
  },
  // ─── GRACE MOSGELLER ───
  {
    name: 'Grace Mosgeller',
    role: 'Personal Development for Leaders',
    quote:
      'Mark has a presence almost like Jerry Seinfeld that comes out with a fun grin and witty humor when he speaks. His heart is dedicated to helping others really find peace of mind and personal power to overcome difficulties.',
    image: '/testimonials/grace.jpg'
  },
  // ─── GEORGE BENTLEY ───
  {
    name: 'George Bentley',
    role: 'Intentional Evolution Architect | Speaker | Author',
    quote:
      'I had the privilege of working with Mark Siegel, and I can confidently say he is a master of transformation. Mark\'s unique approach, combining NLP, hypnosis, and decades of experience in business mindset coaching, is nothing short of life-changing. Mark quickly identified obstacles and guided me through a process that unlocked a level of success I hadn\'t thought possible.',
    image: '/testimonials/george.jpg'
  },
  // ─── VAL VIGODA ───
  {
    name: 'Val Vigoda',
    role: 'Keynote Speaker | Rockstar Violinist/Singer',
    quote:
      'I recently spent several days with Mark Siegel at a speaker\'s event, and I was struck by his unique approach to mind training. One example that sets Mark apart is his ability to combine contrasting qualities in a way that maximizes power and effectiveness. For example, rather than just encouraging "enthusiasm," he instills "calm enthusiasm."',
    image: '/testimonials/val.jpg'
  },
  // ─── DR. DAWNA CAMPBELL ───
  {
    name: 'Dawna Campbell',
    role: 'Creator | The Abundant Soul',
    quote:
      'Mark Siegel is an exceptional Personal Mind Trainer and Business Mindset & Success Coach. His vast experience—over 42 years as a business owner and 29+ years coaching with specialties in NLP and hypnosis—makes him uniquely qualified to help business owners grow profitable businesses they truly love.',
    image: '/testimonials/dawna.jpg'
  },
  // ─── JASON ANTALEK ───
  {
    name: 'Jason Antalek',
    role: 'Cultural Alchemist | Metaphysical Technologist',
    quote:
      'Spending an unforgettable week with Mark Siegel in Montana gave me a firsthand look at his incredible skills as a Mind Trainer—and his SuperPowers are the real deal! Mark\'s presentations were impactful, and our conversations left me inspired not only by his expertise but also by the genuine friendship we formed.',
    image: '/testimonials/jason.jpg'
  },
  // ─── SCOTT SCHWARZ ───
  {
    name: 'Scott Schwarz',
    role: 'Business Constraint Architect | Keynote Speaker',
    quote:
      'I had the pleasure of working alongside Mark Siegel, and I can confidently say he is an exceptional NLP practitioner and personal mind trainer. His approach to mental fitness is highly practical. Mark has the ability to connect with people, help them unlock their true potential and develop the right mindset and strategies to overcome their challenges.',
    image: '/testimonials/scott.jpg'
  },
  // ─── NATHALIE BOTROS ───
  {
    name: 'Nathalie Botros',
    role: 'Psychology-Based Relationship Coach | Founder',
    quote:
      'It is my pleasure to wholeheartedly recommend Mark Siegel. He has an extraordinary ability to unlock the hidden potential in business owners, guiding them toward success beyond their imagination. His depth of knowledge and practical application are unmatched, helping his clients not only manage stress but also grow profitable businesses they truly love.',
    image: '/testimonials/nathalie.jpg'
  },
  // ─── ERNESTO VERDUGO ───
  {
    name: 'Ernesto Verdugo',
    role: 'Recursive AI Architect | Keynote Speaker',
    quote:
      'I\'ve had the privilege of knowing and mentoring Mark Siegel, and I can confidently say that he is a master of mental clarity and personal development. Mark has an incredible ability to truly understand people at a deeper level, helping them realize their full potential in a way that is both compassionate and transformative.',
    image: '/testimonials/ernesto.jpg'
  },
  // ─── JOY BECK ───
  {
    name: 'Joy Beck',
    role: 'Holistic Healing Expert | Body Code Practitioner',
    quote:
      'I had the opportunity to collaborate with Mark Siegel in our group. He is a natural leader with valuable insight. Mark has 42 years of experience as the Founder of Your Personal Mind Trainer. His ability to connect with others, understand their point of view, and share a more profound perspective is exceptional.',
    image: '/testimonials/joy.jpg'
  },
  // ─── FRANK MULCAHY SR ───
  {
    name: 'Frank Mulcahy Sr',
    role: 'Speaker | Coach | Trainer',
    quote:
      'I am delighted to recommend Mark Siegel, a truly exceptional Mind Trainer and Subconscious Linguist. With over 27 years of experience as a Business Mindset & Success Coach, Mark can identify hidden values and traits in his clients that they may not realize exist. This unique talent allows him to unlock untapped potential and create powerful opportunities for new income streams.',
    image: '/testimonials/frank2.jpg'
  },
  // ─── EILEEN MCGLONE ───
  {
    name: 'Eileen McGlone',
    role: 'Marketing Professional | Growth Catalyst',
    quote:
      'Mark was instrumental in helping me achieve relaxation through meditation. He is passionate and dedicated to helping you meet your goals and works closely with you to get to the bottom of what the triggers are for each of the goals you are looking to achieve.',
    image: '/testimonials/eileen.jpg'
  },
  // ─── MICHAEL BREITMAN ───
  {
    name: 'Michael Breitman',
    role: 'CEO | ActionCOACH of New York & The Berkshires',
    quote:
      'Mark Siegel is the consummate professional. His knowledge of hypnosis and self-improvement coupled with his true dedication to his patients is unmatched. I have taken his "Virtual Vacation" and recommend it to anyone who is feeling stress in their life.',
    image: '/testimonials/michael2.jpg'
  },
  // ─── YVONNE BISK ───
  {
    name: 'Yvonne Bisk',
    role: 'Daycare Provider | Learn and Play Levittown',
    quote:
      'Mark knows what he is doing. If it is for a relaxation session or if you want to stop smoking, he can help. I have heard a most superb testimonial from a customer of Mark about a relaxation session. Mark is reliable, trustworthy and just a very good friend.',
    image: '/testimonials/yvonne.jpg'
  },
  // ─── KEN PISCHEL ───
  {
    name: 'Ken Pischel',
    role: 'Managing Member | Dynamic Business Consultants',
    quote:
      'Mark is a dedicated Professional who has helped many individuals achieve goals through his treatments.',
    image: '/testimonials/ken.jpg'
  },
  // ─── DEIDDRA L. ───
  {
    name: 'Deirdra Limoges',
    role: 'Fundraising & Donor Development Specialist',
    quote:
      'Mark brings to his services and his clients a great combination of technical skill as a hypnotic therapist/business consultant/executive coach, and a funny, creative, upbeat personality that is infectious in just the right way. Mark addressed both the specific needs I brought to the table and the underlying tensions that were interfering with my performance.',
    image: '/testimonials/deirddra.jpg'
  },
  // ─── MATTHEW ROI STERN ───
  {
    name: 'Matthew Stern',
    role: 'Owner | Mastercraft Home Improvements',
    quote:
      'I have known Mark for quite some time now, but had not experienced his service until recently. He suggested that I try his "virtual vacation". No, this is not something done on a computer, but he takes you on this vacation in your mind. I achieved total relaxation and felt like a million bucks.',
    image: '/testimonials/matthew.jpg'
  },
  // ─── HARRY MANDEL ───
  {
    name: 'Harry Mandel',
    role: 'Photographer & Owner | HjM Photography',
    quote:
      'Mark is a pure professional. I feel safe recommending Mark to any one that needs help in their daily lives.',
    image: '/testimonials/harry.jpg'
  }
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="break-inside-avoid rounded-[18px] bg-white p-4 shadow-[0_4px_18px_rgba(23,54,47,0.08)]">
      <div className="flex items-center gap-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div>
          <h3 className="text-sm font-bold text-[#001e61]">
            {testimonial.name}
          </h3>
          <p className="text-[11px] text-[#718078]">{testimonial.role}</p>
        </div>
      </div>
      <QuoteIcon aria-hidden="true" size={15} className="mt-4 text-[#0951f6]" />
      <p className="mt-1 text-sm leading-relaxed text-[#52665d]">
        “{testimonial.quote}”
      </p>
    </article>
  );
}

export function Testimonials() {
  const [expanded, setExpanded] = useState(false);

  // Split testimonials into 4 columns
  const chunkSize = Math.ceil(testimonials.length / 4);
  const columns = [];
  for (let i = 0; i < testimonials.length; i += chunkSize) {
    columns.push(testimonials.slice(i, i + chunkSize));
  }

  // Each column gets a different speed (duration in seconds)
  const columnSpeeds = [35, 45, 55, 40]; // Different speeds for each column

  const cards = (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.name} testimonial={testimonial} />
      ))}
    </div>
  );

  return (
    <section
      id="stories"
      className="rounded-[24px] px-[16px] py-20"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#000000]">
          Client stories
        </p>
        <h2
          id="testimonials-heading"
          className="font-display mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#001e61] sm:text-5xl"
        >
          The shift is tangible.
        </h2>
        <p className="mt-3 text-sm text-[#62736a] sm:text-base">
          What steady leadership feels like on the other side.
        </p>
      </div>

      <div
        className={`relative mx-auto mt-10 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          expanded ? 'max-h-[9999px]' : 'max-h-[430px] sm:max-h-[490px]'
        }`}
      >
        {expanded ? (
          cards
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {columns.map((column, colIndex) => (
              <div
                key={colIndex}
                className="space-y-3 testimonial-column"
                style={{
                  animationDuration: `${columnSpeeds[colIndex]}s`,
                }}
              >
                {/* Duplicate content for seamless loop */}
                {column.map((testimonial) => (
                  <TestimonialCard key={testimonial.name} testimonial={testimonial} />
                ))}
                {column.map((testimonial) => (
                  <TestimonialCard key={`dup-${testimonial.name}`} testimonial={testimonial} />
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-7 text-center">
        <OutlineRippleButton
          onClick={() => setExpanded((current) => !current)}
          icon={expanded ? <ChevronUpIcon size={16} /> : <ChevronDownIcon size={16} />}
        >
          {expanded ? 'Show Less' : 'Show All Testimonials'}
        </OutlineRippleButton>
      </div>
    </section>
  );
}