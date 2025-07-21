import React, { useState } from "react";

const faqItems = [
  {
    question: "How do I book a car on your platform?",
    answer:
      "Just browse the available cars, select your desired one, and follow the steps to confirm your booking. It’s fast and secure!",
  },
  {
    question: "What documents do I need to rent a car?",
    answer:
      "You’ll need a valid driver’s license, a national ID or passport, and a debit/credit card for payment. Some locations may require additional docs.",
  },
  {
    question: "Are there mileage limits on rentals?",
    answer:
      "Most rentals come with unlimited mileage, but some premium cars have daily mileage caps. Check the car listing details before booking.",
  },
  {
    question: "Can I cancel or modify my reservation?",
    answer:
      "Yes, cancellations made 24 hours before pickup are fully refundable. Modifications can be made anytime before your trip starts.",
  },
  {
    question: "Is insurance included in the rental price?",
    answer:
      "Basic insurance is included. You can add extra coverage options like theft protection or collision damage waiver at checkout.",
  },
  {
    question: "What if the car breaks down during my rental?",
    answer:
      "We’ve got your back. Roadside assistance is included in every rental. Call our support line and we’ll handle the rest.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="px-4 py-20 mx-auto max-w-6xl md:px-8 lg:py-24">
      <div className="text-center mb-12">
        <p className="text-sm font-bold text-teal-600 uppercase mb-2">
          Support
        </p>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-lg">
          Everything you need to know about booking, payments, insurance, and
          more.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-800 focus:outline-none"
            >
              <span>{item.question}</span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`mt-2 text-gray-600 transition-all duration-300 ease-in-out ${
                activeIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <p className="pt-2">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
