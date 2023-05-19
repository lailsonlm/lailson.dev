import Image from 'next/image'
import logo from '../assets/logo.svg'

export default function Home() {
  return (
    <div className='flex flex-col w-full h-screen items-center justify-center py-32 px-4 relative overflow-hidden'>
      <div className="absolute right-0 bottom-0 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-cyan-700 opacity-50 blur-full" />
      <Image src={logo} alt='Logo Lailson.dev' className='w-96' />
      <div className='flex flex-col items-center justify-center mt-8 gap-1'>
        <p className='text-xs'>Página em construção, volte em breve!</p>
        <h1 className='font-bold'>Obrigado pela visita 😎</h1>
      </div>

      
      
      
    </div>
  )
}
