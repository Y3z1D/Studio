import BlogPortalCard from '@/components/BlogPortalCard'
import ContactForm from '@/components/ContactForm'
import BGImage from '@/public/BGcyber.jpeg'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <section className="min-h-screen relative flex items-center justify-center">
        <Image
          src={BGImage}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-xl">Full-stack developer | Creative problem solver</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Posts</h2>
        <BlogPortalCard />
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
        <ContactForm />
      </section>
    </main>
  )
}
