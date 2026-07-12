import { Footer } from '../components/Footer';
import { FaqSection } from '../components/FaqSection';
import { Hero } from '../components/Hero';
import { Newsletter } from '../components/Newsletter';
import { Rationale } from '../components/Rationale';
import { ProcessSteps } from '../components/ProcessSteps';
import { Testimonials } from '../components/Testimonials';
export function Home() {
  return (
    <main className="w-full overflow-hidden bg-[#f6f7f5] text-[#17362f] px-[16px] py-[16px]">
      <div className="mx-auto flex flex-col gap-5 sm:gap-7 max-w-[1600px]">
        <Hero />
        <ProcessSteps />
        <Rationale />
        <Testimonials />
        <FaqSection />
        <Newsletter />
        <Footer />
      </div>
    </main>);

}