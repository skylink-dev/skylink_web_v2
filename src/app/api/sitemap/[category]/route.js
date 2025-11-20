import {NextResponse} from 'next/server';
import {routes, generateFullSitemap, groupRoutesByCategory} from '../../../../lib/sitemap-utils';

/**
 * Dynamic API route that generates category-specific sitemaps
 * Access via /api/sitemap/[category] where category can be:
 * - main, services, plans, products, locations, support, company, blog, legal
 */
export async function GET(request, {params}) {
    // Define your website URL
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://stage.skylink.net.in:3000';

    // Get the requested category from the URL
    const category = params.category;

    // Group all routes by category
    const categories = groupRoutesByCategory(routes);

    // Select the routes for the requested category or default to all routes
    const categoryRoutes = categories[category] || routes;

    // Generate XML using our utility functions
    const xml = generateFullSitemap(baseUrl, categoryRoutes);

    // Return the XML with appropriate headers
    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600, s-maxage=86400'
        }
    });
}