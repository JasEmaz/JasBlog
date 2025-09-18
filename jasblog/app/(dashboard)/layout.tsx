import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { DashboardNav } from '@/components/dashboard/dashboard-nav'
import { DashboardHeader } from '@/components/dashboard/dashboard-header'
import { ProtectedRoute } from '@/components/auth/protected-route'

export const metadata: Metadata = {
  title: {
    default: 'Dashboard',
    template: '%s | Dashboard | JasBlog'
  },
  description: 'Manage your blog posts, analytics, and settings.',
}

interface DashboardLayoutProps {
  children: React.ReactNode
}

/**
 * Dashboard layout component with protected route wrapper
 * Features:
 * - Authentication protection
 * - Responsive sidebar navigation
 * - Header with user menu
 * - Breadcrumb navigation
 * - Mobile-friendly design
 * 
 * TODO: Integrate with Supabase auth for user session
 * TODO: Add real-time notifications
 * TODO: Implement user preferences/settings
 */
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        {/* Dashboard Header */}
        <DashboardHeader />
        
        <div className="flex">
          {/* Sidebar Navigation */}
          <DashboardNav />
          
          {/* Main Content Area */}
          <main className="flex-1 lg:pl-64">
            <div className="p-6">
              {children}
            </div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  )
}
