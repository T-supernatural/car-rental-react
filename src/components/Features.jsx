// Features.jsx
import React from "react";

const Features = () => {
  const steps = [
    {
      id: 1,
      title: "Choose Your Car",
      description:
        "Browse through our luxury car catalog and pick the ride that suits your vibe.",
    },
    {
      id: 2,
      title: "Book Instantly",
      description:
        "Select your dates, confirm availability, and book with just a few clicks.",
    },
    {
      id: 3,
      title: "Get Delivered",
      description:
        "We deliver the car to your doorstep or preferred pickup location.",
    },
    {
      id: 4,
      title: "Drive & Enjoy",
      description:
        "Cruise around in style and experience top-tier comfort and performance.",
    },
  ];

  return (
    <>
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-white">
            How It Works
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((step) => (
              <div
                key={step.id}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition"
              >
                <div className="text-5xl font-bold text-blue-600 mb-4">
                  {step.id}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 py-10 max-w-5xl mx-auto">
        <div className="col-span-2 row-span-2">
          <img
            src="/features/f3.jpg"
            alt="Luxury Service"
            className="w-full h-full object-cover hover:scale-103 transition-transform duration-300"
          />
        </div>
        <div>
          <img
            src="/features/f4.jpg"
            alt="Car Interior"
            className="w-full h-full object-cover hover:scale-103 transition-transform duration-300"
          />
        </div>
        <div>
          <img
            src="/features/f1.jpg"
            alt="Client Experience"
            className="w-full h-full object-cover hover:scale-103 transition-transform duration-300"
          />
        </div>
        <div className="col-span-2">
          <img
            src="/features/f2.jpg"
            alt="Driving"
            className="w-full h-full object-cover hover:scale-103 transition-transform duration-300"
          />
        </div>
      </div>
    </>
  );
};

export default Features;
