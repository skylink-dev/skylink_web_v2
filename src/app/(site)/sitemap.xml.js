import {MetadataRoute} from 'next';

// Generate the sitemap
export default function sitemap() {
    const baseUrl = 'https://skylinkfiber.com';

    // Core static pages
    const staticPages = [
        '',
        '/about',
        '/internet',
        '/tv',
        '/ott',
        '/firestick',
        '/plans',
        '/contact-us',
        '/support',
        '/deals',
        '/policy',
        '/refund',
        '/subscription-contract',
        '/whistleblower-policy',
        '/terms',
    ].map(route => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));

    // Location pages
    const locationPages = [
        '/coimbatore',
        '/tiruppur',
        '/erode',
    ].map(route => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    return [...staticPages, ...locationPages];
}