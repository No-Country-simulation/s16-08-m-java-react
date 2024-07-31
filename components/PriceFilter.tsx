// components/PriceFilter.tsx

import React, { useState } from 'react';

const PriceFilter: React.FC = () => {
  const [minPrice, setMinPrice] = useState<number | string>('');
  const [maxPrice, setMaxPrice] = useState<number | string>('');

  return (
    <div className="flex flex-col items-start mb-5">
      <label className="font-bold mb-2 mt-2">Precio</label>
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Min"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 mr-2 w-16"
        />
        <span className="mx-2">-</span>
        <input
          type="text"
          placeholder="Max"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 w-16"
        />
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={typeof minPrice === 'number' ? minPrice : 0}
        onChange={(e) => setMinPrice(Number(e.target.value))}
        className="w-full"
      />
    </div>
  );
};

export default PriceFilter;
