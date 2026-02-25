import Link from 'next/link';
import Image from 'next/image';

interface Property {
    id: string;
    title: string;
    slug: string;
    price: string;
    location: string;
    type: string;
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    images: string[];
}

const PropertyCard = ({ property }: { property: Property }) => {
    return (
        <div className="property-card">
            <Link href={`/properties/${property.slug}`}>
                <div style={{ position: 'relative', height: '240px', width: '100%', overflow: 'hidden' }}>
                    <img
                        src={property.images[0]}
                        alt={property.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                        <span className="badge badge-blue">{property.type}</span>
                    </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                        <span style={{ fontSize: '1.5rem', fontWeight: '900', color: 'var(--blue-primary)' }}>{property.price}</span>
                    </div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: '700', lineHeight: '1.3' }}>
                        {property.title}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem', fontSize: '0.875rem' }}>
                        📍 {property.location}
                    </p>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingTop: '1rem',
                        borderTop: '1px solid var(--border-color)',
                        fontSize: '0.875rem',
                        color: 'var(--text-muted)',
                        marginBottom: '1rem'
                    }}>
                        <span>🛏️ {property.bedrooms} Beds</span>
                        <span>🚿 {property.bathrooms} Baths</span>
                        <span>📐 {property.sqft} sqft</span>
                    </div>
                </div>
            </Link>
            <div style={{ padding: '0 1.5rem 1.5rem', display: 'flex', gap: '0.75rem' }}>
                <a
                    href={`tel:+91XXXXXXXXXX`}
                    className="btn btn-outline"
                    style={{ flex: 1, padding: '0.6rem', fontSize: '0.875rem', border: '2px solid var(--blue-primary)', color: 'var(--blue-primary)' }}
                >
                    Call
                </a>
                <a
                    href={`https://wa.me/91XXXXXXXXXX?text=I%20am%20interested%20in%20${encodeURIComponent(property.title)}`}
                    target="_blank"
                    className="btn btn-primary"
                    style={{ flex: 1, padding: '0.6rem', fontSize: '0.875rem', backgroundColor: '#25D366', backgroundImage: 'none' }}
                >
                    WhatsApp
                </a>
            </div>
        </div>
    );
};

export default PropertyCard;
