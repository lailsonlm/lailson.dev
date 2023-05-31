import Image from 'next/image'
import logo from '../assets/logo.svg'
import { NavLink } from './NavLink';
import { Home, FolderGit2, UserCircle } from 'lucide-react';

export function Header() {
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
    <div className='flex justify-between w-full max-w-[1200px] py-4 px-4 mx-auto'>
      <Image src={logo} alt='Logo Lailson.dev' className='h-8 w-fit' />

      <nav className='items-center gap-4 hidden sm:flex'>
        <NavLink navLinks={navLinks} />
      </nav>
    </div>
  )
}