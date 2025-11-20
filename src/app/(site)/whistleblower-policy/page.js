import Whistle from "@/app/(site)/whistleblower-policy/Whistle";

import {generateMetadata} from '@/lib/metadata';

// Export custom metadata for the Whistleblower Policy page
export const metadata = generateMetadata({
    title: "Whistleblower Policy | Skylink",
    description: "Learn about Skylink's whistleblower policy and how we handle reports of misconduct or unethical behavior within our organization.",
    additionalKeywords: ['whistleblower policy', 'reporting misconduct', 'ethical reporting', 'corporate ethics', 'compliance reporting', 'whistleblower protection'],
    pageUrl: '/whistleblower-policy'
});

export default function Page(){
    return(
        <>
            <Whistle/>
        </>
    )
}