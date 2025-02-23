// app/components/fonts.tsx
'use client'

import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function Fonts() {
  return (
    <style jsx global>{`
      :root {
        --font-inter: ${inter.style.fontFamily};
      }
    `}</style>
  )
}