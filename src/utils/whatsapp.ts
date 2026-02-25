/**
 * Formats a WhatsApp link for a specific property.
 * @param phoneNumber The business WhatsApp number (including country code, without +).
 * @param propertyName The name of the property the user is interested in.
 */
export const getWhatsAppLink = (phoneNumber: string, propertyName: string): string => {
    const message = `I am interested in ${propertyName}`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};

/**
 * Common business contact details.
 */
export const CONTACT_INFO = {
    phone: "+91XXXXXXXXXX",
    whatsapp: "91XXXXXXXXXX",
    email: "sales@wisemount.com",
};
