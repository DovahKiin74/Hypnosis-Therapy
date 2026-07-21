import { ArrowRightIcon } from 'lucide-react';
import { RippleButton } from './RippleButton';

export function BookSection() {
  return (
    <section className="rounded-[24px] bg-[#eeeeee] px-5 py-14 sm:px-10 sm:py-16 lg:px-[50px] lg:py-20">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 text-left">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#000] mb-3">
            Featured Book
          </p>
          
          <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-[#001e61] sm:text-4xl lg:text-5xl">
            The Entrepreneurs Guide to <br />
            <span className="text-[#0951f6]">Designing The Ultimate You</span>
          </h2>
          
          <p className="mt-4 text-base text-[#52665d] sm:text-lg max-w-xl">
            Your 6-Step Journey To Work / Life Harmony
          </p>
          
          <div className="mt-4 space-y-3 text-sm text-[#52665d] max-w-lg">
            <p>
              As an Entrepreneur, SoloPreneur, or Small Business Owner, if you are struggling with 
              Work/Life Balance, this book will help you step by step to create Harmony.
            </p>
            <p className="font-medium text-[#17362f]">
              Realize you can have it all: <span className="text-[#0951f6]">HEALTH, WEALTH, and LOVE!</span>
            </p>
            <p>
              Take your life and your business from Vision to Inspired Focused Actions to the Results You Want!
            </p>
            <p className="italic text-[#17362f]">
              "This book is your guide to Succeed on Purpose."
            </p>
          </div>
          
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <RippleButton 
              href="https://www.amazon.com/Entrepreneurs-Guide-Designing-Ultimate-You/dp/1917239238"
              icon={<ArrowRightIcon size={16} />}
            >
              Get Your Copy on Amazon
            </RippleButton>
            
            <span className="text-xs text-[#52665d]">
              Available in Paperback & Kindle
            </span>
          </div>
        </div>

        {/* Right Side: Book Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative max-w-sm w-full">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#0951f6]/10 to-[#17362f]/10 rounded-2xl blur-2xl"></div>
            <div className="relative overflow-hidden">
              <img
                src="/Book.png"
                alt="The Entrepreneurs Guide to Designing The Ultimate You book cover"
                className="w-full h-auto object-contain rounded-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}