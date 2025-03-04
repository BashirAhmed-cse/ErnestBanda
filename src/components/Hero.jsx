"use client";
import React, { useEffect, useState } from "react";
import hero1 from "../../public/images/hero1.jpeg";
import hero3 from "../../public/images/hero3.jpeg";
import leftSide from "../../public/images/left_side.jpeg";
import Image from "next/image";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isImageChanging, setIsImageChanging] = useState(false); // For controlling animation state
  const images = [hero1, hero3];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsImageChanging(true); // Start the transition animation
      setTimeout(() => {
        setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
        setIsImageChanging(false); // End the transition animation after image change
      }, 500); // Match the duration of the transition
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="flex flex-col md:flex-row w-full mx-auto min-h-[400px] md:min-h-[600px] xl:min-h-[700px] 2xl:min-h-[800px] 4xl:min-h-[900px]">
      {/* Left Side - Hero Image + Text */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-4 md:px-4 bg-[#EAEBE6]">
        {/* Sliding Hero Images */}
        <div className="relative w-full h-[200px] md:h-full">
          <Image
            src={images[currentImage]}
            alt="Campaign Image"
            fill
            style={{ objectFit: "cover" }}
            className={`w-full h-full rounded-lg shadow-md transition-opacity duration-1000 ${isImageChanging ? 'opacity-0' : 'opacity-100'}`}
          />
        </div>

        {/* Slogan */}
        <div className="w-full flex justify-center bg-red-600 opacity-90 text-white p-2 md:p-3 text-center font-bold text-sm md:text-lg rounded-lg mt-4">
          A COMMON MAN WITH COMMON SENSE SOLUTIONS
        </div>

        {/* Campaign Text */}
        <div className="text-blue-900 text-center mt-4 md:mt-6">
          <p className="font-semibold uppercase text-lg md:text-4xl">
            This is for Ernest Banda,
          </p>
          <p className="font-semibold uppercase text-lg md:text-4xl">
            Who is Running For
          </p>
          <p className="font-semibold uppercase text-lg md:text-3xl">
            Dallas City Council District 9
          </p>
        </div>
      </div>

      {/* Right Side - Image (Visible on Small Screens) */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-4 md:px-4 bg-[#EAEBE6]">
        <div className="relative w-full h-[200px] md:h-full">
          <Image
            src={leftSide}
            alt="Campaign Image"
            fill
            style={{ objectFit: "cover" }}
            className="w-full h-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
