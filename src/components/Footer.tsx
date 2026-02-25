import Link from 'next/link';
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
                <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
                    <div style={{ maxWidth: '400px' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1.5rem', background: 'var(--gradient-logo)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>WiseMount</h3>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
                            We provide innovative real estate solutions tailored for the modern market. We prioritize collaboration and fresh perspectives to build the future of property.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ fontWeight: '700', marginBottom: '1.5rem' }}>Quick Links</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-muted)' }}>
                            <Link href="/">Home</Link>
                            <Link href="/solutions">Solutions</Link>
                            <Link href="/#collaborate">Collaboration</Link>
                            <Link href="/contact">Contact Us</Link>
                        </div>
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
