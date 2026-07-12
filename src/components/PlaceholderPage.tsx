import React from 'react';
import { ArrowLeftIcon, SparklesIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
type PlaceholderPageProps = {
  eyebrow: string;
  title: string;
  description: string;
};
export function PlaceholderPage({
  eyebrow,
  title,
  description
}: PlaceholderPageProps) {
  return (
    <main className="w-full bg-[#f6f7f5] px-4 pb-4 pt-4 text-[#17362f] sm:px-6 sm:pb-6 lg:px-[50px] lg:pb-[50px]">
      <section className="mx-auto flex min-h-[60vh] max-w-[1440px] items-center justify-center rounded-[24px] bg-[#e5eee7] px-6 py-16 text-center sm:px-10">
        <div className="max-w-xl">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#17362f] shadow-sm">
            <SparklesIcon size={22} />
          </span>
          <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-[#17362f]">
            {eyebrow}
          </p>
          <h1 className="font-display mt-3 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
            {title}
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-[#53675d] sm:text-base">
            {description}
          </p>
          <p className="mt-4 text-sm font-medium text-[#718078]">
            This page is being prepared and will be available soon.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#17362f] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#1258c3]">
            
            <ArrowLeftIcon size={16} />
            Return Home
          </Link>
        </div>
      </section>
    </main>);

}