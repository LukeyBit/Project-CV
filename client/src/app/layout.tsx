import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './Navbar'
import Footer from './Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lukas Andersson\'s Website',
  description: 'My personal website containing my resume, portfolio and means of contacting me.',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
