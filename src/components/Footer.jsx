import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 w-full mt-40 border-t-2 border-t-gray-300">
      <div className="flex flex-col md:flex-row justify-between gap-10 px-6 md:px-20 py-10">
        {/* Brand Info */}
        <div className="text-lg md:text-2xl flex flex-col gap-2 max-w-md">
          <h2 className="text-3xl md:text-5xl font-bold text-black">
            Car<span className="text-blue-700">Rental.</span>
          </h2>
          <p>Your one-stop solution for car rentals.</p>
          <p>Contact us for more information.</p>
          <p>Phone: +1234567890</p>
        </div>

        {/* Quick Links */}
        <div className="text-lg md:text-2xl font-semibold">
          <p className="mb-2">Quick Links</p>
          <ul className="flex flex-col gap-2">
            <li className="hover:text-black hover:cursor-pointer transition-transform hover:-translate-y-0.5">
              Home
            </li>
            <li className="hover:text-black hover:cursor-pointer transition-transform hover:-translate-y-0.5">
              About
            </li>
            <li className="hover:text-black hover:cursor-pointer transition-transform hover:-translate-y-0.5">
              Explore
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="text-lg md:text-2xl font-semibold">
          <p className="mb-2">Our Services</p>
          <ul className="flex flex-col gap-2">
            <li className="hover:text-black hover:cursor-pointer transition-transform hover:-translate-y-0.5">
              Corporate travels
            </li>
            <li className="hover:text-black hover:cursor-pointer transition-transform hover:-translate-y-0.5">
              Special Events
            </li>
            <li className="hover:text-black hover:cursor-pointer transition-transform hover:-translate-y-0.5">
              Airport Transport
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-300 mx-10" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-5 text-center md:text-left text-lg md:text-2xl font-semibold px-6 md:px-20 py-6">
        <p>
          © {new Date().getFullYear()} <span className="text-black"> Car
          <span className="text-blue-700">Rental.</span></span> All rights reserved.
        </p>

        <div className="flex gap-8 text-3xl">
          <i className="fa-brands fa-facebook hover:text-black cursor-pointer hover:-translate-y-0.5 transition-transform"></i>
          <i className="fa-brands fa-x-twitter hover:text-black cursor-pointer hover:-translate-y-0.5 transition-transform"></i>
          <i className="fa-brands fa-instagram hover:text-black cursor-pointer hover:-translate-y-0.5 transition-transform"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
