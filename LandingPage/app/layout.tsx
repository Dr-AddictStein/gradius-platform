import type { Metadata } from 'next';
import Fonts from './components/fonts';
import './globals.css';
import Image from 'next/image';
import { Plus_Jakarta_Sans } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-jakarta',
})

export const metadata: Metadata = {
  title: 'Gradius',
  description: 'Personalised learning platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jakarta.variable} font-sans`}>
      <head>
        <Fonts />
      </head>
      <body className="relative">
        {children}  {/* Remove the extra div wrapper */}
      </body>
    </html>
  )
}