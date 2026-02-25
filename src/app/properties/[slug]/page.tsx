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
                    <div className="responsive-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
                        {/* Image Section */}
                        <div>
                            <div style={{
                                backgroundColor: '#f1f5f9',
                                height: '500px',
                                borderRadius: '1.5rem',
                                overflow: 'hidden',
                                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                                marginBottom: '1.5rem'
                            }}>
                                <img
                                    src={property.images[0]}
                                    alt={property.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                                <div style={{ backgroundColor: '#f1f5f9', height: '120px', borderRadius: '1rem', overflow: 'hidden' }}>
                                    <img src={property.images[0]} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: '0.6' }} />
                                </div>
                                <div style={{ backgroundColor: '#f1f5f9', height: '120px', borderRadius: '1rem' }}></div>
                                <div style={{ backgroundColor: '#f1f5f9', height: '120px', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontWeight: '600' }}>+ More</div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div style={{ paddingTop: '1rem' }}>
                            <div style={{ marginBottom: '2rem' }}>
                                <span className="badge badge-blue" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>
                                    {property.type}
                                </span>
                                <h1 style={{ fontSize: '3rem', fontWeight: '900', marginTop: '1.5rem', marginBottom: '0.75rem', letterSpacing: '-0.025em' }}>{property.title}</h1>
                                <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    📍 {property.location}
                                </p>
                                <div style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--blue-primary)', marginBottom: '2rem' }}>{property.price}</div>
                            </div>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(3, 1fr)',
                                gap: '1.5rem',
                                padding: '2rem 0',
                                borderTop: '2px solid var(--border-color)',
                                borderBottom: '2px solid var(--border-color)',
                                marginBottom: '2.5rem'
                            }}>
                                <div>
                                    <div style={{ fontSize: '1.25rem', fontWeight: '800' }}>{property.bedrooms}</div>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: '600' }}>Bedrooms</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '1.25rem', fontWeight: '800' }}>{property.bathrooms}</div>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: '600' }}>Bathrooms</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '1.25rem', fontWeight: '800' }}>{property.sqft}</div>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: '600' }}>Sq Ft Area</div>
                                </div>
                            </div>

                            <div style={{ marginBottom: '2.5rem' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem' }}>About this property</h3>
                                <p style={{ lineHeight: '1.8', color: '#334155', fontSize: '1.125rem' }}>{property.description}</p>
                            </div>

                            <div style={{ marginBottom: '3rem' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.25rem' }}>Key Amenities</h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                    {property.amenities.map((amenity, index) => (
                                        <span key={index} style={{
                                            background: '#f8fafc',
                                            border: '1px solid var(--border-color)',
                                            padding: '0.75rem 1.25rem',
                                            borderRadius: '0.75rem',
                                            fontSize: '0.95rem',
                                            fontWeight: '600',
                                            color: '#475569'
                                        }}>
                                            ✨ {amenity}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '1rem' }}>
                                <a href={`tel:+91XXXXXXXXXX`} className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '1.25rem' }}>
                                    📞 Call Agent
                                </a>
                                <a
                                    href={`https://wa.me/91XXXXXXXXXX?text=I%20am%20interested%20in%20${encodeURIComponent(property.title)}`}
                                    target="_blank"
                                    className="btn btn-primary"
                                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', backgroundColor: '#25D366', backgroundImage: 'none', padding: '1.25rem' }}
                                >
                                    💬 WhatsApp Inquiry
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
