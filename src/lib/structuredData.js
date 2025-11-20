/**
 * Structured Data Utility Functions
 *
 * This file contains utility functions to generate JSON-LD structured data
 * for various pages and components across the Skylink website.
 */

/**
 * Generate Organization structured data
 * @returns {Object} JSON-LD structured data for the organization
 */
export const getOrganizationStructuredData = () => {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Skylink Fiber",
        "url": "https://skylinkfiber.com",
        "logo": "https://skylinkfiber.com/assets/skylink logo.png",
        "sameAs": [
            "https://www.facebook.com/skylinkfiber",
            "https://twitter.com/skylinkfiber",
            "https://www.instagram.com/skylinkfiber"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-1234567890",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": ["English", "Tamil"]
        },
        "description": "Skylink Fiber provides high-speed internet, TV, and OTT services with state-of-the-art fiber optic technology across Coimbatore, Erode, and Tiruppur.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Coimbatore",
            "addressRegion": "Tamil Nadu",
            "addressCountry": "IN"
        }
    };
};

/**
 * Generate Service structured data
 * @param {Object} options Service options
 * @returns {Object} JSON-LD structured data for the service
 */
export const getServiceStructuredData = (options = {}) => {
    const {
        name = "Internet Service",
        description = "High-speed fiber internet connection with unlimited data",
        provider = "Skylink Fiber",
        serviceType = "BroadbandService",
        areaServed = "Coimbatore, Erode, Tiruppur",
        url = "https://skylinkfiber.com/internet"
    } = options;

    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": serviceType,
        "name": name,
        "description": description,
        "provider": {
            "@type": "Organization",
            "name": provider,
            "url": "https://skylinkfiber.com"
        },
        "areaServed": {
            "@type": "GeoCircle",
            "name": areaServed
        },
        "url": url
    };
};

/**
 * Generate Product structured data
 * @param {Object} options Product options
 * @returns {Object} JSON-LD structured data for the product
 */
export const getProductStructuredData = (options = {}) => {
    const {
        name = "Internet Plan",
        description = "High-speed internet plan with unlimited data",
        image = "https://skylinkfiber.com/assets/1gbps.jpg",
        price = "999",
        priceCurrency = "INR",
        availability = "https://schema.org/InStock",
        sku = "INT-FIBER-1GBPS",
        brand = "Skylink Fiber",
        url = "https://skylinkfiber.com/plans"
    } = options;

    return {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": name,
        "description": description,
        "image": image,
        "brand": {
            "@type": "Brand",
            "name": brand
        },
        "sku": sku,
        "offers": {
            "@type": "Offer",
            "url": url,
            "price": price,
            "priceCurrency": priceCurrency,
            "availability": availability,
            "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]
        }
    };
};

/**
 * Generate WebApplication structured data for speed test
 * @returns {Object} JSON-LD structured data for the speed test
 */
export const getSpeedTestStructuredData = () => {
    return {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Skylink Fiber Speed Test",
        "url": "https://skylinkfiber.com/speedtest",
        "applicationCategory": "UtilityApplication",
        "operatingSystem": "All",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "INR"
        },
        "description": "Check your internet connection speed with Skylink Fiber's free speed test tool. Measure download and upload speeds accurately.",
        "publisher": {
            "@type": "Organization",
            "name": "Skylink Fiber",
            "url": "https://skylinkfiber.com"
        },
        "screenshot": "https://skylinkfiber.com/assets/speedtest-screenshot.jpg",
        "softwareVersion": "1.0"
    };
};

/**
 * Generate FAQPage structured data
 * @param {Array} faqs Array of question and answer pairs
 * @returns {Object} JSON-LD structured data for FAQs
 */
export const getFAQStructuredData = (faqs = []) => {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };
};

/**
 * Generate Blog structured data
 * @param {Object} options Blog options
 * @returns {Object} JSON-LD structured data for blog
 */
export const getBlogStructuredData = (options = {}) => {
    const {
        title = "Blog Title",
        description = "Blog description",
        url = "https://skylinkfiber.com/blogs/sample-blog",
        imageUrl = "https://skylinkfiber.com/assets/blogs-01.png",
        datePublished = new Date().toISOString(),
        dateModified = new Date().toISOString(),
        authorName = "Skylink Team"
    } = options;

    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "description": description,
        "image": imageUrl,
        "url": url,
        "datePublished": datePublished,
        "dateModified": dateModified,
        "author": {
            "@type": "Person",
            "name": authorName
        },
        "publisher": {
            "@type": "Organization",
            "name": "Skylink Fiber",
            "logo": {
                "@type": "ImageObject",
                "url": "https://skylinkfiber.com/assets/skylink logo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url
        }
    };
};

/**
 * Generate BreadcrumbList structured data
 * @param {Array} items Array of breadcrumb items
 * @returns {Object} JSON-LD structured data for breadcrumbs
 */
export const getBreadcrumbStructuredData = (items = []) => {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
        }))
    };
};