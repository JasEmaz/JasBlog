import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'JasBlog - AI-Enhanced Blogging Platform',
    template: '%s | JasBlog'
  },
  description: 'A modern, AI-enhanced blogging platform built with Next.js 15, Supabase, and MDX.',
  keywords: ['blog', 'writing', 'AI', 'Next.js', 'MDX', 'content creation'],
  authors: [{ name: 'JasBlog Team' }],
  creator: 'JasBlog',
  publisher: 'JasBlog',
  metadataBase: new URL('https://jasblog.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jasblog.vercel.app',
    title: 'JasBlog - AI-Enhanced Blogging Platform',
    description: 'A modern, AI-enhanced blogging platform built with Next.js 15, Supabase, and MDX.',
    siteName: 'JasBlog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JasBlog - AI-Enhanced Blogging Platform',
    description: 'A modern, AI-enhanced blogging platform built with Next.js 15, Supabase, and MDX.',
    creator: '@jasblog',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
