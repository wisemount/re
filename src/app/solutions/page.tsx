import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { constructMetadata } from '@/utils/seo';
import Link from 'next/link';

export const metadata: Metadata = constructMetadata({
    title: "Solutions",
    description: "Innovative real estate solutions for modern urban living and strategic investments.",
});

export default function SolutionsPage() {
    const solutions = [
        {
            title: "Strategic Consulting",
            desc: "Our strategic consulting services provide property owners and developers with deep market insights. We focus on asset optimization, risk mitigation, and identifying high-growth corridors.",
            details: ["Market Trend Analysis", "Asset Repositioning", "Feasibility Studies"],
            icon: "📊"
        },
        {
            title: "Portfolio Management",
            desc: "We utilize cutting-edge property management tech to oversee your assets. Our focus is on maintaining high occupancy rates and optimizing operational costs.",
            details: ["Cloud-based Reporting", "Occupancy Optimization", "Vendor Management"],
            icon: "🏢"
        },
        {
            title: "Investment Advisory",
            desc: "Navigating the real estate market requires precision. We act as a bridge between capital and high-potential urban projects, ensuring transparency and growth.",
            details: ["Deal Structuring", "Due Diligence", "Urban Revitalization Projects"],
            icon: "🚀"
        }
    ];

    return (
        <main>
            <Header />

            <section className="section" style={{ backgroundColor: '#f8fafc', paddingTop: '8rem' }}>
                <div className="container">
                    <div style={{ marginBottom: '5rem', maxWidth: '800px' }}>
                        <span className="badge badge-blue" style={{ marginBottom: '1rem', display: 'inline-block' }}>Our Expertise</span>
                        <h1 style={{ fontSize: '4rem', fontWeight: '900', letterSpacing: '-0.025em', marginBottom: '2rem' }}>Innovative Solutions for the Property Market</h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                            WiseMount provides a comprehensive suite of solutions designed to address the challenges of modern real estate. From strategic planning to execution, we are your partner in growth.
                        </p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                        {solutions.map((sol, i) => (
                            <div key={i} style={{
                                display: 'grid',
                                gridTemplateColumns: i % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr',
                                gap: '4rem',
                                alignItems: 'center',
                                backgroundColor: 'white',
                                padding: '4rem',
                                borderRadius: '2rem',
                                border: '1px solid var(--border-color)',
                                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
                            }} className="responsive-grid-2">
                                {i % 2 !== 0 && (
                                    <div style={{ fontSize: '10rem', textAlign: 'center' }}>{sol.icon}</div>
                                )}
                                <div>
                                    <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '1.5rem' }}>{sol.title}</h2>
                                    <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2.5rem' }}>{sol.desc}</p>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                        {sol.details.map((detail, idx) => (
                                            <div key={idx} style={{ fontWeight: '700', color: 'var(--blue-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                ✔️ {detail}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {i % 2 === 0 && (
                                    <div style={{ fontSize: '10rem', textAlign: 'center' }}>{sol.icon}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <div style={{
                        background: 'var(--gradient-logo)',
                        padding: '5rem',
                        borderRadius: '3rem',
                        color: 'white'
                    }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '1.5rem' }}>Ready to optimize your portfolio?</h2>
                        <p style={{ fontSize: '1.25rem', marginBottom: '3rem', opacity: '0.9' }}>Let's discuss how WiseMount can provide the solutions you need.</p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <a href="mailto:solutions@wisemount.com" className="btn" style={{ background: 'white', color: 'var(--blue-primary)', padding: '1rem 3rem' }}>
                                Email Our Experts
                            </a>
                            <a href="https://wa.me/91XXXXXXXXXX" className="btn" style={{ border: '2px solid white', color: 'white', padding: '1rem 3rem' }}>
                                Quick Enquiry
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
