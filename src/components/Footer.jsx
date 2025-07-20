import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-5 bg-gray-400 text-white mt-96 w-full">
      <div className="flex justify-between px-20 py-10">
        <div className="text-2xl flex flex-col gap-2">
          <h2 className="text-5xl font-bold">
            Car<span className="text-black">Rental.</span>
          </h2>
          <p>Your one-stop solution for car rentals.</p>
          <p>Contact us for more information.</p>
          <p>Phone: +1234567890</p>
        </div>
        <div className="flex flex-col gap-2 text-2xl font-semibold">
          <p>Quick Links</p>
          <li className="hover:text-black hover:cursor-pointer hover:-translate-y-0.5 transition-transform">
            Home
          </li>
          <li className="hover:text-black hover:cursor-pointer hover:-translate-y-0.5 transition-transform">
            About
          </li>
          <li className="hover:text-black hover:cursor-pointer hover:-translate-y-0.5 transition-transform">
            Explore
          </li>
        </div>
        <div className="flex flex-col gap-2 text-2xl font-semibold">
          <p>Our Services</p>
          <li className="hover:text-black hover:cursor-pointer hover:-translate-y-0.5 transition-transform">
            Corporate travels
          </li>
          <li className="hover:text-black hover:cursor-pointer hover:-translate-y-0.5 transition-transform">
            Special Events
          </li>
          <li className="hover:text-black hover:cursor-pointer hover:-translate-y-0.5 transition-transform">
            Airport Transport
          </li>
        </div>
      </div>
      <hr />
      <div className="flex justify-between text-2xl font-semibold px-20 py-5">
        <p>
          © 2023 Car<span className="text-black">Rental.</span> All rights
          reserved.
        </p>
        <p className="flex gap-10 text-4xl">
          <i className="fa-brands fa-facebook hover:text-black hover:cursor-pointer hover:-translate-y-0.5 transition-transform"></i>
          <i className="fa-brands fa-x-twitter hover:text-black hover:cursor-pointer hover:-translate-y-0.5 transition-transform"></i>
          <i className="fa-brands fa-instagram hover:text-black hover:cursor-pointer hover:-translate-y-0.5 transition-transform"></i>
        </p>
      </div>
    </div>
  );
};

export default Footer;
