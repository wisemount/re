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
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/hero-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '8rem 0'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Find Your Perfect Space</h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto' }}>
            Browse through our curated list of premium properties and find the home of your dreams today.
          </p>
          <Link href="/properties" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
            Explore Properties
          </Link>
        </div>
      </section>

      {/* Featured Section */}
      <section className="section" id="featured">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Featured Properties</h2>
              <p style={{ color: 'var(--text-muted)' }}>Some of our most exclusive listings</p>
            </div>
            <Link href="/properties" style={{ color: 'var(--accent-color)', fontWeight: '600' }}>View All &rarr;</Link>
          </div>
          <div className="grid">
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="section" style={{ backgroundColor: '#f9fafb' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '2.5rem', textAlign: 'center' }}>Explore by Location</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem'
          }}>
            {locations.map(location => (
              <Link
                key={location.id}
                href={`/location/${location.slug}`}
                style={{
                  backgroundColor: 'white',
                  padding: '1.5rem',
                  borderRadius: '0.5rem',
                  textAlign: 'center',
                  border: '1px solid var(--border-color)',
                  fontWeight: '600'
                }}
              >
                {location.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
