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
        backgroundImage: 'linear-gradient(135deg, rgba(43, 118, 189, 0.9), rgba(103, 78, 180, 0.8)), url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white',
        textAlign: 'center',
        padding: '10rem 0'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '4.5rem', fontWeight: '900', marginBottom: '1.5rem', letterSpacing: '-0.05em', lineHeight: '1.1' }}>
            Find Your Dream Home <br /> With WiseMount
          </h1>
          <p style={{ fontSize: '1.5rem', marginBottom: '3.5rem', maxWidth: '800px', margin: '0 auto', opacity: '0.9', fontWeight: '500' }}>
            Explore the finest properties in premium locations. Your journey to a perfect space starts with us.
          </p>
          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center' }}>
            <Link href="/properties" className="btn" style={{ padding: '1.25rem 2.5rem', fontSize: '1.125rem', backgroundColor: 'white', color: 'var(--blue-primary)', fontWeight: '700' }}>
              Explore Properties
            </Link>
            <a href={`tel:+91XXXXXXXXXX`} className="btn" style={{ padding: '1.25rem 2.5rem', fontSize: '1.125rem', border: '2px solid white', color: 'white', fontWeight: '700' }}>
              📞 Call an Agent
            </a>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="section" id="featured">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
            <div>
              <span className="badge badge-purple" style={{ marginBottom: '1rem', display: 'inline-block' }}>Curated for you</span>
              <h2 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '0.5rem', letterSpacing: '-0.025em' }}>Featured Properties</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Handpicked listings that define luxury and comfort.</p>
            </div>
            <Link href="/properties" style={{ color: 'var(--blue-primary)', fontWeight: '700', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              View All Listings <span>&rarr;</span>
            </Link>
          </div>
          <div className="grid">
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="section" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="badge badge-blue" style={{ marginBottom: '1rem', display: 'inline-block' }}>Neighborhoods</span>
            <h2 style={{ fontSize: '3rem', fontWeight: '900', letterSpacing: '-0.025em' }}>Explore by Location</h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {locations.map(location => (
              <Link
                key={location.id}
                href={`/location/${location.slug}`}
                className="location-link"
              >
                📍 {location.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
