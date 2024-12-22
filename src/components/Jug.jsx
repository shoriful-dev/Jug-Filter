// import React from 'react'
import { useState, useEffect } from "react";

const Jug = ({ fillBy }) => {
  const [lavelChanged, setLavelChanged] = useState(false);

  useEffect(() => {
    setLavelChanged(true);

    const timeOut = setTimeout(() => {
      setLavelChanged(false);
    }, 2000);

    return () => clearTimeout(timeOut);
  }, [fillBy]);

  return (
    <div className="">
      <div className="w-[300px] h-[600px] border-2 border-gray-500 rounded-md border-t-0 mx-auto mt-20 relative shadow-2xl">
        <div
          className={`w-full bg-blue-300 opacity-80 absolute bottom-0 rounded-md ${lavelChanged && 'animate-wave'}`}
          style={{ height: `${fillBy}%` }}
        >
          <span className="text-white text-2xl justify-center flex animate-bounce">{Math.round(fillBy)}%</span>
        </div>
      </div>
    </div>
  );
};

export default Jug;
