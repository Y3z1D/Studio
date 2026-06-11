import Link from 'next/link';

export const metadata = {
  title: 'Blog | Y3z1D Studio',
  description: 'Web design, security, and client-focused development articles from Y3z1D Studio'
};

export default function BlogPage() {
  return (
    <main className="studio-main text-slate-100 min-h-screen relative">
      <div className="absolute inset-0 bg-slate-950 z-0" aria-hidden="true"></div>

      <div className="relative z-20">
        <section className="studio-shell studio-section pt-24">
          <Link href="/" className="studio-back-link">
            Back Home
          </Link>

          <div className="studio-card blog-article">
            <p className="studio-card-text mb-3">Published Jun 11, 2026</p>
            <h1 className="studio-section-title mb-5">
              How to Create a Professional Website in 2026
            </h1>

            <p className="studio-card-text">
              A professional website in 2026 needs more than a clean layout. It needs fast
              loading, clear branding, responsive design, accessible content, and a secure
              foundation that helps visitors trust the business behind it.
            </p>

            <h2>Start With a Clear Purpose</h2>
            <p>
              Every section should help visitors understand who you are, what you offer, and
              what action they should take next. Keep the homepage focused, remove distractions,
              and make the contact path easy to find.
            </p>

            <h2>Design for Trust</h2>
            <p>
              Consistent spacing, readable typography, strong contrast, and polished mobile
              layouts make a site feel reliable. Security-conscious details like HTTPS, strict
              browser headers, and careful form handling also support that trust.
            </p>

            <h2>Make Performance a Feature</h2>
            <p>
              Compress images, avoid unnecessary scripts, and keep the page structure simple.
              A fast website feels more professional and helps users stay focused on your offer.
            </p>

            <h2>Keep Improving</h2>
            <p>
              A website is never fully finished. Review content, update examples, test forms,
              and keep security settings current so the site continues to represent your work
              well over time.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
