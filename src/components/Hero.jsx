"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import hero1 from "../../public/images/hero1.jpeg";
import hero3 from "../../public/images/hero3.jpeg";
import hero2 from "../../public/images/hero2.png";
import hero4 from "../../public/images/hero4n.jpeg";
import leftSide from "../../public/images/left_side.jpeg";

const images = [hero1, hero3];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isImageChanging, setIsImageChanging] = useState(false); // For controlling animation state
  const images = [hero1, hero3,hero2,hero4];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="flex flex-col md:flex-row w-full mx-auto min-h-[400px] md:min-h-[600px] xl:min-h-[700px] 2xl:min-h-[800px] 4xl:min-h-[900px]">
      {/* Left Side - Hero Image + Text */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-4 md:px-4 bg-[#EAEBE6]">
        {/* Sliding Hero Images */}
        <div className="relative w-full h-[200px] md:h-full overflow-hidden">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentImage === index ? 1 : 0 }}
              transition={{ duration: 0.8 }}
              className="absolute w-full h-full"
            >
              <Image
                src={img}
                alt="Campaign Image"
                fill
                style={{ objectFit: "cover" }}
                className="w-full h-full rounded-lg shadow-md"
              />
            </motion.div>
          ))}
        </div>

        {/* Slogan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full flex justify-center bg-red-600 opacity-90 text-white p-2 md:p-3 text-center font-bold text-sm md:text-lg rounded-lg mt-4"
        >
          A COMMON MAN WITH COMMON SENSE SOLUTIONS
        </motion.div>

        {/* Campaign Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-blue-900 text-center mt-4 md:mt-6"
        >
          <p className="font-semibold uppercase text-lg md:text-4xl">
            This is for Ernest Banda,
          </p>
          <p className="font-semibold uppercase text-lg md:text-4xl">
            Who is Running For
          </p>
          <p className="font-semibold uppercase text-lg md:text-3xl">
            Dallas City Council District 9
          </p>
        </motion.div>
      </div>

      {/* Right Side - Static Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="relative flex-1 flex flex-col items-center justify-center px-4 md:px-4 bg-[#EAEBE6]"
      >
        <div  className="relative w-full h-[200px] md:h-full">
          <Image
            src={leftSide}
            alt="Campaign Image"
            fill
            style={{ objectFit: "cover" }}
            className="w-full h-full rounded-lg"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
