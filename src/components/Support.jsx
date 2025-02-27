import React from 'react'

const Support = () => {
  return (
    <section className="text-center p-8 bg-gradient-to-b from-[#EAEBE6] to-white shadow-lg border-t-2 border-[#BD040E]">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#BD040E] tracking-wide mb-4">
        JOIN US TO SUPPORT
      </h2>
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#063159] tracking-wide mb-6">
        OUR CAUSE
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
        <button className="px-6 py-3 bg-[#BD040E] text-white font-semibold rounded-lg shadow-md transform transition-all hover:bg-[#A3030C] hover:scale-105">
          $20
        </button>
        <button className="px-6 py-3 bg-[#063159] text-white font-semibold rounded-lg shadow-md transform transition-all hover:bg-[#041E2C] hover:scale-105">
          $100
        </button>
        <button className="px-6 py-3 bg-[#FF8303] text-white font-semibold rounded-lg shadow-md transform transition-all hover:bg-[#FF5E00] hover:scale-105">
          $250
        </button>
        <button className="px-6 py-3 bg-[#28A745] text-white font-semibold rounded-lg shadow-md transform transition-all hover:bg-[#218838] hover:scale-105">
          $1000
        </button>
        <button className="px-6 py-3 bg-[#FFC107] text-[#063159] font-semibold rounded-lg shadow-md transform transition-all hover:bg-[#FFB300] hover:scale-105">
          OTHER AMOUNT
        </button>
      </div>
    </section>
  )
}

export default Support;
