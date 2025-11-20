# Structured Data Implementation Guide for Skylink Web

## Overview

This guide explains how structured data has been implemented across the Skylink website to improve search engine
visibility and enhance rich snippet opportunities in search results. Structured data helps search engines better
understand your content and can lead to enhanced search results with rich snippets, knowledge panels, and other visual
elements.

## Implementation Details

Structured data has been implemented using the JSON-LD format as recommended by Google. The implementation includes:

1. **Utility Functions**: Located in `src/lib/structuredData.js` for generating different types of structured data
2. **Components**: Reusable components to render structured data in pages
3. **Page-Specific Implementations**: Custom structured data for each page type

## File Structure

- `src/lib/structuredData.js` - Core utility functions for generating structured data
- `src/components/StructuredData.js` - Component for rendering structured data
- `src/components/GlobalStructuredData.js` - Component for site-wide structured data

## Structured Data Types

### Organization

Basic information about Skylink Fiber, included on all pages via the `GlobalStructuredData` component.

```javascript
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Skylink Fiber",
  "url": "https://skylinkfiber.com",
  "logo": "https://skylinkfiber.com/assets/skylink logo.png",
  "sameAs": [...]
}
```

### Service

Used on service pages like Internet, TV, OTT and Firestick pages.

```javascript
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "BroadbandService",
  "name": "Skylink Fiber Internet",
  ...
}
```

### Product

Used on product and plan pages.

```javascript
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Skylink 1 Gbps Fiber Plan",
  "description": "...",
  "offers": {...}
}
```

### WebApplication

Used for the SpeedTest page.

```javascript
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Skylink Fiber Speed Test",
  "applicationCategory": "UtilityApplication",
  ...
}
```

### FAQPage

Used on pages with frequently asked questions, like the Support page.

```javascript
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [...]
}
```

### BlogPosting

Used on blog article pages.

```javascript
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Blog Title",
  ...
}
```

### BreadcrumbList

Used across the site to show the hierarchical position of a page.

```javascript
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [...]
}
```

## How to Use

### Adding Structured Data to a Page

1. Import the required utilities and component:
   ```javascript
   import StructuredData from '@/components/StructuredData';
   import { getServiceStructuredData } from '@/lib/structuredData';
   ```

2. Generate the structured data object:
   ```javascript
   const serviceData = getServiceStructuredData({
     name: "Service Name",
     description: "Service description",
     // additional properties
   });
   ```

3. Add the structured data component to your JSX:
   ```javascript
   return (
     <>
       <StructuredData data={serviceData} />
       {/* Your page content */}
     </>
   );
   ```

### Handling Metadata with Client Components

When using structured data with client components (pages with "use client" directive), follow these rules:

1. **Do not export metadata from client components** - Next.js doesn't allow this

2. **Create a separate layout.js file** to handle metadata:
   ```javascript
   // src/app/(site)/your-route/layout.js
   export const metadata = {
     title: "Page Title | Skylink Fiber",
     description: "Page description for SEO purposes.",
   };

   export default function YourRouteLayout({ children }) {
     return children;
   }
   ```

3. **Use structured data in the client component** as normal:
   ```javascript
   // src/app/(site)/your-route/page.js
   "use client";
   
   import StructuredData from '@/components/StructuredData';
   import { getServiceStructuredData } from '@/lib/structuredData';
   
   export default function Page() {
     const structuredData = getServiceStructuredData({...});
     
     return (
       <>
         <StructuredData data={structuredData} />
         {/* Page content */}
       </>
     );
   }
   ```

## Adding New Structured Data Types

To add a new structured data type:

1. Create a new utility function in `src/lib/structuredData.js`
2. Follow the existing pattern, using proper schema.org types and properties
3. Import and use the new function in your page components

## Testing Structured Data

Test your structured data using these tools:

- [Google's Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
- [Google Search Console](https://search.google.com/search-console) - For live testing and monitoring

## Best Practices

- Keep structured data accurate and up to date
- Only include data that is visible on the page
- Follow schema.org specifications closely
- Use the most specific type possible for your content
- Regularly test to ensure proper implementation

## Resources

- [Google's Structured Data Documentation](https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data)
- [Schema.org Full Hierarchy](https://schema.org/docs/full.html)
- [JSON-LD Format](https://json-ld.org/)