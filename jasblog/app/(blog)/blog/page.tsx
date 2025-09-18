
import Link from 'next/link'
import { Metadata } from 'next'
import {
  ArrowRight,
  Calendar,
  Clock,
  Eye,
  Feather,
  Heart,
  MessageSquare,
  Search,
  Sparkles,
  Star,
  Tag,
  TrendingUp,
  User,
  Zap,
} from 'lucide-react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read the latest posts from JasBlog authors',
}

export default function BlogIndexPage() {
  // Enhanced demo data with AI-focused content and engagement metrics
  const demoPosts = [
    {
      slug: 'the-future-of-ai-in-writing',
      title: 'The Future of AI in Content Creation',
      excerpt:
        'Explore how artificial intelligence is revolutionizing the writing process, from brainstorming to final draft.',
      tags: ['ai', 'writing', 'future-tech'],
      author: { name: 'Dr. Sarah Chen', avatar: '/avatars/sarah.png', role: 'AI Research Lead' },
      publishedAt: '2025-09-18',
      readingTime: 8,
      featuredImage: '/images/ai-writing.jpg',
      views: 2847,
      likes: 156,
      featured: true,
      trending: true,
    },
    {
      slug: 'mastering-nextjs-15',
      title: 'Mastering Next.js 15: A Developer\'s Guide',
      excerpt:
        'A deep dive into the new features of Next.js 15, including Turbopack, Server Actions, and advanced routing.',
      tags: ['nextjs', 'web-dev', 'guide'],
      author: { name: 'Alex Rodriguez', avatar: '/avatars/alex.png', role: 'Senior Developer' },
      publishedAt: '2025-09-15',
      readingTime: 12,
      featuredImage: '/images/nextjs-15.jpg',
      views: 1923,
      likes: 89,
      featured: false,
      trending: true,
    },
    {
      slug: 'minimalist-design-principles',
      title: 'The Power of Minimalism in UI/UX Design',
      excerpt:
        'Learn how to create clean, user-friendly interfaces by applying core principles of minimalist design.',
      tags: ['design', 'ui-ux', 'minimalism'],
      author: { name: 'Emily Zhang', avatar: '/avatars/emily.png', role: 'Design Director' },
      publishedAt: '2025-09-10',
      readingTime: 6,
      featuredImage: '/images/minimal-design.jpg',
      views: 1456,
      likes: 73,
      featured: false,
      trending: false,
    },
    {
      slug: 'supabase-for-beginners',
      title: 'Getting Started with Supabase',
      excerpt:
        'Your first steps into the world of Supabase for building scalable and secure backends with ease.',
      tags: ['supabase', 'database', 'tutorial'],
      author: { name: 'Marcus Johnson', avatar: '/avatars/marcus.png', role: 'Backend Engineer' },
      publishedAt: '2025-09-05',
      readingTime: 10,
      featuredImage: '/images/supabase-logo.jpg',
      views: 987,
      likes: 45,
      featured: false,
      trending: false,
    },
    {
      slug: 'ai-powered-code-review',
      title: 'AI-Powered Code Review: The Developer\'s New Best Friend',
      excerpt:
        'Discover how AI tools are transforming code review processes and improving code quality across development teams.',
      tags: ['ai', 'development', 'productivity'],
      author: { name: 'Dr. Sarah Chen', avatar: '/avatars/sarah.png', role: 'AI Research Lead' },
      publishedAt: '2025-09-12',
      readingTime: 7,
      featuredImage: '/images/ai-code-review.jpg',
      views: 1234,
      likes: 67,
      featured: false,
      trending: true,
    },
    {
      slug: 'modern-css-techniques',
      title: 'Modern CSS Techniques for 2025',
      excerpt:
        'Explore the latest CSS features and techniques that are shaping modern web design and development.',
      tags: ['css', 'web-dev', 'frontend'],
      author: { name: 'Lisa Park', avatar: '/avatars/lisa.png', role: 'Frontend Specialist' },
      publishedAt: '2025-09-08',
      readingTime: 9,
      featuredImage: '/images/modern-css.jpg',
      views: 876,
      likes: 42,
      featured: false,
      trending: false,
    },
  ]

  const featuredPost = demoPosts.find(post => post.featured) || demoPosts[0]
  const trendingPosts = demoPosts.filter(post => post.trending && !post.featured).slice(0, 3)
  const latestPosts = demoPosts.filter(post => !post.featured).slice(0, 6)
  
  const topTags = [
    { name: 'ai', count: 24, trending: true },
    { name: 'nextjs', count: 18, trending: true },
    { name: 'design', count: 15, trending: false },
    { name: 'tutorial', count: 21, trending: false },
    { name: 'productivity', count: 12, trending: true },
    { name: 'web-dev', count: 19, trending: false },
  ]
  
  const topAuthors = [
    { name: 'Dr. Sarah Chen', avatar: '/avatars/sarah.png', role: 'AI Research Lead', posts: 12 },
    { name: 'Alex Rodriguez', avatar: '/avatars/alex.png', role: 'Senior Developer', posts: 8 },
    { name: 'Emily Zhang', avatar: '/avatars/emily.png', role: 'Design Director', posts: 6 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section with Featured Post */}
      <section className="container-wide py-16 fade-in">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            AI-Enhanced Content Platform
          </div>
          <h1 className="heading-primary mb-4">
            Discover the Future of
            <span className="gradient-text"> AI-Powered Writing</span>
          </h1>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Join thousands of developers, writers, and AI enthusiasts exploring the cutting edge of technology and creativity.
          </p>
        </div>

        {/* Featured Article Showcase */}
        <Card className="featured-glow overflow-hidden border-none shadow-2xl card-hover max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-80 lg:h-auto overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-success/20 flex items-center justify-center">
                <div className="text-center">
                  <Zap className="h-20 w-20 text-primary mx-auto mb-4 animate-pulse" />
                  <p className="text-sm text-muted-foreground">Featured Content</p>
                </div>
              </div>
              {featuredPost.trending && (
                <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1 rounded-full bg-warning text-warning-foreground text-xs font-semibold">
                  <TrendingUp className="h-3 w-3" />
                  Trending
                </div>
              )}
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="h-4 w-4 text-warning" />
                <span className="font-medium">Featured Article</span>
              </div>
              <h2 className="heading-secondary mb-4">
                <Link
                  href={`/blog/posts/${featuredPost.slug}`}
                  className="hover:text-primary transition-colors duration-300"
                >
                  {featuredPost.title}
                </Link>
              </h2>
              <p className="body-regular text-muted-foreground mb-6">
                {featuredPost.excerpt}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredPost.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="interactive-scale">
                    #{tag}
                  </Badge>
                ))}
              </div>

              {/* Author and Meta */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 ring-2 ring-primary/20">
                    <AvatarImage src={featuredPost.author.avatar} alt={featuredPost.author.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {featuredPost.author.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{featuredPost.author.name}</p>
                    <p className="caption">{featuredPost.author.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{featuredPost.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      <span>{featuredPost.likes}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Link href={`/blog/posts/${featuredPost.slug}`}>
                  <Button className="gap-2 interactive-scale">
                    Read Full Article <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{featuredPost.readingTime} min read</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Trending Posts Section */}
      <section className="container-wide py-16 slide-up">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="heading-secondary mb-2">Trending Now</h2>
            <p className="text-muted-foreground">Most popular articles this week</p>
          </div>
          <Button variant="outline" className="gap-2">
            View All <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 stagger-children">
          {trendingPosts.map((post) => (
            <Card key={post.slug} className="card-hover overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-muted to-success/10 flex items-center justify-center">
                  <TrendingUp className="h-12 w-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-success text-success-foreground text-xs font-medium">
                  <TrendingUp className="h-3 w-3" />
                  Trending
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="line-clamp-2 text-lg font-semibold group-hover:text-primary transition-colors">
                  <Link href={`/blog/posts/${post.slug}`}>
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="line-clamp-2 text-sm">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {post.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={post.author.avatar} alt={post.author.name} />
                      <AvatarFallback className="text-xs">{post.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span>{post.author.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      <span>{post.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readingTime}m</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="container-wide pb-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Latest Posts */}
          <main className="lg:col-span-3">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="heading-secondary mb-2">Latest Articles</h2>
                <p className="text-muted-foreground">Fresh insights from our community</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">Filter</Button>
                <Button variant="outline" size="sm">Sort</Button>
              </div>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 stagger-children">
              {latestPosts.map((post) => (
                <Card key={post.slug} className="card-hover overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-muted via-muted/50 to-primary/5 flex items-center justify-center">
                      <Feather className="h-12 w-12 text-muted-foreground group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    {post.trending && (
                      <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full bg-warning text-warning-foreground text-xs font-medium">
                        <TrendingUp className="h-3 w-3" />
                        Hot
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <CardTitle className="line-clamp-2 text-lg font-semibold group-hover:text-primary transition-colors">
                        <Link href={`/blog/posts/${post.slug}`}>
                          {post.title}
                        </Link>
                      </CardTitle>
                    </div>
                    <CardDescription className="line-clamp-3 text-sm">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="interactive-scale text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={post.author.avatar} alt={post.author.name} />
                          <AvatarFallback className="text-xs bg-primary/10 text-primary">
                            {post.author.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{post.author.name}</p>
                          <p className="text-xs text-muted-foreground">{post.author.role}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-1">
                          <div className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            <span>{post.views}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="h-3 w-3" />
                            <span>{post.likes}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          <span>{post.publishedAt}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </main>

          {/* Enhanced Sidebar */}
          <aside className="space-y-8">
            {/* Advanced Search */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Search className="h-4 w-4" />
                Discover Content
              </h3>
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Search posts, tags, authors..." className="pl-10" />
                </div>
                <Button className="w-full gap-2">
                  <Sparkles className="h-4 w-4" />
                  AI-Powered Search
                </Button>
              </div>
            </Card>

            {/* Trending Tags */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Tag className="h-4 w-4" />
                Trending Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {topTags.map((tag) => (
                  <Button 
                    key={tag.name} 
                    variant={tag.trending ? "default" : "outline"} 
                    size="sm" 
                    className="gap-1 interactive-scale"
                    asChild
                  >
                    <Link href={`/blog/tags/${tag.name}`}>
                      #{tag.name}
                      {tag.trending && <TrendingUp className="h-3 w-3" />}
                    </Link>
                  </Button>
                ))}
              </div>
            </Card>

            {/* AI Newsletter */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 via-background to-success/5 border-primary/20">
              <div className="text-center space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">AI Writing Insights</h3>
                  <p className="text-sm text-muted-foreground">
                    Get weekly AI-powered writing tips and the latest tech insights delivered to your inbox.
                  </p>
                </div>
                <div className="space-y-2">
                  <Input placeholder="Enter your email..." type="email" />
                  <Button className="w-full gap-2">
                    <Sparkles className="h-4 w-4" />
                    Join 10,000+ Subscribers
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </Card>

            {/* Featured Authors */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <User className="h-4 w-4" />
                Featured Authors
              </h3>
              <div className="space-y-4">
                {topAuthors.map((author) => (
                  <div key={author.name} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <Avatar className="h-12 w-12 ring-2 ring-primary/20">
                      <AvatarImage src={author.avatar} alt={author.name} />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {author.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium">{author.name}</p>
                      <p className="text-xs text-muted-foreground mb-1">{author.role}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">{author.posts} posts</span>
                        <Link
                          href={`/blog/authors/${author.name.toLowerCase().replace(' ', '-')}`}
                          className="text-xs text-primary hover:underline"
                        >
                          View Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Platform Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Total Articles</span>
                  <span className="font-semibold">1,247</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Active Authors</span>
                  <span className="font-semibold">89</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Monthly Readers</span>
                  <span className="font-semibold">45.2K</span>
                </div>
              </div>
            </Card>
          </aside>
        </div>
      </section>
    </div>
  )
}




