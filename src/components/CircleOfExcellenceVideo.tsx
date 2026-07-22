import { RippleButton } from "./RippleButton";

export function CircleOfExcellenceVideo() {
  return (
    <section className="p-10 bg-[#02319c] rounded-[24px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left - Content */}
        <div>
          <span className="status--badge">
            Featured
          </span>
          
          <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl mt-4">
            See the Circle of Excellence <br /> in Action
          </h2>
          
          <div className="mt-6 space-y-4 text-base text-white leading-relaxed opacity-90">
            <p>
              Watch this step-by-step walkthrough of the Circle of Excellence 
              assessment. Learn how to use this powerful tool to evaluate your 
              life balance and identify areas for meaningful improvement.
            </p>
            <p>
              In this video, we'll guide you through each of the 10 life areas, 
              share tips on honest self-assessment, and show you how to create 
              an action plan based on your results.
            </p>
            <p>
              Whether you're new to the Circle of Excellence or looking to 
              deepen your practice, this video provides valuable insights to 
              help you achieve greater balance and fulfillment.
            </p>
          </div>

          {/* Ripple Button */}
          <div className="mt-10">
            <RippleButton>
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Watch the Full Video
            </RippleButton>
          </div>
        </div>

        {/* Right - YouTube Video with Sound */}
        <div className="rounded-[20px] overflow-hidden aspect-video bg-[#f4f7f5] shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/okUsTc8IXrk?autoplay=1&loop=1&playlist=okUsTc8IXrk&controls=1&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3"
            title="Circle of Excellence - Step by Step Guide"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}