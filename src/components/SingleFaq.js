'use client'
import React, { useRef, useState } from 'react'

export default function SingleFaq({content}) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleFaq = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="container">
      <div className="theme-base-bg bgcolor mar-t-none mar-b-none radius-lg mar-b-lg">
        <button
          onClick={toggleFaq}
          aria-expanded={isOpen}
          aria-controls="faq-content"
          className="btn-reset width-full flex flex-items-top justify-center pad-t-md-lg pad-t-lg-sm pad-b-md-lg pad-b-lg-sm pad-l-md-lg pad-l-lg-sm pad-r-md-lg pad-r-lg-sm text-left"
        >
          <span className="font-bold mar-b-none type-lg">
            <h2 className="mar-b-xs heading-md">
              Stay connected with high-quality internet and TV services from Skylink
            </h2>
          </span>
          <i
            className={`jsx-2258650523 expand-icon animate mar-l-sm-all font-bold type-lg icon-chevron ${isOpen ? '' : 'rotate90-after'
              }`}
          ></i>
        </button>
        <div
          className="rel animate-slide-open overflow-hidden"
          id="faq-content"
          ref={contentRef}
          style={{
            maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
            transition: 'max-height 0.3s ease',
          }}
        >
          <div aria-hidden="false">
            <div className="row flex-wrap justify-center">
              {content.map((item, index) => (
                <div
                  key={index}
                  className={`grid-col-${index < 4 ? '6' : '12 centered'} pad-t-none pad-b-md-lg pad-b-lg-md pad-b-lg-sm`}
                >
                  <div className="mar-b-xs">
                    <h2 className="mar-b-xs heading-sm">{item.title}</h2>
                    <div className="type-sm rte-styles">{item.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}
