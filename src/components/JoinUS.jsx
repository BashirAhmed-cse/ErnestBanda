"use client"
import React, { useState } from 'react';
import logo from "../../public/images/logo_white.png";
import Image from "next/image";

const JoinUS = () => {
  // State to manage checkbox checked state and form fields
  const [isChecked, setIsChecked] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  
  const [error, setError] = useState(false); // State for error message

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setError(false); // Reset error when user interacts with checkbox
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation for required fields
    if (!isChecked || !firstName || !lastName || !email || !phone) {
      setError(true); // Set error if any field is missing
    } else {
      setError(false);
      alert("Form submitted!"); // Here you can handle form submission logic
    }
  };

  return (
    <section className="bg-gradient-to-b from-red-600 to-blue-900 text-white text-center p-8 relative">
      <Image
        src={logo}
        alt="Logo"
        className="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-5 mt-6 h-[250px] w-[400px]"
      />

      <h2 className="text-3xl font-bold mb-6">JOIN US</h2>
      <form className="max-w-lg mx-auto space-y-6" onSubmit={handleSubmit}>
        <div className="flex space-x-4">
          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="text"
              placeholder="First Name*"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full border-none bg-transparent outline-none placeholder-white focus:outline-none"
              required
            />
          </div>
          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="text"
              placeholder="Last Name*"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full border-none bg-transparent outline-none placeholder-white focus:outline-none"
              required
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="email"
              placeholder="Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-none bg-transparent outline-none placeholder-white focus:outline-none"
              required
            />
          </div>
          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="tel"
              placeholder="Phone*"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border-none bg-transparent outline-none placeholder-white focus:outline-none"
              required
            />
          </div>
        </div>
        <div className="flex items-start gap-2 justify-start w-full">
          <input
            type="checkbox"
            id="consent"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="hidden"
          />
          <label
            htmlFor="consent"
            className="flex items-center space-x-2 cursor-pointer select-none"
          >
            <div className="w-[23px] h-[23px] border-2 border-[#ffffff] rounded-[5px] flex items-center justify-center transition-all duration-300 bg-transparent focus:ring-2 focus:ring-[#7a0bc0] checked:bg-[#7a0bc0] checked:border-[#270082]">
              <svg
                className="w-4 h-4 text-white transition-all duration-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 10l4 4L15 7"
                />
              </svg>
            </div>
            <span className="text-white text-sm font-normal font-['Quicksand'] tracking-tight">
              By providing your phone number and checking this box, you are consenting to receive calls and text messages, including autodialed and automated calls and texts, to that number from Ernest Banda - Candidate for Dallas City Council District #9. Message and data rates may apply. Reply "STOP" to opt-out. Terms & conditions/privacy policy apply: Privacy Policy & Terms of Use
            </span>
          </label>
        </div>

        {error && (
          <p className="text-red-500 text-sm mt-2">
            Please fill in all required fields and agree to the terms and conditions before submitting.
          </p>
        )}

        <button
          type="submit"
          className="bg-white text-red-500 font-bold px-6 py-3 mt-4 rounded-lg transition-all duration-300 hover:bg-[#063159] hover:text-white focus:outline-none"
        >
          I&apos;M IN
        </button>
      </form>
    </section>
  );
};

export default JoinUS;
