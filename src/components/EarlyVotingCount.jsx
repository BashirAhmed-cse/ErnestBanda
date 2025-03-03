"use client";
import React, { useEffect, useState } from "react";

const EarlyVotingCount = () => {
  // Set the target date to April 22, 2025, at 7:00 AM (Central Time)
  const targetDate = new Date("2025-04-22T07:00:00-06:00"); // Central Time (UTC-6)

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="text-center p-8 bg-gradient-to-r from-[#EAEBE6] to-[#ffffff] shadow-lg">
      <h2 className="text-5xl font-extrabold text-[#BD040E] animate-pulse">EARLY VOTING COUNTDOWN</h2>

      <div className="flex justify-center mt-6 text-5xl font-extrabold space-x-6">
        <div className="flex flex-col items-center">
          <span className="text-[#063159]">{timeLeft.days}</span>
          <span className="text-sm font-medium text-[#063159] mt-2">DAYS</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[#063159]">{timeLeft.hours}</span>
          <span className="text-sm font-medium text-[#063159] mt-2">HOURS</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[#063159]">{timeLeft.minutes}</span>
          <span className="text-sm font-medium text-[#063159] mt-2">MINUTES</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[#063159]">{timeLeft.seconds}</span>
          <span className="text-sm font-medium text-[#063159] mt-2">SECONDS</span>
        </div>
      </div>

      <div className="mt-4 text-lg font-semibold text-[#BD040E]">
        <p className="animate-pulse">Time is ticking away!</p>
      </div>
    </section>
  );
};

export default EarlyVotingCount;
