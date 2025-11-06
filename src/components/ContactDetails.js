import Link from "next/link";
import React from "react";

const contactSections = [
  {
    title: "Want to call us?",
    iconType: "phone",
    contacts: [
      {
        label: "Wireless support:",
        numbers: [{ label: "+919944199445", link: "tel:+919944199445" }],
        note: "Available 24/7",
      },
      {
        label: "Internet or home phone support:",
        numbers: [{ label: "+919944199445", link: "tel:+919944199445" }],
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
        height="48"
        width="48"
        viewBox="0 0 96 96"
        className="text-red-500"
      >
        <path
          className="fill-red-500"
          d="M69.18 84.12a11.8 11.8 0 01-3.73-.61 84.14 84.14 0 01-53-53 11.67 11.67 0 012.83-12l4.8-4.8a6.37 6.37 0 019 0l8.82 8.82a6.34 6.34 0 011.35 7l-4.11 9.59a35.18 35.18 0 0021.69 21.7l9.59-4.11a6.34 6.34 0 017 1.35l8.82 8.82a6.37 6.37 0 010 9l-4.8 4.8a11.67 11.67 0 01-8.26 3.44z"
        />
      </svg>
    );

  if (type === "video")
    return (
      <svg
        aria-hidden="false"
        focusable="false"
        height="48"
        width="48"
        viewBox="0 0 96 96"
        className="text-red-500"
      >
        <path
          className="fill-red-500"
          d="M34 72.5v-37L58.72 54zm2-33v29L55.38 54z"
        ></path>
      </svg>
    );

  if (type === "home")
    return (
      <svg
        aria-hidden="false"
        focusable="false"
        height="48"
        width="48"
        viewBox="0 0 96 96"
        className="text-red-500"
      >
        <path
          className="fill-red-500"
          d="M75 67H50V51h25zm-23-2h21V53H52z"
        ></path>
      </svg>
    );

  return null;
};

export default function ContactDetails() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactSections.map((section, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                {getIcon(section.iconType)}
                <h2 className="text-lg font-semibold text-gray-900">
                  {section.title}
                </h2>
              </div>

              {section.contacts ? (
                <div className="space-y-3">
                  {section.contacts.map((c, i) => (
                    <div key={i}>
                      <p className="text-gray-700 font-medium">{c.label}</p>
                      {c.numbers.map((n, j) => (
                        <Link
                          key={j}
                          href={n.link}
                          className="text-red-500 hover:text-red-600 transition duration-300"
                        >
                          {n.label}
                        </Link>
                      ))}
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
