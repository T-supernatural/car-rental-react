import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-4 w-full fixed top-0 left-0 bg-gray-400 text-white shadow-lg">
      <div className="text-5xl font-bold">
        Car<span className="text-black">Rental.</span>
      </div>
      <ul className="hidden md:flex space-x-16 font-semibold text-2xl items-center ">
        <li className="hover:text-black hover:cursor-pointer hover:-translate-y-0.5 transition-transform">
          Home
        </li>
        <li className="hover:text-black hover:cursor-pointer hover:-translate-y-0.5 transition-transform">
          About
        </li>
        <li className="hover:text-black hover:cursor-pointer hover:-translate-y-0.5 transition-transform">
          Explore
        </li>
        <a className="bg-white text-black px-3 py-2 rounded-xl hover:bg-gray-500 hover:text-white hover:cursor-pointer text-center content-center shadow-lg">
          Contact
        </a>
      </ul>
      <div className="md:hidden flex items-center">
        <button className="text-3xl hover:cursor-pointer hover:text-black">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
