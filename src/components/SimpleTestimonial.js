import Image from 'next/image'
import React from 'react'

export default function SimpleTestimonial() {
    return (
        <div className="dynamic-section">
            <blockquote>
                <div className="image">
                    <div style={{ position: 'relative', width: '100%', height: 'auto', aspectRatio: '290 / 410' }}>
                    <Image src="/assets/rajeshwaran-sir.jpg"  fill style={{ objectFit: 'cover' }} alt="profile" />
                    </div>
                </div>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.5587 2.23872C4.6935 6.64773 0.879569 11.7793 0.116914 17.6336C-1.07037 26.7474 7.07992 31.2084 11.2096 27.2002C15.3392 23.1922 12.8638 18.1046 9.87347 16.714C6.88318 15.3233 5.05451 15.8077 5.3735 13.9494C5.69248 12.091 9.94677 6.93854 13.6843 4.539C13.9323 4.32813 14.0267 3.91899 13.7879 3.60866C13.6308 3.40446 13.3228 3.00412 12.8638 2.40752C12.4624 1.88582 12.0778 1.90534 11.5587 2.23872Z" fill="#009FDB"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M29.6327 2.23872C22.7675 6.64773 18.9536 11.7793 18.1909 17.6336C17.0036 26.7474 25.1539 31.2084 29.2836 27.2002C33.4133 23.1922 30.9378 18.1046 27.9475 16.714C24.9572 15.3233 23.1284 15.8077 23.4475 13.9494C23.7665 12.091 28.0208 6.93854 31.7583 4.539C32.0063 4.32813 32.1007 3.91899 31.8618 3.60866C31.7048 3.40446 31.3968 3.00412 30.9378 2.40752C30.5364 1.88582 30.1518 1.90534 29.6327 2.23872Z" fill="#009FDB"></path>
                </svg>
                <p>At Skylink, our mission is to revolutionize the way India experiences digital entertainment. We strive to deliver seamless, personalized, and innovative connectivity solutions tailored for every household. Through our reliable broadband, IPTV, and OTT services, we aim to empower communities with limitless access to content and communication. Our vision is to enrich everyday life by making high-speed internet and smart entertainment accessible to all corners of the nation.</p>
                <cite>
                    <strong>Rajeshkumar </strong>
                    Director
                </cite>
            </blockquote>
        </div>
    )
}
