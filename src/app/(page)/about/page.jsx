import React from "react";
import about from "../../../../public/images/about.png";
import Image from "next/image";

const About = () => {
  return (
    <div className="mx-auto p-4 bg-[#EAEBE6] shadow-lg rounded-lg pt-30">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Left Side Content (60%) */}
        <div className="md:col-span-3 flex flex-col justify-center">
          <h1 className="text-2xl font-bold mb-4">
            <span className="text-[#BD040E]">Ernest Banda</span> – Candidate for District 9
          </h1>
          <p className="mb-4">
            I am Ernest Banda, a proud father of three, grandfather of seven,
            and recently a great-grandfather to a wonderful baby boy. My family
            and I deeply value faith, family, and country, principles that have
            guided us through generations and contributed to our success.
          </p>
          <p className="mb-4">
            With over 40 years of experience in Loss Prevention and Asset
            Protection within both the soft goods and grocery industries, I have
            worked closely with various law enforcement agencies. My commitment
            to public safety runs deep, as members of my own family continue to
            serve in law enforcement.
          </p>
          <p className="mb-4">
            Now retired, I have spent the past few years observing our city move
            in the wrong direction. This growing concern has motivated me to
            step forward and put my name on the ballot. My priorities include
            increasing the number of law enforcement officers, eliminating
            wasteful spending, and ensuring the effective implementation of
            Proposition H, which mandates hiring additional police officers and
            increasing funding for both police and fire pensions.
          </p>
          <p className="mb-4">
            It’s time to take back our city and put it on the right path for all
            citizens. Together, we can restore safety, accountability, and
            prosperity in our community.
          </p>
        </div>

        {/* Right Side Image (40%) */}
        <div className="md:col-span-2 flex justify-center items-center w-full h-[400px] md:h-full relative">
       
          <Image
            src={about}
            alt="About Ernest Banda"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
