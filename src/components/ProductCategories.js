import React from 'react'

export default function ProductCategories() {

    const categories = [
        {
            label: 'Phones',
            href: '/buy/phones',
        },
        {
            label: 'Prepaid',
            href: '/buy/prepaid-phones',
        },
        {
            label: 'Tablets & Laptops',
            href: '/buy/tablets',
        },
        {
            label: 'Smartwatches',
            href: '/buy/wearables',
        },
        {
            label: 'Hotspots & more',
            href: '/buy/connected-devices-and-more',
        },
        {
            label: 'Accessories',
            href: '/buy/accessories/browse/all',
            active: true,
        },
    ];
    return (
        <div className="full-width-container rel">
            <div className="absolute bg-white" style={{ height: '100%', width: '100%', zIndex: '1' }}></div>
            <div className="rel" style={{ margin: '0 auto', zIndex: '2' }}>
                <div id="master-tab-container-plp_tab" className="jsx-2547793320 rel">
                    <div className="jsx-2547793320 absolute-fill">
                        <div className="jsx-2547793320 absolute-fill bgcolor"></div>
                        <div className="jsx-2547793320 absolute-fill zoomable"></div>
                    </div>
                    <div
                        id="tab-component-plp_tab"
                        className="jsx-2547793320 tabs-panel-large max-width-background mar-t-none mar-b-none"
                    >
                        <div
                            id="sticky-tab-bar-container-plp_tab"
                            className="jsx-2547793320 container mobile-scroll-x pad-l-none-sm pad-l-none-md pad-r-none-sm pad-r-none-md"
                        >
                            <div className="jsx-647480390 row scrollbar-hidden">
                                <div className="jsx-647480390 grid-col-12 pad-none-md pad-none-sm pad-t-none pad-b-none">
                                    <div className="jsx-647480390 tabs-bar tabs-center flex flex-items-stretch border bg-gray-100 border-gray-200 pill-radius no-radius-md no-radius-sm mar-t-xs mar-b-xs pad-l-xxs pad-r-xxs pad-l-none-md pad-l-none-sm pad-r-none-md pad-r-none-sm">
                                        <div className="tabs-left-arrow justify-end flex flex-shrink-0 pad-t-xxs pad-b-xxs pad-l-none-md pad-l-none-sm hide">
                                            <button
                                                type="button"
                                                className="btn-reset border-right border-gray-400 rel hide"
                                                aria-label="Show previous group"
                                                aria-hidden="true"
                                            >
                                                <span className="inline-flex flex-centered width-md-all width-lg-sm height-md-all height-lg-sm color-gray-500 rotate180">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 16 16"
                                                        className="width-xs height-xs"
                                                    >
                                                        <path
                                                            className="svg-base"
                                                            d="M6.64 13.35l-.71-.7L10.58 8 5.93 3.35l.71-.7L12 8z"
                                                        ></path>
                                                    </svg>
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            id="tab-panel-plp_tab"
                                            className="jsx-647480390 tabs justify-center grid-col-12 flex flex-shrink flex-self-center flex-items-center overflow-hidden overflow-x-scroll scrollbar-hidden color-cobalt-600 pad-t-xxs pad-b-xxs rel col-gap1"
                                        >
                                            {categories.map((category, index) => (
                                                <a
                                                    key={index}
                                                    id={`tab-${index}-plp_tab`}
                                                    role="tab"
                                                    tabIndex={category.active ? 0 : -1}
                                                    data-index={index}
                                                    aria-selected={category.active ? 'true' : 'false'}
                                                    aria-controls={`tabpanel-${index}-plp_tab`}
                                                    aria-label={`${category.label} tab selected. Press the enter key to access ${category.label} category`}
                                                    className={`grid flex-content-center line-h-reset nowrap rel z3 no-underline currentColor ${category.active ? 'trans-color color-white font-bold' : ''
                                                        }`}
                                                    href={category.href}
                                                >
                                                    <span className="rel z3">{category.label}</span>
                                                    <span
                                                        aria-hidden="true"
                                                        className="font-bold block rel line-h-0 opacity0"
                                                    >
                                                        {category.label}
                                                    </span>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
