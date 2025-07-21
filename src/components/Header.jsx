import { useEffect, useState } from "react";
import slides from "../data/header";

const Header = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[700px] overflow-hidden mt-18">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[url(slide.image)] bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4">
            <h2 className="text-6xl md:text-7xl font-bold mb-4">{slide.title}</h2>
            <p className="text-xl md:text-2xl">{slide.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Header;
