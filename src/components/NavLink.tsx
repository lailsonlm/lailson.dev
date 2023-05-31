'use client';
 
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ReactNode } from 'react';

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
          <Link
            className={isActive ? 'px-4 py-4 sm:py-2 flex gap-2 items-center justify-center bg-gray-500 sm:border-b-2 border-cyan-500 hover:bg-gray-500 transition-colors w-full whitespace-nowrap' : 'px-4 py-4 sm:py-2 flex gap-2 items-center justify-center sm:border-b-2 border-transparent text-gray-300 hover:bg-gray-500 hover:text-gray-50 transition-colors w-full whitespace-nowrap'}
            href={link.href}
            key={link.name}
          >
            {link.icon}
            {link.name}
          </Link>
        );
      })}
    </>
  );
}