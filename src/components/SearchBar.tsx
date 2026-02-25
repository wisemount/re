'use client';

import { useState } from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
    onFilterChange: (type: string) => void;
}

const SearchBar = ({ onSearch, onFilterChange }: SearchBarProps) => {
    const [query, setQuery] = useState('');

    return (
        <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: '800px',
            margin: '0 auto'
        }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                    type="text"
                    placeholder="Search by location, title..."
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        onSearch(e.target.value);
                    }}
                    style={{
                        flex: 1,
                        padding: '0.75rem',
                        border: '1px solid var(--border-color)',
                        borderRadius: '0.375rem',
                        fontSize: '1rem'
                    }}
                />
            </div>
            <div style={{
                display: 'flex',
                gap: '0.5rem',
                flexWrap: 'wrap',
                fontSize: '0.875rem'
            }}>
                <button className="btn" onClick={() => onFilterChange('All')} style={{ border: '1px solid var(--border-color)', backgroundColor: 'transparent' }}>All</button>
                <button className="btn" onClick={() => onFilterChange('Apartment')} style={{ border: '1px solid var(--border-color)', backgroundColor: 'transparent' }}>Apartment</button>
                <button className="btn" onClick={() => onFilterChange('Villa')} style={{ border: '1px solid var(--border-color)', backgroundColor: 'transparent' }}>Villa</button>
                <button className="btn" onClick={() => onFilterChange('Studio')} style={{ border: '1px solid var(--border-color)', backgroundColor: 'transparent' }}>Studio</button>
            </div>
        </div>
    );
};

export default SearchBar;
