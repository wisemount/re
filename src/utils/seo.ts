import type { Metadata } from "next";

const SITE_NAME = "WiseMount Real Estate";
const SITE_DESCRIPTION = "Find your dream home with WiseMount. Premium property listings and expert real estate services.";
const SITE_URL = "https://wisemount.com"; // Placeholder

export const constructMetadata = ({
    title,
    description = SITE_DESCRIPTION,
    image = "/og-image.jpg",
    noIndex = false,
}: {
    title?: string;
    description?: string;
    image?: string;
    noIndex?: boolean;
} = {}): Metadata => {
    return {
        title: title ? `${title} | ${SITE_NAME}` : SITE_NAME,
        description,
        openGraph: {
            title: title ? `${title} | ${SITE_NAME}` : SITE_NAME,
            description,
            images: [
                {
                    url: image,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: title ? `${title} | ${SITE_NAME}` : SITE_NAME,
            description,
            images: [image],
        },
        icons: {
            icon: "/favicon.ico",
        },
        metadataBase: new URL(SITE_URL),
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            },
        }),
    };
};
