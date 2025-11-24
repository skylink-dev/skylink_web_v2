/**
 * Sitemap utilities for Skylink Fiber website
 * This file contains helper functions for dynamic sitemap generation
 *
 * Usage examples:
 * 1. Generate a complete sitemap:
 *    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://stage.skylink.net.in:3000';
 *    const xml = generateFullSitemap(baseUrl, routes);
 *
 * 2. Generate a sitemap for a specific category:
 *    const categories = groupRoutesByCategory(routes);
 *    const serviceRoutes = categories.services;
 *    const servicesSitemap = generateFullSitemap(baseUrl, serviceRoutes);
 *
 * 3. Get current date for lastmod:
 *    const today = getCurrentDate(); // Returns YYYY-MM-DD format
 */

// Main routes of the website with their respective priorities and change frequencies
export const routes = [
    // Home Page
    {route: '/', priority: 1.0, changefreq: 'weekly'},

    // Main Service Pages
    {route: '/internet', priority: 0.9, changefreq: 'weekly'},
    {route: '/tv', priority: 0.9, changefreq: 'weekly'},
    {route: '/ott', priority: 0.9, changefreq: 'weekly'},
    {route: '/firestick', priority: 0.8, changefreq: 'monthly'},

    // Plans & Packages Pages
    {route: '/plans', priority: 0.9, changefreq: 'weekly'},
    {route: '/plans', priority: 0.9, changefreq: 'weekly'},
    {route: '/deals', priority: 0.8, changefreq: 'weekly'},
    {route: '/packages', priority: 0.8, changefreq: 'weekly'},

    // Products & Accessories
    // Accessories route changed to internet
    // {route: '/accessories', priority: 0.8, changefreq: 'weekly'},
    {route: '/products', priority: 0.8, changefreq: 'weekly'},

    // Location Pages
    {route: '/coimbatore', priority: 0.8, changefreq: 'monthly'},
    {route: '/erode', priority: 0.8, changefreq: 'monthly'},
    {route: '/tiruppur', priority: 0.8, changefreq: 'monthly'},

    // Service & Support Pages
    {route: '/support', priority: 0.8, changefreq: 'weekly'},
    {route: '/services', priority: 0.8, changefreq: 'monthly'},
    {route: '/services/home-automation', priority: 0.7, changefreq: 'monthly'},
    {route: '/speedtest', priority: 0.7, changefreq: 'monthly'},
    {route: '/installation-guide', priority: 0.7, changefreq: 'monthly'},
    {route: '/moving', priority: 0.7, changefreq: 'monthly'},
    {route: '/download-channel-list', priority: 0.7, changefreq: 'monthly'},

    // Business & Partnership
    {route: '/partner', priority: 0.8, changefreq: 'monthly'},

    // Company & About
    {route: '/about', priority: 0.8, changefreq: 'monthly'},
    {route: '/contact-us', priority: 0.8, changefreq: 'monthly'},

    // Blog & Content
    {route: '/blogs', priority: 0.8, changefreq: 'weekly'},

    // Featured Blog Posts Based on Data
    {route: '/blogs/skylink-fiber-broadband', priority: 0.7, changefreq: 'monthly'},
    {route: '/blogs/skylink-ott-universe', priority: 0.7, changefreq: 'monthly'},
    {route: '/blogs/skylink-iptv', priority: 0.7, changefreq: 'monthly'},
    {route: '/blogs/hd-tv-no-setup-boxes', priority: 0.7, changefreq: 'monthly'},
    {route: '/blogs/entertainment-bundles-tailored-for-india', priority: 0.7, changefreq: 'monthly'},
    {route: '/blogs/next-gen-wifi-everywhere', priority: 0.7, changefreq: 'monthly'},
    {route: '/blogs/parental-controls-for-safe-surfing', priority: 0.7, changefreq: 'monthly'},

    // Legal Pages
    {route: '/terms', priority: 0.5, changefreq: 'yearly'},
    {route: '/policy', priority: 0.5, changefreq: 'yearly'},
    {route: '/refund', priority: 0.5, changefreq: 'yearly'},
    {route: '/subscription-contract', priority: 0.5, changefreq: 'yearly'},
    {route: '/whistleblower-policy', priority: 0.5, changefreq: 'yearly'},

    // Products Based on Data
    {route: '/products/smart-remote-control', priority: 0.7, changefreq: 'monthly'},
    {route: '/products/skylink-fire-tv', priority: 0.7, changefreq: 'monthly'},
    {route: '/products/high-speed-dual-band-router', priority: 0.7, changefreq: 'monthly'},

    // Service Package Pages Based on Data
    {route: '/services/triple-play', priority: 0.7, changefreq: 'monthly'},
    {route: '/services/skylink-tv', priority: 0.7, changefreq: 'monthly'},
    {route: '/services/customizable-wifi', priority: 0.7, changefreq: 'monthly'},
    {route: '/services/stream-ott-apps', priority: 0.7, changefreq: 'monthly'},
];

