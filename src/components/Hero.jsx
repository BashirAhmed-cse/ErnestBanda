"use client"
import React, { useEffect, useState } from "react";
import hero1 from "../../public/images/hero1.jpeg";
import hero2 from "../../public/images/hero2.png";
import hero3 from "../../public/images/hero3.jpeg";
import leftSide from "../../public/images/left_side.jpeg";
import Image from "next/image";

const Hero = () => {
  // State for tracking the current image index
  const [currentImage, setCurrentImage] = useState(0);

  // Array of images
  const images = [hero1, hero2, hero3];

  useEffect(() => {
    // Set interval to change the image every 3 seconds
    const intervalId = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[600px]">
      {/* Left Side - Hero Image with Text Overlay */}
      <div className="relative w-full h-[400px] md:h-full flex flex-col items-center">
        {/* Image Container */}
        <div className="relative w-full h-[250px] md:h-[379px]">
          {/* Sliding Hero Images */}
          <div className="absolute w-full h-full transition-all duration-1000">
            <Image
              src={images[currentImage]}
              alt="Campaign Image"
              fill
              style={{ objectFit: "cover" }}
              className="w-full h-full"
            />
          </div>

          {/* Overlayed Text (Centered Inside Image) */}
          {/* Scrolling Text (News Headline Effect) */}
          <div className="absolute bottom-5 md:bottom-10 left-0 w-full flex items-center bg-red-600 opacity-80 text-white p-2 md:p-3 text-center font-bold text-sm md:text-lg">
            <div className="animate-scroll text-white">
              A COMMON MAN WITH COMMON SENSE SOLUTIONS
            </div>
          </div>
        </div>

        {/* Text Below Image */}
        <div className="text-blue-900 mt-4 md:mt-6 text-center">
          <p className="font-semibold uppercase text-lg md:text-4xl">
            This is for Ernest Banda,
          </p>
          <p className="font-semibold uppercase text-lg md:text-4xl">
            Who is Running For
          </p>
          <p className="font-semibold uppercase text-lg md:text-4xl">
            Dallas City Council District 9
          </p>
        </div>
      </div>

      {/* Right Side - Image (Now Visible on All Screens) */}
      <div className="relative w-full h-[400px] md:h-full">
        <Image
          src={leftSide}
          alt="Campaign Image"
          fill
          style={{ objectFit: "cover" }}
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default Hero;
