import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const bannerItems = [
  {
    title: 'Fast Internet',
    href: '#',
    image: '/assets/test.jpeg',
  },
  {
    title: 'Smart TV',
    href: '#',
    image: '/assets/test.jpeg',
  },
  {
    title: 'Endless Streaming',
    href: '#',
    image: '/assets/test.jpeg',
  },
  {
    title: 'All-in-One Plan',
    href: '#',
    image: '/assets/test.jpeg',
  },
];

export default function ValueBanner() {
  return (
    <>
      <div className="hero home">
        <div className="container">
          <div className="hero--text">
            <h1>The Value of Connection</h1>
          </div>
        </div>
      </div>

      <div className="section--cta">
        {bannerItems.map((item, index) => (
          <Link href={item.href} key={index}>
            <div className="content">
              <h2 className="h4">{item.title}</h2>
              <div className="button--solid button--icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.1167 3.75L20 10L14.1083 16.25L12.925 15.0035L16.8167 10.884H0V9.11598H16.8167L12.9333 5.0053L14.1167 3.75Z" fill="#009FDB"></path>
                </svg>
              </div>
            </div>
            <div className="background">
              <Image src={item.image} alt={item.title} />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
