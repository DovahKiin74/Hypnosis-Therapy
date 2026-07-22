export function CircleOfExcellenceAbout() {
  return (
    <section className="py-16 px-6 sm:px-8 md:px-12 lg:px-[48px] max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left - Image */}
        <div className="rounded-[20px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=85"
            alt="Person reflecting on life balance"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right - Content */}
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#0951f6]">
            Why This Matters
          </p>
          
          <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-[#001e61] sm:text-4xl">
            Harmony Is the Foundation of Excellence
          </h2>
          
          <div className="mt-6 space-y-4 text-base text-[#52665d] leading-relaxed">
            <p>
              The Circle of Excellence (also known as the Wheel of Life) is a 
              powerful coaching tool used by high-performers worldwide. It helps 
              you visualize your current satisfaction across the key areas that 
              matter most.
            </p>
            <p>
              By rating each area honestly, you'll instantly see where you're 
              thriving and where there's room for growth. This isn't about 
              perfection—it's about awareness and intentional action.
            </p>
            <p>
              Whether you're a business owner, executive, or someone committed 
              to personal growth, this assessment gives you a clear snapshot of 
              your life's balance and helps you prioritize what needs attention.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-[#f4f7f5] rounded-[16px] p-4">
              <div className="text-2xl font-bold text-[#001e61]">10</div>
              <div className="text-sm text-[#52665d]">Life Areas Assessed</div>
            </div>
            <div className="bg-[#f4f7f5] rounded-[16px] p-4">
              <div className="text-2xl font-bold text-[#001e61]">1-10</div>
              <div className="text-sm text-[#52665d]">Rating Scale</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}