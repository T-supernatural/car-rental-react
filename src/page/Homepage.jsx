import React from "react";
import Header from "../components/Header";
import Cards from "../components/Cards";

const Homepage = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default Homepage;
