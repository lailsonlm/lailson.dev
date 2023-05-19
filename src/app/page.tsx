import Image from 'next/image'
import logo from '../assets/logo.svg'

export default function Home() {
  return (
    <div className='flex flex-col w-full h-screen items-center justify-center py-32 px-8 sm:px-4 relative overflow-hidden'>
      <Image src={logo} alt='Logo Lailson.dev' className='w-60 sm:w-full max-w-[600px] z-10' />
      <div className='flex flex-col items-center justify-center mt-8 sm:mt-12 gap-1 z-10'>
        <p className='text-sm sm:text-2xl'>Página em construção, volte em breve!</p>
        <h1 className='sm:text-2xl font-bold'>Obrigado pela visita 😎</h1>
      </div>

      <div className="absolute right-0 bottom-0 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-cyan-700 opacity-50 blur-full" />     
      
    </div>
  )
}
