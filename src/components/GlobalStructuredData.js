import React from 'react';
import {getOrganizationStructuredData} from '@/lib/structuredData';
import StructuredData from './StructuredData';

/**
 * GlobalStructuredData Component
 *
 * This component provides basic structured data that should be included on every page
 * of the website, such as Organization data.
 */
const GlobalStructuredData = () => {
    const organizationData = getOrganizationStructuredData();

    return (
        <>
            <StructuredData data={organizationData}/>
        </>
    );
};

export default GlobalStructuredData;