import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import properties from '@/data/properties.json';
import locations from '@/data/locations.json';
import { constructMetadata } from '@/utils/seo';

interface Props {
    params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
    return locations.map((location) => ({
        city: location.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { city } = await params;
    const location = locations.find((l) => l.slug === city);

    if (!location) return constructMetadata({ title: 'Location Not Found' });

    return constructMetadata({
        title: `Properties in ${location.name}`,
        description: `Browse the best real estate properties in ${location.name}.`,
    });
}

export default async function LocationPage({ params }: Props) {
    const { city } = await params;
    const location = locations.find((l) => l.slug === city);

    if (!location) {
        notFound();
    }

    const filteredProperties = properties.filter(p => p.location.toLowerCase() === location.name.toLowerCase());

    return (
        <main>
            <Header />

            <div className="section" style={{ backgroundColor: '#f9fafb', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Properties in {location.name}</h1>
                    <p style={{ color: 'var(--text-muted)' }}>Showing all available listings in {location.name}</p>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    {filteredProperties.length > 0 ? (
                        <div className="grid">
                            {filteredProperties.map(property => (
                                <PropertyCard key={property.id} property={property} />
                            ))}
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                            <h3>No properties currently available in {location.name}.</h3>
                            <a href="/properties" className="btn btn-primary" style={{ marginTop: '1rem' }}>View All Properties</a>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
