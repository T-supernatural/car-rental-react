import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    quote:
      "Booking a car with CarRental was the best decision on my business trip. The process was smooth, and the car was spotless. Arrived on time, no stress.",
    name: "James Adewale",
    role: "Sales Executive, Lagos",
    image: "/header/one.jpg",
  },
  {
    quote:
      "Using Flowbite helped us speed up our development time by weeks. The components are flexible and super easy to work with. Highly recommended.",
    name: "Sarah Johnson",
    role: "Lead Developer at Meta",
    image: "/header/two.jpg",
  },
  {
    quote:
      "Was nervous about renting a car, but SwiftRide made it so easy. The rates were fair and pickup was lightning fast. 10/10 service!",
    name: "Chinedu Eze",
    role: "Student, UNILAG",
    image: "/header/three.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-4">
      <div className="max-w-screen-xl mx-auto text-center">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="!pb-10"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <figure className="max-w-screen-md mx-auto">
                <svg
                  className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-2xl font-medium text-gray-900 dark:text-white">
                    "{t.quote}"
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={t.image}
                    alt={`${t.name} profile`}
                  />
                  <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div className="pr-3 font-medium text-gray-900 dark:text-white">
                      {t.name}
                    </div>
                    <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                      {t.role}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
