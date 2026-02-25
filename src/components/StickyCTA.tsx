'use client';

import { CONTACT_INFO, getWhatsAppLink } from '@/utils/whatsapp';

const StickyCTA = ({ propertyName }: { propertyName?: string }) => {
    const whatsappLink = getWhatsAppLink(CONTACT_INFO.whatsapp, propertyName || "General Inquiry");

    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'white',
            borderTop: '1px solid var(--border-color)',
            padding: '0.75rem 1rem',
            display: 'flex',
            gap: '1rem',
            zIndex: 1000,
            boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.1)',
            // Shown only on mobile via CSS (simplification for this static build)
        }} className="mobile-only">
            <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="btn btn-primary"
                style={{ flex: 1, backgroundColor: '#000' }}
            >
                Call Now
            </a>
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ flex: 1, backgroundColor: '#25D366' }}
            >
                WhatsApp
            </a>
        </div>
    );
};

export default StickyCTA;
