"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const router = useRouter();
  const { pathname } = router;

  const handleJoinUsClick = () => {
    if (pathname === "/") {
      document.getElementById("join-us")?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#join-us");
    }
  };

  return (
    <div className="bg-[#012647]">
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-6 text-white mx-auto flex flex-col sm:flex-row sm:justify-between gap-6 sm:gap-0">
        {/* Navigation Links */}
        <div className="flex flex-col items-center sm:items-start sm:w-1/4 md:w-1/5">
          <ul className="space-y-2 text-center sm:text-left">
            <li>
              <Link className="hover:text-red-500" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-red-500" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-red-500" href="/issues">
                Issues
              </Link>
            </li>
            <li>
              <button onClick={handleJoinUsClick} className="hover:text-red-500">
                Join Us
              </button>
            </li>
            <li>
              <Link className="text-red-500" href="https://secure.anedot.com/ernest-banda-campaign/dcd772fc-1ff2-44b7-a30d-77fce7078f9e">
                Donate
              </Link>
            </li>
          </ul>
        </div>

        {/* Logo and Social Media Icons */}
        <div className="flex flex-col items-center sm:items-center sm:w-1/4 md:w-1/5 text-center">
          <Image
            src="/images/logo_n.png"
            alt="Ernest Banda Logo"
            width={160}
            height={160}
            className="object-contain"
          />

          {/* Social Media Icons */}
          <div className="flex py-4 text-gray-800 text-sm flex-row justify-center gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61572970985821"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8"
            >
              <FaFacebook className="text-white h-8 w-8" />
            </a>
            <a
              href="https://x.com/i/flow/login?redirect_after_login=%2FErnestoBandaD9"
              target="_blank"
              className="w-8"
            >
              <BsTwitterX className="text-white h-8 w-8" />
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center sm:items-start sm:w-1/4 md:w-1/5 text-center">
          <button
            onClick={handleJoinUsClick}
            className="text-sm uppercase text-white font-bold cursor-pointer"
          >
            Contact Us
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
