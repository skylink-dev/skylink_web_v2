import SpeedTest from '@/components/SpeedTest'
import React from 'react'
import {getSpeedTestStructuredData, getOrganizationStructuredData} from '@/lib/structuredData'
import StructuredData from '@/components/StructuredData'

// Using global metadata from root layout.js
/* export const metadata = {
    title: 'Internet Speed Test | Skylink Fiber',
    description: 'Check your internet connection speed with Skylink\'s free speed test tool. Measure download and upload speeds accurately in real-time.',
}; */

export default function SpeedTest() {
    // Get structured data
    const speedTestData = getSpeedTestStructuredData();
    const organizationData = getOrganizationStructuredData();

    return (
        <>
            {/* Add structured data */}
            <StructuredData data={speedTestData}/>
            <StructuredData data={organizationData}/>

            {/* Render the SpeedTest component */}
            <SpeedTest/>
        </>
    )
}