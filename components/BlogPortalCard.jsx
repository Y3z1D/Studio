'use client'

export default function BlogPortalCard() {
  const posts = [
    {
      id: 1,
      title: 'Getting Started with Next.js',
      excerpt: 'Learn how to build modern web applications with Next.js and React.',
      date: '2024-01-15',
    },
    {
      id: 2,
      title: 'Tailwind CSS Tips & Tricks',
      excerpt: 'Discover powerful techniques to make your styling workflow more efficient.',
      date: '2024-01-10',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {posts.map((post) => (
        <article
          key={post.id}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
        >
          <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          <time className="text-sm text-gray-500">{post.date}</time>
        </article>
      ))}
    </div>
  )
}
