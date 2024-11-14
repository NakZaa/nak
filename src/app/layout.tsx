import type { Metadata } from 'next'
import { IBM_Plex_Serif, IBM_Plex_Sans } from 'next/font/google'
import './globals.css'
import Providers from '@/components/providers'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { cn } from '@/lib/utils'

const ibm_sans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400']
})

const ibm_serif = IBM_Plex_Serif({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400']
})

export const metadata: Metadata = {
  title: "Nakonkate's",
  description: "Nak's Portfolio"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      style={{ scrollBehavior: 'smooth' }}
    >
      <body
        className={cn(
          'mx-auto flex min-h-screen max-w-3xl flex-col px-8 font-sans antialiased',
          ibm_sans.variable,
          ibm_serif.variable
        )}
      >
        <Providers>
          <Header />
          <main className='flex-grow'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
