import { Metadata } from 'next'
import { notFound } from 'next/navigation'

// TODO: Replace with MDX rendering and Supabase fetch
async function getPost(slug: string) {
  if (!slug) return null
  return {
    title: 'Demo Post',
    description: 'MDX rendering placeholder',
    content: `# Hello MDX\n\nThis is where your MDX content will render.`,
    author: { username: 'demo', name: 'Demo Author' },
    tags: ['demo', 'mdx'],
    createdAt: new Date().toISOString(),
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  if (!post) return notFound()

  return (
    <article className="container prose prose-slate dark:prose-invert max-w-3xl py-10">
      <h1>{post.title}</h1>
      <p className="mt-0 text-muted-foreground">By {post.author.name}</p>
      <hr />
      {/* Placeholder for MDX renderer (e.g., next-mdx-remote or MDXProvider) */}
      <div>
        <pre className="whitespace-pre-wrap text-sm">{post.content}</pre>
      </div>
    </article>
  )
}


