'use client';
import { useEffect, useRef } from 'react';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export default function SmoothScrollWrapper({ children }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    // Dynamic import inside useEffect ensures it runs only on client
    let scroll;
    import('locomotive-scroll').then((LocomotiveScroll) => {
      scroll = new LocomotiveScroll.default({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1,
        class: 'is-reveal',
      });
    });

    return () => scroll?.destroy();
  }, []);

  return <div ref={scrollRef} data-scroll-container>{children}</div>;
}
