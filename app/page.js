import Image from 'next/image';
import BlogPortalCard from './components/BlogPortalCard';
import ContactForm from './components/ContactForm';

export default function Home() {
  return (
    <main className="studio-main text-slate-100 min-h-screen relative">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/BGcyber.jpeg"
          alt=""
          aria-hidden="true"
          fill
          priority
          className="object-cover animated-bg"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-slate-950/80 z-10" aria-hidden="true"></div>

      <div className="relative z-20">

        {/* HERO SECTION */}
        <section className="studio-shell studio-hero">
          <div className="studio-hero-content">
            <h1 className="studio-title">
              Y3z1d Studio
            </h1>
            <p className="studio-subtitle">
              Freelance • Code that connects • Pages that convert • Digital solutions
            </p>
            <a
              href="#contact"
              className="studio-button"
            >
              Hire Me
            </a>
          </div>
        </section>

        {/* SERVICES */}
        <section className="studio-shell studio-section">
          <h2 className="studio-section-title">Services</h2>

          <div className="studio-grid">
            {[
              {
                title: "Business Websites",
                desc: "Custom WordPress builds with secure, scalable architecture."
              },
              {
                title: "Landing Pages",
                desc: "High-conversion pages optimized for clarity and speed."
              },
              {
                title: "SEO Basics",
                desc: "Foundational SEO setup to boost visibility and ranking."
              },
              {
                title: "Website Security",
                desc: "Hardening, monitoring, and protection against common threats."
              }
            ].map((service, i) => (
              <div
                key={i}
                className="studio-card"
              >
                <h3 className="studio-card-title">{service.title}</h3>
                <p className="studio-card-text">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PORTFOLIO */}
        <section className="studio-shell studio-section">
          <h2 className="studio-section-title">Portfolio</h2>

          <div className="studio-card">
            <h3 className="studio-card-title text-xl">
              Cybersecurity Web Application
            </h3>
            <p className="studio-card-text mb-3">
              A modern cybersecurity-focused web application demonstrating secure identity
              and access management concepts. Includes MFA workflows, RBAC, dashboards,
              and compliance-focused architecture.
            </p>
            <p className="studio-card-text mb-3">
              Optimized for performance, accessibility, and mobile responsiveness while
              delivering an enterprise-grade user experience.
            </p>
            <p className="studio-card-text text-sm">
              <strong className="text-emerald-300">Skills:</strong> JavaScript, HTML, Web Development,
              Cybersecurity Management, DNS
            </p>
            <p className="studio-card-text text-sm">
              <strong className="text-emerald-300">Published:</strong> Jun 8, 2026
            </p>
          </div>
        </section>

        {/* BLOG */}
        <section className="studio-shell studio-section">
          <h2 className="studio-section-title">Blog</h2>

          <BlogPortalCard />
        </section>

        {/* CONTACT */}
        <section id="contact" className="studio-shell studio-section pb-24">
          <h2 className="studio-section-title">Contact</h2>

          <div className="studio-card">
            <p className="studio-card-text mb-5">
              Send a message through the secure contact form below.
            </p>

            <div>
              <ContactForm />
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
