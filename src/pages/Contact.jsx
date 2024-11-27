import React from "react";
import { FaFacebook, FaPhoneAlt, FaMapMarkerAlt, FaStar, FaQuoteLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-80 bg-gray-200 flex items-center justify-center">
        <img
          src="/contact.png"
          alt="hero_image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bg-black bg-opacity-50 inset-0 flex items-center justify-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="max-w-5xl w-full px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Facebook */}
          <div className="flex flex-col items-center text-center">
            <FaFacebook className="text-pink-600 text-4xl mb-4" />
            <h2 className="text-lg font-semibold text-gray-800">Facebook</h2>
            <Link
              to="https://web.facebook.com/p/Sunnah-Cuisine-61553832227568/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:underline mt-2 text-sm sm:text-base"
            >
              Sunnah Cuisine
            </Link>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center text-center">
            <FaPhoneAlt className="text-pink-600 text-4xl mb-4" />
            <h2 className="text-lg font-semibold text-gray-800">Phone</h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              01770-067310
            </p>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center text-center">
            <FaMapMarkerAlt className="text-pink-600 text-4xl mb-4" />
            <h2 className="text-lg font-semibold text-gray-800">Location</h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              1st Floor, Rahman Plaza,
              <br />
              Ghatail, Tangail, Bangladesh
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full bg-gray-50 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
            About Sunnah Cuisine
          </h2>
          <p className="text-center text-gray-600 text-sm sm:text-base mb-6">
            At Sunnah Cuisine, we bring you the perfect blend of traditional
            flavors and modern dining experiences. Our commitment is to deliver
            fresh, delicious food while maintaining the highest standards of
            hygiene and quality.
          </p>
          <div className="flex justify-center gap-4">
            <FaStar className="text-yellow-500 text-3xl" />
            <FaStar className="text-yellow-500 text-3xl" />
            <FaStar className="text-yellow-500 text-3xl" />
            <FaStar className="text-yellow-500 text-3xl" />
            <FaStar className="text-yellow-500 text-3xl" />
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="w-full bg-gray-100 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaQuoteLeft className="text-pink-500 text-2xl mb-4" />
              <p className="text-gray-600">
                "The best dining experience I've ever had! The food is
                incredibly delicious, and the service is top-notch."
              </p>
              <p className="text-gray-800 mt-4 font-semibold text-sm">
                - A Happy Customer
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaQuoteLeft className="text-pink-500 text-2xl mb-4" />
              <p className="text-gray-600">
                "Loved the variety of dishes and the attention to detail. Will
                definitely visit again!"
              </p>
              <p className="text-gray-800 mt-4 font-semibold text-sm">
                - Another Satisfied Customer
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Contact;
