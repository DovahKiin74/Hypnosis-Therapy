import React, { ReactNode } from 'react';

interface WhitePlainButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function WhitePlainButton({ 
  children, 
  href, 
  onClick, 
  className = ''
}: WhitePlainButtonProps) {
  
  const baseStyles = 'group relative inline-flex items-center gap-2 text-sm font-medium text-[#fff] hover:text-[#fff] transition-colors duration-300 cursor-pointer no-underline';

  const content = (
    <>
      {/* Text with underline that slides left to right */}
      <span className="relative inline-block">
        {children}
        {/* Underline line */}
        <span 
          className="absolute left-0 -bottom-1 h-[2px] bg-[#fff] transition-all duration-300 ease-out"
          style={{
            width: '0%',
          }}
        ></span>
      </span>
      
      {/* Arrow - 45 degree with top to bottom slide */}
      <span className="relative inline-block overflow-hidden w-5 h-5">
        {/* Arrow - hidden (top position) */}
        <span 
          className="absolute left-0 transition-all duration-300 ease-out"
          style={{
            top: '-20px',
            transform: 'rotate(315deg)',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </span>
        {/* Arrow - visible (bottom position) */}
        <span 
          className="absolute left-0 transition-all duration-300 ease-out group-hover:top-0"
          style={{
            top: '0',
            transform: 'rotate(315deg)',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </span>
      </span>
    </>
  );

  // Add hover effect using JavaScript to toggle the line
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    const line = e.currentTarget.querySelector('.underline-line') as HTMLElement;
    if (line) {
      line.style.width = '100%';
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    const line = e.currentTarget.querySelector('.underline-line') as HTMLElement;
    if (line) {
      line.style.width = '0%';
    }
  };

  const finalContent = (
    <>
      {/* Text with underline that slides left to right */}
      <span className="relative inline-block">
        {children}
        {/* Underline line */}
        <span 
          className="underline-line absolute left-0 -bottom-1 h-[2px] bg-[#fff] transition-all duration-300 ease-out"
          style={{
            width: '0%',
          }}
        ></span>
      </span>
      
      {/* Arrow - 45 degree with top to bottom slide */}
      <span className="relative inline-block overflow-hidden w-5 h-5">
        {/* Arrow - hidden (top position) */}
        <span 
          className="absolute left-0 transition-all duration-300 ease-out"
          style={{
            top: '-20px',
            transform: 'rotate(315deg)',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </span>
        {/* Arrow - visible (bottom position) */}
        <span 
          className="absolute left-0 transition-all duration-300 ease-out group-hover:top-0"
          style={{
            top: '0',
            transform: 'rotate(315deg)',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {finalContent}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {finalContent}
    </button>
  );
}