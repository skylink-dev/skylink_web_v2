import Link from "next/link";
import React from "react";

const contactSections = [
    {
        title: "Want to call us?",
        iconType: "phone",
        contacts: [
            {
                label: "Wireless support:",
                numbers: [{label: "+91 99441 99445", link: "tel:+919944199445"}],
                note: "Available 24/7",
            },
            {
                label: "Sales Support:",
                numbers: [
                    {label: "+91 99441 99446", link: "tel:+919944199446"},
                    {label: "+91 99441 99447", link: "tel:+919944199447"},
                    {label: "+91 99441 99448", link: "tel:+919944199448"}
                ],
                note: "Available 24/7",
            },
        ],
    },
    {
        title: "Support video library",
        iconType: "video",
        description:
            "Explore videos to help with your account, service, or device.",
        link: {
            href: "/support",
            text: "Go to video library",
        },
    },
    {
        title: "Small business support",
        iconType: "home",
        description:
            "Looking for help for your business internet, phone, or wire accounts? We have you covered.",
        link: {
            href: "/contact-us",
            text: "Go to business support",
        },
    },
];

const getIcon = (type) => {
    if (type === "phone")
        return (
            <svg
                aria-hidden="false"
                focusable="false"
                height="60"
                width="60"
                viewBox="0 0 96 96"
                className="text-red-500"
            >
                <path
                    className="fill-red-500"
                    d="M66.69,83A13.94,13.94,0,0,1,56,78.5L21.49,44a14,14,0,0,1,0-19.8l4.8-4.8a8,8,0,0,1,11.31,0l8.83,8.83a8,8,0,0,1,0,11.31L41.32,44.6a31.28,31.28,0,0,0,10.08,10.08l5.07-5.07a8,8,0,0,1,11.31,0L76.6,58.4a8,8,0,0,1,0,11.31l-4.8,4.79A13.94,13.94,0,0,1,66.69,83ZM32.25,20a6,6,0,0,0-4.25,1.76l-4.8,4.8A12,12,0,0,0,23.2,46.9l34.9,34.9a12,12,0,0,0,20.34,0l4.8-4.8a6,6,0,0,0,0-8.48L74.41,59.69a6,6,0,0,0-8.48,0L60,65.66,59,65.31a33.94,33.94,0,0,1-15.4-12.91,33.94,33.94,0,0,1-3.9-7.49L39,43.47l5.93-5.93a6,6,0,0,0,0-8.48L36.5,20.23A6,6,0,0,0,32.25,20Z"
                />
            </svg>
        );

    if (type === "video")
        return (
            <svg
                aria-hidden="false"
                focusable="false"
                height="60"
                width="60"
                viewBox="0 0 96 96"
                className="text-red-500"
            >
                <path
                    className="fill-red-500"
                    d="M73,73H23V23H73Zm-48-2H71V25H25ZM55,48L41,38.5v19Zm-12-5,8,5-8,5Z"
                ></path>
            </svg>
        );

    if (type === "home")
        return (
            <svg
                aria-hidden="false"
                focusable="false"
                height="60"
                width="60"
                viewBox="0 0 96 96"
                className="text-red-500"
            >
                <path
                    className="fill-red-500"
                    d="M83,36.28,48,12.07,13,36.28V83H83ZM15,81V37.72L48,14.93,81,37.72V81ZM73,67H50V51H73ZM52,65H71V53H52Z"
                ></path>
            </svg>
        );

    return null;
};

export default function SupportContactDetails() {
    return (
        <div className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {contactSections.map((section, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                {getIcon(section.iconType)}
                                <h2 className="text-xl font-semibold text-gray-900">
                                    {section.title}
                                </h2>
                            </div>

                            {section.contacts ? (
                                <div className="space-y-3">
                                    {section.contacts.map((c, i) => (
                                        <div key={i} className="mb-4">
                                            <p className="text-gray-700 font-medium">{c.label}</p>
                                            <div className="flex flex-col">
                                                {c.numbers.map((n, j) => (
                                                    <Link
                                                        key={j}
                                                        href={n.link}
                                                        className="text-red-500 hover:text-red-600 transition duration-300 mb-1"
                                                    >
                                                        {n.label}
                                                    </Link>
                                                ))}
                                            </div>
                                            <p className="text-sm text-gray-500 mt-1">{c.note}</p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div>
                                    <p className="text-gray-700 mb-4">{section.description}</p>
                                    <Link
                                        href={section.link.href}
                                        className="inline-block bg-red-500 text-white px-4 py-2 rounded-md font-medium hover:bg-red-600 transition-all duration-300"
                                    >
                                        {section.link.text}
                                    </Link>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}