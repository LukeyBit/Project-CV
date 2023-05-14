import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './Navbar'
import Footer from './Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My personal website',
  description: 'This is my personal website created using Next.js and Tailwind CSS.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={'min-h-screen' + inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
