import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import logo from "../../public/images/logo_white.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#012647]">
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-4 text-white mx-auto flex flex-col sm:flex-row sm:justify-between">
        {/* Navigation Links */}
        <div className="p-5 sm:w-1/4 md:w-1/5 flex justify-center sm:justify-start">
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
              <Link className="hover:text-red-500" href="#join-us">
                Join Us
              </Link>
            </li>
            <li>
              <a className="text-red-500" href="#">
                Donate
              </a>
            </li>
          </ul>
        </div>

        {/* Logo and Social Media Icons */}
        <div className="p-5 flex flex-col items-center justify-center sm:items-start sm:w-1/4 md:w-1/5">
          <Image
            src={logo}
            alt="Ernest Banda Logo"
            className="w-40 h-40 md:w-60 md:h-40 object-contain"
          />
          
          {/* Social Media Icons */}
          <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center md:flex-row gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61572970985821"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 mx-1"
            >
              <FaFacebook className="text-white h-8 w-8" />
            </a>
            <a
              href="https://x.com/i/flow/login?redirect_after_login=%2FErnestoBandaD9"
              target="_blank"
              className="w-8 mx-1"
            >
              <BsTwitterX className="text-white h-8 w-8" />
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="p-5 sm:w-1/4 md:w-1/5 pb-10 flex flex-col justify-center sm:items-start">
          <div className="text-sm text-center uppercase text-white font-bold mb-2">
            Contact Us
          </div>
          <ul className="space-y-2 text-center sm:text-left">
            <li>
              <a className="hover:text-red-500" href="mailto:ernestobanda@pm.me">
                ernestobanda@pm.me
              </a>
            </li>
            <li>
              <a className="hover:text-red-500" href="tel:+123456789">
                123-456-789
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
