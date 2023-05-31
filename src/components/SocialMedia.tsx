import { Github, Linkedin, Instagram, Youtube, Mail } from 'lucide-react'

export function SocialMedia() {
  return (
    <div className='sm:absolute mt-8 sm:mt-0 flex flex-row h-fit sm:flex-col sm:top-1/2 sm:-translate-y-1/2 sm:right-6 gap-2 z-10'>
      <a 
        href="https://github.com/lailsonlm" 
        target='_blank'
        title='Github'
        className='flex text-cyan-700 hover:text-cyan-500 transition-colors hover:bg-cyan-500/10 p-2 rounded-lg'
      >
        <Github className='w-5 h-5 sm:w-8 sm:h-8' />
      </a>
      <a 
        href="https://www.linkedin.com/in/lailsonsobral/" 
        target='_blank'
        title='LinkedIn'
        className='flex text-cyan-700 hover:text-cyan-500 transition-colors hover:bg-cyan-500/10 p-2 rounded-lg'
      >
        <Linkedin className='w-5 h-5 sm:w-8 sm:h-8' />
      </a>
      <a 
        href="https://www.instagram.com/lailson.dev/" 
        target='_blank'
        title='Instagram'
        className='flex text-cyan-700 hover:text-cyan-500 transition-colors hover:bg-cyan-500/10 p-2 rounded-lg'
      >
        <Instagram className='w-5 h-5 sm:w-8 sm:h-8' />
      </a>
      <a 
        href="https://www.youtube.com/@lailsonsobral" 
        target='_blank'
        title='YouTube'
        className='flex text-cyan-700 hover:text-cyan-500 transition-colors hover:bg-cyan-500/10 p-2 rounded-lg'
      >
        <Youtube className='w-5 h-5 sm:w-8 sm:h-8' />
      </a>
      <a 
        href="mailto:lailsonlm@hotmail.com" 
        target='_blank'
        title='Email'
        className='flex text-cyan-700 hover:text-cyan-500 transition-colors hover:bg-cyan-500/10 p-2 rounded-lg'
      >
        <Mail className='w-5 h-5 sm:w-8 sm:h-8' />
      </a>
    </div>
  )
}