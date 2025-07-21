import React from "react";
import Header from "../components/Header";
import Cards from "../components/Cards";
import Features from "../components/Features";

const Homepage = () => {
  return (
    <div className="flex flex-col gap-20">
      <Header />

      <Cards />
      <Features />
    </div>
  );
};

export default Homepage;
