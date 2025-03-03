"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/images/logo_n.png";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleJoinUsClick = () => {
    if (pathname === "/") {
      document.getElementById("join-us")?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#join-us");
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${scrolling ? "bg-white shadow-md" : "bg-[#EAEBE6]"}`}
    >
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-2">
        {/* Logo (Clickable - Redirects to Home) */}
        <Link href="/">
          <Image 
            src={logo} 
            alt="Ernest Banda Logo" 
            width={85} 
            height={85} 
            className="w-16 h-16 md:w-25 md:h-25 object-contain cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation (Visible on larger screens) */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-black hover:text-red-600 text-2xl font-semibold">Home</Link>
          <Link href="/about" className="text-black hover:text-red-600 text-2xl font-semibold">About</Link>
          <Link href="/issues" className="text-black hover:text-red-600 text-2xl font-semibold">Issues</Link>
          <button onClick={handleJoinUsClick} className="text-black hover:text-red-600 text-2xl font-semibold">
  Join Us
</button>
          <Link
            href="https://secure.anedot.com/ernest-banda-campaign/dcd772fc-1ff2-44b7-a30d-77fce7078f9e" 
            className="bg-red-600 text-white px-2 py-2 rounded-lg hover:bg-red-700 text-2xl font-semibold"
          >
            Donate
          </Link>
        </nav>

        {/* Donate Button (Always Visible on Mobile) */}
        <Link
          href="https://secure.anedot.com/ernest-banda-campaign/dcd772fc-1ff2-44b7-a30d-77fce7078f9e" 
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 md:hidden"
        >
          Donate
        </Link>

        {/* Mobile Menu Button (☰) */}
        <button 
          className="md:hidden text-black focus:outline-none text-2xl" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Menu (Shows When Open) */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-[#EAEBE6] shadow-md flex flex-col items-center py-4 space-y-3 md:hidden">
          <Link href="/" className="text-black hover:text-red-600">Home</Link>
          <Link href="/about" className="text-black hover:text-red-600">About</Link>
          <Link href="/issues" className="text-black hover:text-red-600">Issues</Link>
          <button onClick={handleJoinUsClick} className="text-black hover:text-red-600">
  Join Us
</button>
        </nav>
      )}
    </header>
  );
};

export default Header;
