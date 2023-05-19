import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lailson Sobral',
  description: 'Desenvolvedor Fullstack, movido por desafios e soluções de problemas!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={`${inter.className} bg-gray-700 text-gray-50`}>{children}</body>
    </html>
  )
}
