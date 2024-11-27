import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer-container py-10 px-5 md:px-28 text-white bg-[#2c3e50]">
      <ul className="flex flex-wrap lg:flex-nowrap gap-10 mb-10 justify-between">
        {/* About Section */}
        <li className="flex flex-col gap-3">
          <h2 className="text-pink-600 text-4xl font-medium">Sunnah.</h2>
          <p className="text-gray-300">
            At Sunnah Cuisine, we bring you a blend of traditional and modern dishes crafted with love. Our mission is to serve you the best culinary experience with a touch of warmth and authenticity.
          </p>
          <div className="icons text-3xl flex gap-4 text-gray-400">
            <FaFacebook className="hover:text-pink-500 transition duration-300" />
            <FaInstagram className="hover:text-pink-500 transition duration-300" />
            <FaTwitter className="hover:text-pink-500 transition duration-300" />
          </div>
        </li>

        {/* Quick Links Section */}
        <li className="flex flex-col gap-3 min-w-40">
          <h2 className="text-gray-300 text-2xl">Quick Links</h2>
          <ul className="text-lg text-gray-400 space-y-2">
            <li className="hover:text-white transition duration-300 cursor-pointer">Home</li>
            <li className="hover:text-white transition duration-300 cursor-pointer">Menu</li>
            <li className="hover:text-white transition duration-300 cursor-pointer">Contact Us</li>
          </ul>
        </li>

        {/* Contact Information */}
        <li className="flex flex-col gap-4">
          <h2 className="text-gray-300 text-2xl">Get in Touch</h2>
          <div className="text-gray-400 space-y-2">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-pink-500" />
              <span>+8801624-632517</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-pink-500" />
              <span>contact@sunnah.com</span>
            </div>
            <p>
              1st Floor, Rahman Plaza, Ghatail, Tangail, Bangladesh
            </p>
          </div>
        </li>
      </ul>

      {/* Footer Bottom */}
      <p className="text-center border-t-2 border-gray-600 pt-6 text-gray-400">
        Copyright 2024 © Sunnah Cuisine - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
