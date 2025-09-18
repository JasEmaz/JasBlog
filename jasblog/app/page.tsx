import { redirect } from 'next/navigation'

/**
 * Root page that redirects to the main blog listing
 * This ensures the home page shows the blog content
 */
export default function HomePage() {
  redirect('/blog')
}
