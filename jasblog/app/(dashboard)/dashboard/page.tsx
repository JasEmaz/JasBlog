import { Metadata } from 'next'
import Link from 'next/link'
import { 
  BarChart3, 
  Eye, 
  FileText, 
  Heart, 
  MessageSquare, 
  PlusCircle,
  TrendingUp,
  Users
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export const metadata: Metadata = {
  title: 'Dashboard Overview',
  description: 'Overview of your blog performance and recent activity.',
}

// TODO: Replace with actual data from Supabase
const mockStats = {
  totalPosts: 24,
  totalViews: 12543,
  totalLikes: 892,
  totalComments: 156,
  monthlyGrowth: {
    posts: 12,
    views: 23,
    likes: 18,
    comments: 34,
  }
}

const mockRecentPosts = [
  {
    id: '1',
    title: 'Getting Started with Next.js 15 and App Router',
    status: 'published',
    views: 1234,
    likes: 45,
    comments: 12,
    publishedAt: '2024-01-15',
    slug: 'getting-started-nextjs-15'
  },
  {
    id: '2',
    title: 'Building Modern UIs with Shadcn/ui Components',
    status: 'draft',
    views: 0,
    likes: 0,
    comments: 0,
    publishedAt: null,
    slug: 'building-modern-uis-shadcn'
  },
  {
    id: '3',
    title: 'AI-Enhanced Development Workflow',
    status: 'published',
    views: 892,
    likes: 67,
    comments: 23,
    publishedAt: '2024-01-10',
    slug: 'ai-enhanced-development'
  },
  {
    id: '4',
    title: 'TypeScript Best Practices for React',
    status: 'scheduled',
    views: 0,
    likes: 0,
    comments: 0,
    publishedAt: '2024-01-20',
    slug: 'typescript-react-best-practices'
  },
]

/**
 * Dashboard overview page showing key metrics and recent activity
 * Features:
 * - Analytics cards with growth indicators
 * - Recent posts table with status and metrics
 * - Quick actions for creating content
 * - Responsive design
 * - Real-time data updates (placeholder)
 * 
 * TODO: Integrate with Supabase for real analytics data
 * TODO: Add charts for visual analytics
 * TODO: Implement real-time updates with Supabase subscriptions
 * TODO: Add export functionality for analytics data
 */
export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your blog.
          </p>
        </div>
        <Link href="/dashboard/posts/create">
          <Button className="gap-2">
            <PlusCircle className="h-4 w-4" />
            New Post
          </Button>
        </Link>
      </div>

      {/* Analytics Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockStats.totalPosts}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+{mockStats.monthlyGrowth.posts}%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockStats.totalViews.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+{mockStats.monthlyGrowth.views}%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Likes</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockStats.totalLikes}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+{mockStats.monthlyGrowth.likes}%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Comments</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockStats.totalComments}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+{mockStats.monthlyGrowth.comments}%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Recent Posts</CardTitle>
              <CardDescription>
                Your latest blog posts and their performance
              </CardDescription>
            </div>
            <Link href="/dashboard/posts">
              <Button variant="outline" size="sm">
                View All
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Views</TableHead>
                <TableHead className="text-right">Likes</TableHead>
                <TableHead className="text-right">Comments</TableHead>
                <TableHead>Published</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockRecentPosts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell className="font-medium">
                    <Link 
                      href={`/dashboard/posts/${post.id}/edit`}
                      className="hover:underline"
                    >
                      {post.title}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={
                        post.status === 'published' ? 'default' :
                        post.status === 'draft' ? 'secondary' :
                        'outline'
                      }
                    >
                      {post.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    {post.views.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right">
                    {post.likes}
                  </TableCell>
                  <TableCell className="text-right">
                    {post.comments}
                  </TableCell>
                  <TableCell>
                    {post.publishedAt ? 
                      new Date(post.publishedAt).toLocaleDateString() : 
                      '-'
                    }
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <Link href="/dashboard/posts/create">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PlusCircle className="h-5 w-5" />
                Create New Post
              </CardTitle>
              <CardDescription>
                Start writing your next blog post
              </CardDescription>
            </CardHeader>
          </Link>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <Link href="/dashboard/analytics">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                View Analytics
              </CardTitle>
              <CardDescription>
                Detailed insights about your blog performance
              </CardDescription>
            </CardHeader>
          </Link>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <Link href="/dashboard/settings">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Manage Profile
              </CardTitle>
              <CardDescription>
                Update your author profile and settings
              </CardDescription>
            </CardHeader>
          </Link>
        </Card>
      </div>
    </div>
  )
}
