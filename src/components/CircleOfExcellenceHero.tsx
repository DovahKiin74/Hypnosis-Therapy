import { ArrowRightIcon, PlayIcon, PauseIcon, ExternalLinkIcon } from "lucide-react";
import { RippleButton } from "./RippleButton";
import { useState, useRef } from "react";

interface CircleOfExcellenceHeroProps {
  onOpenModal: () => void;
}

export function CircleOfExcellenceHero({ onOpenModal }: CircleOfExcellenceHeroProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const togglePlay = () => {
    if (iframeRef.current) {
      const video = iframeRef.current;
      // Send postMessage to control YouTube player
      if (isPlaying) {
        video.contentWindow?.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          '*'
        );
      } else {
        video.contentWindow?.postMessage(
          '{"event":"command","func":"playVideo","args":""}',
          '*'
        );
      }
      setIsPlaying(!isPlaying);
    }
  };

  const openVideo = () => {
    window.open('https://www.youtube.com/watch?v=okUsTc8IXrk', '_blank');
  };

  return (
    <div className="rounded-[24px] overflow-hidden bg-[#eee]">
      <section aria-labelledby="circle-hero-heading" className="rounded-[24px] overflow-hidden">
        <div className="relative px-6 py-16 sm:px-8 sm:py-20 md:px-12 md:py-24 lg:px-[48px] lg:py-36 min-h-[500px]">
          {/* YouTube Video Background */}
          <div className="absolute inset-0 z-0">
            <div className="relative w-full h-full">
              <iframe
                ref={iframeRef}
                src={`https://www.youtube.com/embed/okUsTc8IXrk?si=jDn7hfBlqeGeSJ7C&start=9&autoplay=1&mute=1&loop=1&playlist=okUsTc8IXrk&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1`}
                title="Circle of Excellence YouTube background"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] min-w-[150%] min-h-[150%] object-cover"
                style={{ 
                  aspectRatio: "16/9",
                  border: 0,
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen={false}
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          </div>
          
          {/* Content - Centered */}
          <div className="relative z-10 mx-auto flex flex-col items-center text-center max-w-4xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/80">
              Discover Your Balance
            </p>
            
            <h1
              id="circle-hero-heading"
              className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#fff] sm:text-5xl lg:text-6xl"
            >
              The Circle of Excellence
            </h1>
            
            <p className="mt-6 text-base font-normal leading-relaxed text-white/90 sm:text-lg lg:text-xl max-w-2xl">
              Assess your life across 10 key areas and visualize your personal 
              wheel of excellence to identify where you're thriving and where 
              you need growth.
            </p>
            
            <div className="mt-8 flex flex-col items-center">
              <RippleButton 
                icon={<ArrowRightIcon size={16} />}
                onClick={onOpenModal}
              >
                Start Your Assessment
              </RippleButton>
            </div>
          </div>

          {/* Control Buttons - Bottom Right */}
          <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <PauseIcon size={18} className="fill-white" />
              ) : (
                <PlayIcon size={18} className="fill-white ml-0.5" />
              )}
            </button>

            {/* Redirect Button */}
            <button
              onClick={openVideo}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Watch on YouTube"
            >
              <ExternalLinkIcon size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}