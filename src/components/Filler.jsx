// import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa';
import Jug from '../components/jug';
import { useState } from 'react';

const Filler = () => {
  const [filler, setFiller] = useState(0);

  const handleIncrement = () => {
    setFiller((prev) => {
      if (prev === 0) return 1;
      const increased = prev + prev * 0.2;
      if (increased >= 100) return 100;
      return increased;
    });
  };
  const handleDecrement = () => {
    const decreased = filler - filler * 0.2;
    if (decreased <= 0) return setFiller(0);
    setFiller(decreased);
  }
  return (
    <div>
      <Jug fillBy={filler} />
      <div className="flex justify-center items-center space-x-2 my-2">
        <button
          className="px-3 py-3 rounded-full border bg-green-500"
          onClick={handleIncrement}
        >
          <FaPlus className="text-black text-2xl" />
        </button>
        <button
          className="px-3 py-3 rounded-full border bg-red-500"
          onClick={handleDecrement}
        >
          <FaMinus className="text-black text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Filler;
