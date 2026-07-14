import { ArrowRightIcon, SearchIcon, RefreshCwIcon, RocketIcon, CheckCircleIcon } from 'lucide-react';
import { Footer } from '../components/Footer';
import { RippleButton } from '../components/RippleButton';
import { WhiteRippleButton } from '../components/WhiteRippleButton';
import { Reframe } from '../components/Reframe';
import { ProcessSteps } from '../components/ProcessSteps';
import { Rationale } from '../components/Rationale';

const steps = [
  {
    icon: SearchIcon,
    title: 'Diagnose',
    description: 'Uncover the unconscious decision patterns keeping you stuck. Most decisions are made automatically—we surface what\'s actually driving yours.',
    stepNumber: '01',
    bottomText: 'Identify the constraint'
  },
  {
    icon: RefreshCwIcon,
    title: 'Rebuild',
    description: 'Replace faulty decision loops with a new system. Not theory—a practical framework you can apply to every major business decision.',
    stepNumber: '02',
    bottomText: 'Install the system'
  },
  {
    icon: RocketIcon,
    title: 'Execute',
    description: 'Apply your new decision system consistently. No more second-guessing—just clear, aligned action that matches your potential.',
    stepNumber: '03',
    bottomText: 'Consistent execution'
  }
];

export function HowItWorksPage() {
  return (
    <main className="w-full bg-[#f6f7f5] text-[#17362f] px-[16px] py-[16px]">
      <div className="mx-auto flex   flex-col gap-5 sm:gap-7">

        <Reframe />
        <ProcessSteps />
        <Rationale />

        <Footer />
      </div>
    </main>
  );
}