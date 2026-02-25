'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import SearchBar from '@/components/SearchBar';
import properties from '@/data/properties.json';

export default function PropertiesPage() {
    const [filteredProperties, setFilteredProperties] = useState(properties);
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filterListings = (query: string, type: string) => {
        let result = properties;

        if (type !== 'All') {
            result = result.filter(p => p.type === type);
        }

        if (query) {
            result = result.filter(p =>
                p.title.toLowerCase().includes(query.toLowerCase()) ||
                p.location.toLowerCase().includes(query.toLowerCase())
            );
        }

        setFilteredProperties(result);
    };

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        filterListings(query, activeFilter);
    };

    const handleFilterChange = (type: string) => {
        setActiveFilter(type);
        filterListings(searchQuery, type);
    };

    return (
        <main>
            <Header />

            <div className="section" style={{ backgroundColor: '#f9fafb', paddingTop: '4rem', paddingBottom: '4rem' }}>
                <div className="container">
                    <h1 style={{ textAlign: 'center', marginBottom: '2.5rem', fontSize: '2.5rem' }}>All Properties</h1>
                    <SearchBar onSearch={handleSearch} onFilterChange={handleFilterChange} />
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <p style={{ color: 'var(--text-muted)' }}>Showing {filteredProperties.length} results</p>
                        {activeFilter !== 'All' && (
                            <span style={{ backgroundColor: '#e0f2fe', color: '#0369a1', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: '600' }}>
                                Type: {activeFilter}
                            </span>
                        )}
                    </div>

                    {filteredProperties.length > 0 ? (
                        <div className="grid">
                            {filteredProperties.map(property => (
                                <PropertyCard key={property.id} property={property} />
                            ))}
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                            <h3>No properties found match your criteria.</h3>
                            <button
                                className="btn"
                                style={{ marginTop: '1rem', border: '1px solid var(--border-color)', background: 'white' }}
                                onClick={() => {
                                    setSearchQuery('');
                                    setActiveFilter('All');
                                    setFilteredProperties(properties);
                                }}
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </main>
    );
}
