import React from 'react';
import StarRating from './ProductStar';
import Image from 'next/image'

const productListData = [
  {
    id: 1,
    title: "Skylink Fire tv",
    price: "₹2000",
    rating: 3.5,
    reviews: 17,
    image: "/assets/firestick-product-1.jpg",
    category: "Essentials",
  },
    {
    id: 2,
    title: "Smart Remote Control",
    price: "₹200",
    rating: 5,
    reviews: 17,
    image: "/assets/remote-product.jpg",
    category: "Essentials",
  },
    {
    id: 3,
    title: "High-Speed Dual Band Router",
    price: "₹1500",
    rating: 5,
    reviews: 17,
    image: "/assets/high-spped-router.jpg",
   category: "Essentials",
  },
    {
    id: 5,
    title: "Fire TVLite",
    brand: "Skylink",
    category: "Fire TV",
    price: "₹1299",
    rating: 4.1,
    reviews: 25,
    image: "/assets/firestick-product-1.jpg",
  },
  {
    id: 6,
    title: "Skylink OTT Streaming",
    brand: "Skylink",
    category: "OTT",
    price: "₹1999",
    rating: 4.4,
    reviews: 50,
    image: "/assets/firestick-product-1.jpg",
  },
  {
    id: 7,
    title: "OTT Box with Voice Remote",
    brand: "Skylink",
    category: "OTT",
    price: "₹2699",
    rating: 4.7,
    reviews: 48,
    image: "/assets/firestick-product-1.jpg",
  },
  {
    id: 8,
    title: "Skylink OTT Android Box",
    brand: "Skylink",
    category: "OTT",
    price: "₹2399",
    rating: 4.5,
    reviews: 43,
    image: "/assets/firestick-product-1.jpg",
  },
  {
    id: 9,
    title: "Skylink Dual Band Router",
    brand: "Skylink",
    category: "Broadband",
    price: "₹1999",
    rating: 4.3,
    reviews: 50,
    image: "/assets/firestick-product-1.jpg",
  },
  {
    id: 10,
    title: "Mesh Wi-Fi System (2 Units)",
    brand: "TP-Link",
    category: "Broadband",
    price: "₹3999",
    rating: 4.6,
    reviews: 75,
    image: "/assets/firestick-product-1.jpg",
  },
  {
    id: 11,
    title: "Gigabit Fiber Router",
    brand: "D-Link",
    category: "Broadband",
    price: "₹2799",
    rating: 4.4,
    reviews: 35,
    image: "/assets/firestick-product-1.jpg",
  },
  {
    id: 12,
    title: "Skylink Wi-Fi Signal Booster",
    brand: "Skylink",
    category: "Broadband",
    price: "₹899",
    rating: 4.3,
    reviews: 22,
    image: "/assets/firestick-product-1.jpg",
  },
  {
    id: 13,
    title: "5-Port Broadband Switch",
    brand: "Skylink",
    category: "Broadband",
    price: "₹1099",
    rating: 4.5,
    reviews: 19,
    image: "/assets/firestick-product-1.jpg",
  },

  // 🧩 Accessories
  {
    id: 14,
    title: "Fire TV Remote Control",
    brand: "Skylink",
    category: "Accessories",
    price: "₹299",
    rating: 4.2,
    reviews: 20,
    image: "/assets/firestick-product-1.jpg",
  },
  {
    id: 15,
    title: "HDMI Cable (2M) - 4K Support",
    brand: "Skylink",
    category: "Accessories",
    price: "₹299",
    rating: 4.6,
    reviews: 32,
    image: "/assets/firestick-product-1.jpg",
  },
  {
    id: 16,
    title: "Ethernet Cable (5M) CAT6",
    brand: "Skylink",
    category: "Accessories",
    price: "₹399",
    rating: 4.5,
    reviews: 28,
    image: "/assets/firestick-product-1.jpg",
  },
  {
    id: 17,
    title: "Wall Mount Kit for Fire TV",
    brand: "Skylink",
    category: "Accessories",
    price: "₹499",
    rating: 4.4,
    reviews: 15,
    image: "/assets/firestick-product-1.jpg",
  },
  {
    id: 18,
    title: "IR Extender for Setup Boxes",
    brand: "Skylink",
    category: "Accessories",
    price: "₹349",
    rating: 4.1,
    reviews: 17,
    image: "/assets/firestick-product-1.jpg",
  },
  {
    id: 19,
    title: "Wi-Fi Antenna Booster",
    brand: "Skylink",
    category: "Broadband",
    price: "₹649",
    rating: 4.3,
    reviews: 20,
    image: "/assets/firestick-product-1.jpg",
  },
  {
    id: 20,
    title: "Dual Power Adapter for Fire TV",
    brand: "Skylink",
    category: "Accessories",
    price: "₹199",
    rating: 4.0,
    reviews: 10,
    image: "/assets/firestick-product-1.jpg",
  },
  {
    id: 21,
    title: "Skylink Fire TV Carrying Case",
    brand: "Skylink",
    category: "Accessories",
    price: "₹599",
    rating: 4.6,
    reviews: 14,
    image: "/assets/firestick-product-1.jpg",
  },
  {
  id: 22,
  title: "Skylink HDMI Splitter (1 Input, 2 Output)",
  brand: "Skylink",
  category: "Accessories",
  price: "₹699",
  rating: 4.5,
  reviews: 18,
  image: "/assets/firestick-product-1.jpg",
}
];

