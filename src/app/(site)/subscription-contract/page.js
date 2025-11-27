import Subscribe from "@/app/(site)/subscription-contract/Subscribe";


import {generateMetadata} from '@/lib/metadata';

// Export custom metadata for the Subscription Contract page
export const metadata = generateMetadata({
    title: "Subscription Contract | Skylink",
    description: "View the Skylink subscription contract details including service terms, billing arrangements, and cancellation policies.",
    additionalKeywords: ['subscription contract', 'service agreement', 'contract terms', 'service subscription', 'billing agreement', 'service terms'],
    pageUrl: '/subscription-contract'
});

export default function Page(){
    return(
        <>
            <Subscribe/>
        </>
    )
}