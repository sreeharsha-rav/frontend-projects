import { ReactNode } from 'react'
import '@fontsource/inter/latin.css'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

interface LayoutProps {
  children: ReactNode
}

export default function BaseLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col w-full max-w-4xl mx-auto">
      <Header />
      <body className="container flex-1 max-w-2xl mx-auto">
        {children}
      </body>
      <Footer />
    </div>
  )
}