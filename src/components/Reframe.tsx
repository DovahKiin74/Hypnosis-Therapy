import { ArrowRightIcon, StarIcon } from 'lucide-react';
import { RippleButton } from './RippleButton';

export function Reframe() {
  return (
    <section
      className="rounded-[24px] overflow-hidden px-5 sm:px-10 lg:px-[50px] py-16 lg:py-24 bg-[#b4e4ad]"
      aria-labelledby="reframe-heading"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading - centered */}
        <div className="text-center mb-16">
          <h2
            id="reframe-heading"
            className="font-display text-3xl font-semibold tracking-[-0.04em] text-[#17362f] sm:text-4xl lg:text-7xl"
          >
            Every result comes from decisions,
            <br />
            most of which are unconscious.
          </h2>
        </div>

        {/* Two Column Layout: 2 Images + Content */}
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-12">
          
          {/* LEFT: 2 Images in column */}
          <div className="flex-1 flex flex-col gap-4">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
              alt="Business leader"
              className="w-full h-56 object-cover rounded-[16px]"
            />
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
              className="w-full h-56 object-cover rounded-[16px]"
            />
          </div>

          {/* RIGHT: Description + CTA + Reviews with justify-between */}
          <div className="flex-1 flex flex-col justify-between">
            {/* Description - pushed to top */}
            <div>
              <p className="text-base leading-relaxed text-[#17362f] sm:text-lg lg:text-xl font-normal">
                Most business owners spend years trying to fix their strategy 
                when the real problem is how they're making decisions. 
                We help you see what you've been missing.
              </p>
            </div>

            {/* CTA + Reviews - pushed to bottom */}
            <div className="mt-8 lg:mt-0">
              {/* CTA */}
              <div>
                <RippleButton 
                  href="#diagnosis" 
                  icon={<ArrowRightIcon size={16} />}
                >
                  Start Your Decision Diagnosis
                </RippleButton>
              </div>

              {/* User Reviews with Stars */}
              <div className="mt-4 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80'
                  ].map((url, i) => (
                    <img
                      key={i}
                      src={url}
                      alt="User"
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon 
                        key={i} 
                        size={16} 
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-xs text-[#4d6259]">
                    Rated 4.7 • 200+ business owners
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}