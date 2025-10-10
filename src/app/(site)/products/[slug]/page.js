import ProductHeader from '@/components/ProductHeader';
import ProductSingle from '@/components/ProductSingle';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const productListData = [
  {
    id: 1,
    title: "Skyplay Fire Tv",
    price: "₹2000",
    rating: 3.5,
    reviews: 17,
    image: "/assets/firestick-product-1.jpg",
    category: "Essentials",
    link: "/skyplay-fire-stick",
  },
  {
    id: 2,
    title: "Smart Remote Control",
    price: "₹200",
    rating: 5,
    reviews: 17,
    image: "/assets/remote-product.jpg",
    category: "Essentials",
    link: "/smart-remote-control",
  },
  {
    id: 3,
    title: "High-Speed Dual Band Router",
    price: "₹1500",
    rating: 5,
    reviews: 17,
    image: "/assets/high-spped-router.jpg",
    category: "Essentials",
    link: "/high-speed-dual-band-router",
  },
  {
    id: 5,
    title: "Fire TV Lite",
    price: "₹1299",
    rating: 4.1,
    reviews: 25,
    image: "/assets/firestick-product-1.jpg",
    category: "Fire TV",
    link: "/fire-tv-stick-lite",
  },
  {
    id: 6,
    title: "SkyPlay OTT Streaming",
    price: "₹1999",
    rating: 4.4,
    reviews: 50,
    image: "/assets/firestick-product-1.jpg",
    category: "OTT",
    link: "/skyplay-ott-streaming-stick",
  },
  {
    id: 7,
    title: "OTT Box with Voice Remote",
    price: "₹2699",
    rating: 4.7,
    reviews: 48,
    image: "/assets/firestick-product-1.jpg",
    category: "OTT",
    link: "/ott-box-with-voice-remote",
  },
  {
    id: 8,
    title: "SkyPlay OTT Android Box",
    price: "₹2399",
    rating: 4.5,
    reviews: 43,
    image: "/assets/firestick-product-1.jpg",
    category: "OTT",
    link: "/skyplay-ott-android-box",
  },
  {
    id: 9,
    title: "SkyPlay Dual Band Router",
    price: "₹1999",
    rating: 4.3,
    reviews: 50,
    image: "/assets/firestick-product-1.jpg",
    category: "Broadband",
    link: "/skyplay-dual-band-router",
  },
  {
    id: 10,
    title: "Mesh Wi-Fi System (2 Units)",
    price: "₹3999",
    rating: 4.6,
    reviews: 75,
    image: "/assets/firestick-product-1.jpg",
    category: "Broadband",
    link: "/mesh-wi-fi-system-2-units",
  },
  {
    id: 11,
    title: "Gigabit Fiber Router",
    price: "₹2799",
    rating: 4.4,
    reviews: 35,
    image: "/assets/firestick-product-1.jpg",
    category: "Broadband",
    link: "/gigabit-fiber-router",
  },
  {
    id: 12,
    title: "SkyPlay Wi-Fi Signal Booster",
    price: "₹899",
    rating: 4.3,
    reviews: 22,
    image: "/assets/firestick-product-1.jpg",
    category: "Broadband",
    link: "/skyplay-wi-fi-signal-booster",
  },
  {
    id: 13,
    title: "5-Port Broadband Switch",
    price: "₹1099",
    rating: 4.5,
    reviews: 19,
    image: "/assets/firestick-product-1.jpg",
    category: "Broadband",
    link: "/5-port-broadband-switch",
  },
  {
    id: 14,
    title: "Fire TV Remote Control",
    price: "₹299",
    rating: 4.2,
    reviews: 20,
    image: "/assets/firestick-product-1.jpg",
    category: "Accessories",
    link: "/fire-tv-remote-control",
  },
  {
    id: 15,
    title: "HDMI Cable (2M) - 4K Support",
    price: "₹299",
    rating: 4.6,
    reviews: 32,
    image: "/assets/firestick-product-1.jpg",
    category: "Accessories",
    link: "/hdmi-cable-2m-4k-support",
  },
  {
    id: 16,
    title: "Ethernet Cable (5M) CAT6",
    price: "₹399",
    rating: 4.5,
    reviews: 28,
    image: "/assets/firestick-product-1.jpg",
    category: "Accessories",
    link: "/ethernet-cable-5m-cat6",
  },
  {
    id: 17,
    title: "Wall Mount Kit for Fire TV",
    price: "₹499",
    rating: 4.4,
    reviews: 15,
    image: "/assets/firestick-product-1.jpg",
    category: "Accessories",
    link: "/wall-mount-kit-for-fire-tv",
  },
  {
    id: 18,
    title: "IR Extender for Setup Boxes",
    price: "₹349",
    rating: 4.1,
    reviews: 17,
    image: "/assets/firestick-product-1.jpg",
    category: "Accessories",
    link: "/ir-extender-for-setup-boxes",
  },
  {
    id: 19,
    title: "Wi-Fi Antenna Booster",
    price: "₹649",
    rating: 4.3,
    reviews: 20,
    image: "/assets/firestick-product-1.jpg",
    category: "Broadband",
    link: "/wi-fi-antenna-booster",
  },
  {
    id: 20,
    title: "Dual Power Adapter for Fire TV",
    price: "₹199",
    rating: 4.0,
    reviews: 10,
    image: "/assets/firestick-product-1.jpg",
    category: "Accessories",
    link: "/dual-power-adapter-for-fire-tv",
  },
  {
    id: 21,
    title: "SkyPlay Fire TV Carrying Case",
    price: "₹599",
    rating: 4.6,
    reviews: 14,
    image: "/assets/firestick-product-1.jpg",
    category: "Accessories",
    link: "/skyplay-fire-tv-carrying-case",
  },
  {
    id: 22,
    title: "SkyPlay HDMI Splitter (1 Input, 2 Output)",
    price: "₹699",
    rating: 4.5,
    reviews: 18,
    image: "/assets/firestick-product-1.jpg",
    category: "Accessories",
    link: "/skyplay-hdmi-splitter-1-input-2-output",
  }
];

const products = productListData
  .filter((p) => p.link)
  .map((product) => ({
    slug: product.link.replace(/^\//, ''),
    image: product.image,
    title: product.title,
    content: `
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Rating:</strong> ${product.rating} ⭐ (${product.reviews} reviews)</p>
      <p><strong>Category:</strong> ${product.category}</p>
    `.trim(),
  }));

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found" };
  return { title: product.title };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <>
      <div className="shop-page">
        <ProductHeader></ProductHeader>
        <ProductSingle></ProductSingle>
      </div>
    </>
  );
}
