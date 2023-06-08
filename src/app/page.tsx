import { MarqueeTechs } from '@/components/MarqueeTechs'
import { SocialMedia } from '@/components/SocialMedia'
import { AnimationChildren, AnimationFadeChildren } from './animation'


export default function Home() {
  return (
    <main 
      className='flex w-full flex-col h-[calc(100vh-120px)] sm:h-[calc(100vh-64px)] justify-center relative'
    >
      <div className='flex flex-col flex-1 justify-center w-full max-w-[1200px] mx-auto px-4'>
        <AnimationChildren>
          <h1 className='text-6xl sm:text-9xl xl:text-[200px] font-title max-w-xs sm:max-w-[720px] font-semibold leading-[3rem] sm:leading-[7rem] md:leading-none xl:leading-[10.37rem] tracking-[-0.1em] bg-gradient-primary bg-clip-text text-transparent'>Lailson Sobral</h1>
        </AnimationChildren>
        <AnimationChildren>
          <div className='flex flex-col justify-center mt-8 sm:mt-16 sm:gap-2'>
            <p className='text-2xl sm:text-4xl md:text-5xl font-title max-w-[720px] font-semibold leading-10 tracking-[-0.1em]'>Desenvolvedor Fullstack</p>
            <h1 className='text-xs sm:text-base md:text-2xl text-gray-300'>Solucionando problemas através das linhas de código.</h1>
          </div>
        </AnimationChildren>
        
        <AnimationFadeChildren>
          <SocialMedia />
        </AnimationFadeChildren>
      </div>
      <MarqueeTechs />
    </main>      
  )
}
