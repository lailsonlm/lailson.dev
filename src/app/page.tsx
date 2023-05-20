import Image from 'next/image'
import logo from '../assets/logo.svg'
import { Github, Linkedin, Instagram, Youtube } from 'lucide-react'

export default function Home() {
  return (
    <div className='flex flex-col w-full h-screen items-center justify-center pt-32 pb-20 sm:pb-10 px-8 sm:px-4 relative overflow-hidden'>
      <div className='flex flex-col flex-1 items-center justify-center'>
        <Image src={logo} alt='Logo Lailson.dev' className='w-60 sm:w-full max-w-[600px] z-10' />
        <div className='flex flex-col items-center justify-center mt-8 sm:mt-12 gap-1 z-10'>
          <p className='text-sm sm:text-2xl'>Página em construção, volte em breve!</p>
          <h1 className='sm:text-2xl font-bold'>Obrigado pela visita 😎</h1>
        </div>
      </div>

      <div className='flex gap-2'>
        <a 
          href="https://github.com/lailsonlm" 
          target='_blank'
          title='Github'
          className='flex text-cyan-700 hover:text-cyan-500 transition-colors hover:bg-cyan-500/10 p-2 rounded-lg'
        >
          <Github className='w-6 h-6 sm:w-8 sm:h-8' />
        </a>
        <a 
          href="https://www.linkedin.com/in/lailsonsobral/" 
          target='_blank'
          title='LinkedIn'
          className='flex text-cyan-700 hover:text-cyan-500 transition-colors hover:bg-cyan-500/10 p-2 rounded-lg'
        >
          <Linkedin className='w-6 h-6 sm:w-8 sm:h-8' />
        </a>
        <a 
          href="https://www.instagram.com/lailson.dev/" 
          target='_blank'
          title='Instagram'
          className='flex text-cyan-700 hover:text-cyan-500 transition-colors hover:bg-cyan-500/10 p-2 rounded-lg'
        >
          <Instagram className='w-6 h-6 sm:w-8 sm:h-8' />
        </a>
        <a 
          href="https://www.youtube.com/@lailsonsobral" 
          target='_blank'
          title='YouTube'
          className='flex text-cyan-700 hover:text-cyan-500 transition-colors hover:bg-cyan-500/10 p-2 rounded-lg'
        >
          <Youtube className='w-6 h-6 sm:w-8 sm:h-8' />
        </a>
      </div>

      <div className="absolute right-0 bottom-0 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-cyan-700 opacity-50 blur-full" />     
      
    </div>
  )
}
