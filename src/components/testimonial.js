import React, { useState, useEffect } from "react";
import TestimonialBg from "../assets/testi.jpg";

const testimonialsData = [
  {
    text: "I want to express my immense gratitude to Daniel from Legacy Rising LLC for assisting my parents in recovering their savings accounts. They couldn't have managed this on their own, and I deeply appreciate the swift and professional service.",
    author: "Sarah",
  },
  {
    text: "Initially, I had my doubts about working with this company, but I'm glad I decided to hire them. My family and I are delighted with how they've helped us recover the funds. Thank you.",
    author: "Carlos",
  },
  {
    text: "I had no idea that I had unclaimed money until Legacy Rising LLC contacted me. Once I enlisted their services, the process was remarkably fast, and I received my payment!",
    author: "Emily",
  },
  {
    text: "Legacy Rising LLC took the time to explain everything thoroughly right from the beginning, making it incredibly easy for me to reclaim my funds from the state.",
    author: "William",
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonialsData.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonialsData.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${TestimonialBg})`,
  };

  if (testimonialsData.length === 0) {
    return <div>No testimonials available</div>;
  }

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-16 md:py-20 lg:py-24"
      style={backgroundImageStyle}
    >
      <div className="container mx-auto text-center relative z-10">
        <div className="relative mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 translate-x-4/2 -translate-x-2 w-10 h-10 text-white bg-yellow-600 rounded-full z-10 md:left-2 lg:left-4"
            onClick={prevTestimonial}
          >
            &lt;
          </button>
          <div className="text-white bg-white bg-opacity-25 p-8 md:p-10 lg:p-12 rounded-lg shadow-lg">
            <p className="text-lg md:text-xl lg:text-2xl italic">
              {testimonialsData[currentTestimonial].text}
            </p>
            <p className="text-sm mt-4">
              {testimonialsData[currentTestimonial].author}
            </p>
          </div>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 -translate-x-4/2 w-10 h-10 text-white bg-yellow-600 rounded-full z-10 md:right-2 lg:right-4"
            onClick={nextTestimonial}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
