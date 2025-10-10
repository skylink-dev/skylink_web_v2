  'use client'
  import { motion, AnimatePresence } from 'framer-motion';
  import React, { useState } from 'react';
  export default function ProductFilter() {
    const [deviceModel, setDeviceModel] = useState('');
    const [filterAccordion, setFilterAccordion] = useState({category: false,style: false,brand: false,color: false,featured: false,price: false,});
      const toggleAccordion = (name) => {
    setFilterAccordion((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };
    const Category = [
      'All', 'Headphones', 'Cases', 'Chargers',
      'Screen protectors', 'Speakers & smart home',
      'Internet & TV equipment', 'PopSockets & more', 'Gadgets & gaming'
    ];

    const Styles = ["Fast charge", "Wireless charging pads", "Cables", "Car", "Emergency power", "Portable/Travel", "Works with Magsafe", "Wall chargers", "Charging cases"];
    const Brands = ["Samsung", "Apple", "Essentials", "AXS", "Belkin", "Carson & Quinn", "CQ X Carson & Quinn", "Mophie", "OtterBox", "PureGear", "Scosche", "Sonim", "Tylt"]
    const Colors = ["Black", "Blue", "Gray", "Pink", "Purple", "Silver", "White"];
    const Featured = ["Deals", "Top chargers"];
    const priceRanges = ["$5 or less", "$5 - $25", "$25 - $50", "$50 - $100", "$100 or more (10)"];
    return (
      <div className="hideAccessoryFilterContainer styled-scrollbar-accessories sticky flex-self-top top overflow-y-auto grid-col-3 grid-col-12-md grid-col-12-sm pad-l-md-lg pad-r-md-lg pad-t-xxs mar-b-md fitler-wrap">
        <div className="filterContainer">
          {/* Filters Header */}
          <div className="font-bold flex flex-items-baseline border-bottom border-gray-300 pad-b-xs justify-between">
            <span className="type-24 color-black">Filters</span>
            <span className="pull-right pad-t-xxs">
              <span className="color-ui-dark-gray font-regular underline" style={{ cursor: 'pointer' }}>Clear all</span>
            </span>
          </div>

          {/* Device Filter */}
          <div className="border-bottom border-gray-300 pad-t-sm pad-b-sm">
            <div className="form-row rel">
              <div className="inline-flex">
                <label htmlFor="compatible_text" className="formfield-label font-bold color-gray-700">Filter by compatible device</label>
              </div>
              <input
                type="text"
                id="compatible_text"
                maxLength="50"
                name="DeviceModel"
                placeholder="Device Model"
                className="textfield"
                value={deviceModel}
                onChange={(e) => setDeviceModel(e.target.value)}
              />
            </div>
            <div className="listSection">
              <ul id="src" data-id="foo" className="absolute bg-ui-white listItems pad-l-none mar-t-none block"></ul>
            </div>
          </div>

          {/* Category Filter */}
          <div className="border-bottom border-gray-300">
            <button
              id="category"
              aria-controls="category-listing-radio-options"
              aria-expanded="true"
              className="accordion-cta btn-reset heading- line-h-normal letter-spacing-0 type-base width-full flex flex-items-top justify-between text-left pad-t-sm pad-b-sm type-sm flex-self-center"
              style={{ cursor: 'pointer' }}
              onClick={() => toggleAccordion('category')}
            >
              <span className="reading-width">Category</span>
              <i className="icon-chevron animate mar-l-sm-all font-bold type-base rotate270-after"></i>
            </button>
            <AnimatePresence>
              {filterAccordion.category && <motion.div
                key="accordion-content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              ><div id="category-listing-radio-options" className="overflow-hidden animate-slide-open hide-focusable">
                  <fieldset className="row flex-wrap pad-b-md">
                    {Category.map((item, index) => (
                      <div key={index} className="grid-col-12 pad-xxs">
                        <div className="flex mar-r-sm-all flex-items-center">
                          <label className="radio flex-items-top inline-flex mar-t-xs mar-r-sm-all filter_radioBtn">
                            <input type="radio" name="category" value={item} />
                            <div className="radio-skin"></div>
                            <span className="rad-chk-txt">{item}</span>
                            <div className="outline-container"></div>
                          </label>
                        </div>
                      </div>
                    ))}
                  </fieldset> 
                </div></motion.div>}
            </AnimatePresence>
          </div>
          <div className="border-bottom border-gray-300">
            <button
              id="category-listing-radio-options-btn"
              aria-controls="category-listing-radio-options"
              aria-expanded="true"
              className="accordion-cta btn-reset heading- line-h-normal letter-spacing-0 type-base width-full flex flex-items-top justify-between text-left pad-t-sm pad-b-sm type-sm flex-self-center"
              style={{ cursor: 'pointer' }}
              onClick={() => toggleAccordion('style')}
            >
              <span className="reading-width">Style</span>
              <i className="icon-chevron animate mar-l-sm-all font-bold type-base rotate270-after"></i>
            </button>
            {filterAccordion.style && <div id="category-listing-radio-options" className="overflow-hidden animate-slide-open hide-focusable">
              <fieldset className="row flex-wrap pad-b-md">
                {Styles.map((item, index) => (
                  <div key={index} className="grid-col-12 pad-xxs">
                    <div className="flex mar-r-sm-all flex-items-center">
                      <label className="radio flex-items-top inline-flex mar-t-xs mar-r-sm-all filter_radioBtn">
                        <input type="checkbox" name="category" value={item} />
                        <div className="checkbox-skin"></div>
                        <span className="rad-chk-txt">{item}</span>
                        <div className="outline-container"></div>
                      </label>
                    </div>
                  </div>
                ))}
              </fieldset>
            </div>}
          </div>
          <div className="border-bottom border-gray-300">
            <button
              id="category-listing-radio-options-btn"
              aria-controls="category-listing-radio-options"
              aria-expanded="true"
              className="accordion-cta btn-reset heading- line-h-normal letter-spacing-0 type-base width-full flex flex-items-top justify-between text-left pad-t-sm pad-b-sm type-sm flex-self-center"
              style={{ cursor: 'pointer' }}
              onClick={() => toggleAccordion('brand')}
            >
              <span className="reading-width">Brand</span>
              <i className="icon-chevron animate mar-l-sm-all font-bold type-base rotate270-after"></i>
            </button>
            {filterAccordion.brand && <div id="category-listing-radio-options" className="overflow-hidden animate-slide-open hide-focusable">
              <fieldset className="row flex-wrap pad-b-md">
                {Brands.map((item, index) => (
                  <div key={index} className="grid-col-12 pad-xxs">
                    <div className="flex mar-r-sm-all flex-items-center">
                      <label className="radio flex-items-top inline-flex mar-t-xs mar-r-sm-all filter_radioBtn">
                        <input type="checkbox" name="category" value={item} />
                        <div className="checkbox-skin"></div>
                        <span className="rad-chk-txt">{item}</span>
                        <div className="outline-container"></div>
                      </label>
                    </div>
                  </div>
                ))}
              </fieldset>
            </div>}
          </div>
          <div className="border-bottom border-gray-300">
            <button
              id="category-listing-radio-options-btn"
              aria-controls="category-listing-radio-options"
              aria-expanded="true"
              className="accordion-cta btn-reset heading- line-h-normal letter-spacing-0 type-base width-full flex flex-items-top justify-between text-left pad-t-sm pad-b-sm type-sm flex-self-center"
              style={{ cursor: 'pointer' }}
              onClick={() => toggleAccordion('color')}
            >
              <span className="reading-width">Color</span>
              <i className="icon-chevron animate mar-l-sm-all font-bold type-base rotate270-after"></i>
            </button>
            {filterAccordion.color && <div id="category-listing-radio-options" className="overflow-hidden animate-slide-open hide-focusable">
              <fieldset className="row flex-wrap pad-b-md">
                {Colors.map((item, index) => (
                  <div key={index} className="grid-col-12 pad-xxs">
                    <div className="flex mar-r-sm-all flex-items-center">
                      <label className="radio flex-items-top inline-flex mar-t-xs mar-r-sm-all filter_radioBtn">
                        <input type="checkbox" name="category" value={item} />
                        <div className="checkbox-skin"></div>
                        <span className="rad-chk-txt">{item}</span>
                        <div className="outline-container"></div>
                      </label>
                    </div>
                  </div>
                ))}
              </fieldset>
            </div>}
          </div>
          <div className="border-bottom border-gray-300">
            <button
              id="category-listing-radio-options-btn"
              aria-controls="category-listing-radio-options"
              aria-expanded="true"
              className="accordion-cta btn-reset heading- line-h-normal letter-spacing-0 type-base width-full flex flex-items-top justify-between text-left pad-t-sm pad-b-sm type-sm flex-self-center"
              style={{ cursor: 'pointer' }}
              onClick={() => toggleAccordion('featured')}
            >
              <span className="reading-width">Featured</span>
              <i className="icon-chevron animate mar-l-sm-all font-bold type-base rotate270-after"></i>
            </button>
            {filterAccordion.featured && <div id="category-listing-radio-options" className="overflow-hidden animate-slide-open hide-focusable">
              <fieldset className="row flex-wrap pad-b-md">
                {Featured.map((item, index) => (
                  <div key={index} className="grid-col-12 pad-xxs">
                    <div className="flex mar-r-sm-all flex-items-center">
                      <label className="radio flex-items-top inline-flex mar-t-xs mar-r-sm-all filter_radioBtn">
                        <input type="checkbox" name="category" value={item} />
                        <div className="checkbox-skin"></div>
                        <span className="rad-chk-txt">{item}</span>
                        <div className="outline-container"></div>
                      </label>
                    </div>
                  </div>
                ))}
              </fieldset>
            </div>}
          </div>

          <div className="border-bottom border-gray-300">
            <button
              id="category-listing-radio-options-btn"
              aria-controls="category-listing-radio-options"
              aria-expanded="true"
              className="accordion-cta btn-reset heading- line-h-normal letter-spacing-0 type-base width-full flex flex-items-top justify-between text-left pad-t-sm pad-b-sm type-sm flex-self-center"
              style={{ cursor: 'pointer' }}
              onClick={() => toggleAccordion('price')}
            >
              <span className="reading-width">Price range</span>
              <i className="icon-chevron animate mar-l-sm-all font-bold type-base rotate270-after"></i>
            </button>
            {filterAccordion.price && <div id="category-listing-radio-options" className="overflow-hidden animate-slide-open hide-focusable">
              <fieldset className="row flex-wrap pad-b-md">
                {priceRanges.map((item, index) => (
                  <div key={index} className="grid-col-12 pad-xxs">
                    <div className="flex mar-r-sm-all flex-items-center">
                      <label className="radio flex-items-top inline-flex mar-t-xs mar-r-sm-all filter_radioBtn">
                        <input type="checkbox" name="category" value={item} />
                        <div className="checkbox-skin"></div>
                        <span className="rad-chk-txt">{item}</span>
                        <div className="outline-container"></div>
                      </label>
                    </div>
                  </div>
                ))}
              </fieldset>
            </div>}
          </div>
        </div>
      </div>
    );
  }
