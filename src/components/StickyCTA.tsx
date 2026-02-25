'use client';

import { CONTACT_INFO, getWhatsAppLink } from '@/utils/whatsapp';

const StickyCTA = ({ propertyName }: { propertyName?: string }) => {
    const whatsappLink = getWhatsAppLink(CONTACT_INFO.whatsapp, propertyName || "General Inquiry");

    return (
        <div style={{
            position: 'fixed',
            bottom: '1.5rem',
            left: '1.5rem',
            right: '1.5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(12px)',
            border: '1px solid var(--border-color)',
            borderRadius: '1rem',
            padding: '1rem',
            display: 'flex',
            gap: '0.75rem',
            zIndex: 1000,
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
        }} className="mobile-only">
            <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="btn btn-primary"
                style={{ flex: 1, backgroundColor: '#000', backgroundImage: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
            >
                📞 Call
            </a>
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ flex: 1, backgroundColor: '#25D366', backgroundImage: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
            >
                💬 WhatsApp
            </a>
        </div>
    );
};

export default StickyCTA;
