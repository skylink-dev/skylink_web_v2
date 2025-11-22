"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Blogs() {
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6;

    const blogData = [
        {
            imgSrc: "/assets/blogs-01.png",
            title: "Skylink Fiber Broadband",
            subtitle: "Speed that connects all of India",
            description:
                "From Chennai’s tech hubs to Delhi’s bustling streets, enjoy blazing 1 Gbps fiber internet for streaming, gaming, and work without limits.",
            link: "/speed-that-connects-all-of-india",
        },
        {
            imgSrc: "/assets/blogs-02.png",
            title: "Skylink OTT Universe",
            subtitle: "All your favorite shows, South to North",
            description:
                "Stream hits from Sun TV and Vijay TV to Sony and Zee5—one subscription, endless entertainment for every Indian home.",
            link: "/all-your-favorite-shows-south-to-north",
        },
        {
            imgSrc: "/assets/blogs-03.png",
            title: "Skylink IPTV",
            subtitle: "900+ Live Channels in HD, from Punjab to Tamil Nadu",
            description:
                "Access Tamil, Telugu, Hindi, Punjabi, and Bengali channels with HD clarity and features like pause, rewind, and multi-device support.",
            link: "/live-channels-in-hd-from-punjab-to-tamil-nadu",
        },
        {
            imgSrc: "/assets/blogs-04.png",
            title: "HD TV, No Setup Boxes",
            subtitle: "Streamlined TV for every region",
            description:
                "Enjoy 300+ HD channels with free installation. Watch your favorite South and North Indian channels on Smart TVs or Fire TV without extra hardware.",
            link: "/streamlined-tv-for-every-region",
        },
        {
            imgSrc: "/assets/blogs-06.png",
            title: "Entertainment Bundles Tailored for India",
            subtitle: "IPTV, OTT & Broadband in one plan",
            description:
                "From Coimbatore to Chandigarh, get the perfect mix of internet, TV, and OTT services that fit your lifestyle and language preferences.",
            link: "/iptv-ott-broadband-in-one-plan",
        },
        {
            imgSrc: "/assets/blogs-07.png",
            title: "Next-Gen Wi-Fi Everywhere",
            subtitle: "Strong signals from North to South",
            description:
                "Wi-Fi 6 routers that deliver fast, stable internet in every corner—whether it’s a Chennai apartment or a Delhi villa.",
            link: "/strong-signals-from-north-to-south",
        },
    ];

    const totalPages = Math.ceil(blogData.length / blogsPerPage);
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            {/* Header Section */}
            <section className="relative bg-gradient-to-r from-red-700 via-pink-600 to-red-500 text-white py-20">
                <div className="absolute inset-0">
                    <Image
                        src="/assets/dual-banner-bg.jpg"
                        alt="Banner background"
                        fill
                        className="object-cover opacity-30"
                    />
                </div>
                <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Blogs</h1>
                    <p className="text-lg md:text-xl opacity-90">
                        Timely news and information to stay Cyber Aware and better protect
                        your devices and data.
                    </p>
                </div>
            </section>

            {/* Featured Blog */}
            <section className="w-full px-6 py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
            <span className="inline-block text-sm font-medium uppercase text-blue-600 mb-2">
              Featured
            </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Speed that connects all of India
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            From Chennai’s tech hubs to Delhi’s bustling streets, enjoy
                            blazing 1 Gbps fiber internet for streaming, gaming, and work
                            without limits.
                        </p>
                        <Link
                            href="/speed-that-connects-all-of-india"
                            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300"
                        >
                            Read More
                        </Link>
                    </div>
                    <div className="relative w-full h-72 md:h-96">
                        <Image
                            src="/assets/blogs-01.png"
                            alt="Featured Blog"
                            fill
                            className="object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="w-full px-6 py-16 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                        Latest Stories
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {currentBlogs.map((blog, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
                            >
                                <div className="relative w-full h-48">
                                    <Image
                                        src={blog.imgSrc}
                                        alt={blog.subtitle}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6 text-left">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        {blog.subtitle}
                                    </h3>
                                    <p className="text-gray-600 mb-4">{blog.description}</p>
                                    <Link
                                        href={`blogs${blog.link}`}
                                        className="text-blue-600 font-medium hover:underline"
                                    >
                                        Learn More →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-12 flex justify-center space-x-3">
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => paginate(i + 1)}
                                className={`px-4 py-2 rounded-lg border text-sm font-medium transition ${
                                    currentPage === i + 1
                                        ? "bg-blue-600 text-white border-blue-600"
                                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                                }`}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
