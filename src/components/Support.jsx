import Link from "next/link";
import React from "react";

const Support = () => {
  return (
    <section
      className="h-screen flex items-center justify-center px-6 relative"
    >
      <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: 'url(/images/supportbg.jpeg)',
      filter: 'brightness(50%)', // Adjusts opacity to 50%
    }}
  ></div>
      <div className="relative text-center p-6 md:p-12 rounded-lg shadow-l">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide mb-4">
          JOIN US TO SUPPORT
        </h1>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide mb-6">
          OUR CAUSE
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
          {[
            { amount: "$20", color: "bg-[#BD040E] hover:bg-[#A3030C]" },
            { amount: "$100", color: "bg-[#063159] hover:bg-[#041E2C]" },
            { amount: "$250", color: "bg-[#FF8303] hover:bg-[#FF5E00]" },
            { amount: "$1000", color: "bg-[#28A745] hover:bg-[#218838]" },
            { amount: "OTHER AMOUNT", color: "bg-[#FFC107] hover:bg-[#FFB300] text-[#063159]" },
          ].map((item, index) => (
            <Link
              key={index}
              href="https://secure.anedot.com/ernest-banda-campaign/dcd772fc-1ff2-44b7-a30d-77fce7078f9e"
              passHref
            >
              <p
                className={`px-6 py-3 text-white font-semibold rounded-lg shadow-md transform transition-all ${item.color} hover:scale-105 cursor-pointer`}
                aria-label={`Donate ${item.amount} to support our cause`}
              >
                {item.amount}
              </p>
            </Link>
          ))}
        </div>

        <p className="text-white font-semibold text-sm sm:text-lg text-center mt-5 border border-white rounded-sm w-full p-2">
  Paid for by Ernest Banda for Dallas City Council District 9
</p>

      </div>
    </section>
  );
};

export default Support;
