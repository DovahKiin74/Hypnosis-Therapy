import { useState } from 'react';
import { ArrowRight, CalendarDaysIcon, MenuIcon, XIcon } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { RippleButton } from './RippleButton';

const navigationItems = [
  {
    label: 'Home',
    to: '/'
  },
  {
    label: 'About',
    to: '/about'
  },
  {
    label: 'Contact',
    to: '/contact'
  },
  {
    label: 'Blogs',
    to: '/blogs'
  },
  {
    label: 'FAQs',
    to: '/faqs'
  }
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  function closeMenu() {
    setMenuOpen(false);
  }
  
  return (
    <header className="w-full bg-[#f6f7f5] pt-[16px] max-w-[1600px] mx-auto">
      <div className="mx-auto flex items-center justify-between rounded-[20px] bg-white px-5 py-4 shadow-[0_8px_28px_rgba(23,54,47,0.08)] sm:px-7">
        <Link
          to="/"
          className="font-display text-lg font-bold tracking-tight text-[#17362f]"
          aria-label="Mark Seigel home"
        >
          MARK <span className="font-normal text-[#17362f]">Seigel</span>
        </Link>

        <nav
          className="hidden items-center gap-5 lg:flex"
          aria-label="Primary navigation"
        >
          {navigationItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-[#17362f]' : 'text-[#52665d] hover:text-[#17362f]'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <RippleButton
            href="/contact"
            icon={<ArrowRight size={16} />}
            className="px-5 py-2.5 text-sm"
          >
            Book a Call
          </RippleButton>
        </div>

        <button
          type="button"
          className="rounded-full p-2 text-[#17362f] lg:hidden"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <XIcon size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          className="mx-auto mt-2 flex max-w-[1440px] flex-col rounded-[20px] bg-white p-3 shadow-[0_8px_28px_rgba(23,54,47,0.08)] lg:hidden"
          aria-label="Mobile navigation"
        >
          {navigationItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={closeMenu}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-sm font-medium transition-colors ${isActive ? 'bg-[#e8f0ff] text-[#17362f]' : 'text-[#52665d] hover:bg-[#f4f7f5] hover:text-[#17362f]'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={closeMenu}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#17362f] px-4 py-3 text-sm font-bold text-white hover:bg-[#1258c3]"
          >
            <CalendarDaysIcon size={16} />
            Book a Discovery Call
          </Link>
        </nav>
      )}
    </header>
  );
}