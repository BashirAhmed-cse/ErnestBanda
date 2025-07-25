"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import About1 from "../../../../public/images/about/about.jpg";
import About2 from "../../../../public/images/about/about1.jpeg";
import About3 from "../../../../public/images/about/about3.jpeg";
import About4 from "../../../../public/images/about/about4.jpeg";


const About = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isImageChanging, setIsImageChanging] = useState(false); // For controlling animation state
  const images = [About1, About2,About3,About4];

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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="h-screen w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-12 bg-[#EAEBE6] shadow-lg rounded-lg mt-25 my-25"
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-gray-800 mt-15">
        {/* Left Side Content (60%) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="md:col-span-3 flex flex-col justify-center max-w-3xl mx-auto"
        >
          <h1 className="text-2xl font-bold mb-4">
            <span className="text-[#BD040E]">Ernest Banda</span> – Candidate for
            District 9
          </h1>
          <p className="mb-4 text-gray-800 text-sm xl:text-md">
            I am Ernest Banda, a proud father of three, grandfather of seven,
            and recently a great-grandfather to a wonderful baby boy. My family
            and I deeply value faith, family, and country, principles that have
            guided us through generations and contributed to our success.
          </p>
          <p className="mb-4 text-gray-800 text-sm">
            With over 40 years of experience in Loss Prevention and Asset
            Protection within both the soft goods and grocery industries, I have
            worked closely with various law enforcement agencies. My commitment
            to public safety runs deep, as members of my own family continue to
            serve in law enforcement.
          </p>
          <p className="mb-4 text-gray-800 text-sm">
            Now retired, I have spent the past few years observing our city move
            in the wrong direction. This growing concern has motivated me to
            step forward and put my name on the ballot. My priorities include
            increasing the number of law enforcement officers, eliminating
            wasteful spending, and ensuring the effective implementation of
            Proposition H, which mandates hiring additional police officers and
            increasing funding for both police and fire pensions.
          </p>
          <p className="mb-4 text-gray-800 text-sm">
            It’s time to take back our city and put it on the right path for all
            citizens. Together, we can restore safety, accountability, and
            prosperity in our community.
          </p>
        </motion.div>

        {/* Right Side Image (40%) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="md:col-span-2 flex justify-center items-center w-full h-[400px] md:h-full relative"
        >
          <Image
            src={images[currentImage]}
            alt="About Ernest Banda"
            fill
            style={{ objectFit: "cover" }}
            className={`rounded-lg shadow-lg transition-opacity duration-1000 ${
              isImageChanging ? "opacity-0" : "opacity-100"
            }`}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
