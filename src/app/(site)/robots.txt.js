import {MetadataRoute} from 'next';

export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/admin/', '/*?*'],
        },
        sitemap: 'https://skylinkfiber.com/sitemap.xml',
        host: 'https://skylinkfiber.com',
    };
}