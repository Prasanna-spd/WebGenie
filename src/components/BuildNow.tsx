// "use client"

// import React from 'react'

// function BuildNow() {
//   return (
//      <button className="mt-8 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 hover:cursor-pointer text-white rounded-full text-lg font-semibold transition duration-300 shadow-md">Build Now</button>
//   )
// }

// export default BuildNow


"use client";

import React, { useState } from "react";
import Modal from "./Modal"; // Make sure Modal is in TSX too
import GeneratorUI from "./GeneratorUI";


const BuildNow: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button
        // onClick={() => setIsOpen(true)}
        className="mt-8 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 hover:cursor-pointer text-white rounded-full text-lg font-semibold transition duration-300 shadow-md"
      >
        Build Now
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <GeneratorUI />
      </Modal>
    </>
  );
};

export default BuildNow;
