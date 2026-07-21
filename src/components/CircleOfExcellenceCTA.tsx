import { ArrowRightIcon } from 'lucide-react';
import { RippleButton } from './RippleButton';

interface CircleOfExcellenceCTAProps {
  onOpenModal: () => void;
}

export function CircleOfExcellenceCTA({ onOpenModal }: CircleOfExcellenceCTAProps) {
  return (
    <section>
      <div className="bg-[#02319C] rounded-[24px] p-8 sm:p-12 md:p-16 text-center relative overflow-hidden min-h-[500px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/Spiral--Cta--Image.png"
            alt="Circle of Excellence background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5 z-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        </div>
        
        {/* Content - Centered */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-white/70">
            Ready to Begin?
          </p>
          
          <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-white sm:text-4xl">
            Assess Your Work / Life Harmony
          </h2>
          
          <p className="mt-4 text-base text-white/80 max-w-2xl mx-auto">
            Take a 1 minute quizlet to assess where you are at within 10 key areas of life. It is not about balance, it's about how you can achieve harmony within the wheel.
          </p>
          
          <div className="mt-8">
            <RippleButton 
              onClick={onOpenModal}
              icon={<ArrowRightIcon size={16} />}
            >
              Start Your Assessment
            </RippleButton>
          </div>
        </div>
      </div>
    </section>
  );
}