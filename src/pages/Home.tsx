import { Footer } from '../components/Footer';
import { FaqSection } from '../components/FaqSection';
import { Hero } from '../components/Hero';
import { Newsletter } from '../components/Newsletter';
import { Rationale } from '../components/Rationale';
import { Reframe } from '../components/Reframe';
import { ProcessSteps } from '../components/ProcessSteps';
import { Testimonials } from '../components/Testimonials';
import { Consequence } from '../components/Consequence';
import { BookSection } from '../components/BookSection';
export function Home() {
  return (
    <main className="w-full overflow-hidden bg-[#f6f7f5] text-[#0951f6] px-[16px] py-[16px]">
      <div className="mx-auto flex flex-col gap-5 sm:gap-7 max-w-[1600px]">
        <Hero />
        <Rationale />
        <ProcessSteps />
        <Reframe />
        <Consequence />
        <Testimonials />
        <BookSection />
        <FaqSection />
        <Newsletter />
        <Footer />
      </div>
    </main>);

}