import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// TODO: Replace with Supabase fetch
async function getAuthor(username: string) {
  if (!username) return null
  return {
    username,
    name: 'Demo Author',
    bio: 'I write about MDX, AI, and building delightful UIs.',
    posts: [
      { slug: 'introducing-jasblog', title: 'Introducing JasBlog' },
      { slug: 'writing-with-mdx', title: 'Writing with MDX' },
    ],
  }
}

export default async function AuthorPage({ params }: { params: { username: string } }) {
  const author = await getAuthor(params.username)
  if (!author) return notFound()

  return (
    <div className="container max-w-4xl py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{author.name}</h1>
        <p className="text-muted-foreground">@{author.username}</p>
        <p className="mt-4 max-w-2xl text-foreground/90">{author.bio}</p>
      </div>

      <h2 className="mb-4 text-xl font-semibold">Posts</h2>
      <div className="grid gap-4">
        {author.posts.map((p) => (
          <Link key={p.slug} href={`/blog/posts/${p.slug}`}>
            <Card className="transition-colors hover:bg-accent">
              <CardHeader>
                <CardTitle className="text-lg">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">Read more →</CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}


