import React from "react";
// import Image from "../assets/banner.jpg";
// import Image from "../assets/bg1.jpg";
import Image from "../assets/bg2.jpg";

const Banner = () => {
  return (
    <div className="relative h-screen" id="banner">
      <div className="relative w-full h-full">
        <img
          src={Image}
          alt="World-Class Representation in Recovery"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/4 sm:top-1/2 lg:top-16 left-5 sm:left-10 p-5 sm:p-10 text-white mt-20">
          <h1 className="text-4xl sm:text-5xl lg:text-8xl font-semibold">
            Delivering <br />
            Exceptional Recovery <br /> Representation
          </h1>
          <p className="mt-4 text-lg sm:text-3xl">
            We ensure you receive your rightful compensation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
