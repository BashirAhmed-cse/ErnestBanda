"use client";
import React from "react";

const Issues = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-[#EAEBE6] shadow-lg rounded-lg mt-25">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#BD040E] text-center">
        Ernest Banda - Candidate for Dallas City Council District #9
      </h1>

      <p className="text-base sm:text-lg font-semibold text-[#063159] mb-4">
        Dear Community Members,
      </p>

      <p className="text-gray-800 leading-relaxed text-sm sm:text-base md:text-lg mb-6">
        As your candidate for Dallas City Council District #9, I am deeply
        committed to enhancing our community’s safety, fiscal responsibility,
        and overall prosperity. Here are the principles and plans guiding my
        campaign:
      </p>

      {/** Responsive Sections */}
      <Section
        title="Public Safety Commitment"
        content="With over 40 years in Loss Prevention and Asset Protection, and close collaboration with various police agencies, I am dedicated to ensuring our law enforcement is supported and effective. I strongly oppose defunding the police, prioritizing officer safety and community security."
      />

      <Section
        title="Fiscal Responsibility"
        content="I oppose wasteful spending, like the $6.1 million spent on counting trees in city parks. My career has honed my ability to manage budgets effectively, always staying well under budget. I will bring this fiscal discipline to the city council to ensure taxpayer money is spent wisely."
      />

      <Section
        title="Engagement and Transparency"
        content="I believe in the importance of transparency and open communication in government. My commitment is to hold regular town hall meetings, create accessible public forums, and ensure that all decision-making processes are transparent. Your voice is essential in shaping our community’s future."
      />

      <Section
        title="Crime and Public Safety Funding"
        content="Given the 37% rise in citywide crime, I support Proposition U, which strengthens our police and firefighters' pensions and funds other vital public safety initiatives. I advocate reallocating frivolous expenditures to enhance our police force and safety measures."
      />

      <Section
        title="The Road Ahead"
        content="My campaign is about more than winning an election; it's about fostering significant and lasting change. I bring a wealth of experience, a deep understanding of our community's needs, and a vision for a brighter future. Together, we can address the challenges facing District 9 and ensure it continues to thrive."
      />

      <p className="text-gray-800 leading-relaxed text-sm sm:text-base md:text-lg mb-6">
        Join me on this journey to make District 9 a better place for all. Let's
        work together to bring about real change and ensure a prosperous,
        equitable, and sustainable future for every resident.
      </p>

      <p className="text-gray-800 font-semibold text-sm sm:text-base">
        Warm regards,
      </p>
      <p className="text-gray-800 font-semibold text-sm sm:text-base">
        Ernest Banda
      </p>
    </div>
  );
};

/** Responsive Section Component */
const Section = ({ title, content }) => (
  <div className="mb-8">
    <h2 className="text-lg sm:text-xl md:text-2xl font-bold bg-[#BD040E] text-white p-2 rounded-md inline-block">
      {title}
    </h2>
    <p className="text-gray-800 leading-relaxed text-sm sm:text-base md:text-lg mt-3">
      {content}
    </p>
  </div>
);

export default Issues;
