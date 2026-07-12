import React, { ReactNode } from 'react';
import { useRipple } from '../hooks/useRipple';

interface OutlineRippleButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
}

export function OutlineRippleButton({ 
  children, 
  href, 
  onClick, 
  className = '',
  icon
}: OutlineRippleButtonProps) {
  const { ripples, createRipple, clearRipples } = useRipple();

  const baseStyles = 'group relative inline-flex items-center gap-2 overflow-hidden rounded-full border-2 border-[#4e7b64] px-6 py-3.5 text-sm font-bold text-[#4e7b64] transition-all duration-300 hover:bg-[#4e7b64] hover:text-white';

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    createRipple(e);
  };

  const handleMouseLeave = () => {
    clearRipples();
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (onClick) onClick();
  };

  const content = (
    <>
      {/* Ripples - SOLID GREEN */}
      {ripples.slice(-1).map((ripple) => (
        <span
          key={ripple.id}
          className="absolute pointer-events-none rounded-full bg-[#4e7b64] animate-ripple"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: '20px',
            height: '20px',
          }}
        />
      ))}
      
      {/* Content */}
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        {icon && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className={`${baseStyles} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={`${baseStyles} ${className}`}
    >
      {content}
    </button>
  );
}