export default function ProductList() {
  return (
    <div className="jsx-4037049772 grid-col-9 grid-col-12-md grid-col-12-sm flex-self-stretch pad-t-xxs">
      <div className="jsx-641454634 pad-l-xs pad-r-xs pad-t-xxs pad-b-xxs flex flex-items-center justify-between">
        <div className="jsx-2272729006">
          <span data-testid="total-count" className="jsx-2272729006 type-15 line-h-lg">{productListData.length} items</span>
        </div>
        <div className="jsx-641454634 visible-desktop flex flex-items-center">
          <div className="jsx-641454634 flex pad-r-md flex-items-center">
            <svg className="pad-r-xxs" height="24" width="24" viewBox="0 0 16 16">
              <path className="svg-base" d="M8 4a2.5 2.5 0 00-4.9 0H0v1h3.05A2.5 2.5 0 008 5h8V4zM5.5 6A1.5 1.5 0 117 4.5 1.5 1.5 0 015.5 6zm5 3a2.5 2.5 0 00-2.45 2H0v1h8.05A2.5 2.5 0 0013 12h3v-1h-3a2.5 2.5 0 00-2.5-2zm0 4a1.5 1.5 0 111.5-1.5 1.5 1.5 0 01-1.5 1.5z"></path>
            </svg>
            <span className="jsx-641454634 font-regular type-15 underline cursor hideDeviceFilterContainer"></span>
          </div>
          <div className="SortContainer">
            <div className="jsx-3194548460">
              <div className="jsx-4265361249 sortSelection selectWrap">
                <div className="jsx-4265361249  text-right">
                  <button className="jsx-4265361249 btn-reset inline-flex nowrap type-sm dropdown-link font-bold rel color-cobalt-600 rotate90-after animate">
                    <span className="jsx-4265361249">Sort-by:Best-selling</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="jsx-641454634 flex flex-wrap flex-items-stretch pad-none">
        {productListData.map((product) => (
          <div key={product.id} className="grid-col-4 grid-col-6-sm grid-col-6-md pad-xs pad-xxs-sm product-card">
            <div className="jsx-2200991819 card height-full rel z0 pad-sm-lg pad-md-md bgcolor theme-base-bg bg-white pad-xs-sm radius-lg">
              <div className="pad-xs-lg pad-xs-md pad-xxs-sm radius-lg bg-gray-100 top-section-height-fullbg">
                <div className="top-section-mob-img flex flex-centered pad-b-xs">
                  <Image src={product.image} alt={product.title} />
                </div>
              </div>
              <div className="pad-xs-lg pad-xs-md pad-xxs-sm pad-b-none">
                <div className="pad-b-xxxs pad-b-xxxxs-sm inline-flex justify-between items-center w-full">
                  <span className="type-sm line-h-0">{product.category}</span>
                  <div className="star-rating inline-flex items-center">
                    <StarRating rating={product.rating}></StarRating>
                     <span aria-hidden="true" className="jsx-284813413 span-b star-rating-divider mar-l-xxxs mar-r-xxxs bg-gray-500"></span>
                    <span className="font-bold flex">{product.rating}</span>
                    <span aria-hidden="true" className="jsx-284813413 span-b star-rating-divider mar-l-xxxs mar-r-xxxs bg-gray-500"></span>
                    <span>{product.reviews}</span>
                  </div>
                </div>
                <a href="#" className="link-text2 block color-ui-black z1 cta-overlay productCardOverlay" style={{"display":"block", "marginTop":"6px"}}>
                  <h3 className="minHeightHeading type-16 mar-b-xxxs heading-styles overflow-hidden" style={{"marginTop":"10px"}}>
                    {product.title}
                  </h3>
                </a>
                <div className="rel pad-t-xs pad-b-xxs">
                  <span className="line-h-sm heading-sm displayInline" aria-hidden="true">{product.price}</span>
                </div>
                <div className="pad-t-xxs pad-b-xs flex justify-between items-center">
                  <div>
                    <a className="cart-link css-bold nowrap link-text3 solo" role="button">
                      Add to cart
                    </a>
                  </div>
                  <div className="inline-flex justify-center items-center height-sm-all width-sm-all radius-lg bg-gray-200" role="button" tabIndex="0" aria-label="Add to Favorites">
                  <svg className="color-cobalt" height="16" width="16" viewBox="0 0 16 16"> <title>Add to Favorites</title> <path className="svg-base" d="M14.69,2.30999996 C12.9422594,0.570876503 10.1177406,0.570876503 8.37,2.30999996 L8,2.67999997 L7.63,2.30999996 C5.88225939,0.570876503 3.05774056,0.570876503 1.30999996,2.30999996 C-0.434620803,4.05546788 -0.434620803,6.88453209 1.30999996,8.63 L8,15.32 L14.69,8.63 C16.4346208,6.88453209 16.4346208,4.05546788 14.69,2.30999996 L14.69,2.30999996 Z M14,7.92 L8,13.92 L1.99999996,7.92 C1.34037707,7.27140746 0.968863325,6.38508087 0.968863325,5.45999998 C0.968863325,4.5349191 1.34037707,3.64859251 1.99999996,2.99999997 C2.64783361,2.34656319 3.5298543,1.97899152 4.44999998,1.97899152 C5.37014565,1.97899152 6.25216635,2.34656319 6.89999999,2.99999997 L8,4.08999998 L9.08000001,2.99999997 C9.72859255,2.34037707 10.6149191,1.96886333 11.54,1.96886333 C12.4650809,1.96886333 13.3514075,2.34037707 14,2.99999997 C14.6534368,3.64783361 15.0210085,4.52985431 15.0210085,5.44999998 C15.0210085,6.37014566 14.6534368,7.25216635 14,7.9 L14,7.92 Z"></path> </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
