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
                <div style={{ position: 'relative', height: '200px', width: '100%' }}>
                    {/* Placeholder for images if not available */}
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#eee',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#888'
                    }}>
                        Image Placeholder
                    </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <span style={{ fontSize: '0.875rem', color: 'var(--accent-color)', fontWeight: '600' }}>{property.type}</span>
                        <span style={{ fontWeight: 'bold' }}>{property.price}</span>
                    </div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {property.title}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.875rem' }}>{property.location}</p>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingTop: '1rem',
                        borderTop: '1px solid var(--border-color)',
                        fontSize: '0.875rem',
                        color: 'var(--text-muted)'
                    }}>
                        <span>{property.bedrooms} Beds</span>
                        <span>{property.bathrooms} Baths</span>
                        <span>{property.sqft} sqft</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default PropertyCard;
