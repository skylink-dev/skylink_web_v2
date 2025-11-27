'use client';

import Image from 'next/image';
import {useState} from 'react';

/**
 * OptimizedImage - A wrapper component for Next.js Image with additional features
 *
 * @param {Object} props
 * @param {string} props.src - Source URL of the image
 * @param {string} props.alt - Alt text for the image
 * @param {number} props.width - Width of the image in pixels
 * @param {number} props.height - Height of the image in pixels
 * @param {string} props.className - CSS class names
 * @param {boolean} props.priority - If true, preload this image
 * @param {Object} props.style - Additional style object
 * @param {Function} props.onClick - Click handler
 * @param {string} props.objectFit - CSS object-fit property (cover, contain, etc.)
 * @param {string} props.objectPosition - CSS object-position property
 * @param {string} props.placeholder - Placeholder (blur or empty)
 * @param {string} props.blurDataURL - Base64 encoded placeholder image
 * @param {boolean} props.unoptimized - If true, don't optimize this image
 */
export default function OptimizedImage({
                                           src,
                                           alt,
                                           width,
                                           height,
                                           className,
                                           priority = false,
                                           style,
                                           onClick,
                                           objectFit = 'cover',
                                           objectPosition = 'center',
                                           placeholder = 'empty',
                                           blurDataURL,
                                           unoptimized = false,
                                           ...props
                                       }) {
    const [isError, setIsError] = useState(false);

    // Fallback image when the source fails to load
    const fallbackSrc = '/assets/skylink logo.png';

    // Handle image loading errors
    const handleError = () => {
        setIsError(true);
    };

    // Default width and height for small images (like icons)
    const finalWidth = width || 100;
    const finalHeight = height || 100;

    // Combined style with object fit properties
    const combinedStyle = {
        objectFit,
        objectPosition,
        ...style,
    };

    return (
        <Image
            src={isError ? fallbackSrc : src}
            alt={alt || 'Image'}
            width={finalWidth}
            height={finalHeight}
            className={className || ''}
            priority={priority}
            style={combinedStyle}
            onClick={onClick}
            onError={handleError}
            placeholder={placeholder}
            blurDataURL={blurDataURL}
            unoptimized={unoptimized}
            {...props}
        />
    );
}