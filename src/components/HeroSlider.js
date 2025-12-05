import React, { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'

export default function HeroSlider() {
        const [activeSlide, setActiveSlide] = useState(0);
        const slides = [
            {
                img: '/assets/bg-slider-1.jpg',
                backgroundImage: '/assets/slider1.png',
                heading: 'Lightning-Fast Broadband',
                subtitle:'Ultra-Fast WiFi & Broadband',
                description: 'Enjoy ultra-fast broadband with seamless streaming, gaming, and browsing—no interruptions, ever.'
            },
            {
                img: '/assets/bg-slider-2.jpg',
                backgroundImage: '/assets/slider2.png',
                heading: 'The Future <br /> of Entertainment',
                subtitle:'IPTV Like Never Before',
                description: 'Transform your viewing experience with next-gen IPTV—crystal-clear channels and on-demand content at your fingertips.'
            },
            {
                img: '/assets/slider-bg-3.jpg',
                backgroundImage: '/assets/slider-3.png',
                heading: 'One Connection <br> Total Freedom.',
                subtitle:'Triple Play. One Powerful Service.',
                description: 'Connect your entire home with one powerful service—IPTV, broadband, and OTT bundled for total freedom.'
            },
            {
                img: '/assets/slider-bg-4.jpg',
                backgroundImage: '/assets/slider-4.png',
                heading: 'All-in-One Entertainment & Connectivity',
                subtitle:'Stream. Surf. Watch.',
                description: 'Skylink brings it all together—stream shows, surf the web, and explore OTT content with a single subscription.'
            }
        ]
        
            const prevSlide = useCallback(() => {
                setActiveSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1))
            }, [slides.length])

    const nextSlide = useCallback(() => {
        setActiveSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1))
    }, [slides.length])

    const goToSlide = useCallback(index => {
        setActiveSlide(index)
    }, [])
        
            useEffect(() => {
                const interval = setInterval(() => {
                    nextSlide()
                }, 10000)
                return () => clearInterval(interval)
            }, [nextSlide])
  return (
    <>
        <div className="slider-wrapper">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`slider-slide ${activeSlide === index ? 'active' : ''}`}
                    >
                        <div className="slider-bg-image glitch-tv top-to-bottom">
                            <Image decoding="async" src={slide.img} alt="Background Image" />
                        </div>

                        <div
                            className="slider-foreground bottom-to-top"
                            style={{
                                backgroundImage: `url(${slide.backgroundImage})`,
                                height: '100vh',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '100%',
                                backgroundPosition: 'bottom center',
                                position: 'relative'
                            }}
                        >
                            <div className="slider-overlay" />
                            <div className="container">
                                <div className="row">
                                    <div className="leftContent bottom-to-top">
                                        <h3>{slide.subtitle}</h3>
                                        <h1 dangerouslySetInnerHTML={{ __html: slide.heading }}></h1>
                                    </div>
                                    <div className="rightContent top-to-bottom">
                                        <p>{slide.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="slider-arrows">
                    <button className="prev" onClick={prevSlide}>PREV</button>
                    <span className="slash">/</span>
                    <button className="next" onClick={nextSlide}>NEXT</button>
                </div>

                <div className="slider-dots" style={{"display":"none"}}>
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${activeSlide === index ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        ></button>
                    ))}
                </div>
            </div>
    </>
  )
}
