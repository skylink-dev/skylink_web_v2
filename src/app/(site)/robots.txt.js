import {MetadataRoute} from 'next';

export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/admin/', '/*?*'],
        },
        sitemap: 'http://stage.skylink.net.in:3000/sitemap.xml',
        host: 'http://stage.skylink.net.in:3000',
    };
}