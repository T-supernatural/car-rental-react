import React from "react";
import Header from "../components/Header";
import Cards from "../components/Cards";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";

const Homepage = () => {
  return (
    <div className="flex flex-col gap-20">
      <Header />
      <Cards />
      <Features />
      <Testimonials />
    </div>
  );
};

export default Homepage;
