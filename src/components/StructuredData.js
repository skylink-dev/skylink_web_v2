/**
 * StructuredData Component
 * Renders JSON-LD structured data within a script tag
 */
const StructuredData = ({data}) => {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(data)}}
        />
    );
};

export default StructuredData;