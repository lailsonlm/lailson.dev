import { Header } from '@/components/Header';
import './globals.css'
import { IBM_Plex_Mono, IBM_Plex_Sans, Kanit } from 'next/font/google'
import localFont from 'next/font/local';
import { MenuMobile } from '@/components/MenuMobile';


// const ibmPlex = IBM_Plex_Mono({ 
//   weight: ['400', '600'], 
//   subsets: ['latin'], 
//   display: 'swap',
//   variable: '--font-ibm',
// })

// const kanit = Kanit({ 
//   weight: ['400', '600'], 
//   subsets: ['latin'], 
//   display: 'swap',
//   variable: '--font-kanit',
// })

const kanit = localFont({ 
  src: '../fonts/Kanit-Regular.ttf',
  display: 'swap',
  variable: '--font-kanit',
})

const kanit2 = localFont({ 
  src: '../fonts/Kanit-Light.ttf',
  display: 'swap',
  variable: '--font-kanit2',
})

const ibmPlex = localFont({
  src: '../fonts/IBMPlexMono-SemiBold.ttf',
  display: 'swap',
  variable: '--font-ibm',
});

const openGraphImage = { images: ['/imageOG.jpg'] }

export const metadata = {
  title: 'Lailson Sobral',
  description: 'Desenvolvedor Fullstack, movido por desafios e soluções de problemas!',

  openGraph: {
    ...openGraphImage,
    title: 'Lailson Sobral',
    description: 'Desenvolvedor Fullstack, movido por desafios e soluções de problemas!',
  },

  twitter: {
    ...openGraphImage,
    title: 'Lailson Sobral',
    description: 'Desenvolvedor Fullstack, movido por desafios e soluções de problemas!',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) { 
  return (
    <html lang="pt" className={`${ibmPlex.variable} ${kanit.variable} ${kanit2.variable} font-sans bg-gray-700 text-gray-50`}>
      <body>
        <div className='flex flex-col w-full h-screen items-center relative overflow-hidden'>
          <Header />
          {children}
          <MenuMobile />
        <div className="absolute right-0 bottom-0 w-96 h-48 sm:h-[288px] sm:w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-cyan-700 opacity-50 blur-full -z-20" />
        </div>
      </body>
    </html>
  )
}