/**
 * Generate a formatted date string for sitemap lastmod field
 * @returns {string} Current date in YYYY-MM-DD format
 */
export const getCurrentDate = () => {
    return new Date().toISOString().split('T')[0];
};

/**
 * Generate a sitemap URL entry for a given route
 * @param {string} baseUrl - The base URL of the website
 * @param {Object} routeInfo - Route information including path, priority, and change frequency
 * @param {string} date - The lastmod date in YYYY-MM-DD format
 * @returns {string} Formatted XML for the URL entry
 */
export const generateSitemapUrlEntry = (baseUrl, routeInfo, date) => {
    return `  <url>
    <loc>${baseUrl}${routeInfo.route}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>${routeInfo.changefreq}</changefreq>
    <priority>${routeInfo.priority}</priority>
  </url>`;
};

/**
 * Generate the complete sitemap XML content
 * @param {string} baseUrl - The base URL of the website
 * @param {Array} routes - Array of route objects
 * @returns {string} Complete sitemap XML
 */
export const generateFullSitemap = (baseUrl, routes) => {
    const date = getCurrentDate();

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => generateSitemapUrlEntry(baseUrl, route, date)).join('\n')}
</urlset>`;
};

/**
 * Group routes by category for better organization
 * This is useful for generating category-specific sitemaps
 * @param {Array} routes - Array of route objects
 * @returns {Object} Routes grouped by category
 */
export const groupRoutesByCategory = (routes) => {
    const categories = {
        main: [],
        services: [],
        plans: [],
        products: [],
        locations: [],
        support: [],
        company: [],
        blog: [],
        legal: []
    };

    routes.forEach(route => {
        const path = route.route;

        // Categorize based on path patterns
        if (path === '/') {
            categories.main.push(route);
        } else if (path.includes('/internet') || path.includes('/tv') || path.includes('/ott') || path.includes('/services/')) {
            categories.services.push(route);
        } else if (path.includes('/plans') || path.includes('/deals') || path.includes('/packages')) {
            categories.plans.push(route);
        } else if (path.includes('/products') || /* path.includes('/accessories') || */ path.includes('/firestick')) {
            categories.products.push(route);
        } else if (path.includes('/coimbatore') || path.includes('/erode') || path.includes('/tiruppur')) {
            categories.locations.push(route);
        } else if (path.includes('/support') || path.includes('/speedtest') || path.includes('/installation') || path.includes('/moving')) {
            categories.support.push(route);
        } else if (path.includes('/about') || path.includes('/contact') || path.includes('/partner')) {
            categories.company.push(route);
        } else if (path.includes('/blogs')) {
            categories.blog.push(route);
        } else if (path.includes('/terms') || path.includes('/policy') || path.includes('/refund') || path.includes('/contract') || path.includes('/whistleblower')) {
            categories.legal.push(route);
        } else {
            // Default to main for anything that doesn't match
            categories.main.push(route);
        }
    });

    return categories;
};