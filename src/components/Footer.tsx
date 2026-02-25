import { CONTACT_INFO } from '@/utils/whatsapp';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#f9fafb',
            borderTop: '1px solid var(--border-color)',
            padding: '4rem 0',
            marginTop: '4rem'
        }}>
            <div className="container" id="contact">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem'
                }}>
                    <div>
                        <h3 style={{ marginBottom: '1rem' }}>WiseMount</h3>
                        <p style={{ color: 'var(--text-muted)' }}>
                            Your trusted partner in finding premium real estate properties.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '1rem' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '0.5rem' }}><a href="/properties">All Properties</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="/#featured">Featured Listings</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ marginBottom: '1rem' }}>Contact Us</h4>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Email: {CONTACT_INFO.email}</p>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Call: {CONTACT_INFO.phone}</p>
                    </div>
                </div>
                <div style={{
                    marginTop: '3rem',
                    paddingTop: '1.5rem',
                    borderTop: '1px solid var(--border-color)',
                    textAlign: 'center',
                    color: 'var(--text-muted)',
                    fontSize: '0.875rem'
                }}>
                    &copy; {new Date().getFullYear()} WiseMount Real Estate. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
