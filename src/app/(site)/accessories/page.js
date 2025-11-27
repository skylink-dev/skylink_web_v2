import {notFound} from 'next/navigation';

// This page will trigger a 404 Not Found error
export default function Page() {
    // Call Next.js notFound function to trigger the 404 page
    notFound();
}