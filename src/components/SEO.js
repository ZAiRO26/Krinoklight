import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

/**
 * SEO Component for dynamic meta tags and canonical URLs
 * Automatically detects the current path for canonical URL
 * Use this on every page to set page-specific SEO information
 */
const SEO = ({
    title = 'Krinok - Your Vision, Engineered',
    description = 'Krinok provides end-to-end digital product development and marketing services. Web development, mobile apps, AI solutions, and digital strategy for modern businesses.',
    keywords = 'web development, mobile apps, AI solutions, digital marketing, software development, UI/UX design, Krinok',
    path, // Optional - will auto-detect if not provided
    image = '/Favicon/android-chrome-512x512.png'
}) => {
    const location = useLocation();
    const siteUrl = 'https://www.krinok.com';

    // Use provided path or auto-detect from current location
    const currentPath = path || location.pathname;
    const canonicalUrl = `${siteUrl}${currentPath}`;
    const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Canonical URL - Critical for SEO */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageUrl} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonicalUrl} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={imageUrl} />
        </Helmet>
    );
};

export default SEO;
