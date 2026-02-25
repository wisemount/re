import Link from 'next/link';

const Header = () => {
    return (
        <header style={{
            borderBottom: '1px solid var(--border-color)',
            padding: '0.75rem 0',
            position: 'sticky',
            top: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(12px)',
            zIndex: 100,
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                        width: '36px',
                        height: '36px',
                        background: 'var(--gradient-logo)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        WM
                    </div>
                    <span style={{
                        fontSize: '1.5rem',
                        fontWeight: '850',
                        background: 'var(--gradient-logo)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        letterSpacing: '-0.025em'
                    }}>
                        WiseMount
                    </span>
                </Link>
                <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <Link href="/" style={{ fontWeight: '600', color: 'var(--foreground-rgb)' }}>Home</Link>
                    <Link href="/solutions" style={{ fontWeight: '600' }}>Solutions</Link>
                    <Link href="/#collaborate" style={{ fontWeight: '600' }}>Collaborate</Link>
                    <a href={`https://wa.me/91XXXXXXXXXX?text=I%20want%20to%20collaborate%20with%20WiseMount`} className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.875rem' }}>
                        Partner with Us
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
