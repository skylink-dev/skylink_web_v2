'use client';

import { useState, useEffect } from 'react';
import Select from 'react-select';

const ReactSelectWithSearch = ({ options = [],
  activeState,
  setActiveState }) => {
  const [mounted, setMounted] = useState(false); // Optional fallback

  useEffect(() => {
    setMounted(true);
  }, []);

  const customStyles = {
    control: (provided) => ({
      ...provided,
      padding: '2px 4px',
      borderRadius: '0.375rem',
      borderColor: '#D1D5DB',
      boxShadow: 'none',
      fontSize: '0.875rem',
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 50,
    }),
  };

  const selectedOption = options.find((opt) => opt.value === activeState) || null;

  if (!mounted) return null; // or a skeleton fallback

  return (
    <div className="max-w-sm mt-8 w-full flex items-center justify-center">
      <h2 className="block mb-1 text-sm font-medium text-gray-700" style={{"marginRight":"10px"}}>
        Select State:
      </h2>
      <Select
        options={options}
        value={selectedOption}
        onChange={(opt) => setActiveState(opt?.value || '')}
        placeholder="Select a State"
        styles={customStyles}
        isSearchable
      />
    </div>
  );
};

export default ReactSelectWithSearch;
