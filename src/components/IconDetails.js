'use client'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

export default function IconDetails({ iconslist, title }) {

  // Animation variants
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // animate children one by one
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <div className="mar-b-none pad-t-lg pad-b-xl theme-base-bg bgcolor rel max-width-background text-center">
      <div className="nopad container">
        <div className="row flex-items-stretch justify-center container">
          <div className="rel grid-col-10 text-center">
            <h2 className="heading-xxl">{title}</h2>
          </div>
        </div>
        <motion.div 
          className="row flex-items-stretch justify-center container overflow-x-scroll overflow-y-hidden scrollbar-hidden rel"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="generic-list grid-col-12 nopad pad-t-xs pad-b-xs pad-t-reset-sm pad-b-reset-sm text-center rel">
            <ul className="flex justify-center justify-start-md justify-start-sm nowrap width-full pad-l-xs pad-r-xs row-gap24">
              {iconslist.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex-column false rel flex-items-center inline-flex row-gap16"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: 'spring', stiffness: 250 }}
                >
                  <div className="row-gap16 flex-column flex-grow rel flex-items-center">
                    {item.icon}
                    <p className="type-sm mar-none rte-styles">
                      <Link aria-label="Get help online" className="link-text3 solo cta-overlay" href="/support/">
                        <strong>{item.cta}</strong>
                      </Link>
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
