import React from 'react'

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-[100vw] z-20 bg-white flex flex-row justify-between items-center border-b-6 border-t-6">
      <div className="border-black border-l-4 border-r-4 p-6">
        <p className='font-bold text-sm md:text-lg'>DSU DEVHACK</p>
      </div>
      <div className="text-sm md:text-lg border-black border-l-4 border-r-4 p-6 bg-blue-950">
        <p className='font-bold text-white'>
          <span className='font-bold text-blue-600'>&lt;date&gt;</span> July-September, 2025{" "}
          <span className='font-bold text-blue-600'>&lt;/date&gt;</span>
        </p>
      </div>
    </div>
  );
}

export default Navbar