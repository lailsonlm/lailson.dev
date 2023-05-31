import { NavLink } from '@/components/NavLink';
import { FolderGit2, Home, UserCircle } from 'lucide-react';

export function MenuMobile() {
  const navLinks = [
    {
      href: "/",
      name: 'Home',
      icon: <Home size={20} />
    },
    {
      href: "/about",
      name: 'Sobre mim',
      icon: <UserCircle size={20} />
    },
    {
      href: "/projects",
      name: 'Projetos',
      icon: <FolderGit2 size={20} />
    },
  ]

  return (
    <nav className='items-center flex w-full justify-around border-t border-gray-500 sm:hidden fixed bottom-0 z-20 bg-gray-700'>
      <NavLink navLinks={navLinks} />
    </nav>
  )
}