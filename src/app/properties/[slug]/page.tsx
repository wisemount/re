import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import properties from '@/data/properties.json';
import { constructMetadata } from '@/utils/seo';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return properties.map((property) => ({
        slug: property.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const property = properties.find((p) => p.slug === slug);

    if (!property) return constructMetadata({ title: 'Property Not Found' });

    return constructMetadata({
        title: property.title,
        description: property.description,
    });
}

export default async function PropertyPage({ params }: Props) {
    const { slug } = await params;
    const property = properties.find((p) => p.slug === slug);

    if (!property) {
        notFound();
    }

    return (
        <main>
            <Header />

            <div className="section" style={{ paddingTop: '2rem' }}>
                <div className="container">
                    <div className="responsive-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
                        {/* Image Section */}
                        <div>
                            <div style={{
                                backgroundColor: '#eee',
                                height: '400px',
                                borderRadius: '0.75rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#888',
                                marginBottom: '1rem'
                            }}>
                                Main Highlight Image
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                                <div style={{ backgroundColor: '#eee', height: '100px', borderRadius: '0.5rem' }}></div>
                                <div style={{ backgroundColor: '#eee', height: '100px', borderRadius: '0.5rem' }}></div>
                                <div style={{ backgroundColor: '#eee', height: '100px', borderRadius: '0.5rem' }}></div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <span style={{
                                    backgroundColor: '#e0f2fe',
                                    color: '#0369a1',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '9999px',
                                    fontSize: '0.875rem',
                                    fontWeight: '600'
                                }}>
                                    {property.type}
                                </span>
                                <h1 style={{ fontSize: '2.5rem', marginTop: '1rem', marginBottom: '0.5rem' }}>{property.title}</h1>
                                <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>{property.location}</p>
                                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-color)' }}>{property.price}</div>
                            </div>

                            <div style={{
                                display: 'flex',
                                gap: '2rem',
                                padding: '1.5rem 0',
                                borderTop: '1px solid var(--border-color)',
                                borderBottom: '1px solid var(--border-color)',
                                marginBottom: '1.5rem'
                            }}>
                                <div>
                                    <div style={{ fontWeight: 'bold' }}>{property.bedrooms}</div>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Bedrooms</div>
                                </div>
                                <div>
                                    <div style={{ fontWeight: 'bold' }}>{property.bathrooms}</div>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Bathrooms</div>
                                </div>
                                <div>
                                    <div style={{ fontWeight: 'bold' }}>{property.sqft}</div>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Sq Ft</div>
                                </div>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{ marginBottom: '1rem' }}>Description</h3>
                                <p style={{ lineHeight: '1.6', color: '#4b5563' }}>{property.description}</p>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{ marginBottom: '1rem' }}>Amenities</h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                    {property.amenities.map((amenity, index) => (
                                        <span key={index} style={{
                                            border: '1px solid var(--border-color)',
                                            padding: '0.5rem 1rem',
                                            borderRadius: '0.375rem',
                                            fontSize: '0.875rem'
                                        }}>
                                            {amenity}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <a href={`tel:+91XXXXXXXXXX`} className="btn btn-primary" style={{ backgroundColor: '#000' }}>Call Agent</a>
                                <a
                                    href={`https://wa.me/91XXXXXXXXXX?text=I%20am%20interested%20in%20${encodeURIComponent(property.title)}`}
                                    target="_blank"
                                    className="btn btn-primary"
                                    style={{ backgroundColor: '#25D366' }}
                                >
                                    WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
            <StickyCTA propertyName={property.title} />
        </main>
    );
}
