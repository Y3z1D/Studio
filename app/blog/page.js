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
              The World Inside the Network: My Journey from Curiosity to Cybersecurity
            </h1>

            <p className="studio-card-text">
              I was born in 1998 and grew up during one of the most significant periods
              in technological history. As the internet evolved from static web pages to
              interactive platforms and mobile devices transformed how people connected,
              I became fascinated by the digital world that was forming around me.
            </p>

            <h2>Growing Up in a Time of Digital Transformation</h2>

            <p>
              In 2006, the world entered the era of Web 2.0, where websites became more
              interactive and communities began shaping the internet. In 2007, Apple
              introduced the iPhone, helping bring the internet into people's pockets.
              These innovations changed the way society communicated, learned, and
              connected.
            </p>

            <p>
              As a child, I watched these changes unfold without fully understanding
              their significance. What I did understand was that technology fascinated
              me.
            </p>

            <h2>The World Inside the Network</h2>

            <p>
              I often imagined there was an entire world living inside the network.
              Every website felt like a destination. Every online interaction seemed
              connected to something larger than what appeared on the screen.
            </p>

            <p>
              I constantly wondered how information traveled around the globe in
              seconds. How could people communicate instantly from different countries?
              What happened behind the scenes when a website loaded?
            </p>

            <p>
              Those questions became the beginning of my journey.
            </p>

            <h2>Discovering Technology</h2>

            <p>
              My curiosity pushed me to learn more about computers, software, websites,
              and the systems that powered them. Technology was no longer just something
              I used—it became something I wanted to understand.
            </p>

            <p>
              The deeper I explored, the more I realized that behind every application,
              website, and online service was a complex infrastructure connecting people
              across the world.
            </p>

            <h2>Entering the World of Networking</h2>

            <p>
              Networking became my first step into understanding that infrastructure.
              Learning about routers, switches, protocols, and internet architecture
              revealed how devices communicate and how data moves across networks.
            </p>

            <p>
              For the first time, I could see the invisible systems that make the modern
              internet possible.
            </p>

            <h2>The Move Into Cybersecurity</h2>

            <p>
              Understanding networks naturally led me toward cybersecurity. I wanted to
              understand not only how systems worked, but how they could be protected.
            </p>

            <p>
              Through education, certifications, projects, and professional experience,
              I developed skills in security operations, vulnerability assessments,
              threat detection, and defensive security practices.
            </p>

            <h2>Building Experience Across Security Domains</h2>

            <p>
              My experience expanded beyond cybersecurity into physical security,
              electronic security systems, surveillance technologies, access control,
              customer service, and leadership.
            </p>

            <p>
              These experiences taught me that security is about more than technology.
              It is about people, processes, and protecting what matters.
            </p>

            <h2>From Learning to Building</h2>

            <p>
              As my knowledge grew, so did my desire to create. This led me to build
              TwinVault Technologies, where I continue exploring cybersecurity,
              networking, cloud technologies, automation, and digital solutions.
            </p>

            <p>
              Entrepreneurship became another way to apply what I had learned while
              helping others navigate an increasingly connected world.
            </p>

            <h2>Looking Ahead</h2>

            <p>
              The child who imagined a world inside the network eventually discovered
              that such a world truly exists. It lives in the connections between
              people, technology, and ideas that shape our modern society.
            </p>

            <p>
              My journey continues with the same curiosity that started it all:
              understanding how things work, building new solutions, and helping create
              a more secure future.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
