import BlogPortalCard from '@/components/BlogPortalCard'

export const metadata = {
  title: 'Blog | Y3z1D Portfolio',
  description: 'Read my latest blog posts',
}

export default function BlogPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-12">Blog Posts</h1>
        <BlogPortalCard />
      </div>
    </main>
  )
}
