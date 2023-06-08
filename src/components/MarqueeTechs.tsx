import Image from 'next/image'
import Marquee from "react-fast-marquee";

import reactLogo from '../assets/react-logo.svg'
import nextLogo from '../assets/nextjs-logo.svg'
import tsLogo from '../assets/typescript-logo.svg'
import tailwindLogo from '../assets/tailwind-logo.svg'
import nodeLogo from '../assets/node-logo.svg'
import expressLogo from '../assets/express-logo.svg'
import fastifyLogo from '../assets/fastify-logo.svg'
import prismaLogo from '../assets/prisma-logo.svg'
import { AnimationFadeChildren } from '@/app/animation';

export function MarqueeTechs() {
  return (
    <AnimationFadeChildren>
      <div className='flex items-center justify-start h-14 sm:h-[88px] w-full overflow-hidden relative border-y border-gray-500'>
        <Marquee 
          style={{ display: 'flex' }}
          pauseOnHover={true}
          autoFill
        >
          <div className='flex justify-around gap-12 whitespace-nowrap mr-12'>
            <div className='flex gap-2 text-gray-300 items-center'>
              <Image src={reactLogo} alt='' className='w-5 h-5 sm:w-8 sm:h-8' />
              <span className="text-xs sm:text-base">React</span>
            </div>
            <div className='flex gap-2 text-gray-300 items-center'>
              <Image src={nextLogo} alt='' className='w-5 h-5 sm:w-8 sm:h-8' />
              <span className="text-xs sm:text-base">Next.js</span>
            </div>
            <div className='flex gap-2 text-gray-300 items-center'>
              <Image src={tsLogo} alt='' className='w-5 h-5 sm:w-8 sm:h-8' />
              <span className="text-xs sm:text-base">TypeScript</span>
            </div>
            <div className='flex gap-2 text-gray-300 items-center'>
              <Image src={tailwindLogo} alt='' className='w-5 h-5 sm:w-8 sm:h-8' />
              <span className="text-xs sm:text-base">TailwindCSS</span>
            </div>
            <div className='flex gap-2 text-gray-300 items-center'>
              <Image src={nodeLogo} alt='' className='w-5 h-5 sm:w-8 sm:h-8' />
              <span className="text-xs sm:text-base">Node.js</span>
            </div>
            <div className='flex gap-2 text-gray-300 items-center'>
              <Image src={expressLogo} alt='' className='w-5 h-5 sm:w-8 sm:h-8' />
              <span className="text-xs sm:text-base">Express</span>
            </div>
            <div className='flex gap-2 text-gray-300 items-center'>
              <Image src={fastifyLogo} alt='' className='w-5 h-5 sm:w-8 sm:h-8' />
              <span className="text-xs sm:text-base">Fastify</span>
            </div>
            <div className='flex gap-2 text-gray-300 items-center'>
              <Image src={prismaLogo} alt='' className='w-5 h-5 sm:w-8 sm:h-8' />
              <span className="text-xs sm:text-base">Prisma</span>
            </div>
          </div>
        </Marquee>
      </div>
    </AnimationFadeChildren>
  )
}