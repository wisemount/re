import Link from 'next/link';

const Header = () => {
    return (
        <header style={{
            borderBottom: '1px solid var(--border-color)',
            padding: '1rem 0',
            position: 'sticky',
            top: 0,
            backgroundColor: 'rgba(var(--background-rgb), 0.8)',
            backdropFilter: 'blur(8px)',
            zIndex: 100
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                    WiseMount
                </Link>
                <nav style={{ display: 'flex', gap: '1.5rem' }}>
                    <Link href="/properties">Properties</Link>
                    <Link href="/#featured">Featured</Link>
                    <Link href="/#contact">Contact</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
