# Image Optimization Guide for Skylink Web Project

## Problem

The project has over 120 ESLint warnings related to using native HTML `<img>` tags instead of Next.js's optimized
`<Image>` component. This negatively affects performance metrics like Largest Contentful Paint (LCP) and increases
bandwidth usage.

## Solution

We've created an `OptimizedImage` component that wraps Next.js's `Image` component with additional features. Here's how
to use it across your project:

### 1. Import the OptimizedImage component

```javascript
import OptimizedImage from '@/components/OptimizedImage';
```

### 2. Replace `<img>` tags with `<OptimizedImage>`

Before:

```jsx
<img src="/path/to/image.jpg" alt="Description" width="200" height="100" />
```

After:

```jsx
<OptimizedImage 
  src="/path/to/image.jpg" 
  alt="Description" 
  width={200} 
  height={100} 
/>
```

### 3. For external images (from other domains)

Use the `unoptimized` prop for external images that don't need optimization or are from domains not configured in
Next.js:

```jsx
<OptimizedImage 
  src="https://external-domain.com/image.jpg" 
  alt="External image" 
  width={200} 
  height={100}
  unoptimized={true} 
/>
```

### 4. If you need to configure more domains for image optimization

Update `next.config.mjs` to add domains:

```javascript
const nextConfig = {
  // Existing config...
  images: {
    domains: ['skyplay.in', 'www.skylink.net.in'], // Add your domains here
  },
};
```

## Key Features of OptimizedImage

- Error handling with fallback image
- Support for all Next.js Image props
- Default width/height for small images
- Object-fit and positioning control
- Support for priority loading
- Blur placeholders

## Performance Benefits

- Automatic WebP/AVIF conversion (smaller file sizes)
- Proper lazy loading
- Prevents layout shifts (Cumulative Layout Shift)
- Faster loading with proper sizing
- Better Core Web Vitals scores

## Example Components

We've updated the `PlanAccordionDetails.js` component as an example. Follow the same pattern for other components with
image warnings.

## Next Steps

To fix all image-related warnings, search for `<img` in your project files and replace them with `<OptimizedImage>`
following the pattern shown above.

```bash
# Find all files with <img> tags
npx eslint "src/**/*.{js,jsx}" --rule "@next/next/no-img-element: error" --format stylish
```

This will show all the files that need updating.