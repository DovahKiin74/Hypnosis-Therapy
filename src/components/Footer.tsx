import { 
  MailIcon, 
  PhoneIcon, 
  MapPinIcon, 
  LinkedinIcon, 
  InstagramIcon, 
  YoutubeIcon, 
  FacebookIcon,
  ArrowRightIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { WhitePlainButton } from './WhitePlainButton';

const navigationItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Blogs', to: '/blogs' },
  { label: 'FAQs', to: '/faqs' }
];

export function Footer() {
  return (
    <footer className="rounded-[24px] bg-[#111B21] px-6 py-12 text-white sm:px-10 lg:px-[50px]">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <p className="font-display text-xl font-bold tracking-tight">
            MARK <span className="font-normal text-[#c2dfca]">SIEGEL</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/60 max-w-xs">
            Personal Mind Trainer — Helping leaders think clearly and lead calmly.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href="https://facebook.com/marksiegel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white/40 hover:text-white transition-colors"
            >
              <FacebookIcon size={18} />
            </a>
            <a
              href="https://instagram.com/marksiegel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/40 hover:text-white transition-colors"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href="https://linkedin.com/in/marksiegel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/40 hover:text-white transition-colors"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="https://youtube.com/marksiegel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-white/40 hover:text-white transition-colors"
            >
              <YoutubeIcon size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links - Same as Navbar */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-white/40 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {navigationItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-white/60 hover:text-white transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-white/40 mb-3">
            Contact
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3 text-white/60">
              <PhoneIcon size={16} className="shrink-0 mt-0.5 text-white/30" />
              <a href="tel:+1234567890" className="hover:text-white transition-colors">
                (123) 456-7890
              </a>
            </li>
            <li className="flex items-start gap-3 text-white/60">
              <MailIcon size={16} className="shrink-0 mt-0.5 text-white/30" />
              <a href="mailto:mark@example.com" className="hover:text-white transition-colors">
                mark@example.com
              </a>
            </li>
            <li className="flex items-start gap-3 text-white/60">
              <MapPinIcon size={16} className="shrink-0 mt-0.5 text-white/30" />
              <span>Huntington, NY</span>
            </li>
          </ul>
        </div>

        {/* Free Consultation CTA */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-white/40 mb-3">
            Free Consultation
          </h3>
          <p className="text-sm text-white/60 mb-4">
            Book a free 15-minute Discovery Call to see if we're a good fit.
          </p>
          <WhitePlainButton href="/contact">
            Book Your Free Call
          </WhitePlainButton>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
        <p>
          © {new Date().getFullYear()} Mark Siegel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}