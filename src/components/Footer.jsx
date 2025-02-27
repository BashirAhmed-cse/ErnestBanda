import React from "react";
import {
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";
import logo from "../../public/images/logo_white.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#012647]">
      <div className="py-2 px-12 text-white sm:flex sm:justify-between mx-auto">
        {/* Navigation Links */}
        <div className="p-5 sm:w-2/12">
          <ul className="space-y-2">
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
        <div className="p-5 sm:w-7/12 flex items-center justify-center flex-col">
          <Image
            src={logo}
            alt="Ernest Banda Logo"
            className="w-40 h-40 md:w-60 md:h-40 object-contain"
          />
          
          {/* Social Media Icons */}
          <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center max-w-screen-xl">
            <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex gap-4">
              <a href="#" className="w-8 mx-1">
                <IoLogoLinkedin className="text-white h-8 w-8" />
              </a>
              <a href="#" className="w-8 mx-1">
                <IoLogoYoutube className="text-white h-8 w-8" />
              </a>
              <a href="#" className="w-8 mx-1">
                <FaFacebook className="text-white h-8 w-8" />
              </a>
              <a href="#" className="w-8 mx-1">
                <FaInstagram className="text-white h-8 w-8" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="p-5 sm:w-2/12">
          <div className="text-sm uppercase text-white font-bold">Contact Us</div>
          <ul className="space-y-2">
            <li>
              <a
                className="hover:text-red-500"
                href="mailto:ernestobanda@pm.me"
              >
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
