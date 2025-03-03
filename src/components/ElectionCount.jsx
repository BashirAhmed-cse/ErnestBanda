"use client"
import React, { useEffect, useState } from 'react';

const ElectionCount = () => {
    // Set the target date to March 25, 2025
    const targetDate = new Date("2025-05-03T07:00:00");

  
    const [timeLeft, setTimeLeft] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    });
  
    useEffect(() => {
      // Update countdown every second
      const interval = setInterval(() => {
        const now = new Date();
        const difference = targetDate - now;
  
        // Calculate time components
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
        // Update state with the remaining time
        setTimeLeft({ days, hours, minutes, seconds });
  
        // Stop the countdown when time reaches 0
        if (difference <= 0) {
          clearInterval(interval);
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
      }, 1000); // Update every second
  
      // Cleanup on component unmount
      return () => clearInterval(interval);
    }, [targetDate]);
  
    return (
      <section className="text-center p-8 bg-gradient-to-r from-[#EAEBE6] to-[#ffffff]  shadow-lg">
        <h2 className="text-5xl font-extrabold text-[#BD040E] animate-pulse">ELECTION DAY COUNTDOWN</h2>
        
        {/* Countdown Timer */}
        <div className="flex justify-center mt-6 text-5xl font-extrabold space-x-6">
          {/* Time Format: Days : Hours : Minutes : Seconds */}
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

        {/* Animation for numbers */}
        <div className="mt-4 text-lg font-semibold text-[#BD040E]">
          <p className="animate-pulse">Time is ticking away!</p>
        </div>
      </section>
    );
  };
  
export default ElectionCount;
