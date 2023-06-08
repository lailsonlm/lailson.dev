'use client';
 
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ReactNode } from 'react';
import { AnimationFadeChildren } from '@/app/animation';

interface NavLink {
  navLinks: {
    href: string;
    name: string;
    icon: ReactNode;
  }[]
}

export function NavLink({ navLinks }: NavLink) {
  const pathname = usePathname();
 
  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
 
        return (
          <AnimationFadeChildren>
            <Link
              className={isActive ? 'flex-col sm:flex-row text-xs sm:text-base px-4 py-3 sm:py-2 flex gap-0.5 sm:gap-2 items-center justify-center bg-gray-500 sm:border-b-2 border-cyan-500 hover:bg-gray-500 transition-colors w-full whitespace-nowrap' : 'flex-col sm:flex-row text-xs sm:text-base px-4 py-3 sm:py-2 flex gap-0.5 sm:gap-2 items-center justify-center sm:border-b-2 border-transparent text-gray-300 hover:bg-gray-500 hover:text-gray-50 transition-colors w-full whitespace-nowrap'}
              href={link.href}
              key={link.name}
            >
              {link.icon}
              {link.name}
            </Link>
          </AnimationFadeChildren>
        );
      })}
    </>
  );
}