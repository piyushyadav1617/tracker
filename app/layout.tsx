import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from './components/navbar'
import { Separator } from '@/components/ui/separator'
import { Toaster } from '@/components/ui/toaster'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tracker',
  description: 'Track issues',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
      <ThemeProvider 
     attribute="class"
     defaultTheme="system"
     enableSystem
     disableTransitionOnChange
      ><Navbar/>
      <Separator/>
      <Toaster />
        <main>
        {children}
      </main>
      </ThemeProvider>
        </body>
    </html>
  )
}
