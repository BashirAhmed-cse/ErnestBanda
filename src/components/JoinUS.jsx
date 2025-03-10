"use client";
import React, { useState, useCallback } from "react";
import emailjs from "emailjs-com";
import Image from "next/image";

const JoinUS = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCheckboxChange = useCallback(() => {
    setIsChecked((prev) => !prev);
    setError("");
  }, []);

  const handleChange = useCallback((e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  const validateForm = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      return "All fields are required.";
    }
    if (!isChecked) {
      return "You must agree to the terms.";
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      return "Invalid email format.";
    }
    const phonePattern = /^[0-9]{10,15}$/;
    if (!phonePattern.test(formData.phone)) {
      return "Invalid phone number.";
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorMsg = validateForm();
    if (errorMsg) {
      setError(errorMsg);
      return;
    }

    setLoading(true);
    setError("");

    const templateParams = {
      to_name: "Recipient Name",
      from_name: `${formData.firstName} ${formData.lastName}`,
      message: `Phone: ${formData.phone}\nEmail: ${formData.email}`,
    };

    try {
      await emailjs.send(
        "service_ea04k7h",
        "template_qm1lm87",
        templateParams,
        "Gn9HccCrvoAz9qtTQ"
      );
      setSuccessMessage("Form submitted successfully!");
      setFormData({ firstName: "", lastName: "", email: "", phone: "" });
      setIsChecked(false);
    } catch (error) {
      setError("Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="join-us" className=" w-full max-w-6xl mx-auto px-4 py-10 rounded-lg bg-gradient-to-b from-red-600 to-blue-900">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-gray-800">
        <div className="md:col-span-3 flex flex-col justify-center">
          <section className="text-white text-center p-20 relative">
            <h2 className="text-3xl font-bold mb-6">JOIN US</h2>
            <form className="max-w-lg mx-auto space-y-6" onSubmit={handleSubmit}>
              <div className="flex gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name*"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border-b-2 bg-transparent text-lg outline-none placeholder-white focus:border-indigo-500"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name*"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border-b-2 bg-transparent text-lg outline-none placeholder-white focus:border-indigo-500"
                />
              </div>
              <div className="flex space-x-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b-2 bg-transparent text-lg outline-none placeholder-white focus:border-indigo-500"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone*"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-b-2 bg-transparent text-lg outline-none placeholder-white focus:border-indigo-500"
                />
              </div>
              <div className="flex items-start gap-2 justify-start w-full">
                <input
                  type="checkbox"
                  id="consent"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="hidden"
                />
                <label htmlFor="consent" className="flex items-center space-x-2 cursor-pointer select-none">
                  <div className="w-[23px] h-[23px] border-2 border-white rounded-md flex items-center justify-center">
                    {isChecked && <span className="text-white text-xl">✔</span>}
                  </div>
                  <span className="text-white text-sm">
                    By providing your phone number and checking this box, you agree to receive calls and texts.
                  </span>
                </label>
              </div>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              {successMessage && <p className="text-green-500 text-sm mt-2">{successMessage}</p>}
              <button
                type="submit"
                className="bg-white text-red-500 font-bold px-6 py-3 mt-4 rounded-lg hover:bg-blue-800 hover:text-white"
                disabled={loading}
              >
                {loading ? "Sending..." : "I'M IN"}
              </button>
            </form>
          </section>
        </div>
        <div className="md:col-span-2 flex justify-center items-center w-full h-[450px] relative">
          <Image src="/images/hero4.jpeg" alt="Elizabeth Matus" fill className="rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default JoinUS;
