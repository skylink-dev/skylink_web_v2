'use client';

function MetadataTest() {
    function getMetaTags() {
        if (typeof document !== 'undefined') {
            // Get all meta tags
            const metaTags = document.querySelectorAll('meta');
            return Array.from(metaTags).map(tag => {
                const attributes = {};
                Array.from(tag.attributes).forEach(attr => {
                    attributes[attr.name] = attr.value;
                });
                return attributes;
            });
        }
        return [];
    }

    function getTitle() {
        if (typeof document !== 'undefined') {
            return document.title;
        }
        return '';
    }

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Metadata Test</h1>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Page Title:</h2>
                <pre className="bg-gray-100 p-3 rounded">{getTitle()}</pre>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-2">Meta Tags:</h2>
                <pre className="bg-gray-100 p-3 rounded overflow-auto max-h-96">
          {JSON.stringify(getMetaTags(), null, 2)}
        </pre>
            </div>
        </div>
    );
}

export default MetadataTest;