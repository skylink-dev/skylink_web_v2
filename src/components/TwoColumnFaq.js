import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function TwoColumnFaq({
  rowclass = '',
  title = 'Get Connected',
  description = 'Connecting more people in more places with Skylink’s high-speed internet and digital services',
  faqData = [],
  image = '/assets/image-1.jpg',
}) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`section--50 flex ${rowclass}`} style={{ marginTop: '50px' }}>
      <div className="text pill-style">
        <h3>{title}</h3>
        <p><em>{description}</em></p>

        <div className="accordion">
          {faqData.map((item, index) => (
            <div key={index}>
              <button className="accordion--toggle" onClick={() => toggleAccordion(index)}>
                <span>{item.title}</span>
                <span className="button--icon">
                  {openIndex === index ? (
                    <RemoveIcon fontSize="medium" />
                  ) : (
                    <AddIcon fontSize="medium" />
                  )}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    className="accordion--dropdown open"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{item.content}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <div className="image">
        <img
          src={image}
          alt="Skylink Internet Connection"
          width="768"
          height="462"
        />
      </div>
    </div>
  );
}
