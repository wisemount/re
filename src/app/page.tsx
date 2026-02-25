import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import properties from '@/data/properties.json';
import locations from '@/data/locations.json';
import { constructMetadata } from '@/utils/seo';

export const metadata: Metadata = constructMetadata({
  title: "Home",
});

export default function Home() {
  const featuredProperties = properties.filter(p => p.featured);

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="section" style={{
        backgroundImage: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(43, 118, 189, 0.8)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white',
        textAlign: 'center',
        padding: '12rem 0'
      }}>
        <div className="container">
          <span className="badge badge-blue" style={{ marginBottom: '1.5rem', fontSize: '1rem', padding: '0.5rem 1.5rem', background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>Fresh Approach. Strategic Solutions.</span>
          <h1 style={{ fontSize: '5rem', fontWeight: '900', marginBottom: '2rem', letterSpacing: '-0.05em', lineHeight: '1.0' }}>
            Transforming Real Estate <br /> Through <span style={{ background: 'var(--gradient-logo)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Solutions</span>
          </h1>
          <p style={{ fontSize: '1.6rem', marginBottom: '4rem', maxWidth: '850px', margin: '0 auto', opacity: '0.9', fontWeight: '400', lineHeight: '1.5' }}>
            WiseMount is a modern real estate collective providing expert strategic management and innovative investment solutions. We build lasting partnerships.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <Link href="/solutions" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem' }}>
              Explore Our Solutions
            </Link>
            <Link href="/#collaborate" className="btn" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem', border: '2px solid white', color: 'white', fontWeight: '700' }}>
              Collaborate With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Preview Section */}
      <section className="section" id="solutions" style={{ borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3.5rem', fontWeight: '900', letterSpacing: '-0.025em', marginBottom: '1rem' }}>Expert Solutions</h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>Tailored strategies designed for investors, developers, and property owners.</p>
          </div>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
            {[
              {
                title: "Strategic Consulting",
                desc: "Data-driven market analysis and asset optimization to maximize value of your real estate portfolio.",
                icon: "📊",
                color: "badge-blue"
              },
              {
                title: "Portfolio Management",
                desc: "End-to-end oversight using modern technology to streamline operations and ensure high-yield performance.",
                icon: "🏢",
                color: "badge-purple"
              },
              {
                title: "Investment Advisory",
                desc: "Connecting visionary investors with high-potential opportunities in emerging urban markets.",
                icon: "🚀",
                color: "badge-orange"
              }
            ].map((sol, i) => (
              <div key={i} className="property-card" style={{ padding: '3rem 2.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>{sol.icon}</div>
                <span className={`badge ${sol.color}`} style={{ marginBottom: '1rem', display: 'inline-block' }}>Real Estate</span>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '1.25rem' }}>{sol.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1.1rem' }}>{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties Section (Restored Structure) */}
      <section className="section" id="featured" style={{ backgroundColor: '#fcfcfc' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
            <div>
              <span className="badge badge-purple" style={{ marginBottom: '1rem', display: 'inline-block' }}>Property Portfolio</span>
              <h2 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '0.5rem', letterSpacing: '-0.025em' }}>Featured Assets</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>A demonstration of our curated asset management focus.</p>
            </div>
          </div>
          <div className="grid">
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="section" id="collaborate" style={{ backgroundColor: '#0f172a', color: 'white', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '40%', height: '80%', background: 'var(--gradient-logo)', filter: 'blur(150px)', opacity: '0.15' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="responsive-grid-2" style={{ alignItems: 'center', gap: '6rem' }}>
            <div>
              <span className="badge" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', marginBottom: '1.5rem', display: 'inline-block' }}>Strategic Partner</span>
              <h2 style={{ fontSize: '4rem', fontWeight: '900', marginBottom: '2rem', letterSpacing: '-0.025em' }}>Let's Build <br /> Together</h2>
              <p style={{ fontSize: '1.25rem', lineHeight: '1.8', opacity: '0.8', marginBottom: '2.5rem' }}>
                We believe in the power of shared expertise. Whether you're a developer with a vision, an investor looking for grounded opportunities, or a tech partner reinventing the space—WiseMount is open for collaboration.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '3rem', fontSize: '1.1rem' }}>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>✅ Transparent Partnership Models</li>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>✅ Innovation-First Mindset</li>
                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>✅ Rapid Execution Framework</li>
              </ul>
              <a href={`https://wa.me/91XXXXXXXXXX?text=I%20am%20interested%20in%20collaboration%20with%20WiseMount`} target="_blank" className="btn btn-primary" style={{ padding: '1.25rem 3.5rem' }}>
                Start a Conversation
              </a>
            </div>
            <div style={{ padding: '2rem', borderRadius: '2rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1.5rem' }}>Why WiseMount?</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {[
                  { t: "Strategic Execution", d: "Agile methodologies to ensure market-leading results." },
                  { t: "Tech-Enabled", d: "Utilizing modern stacks to drive property efficiencies." },
                  { t: "Creative Focus", d: "Unique solutions for complex urban challenges." }
                ].map((x, i) => (
                  <div key={i}>
                    <div style={{ color: 'var(--blue-primary)', fontWeight: '800', marginBottom: '0.25rem', fontSize: '1.1rem' }}>{x.t}</div>
                    <div style={{ opacity: '0.7' }}>{x.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
