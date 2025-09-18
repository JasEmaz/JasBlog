import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Sign in or create an account to access JasBlog',
}

interface AuthLayoutProps {
  children: React.ReactNode
}

/**
 * Authentication layout component
 * Provides a clean, centered layout for auth pages with navigation back to blog
 * Includes responsive design and accessibility features
 */
export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with back navigation */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </header>

      {/* Main content area */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
          {/* Logo/Brand */}
          <div className="text-center">
            <Link href="/blog" className="inline-block">
              <h1 className="text-2xl font-bold text-primary">JasBlog</h1>
              <p className="text-sm text-muted-foreground mt-1">
                AI-Enhanced Blogging Platform
              </p>
            </Link>
          </div>

          {/* Auth form content */}
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>
            By continuing, you agree to our{' '}
            <Link href="/terms" className="underline hover:text-foreground">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="underline hover:text-foreground">
              Privacy Policy
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
