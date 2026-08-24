import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const images = [
  "/images/ban1.jfif",
  "/images/ban2.jfif",
  "/images/ban3.jfif",
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Previous slide
  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };

  // Next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="w-full">

      {/* ================= HERO SECTION ================= */}
      <section className="w-full bg-gray-100 py-12 md:py-16 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-600 px-4">
          Welcome to Health & Management Portal
        </h1>

        <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto px-4">
          Manage users, doctors, and managers seamlessly. Book appointments,
          assign tasks, and track admin statistics — all in one place.
        </p>
      </section>

      {/* ================= CAROUSEL ================= */}
      <section className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] overflow-hidden bg-gray-200">

        {/* Images */}
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`Banner ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              index === currentSlide
                ? "opacity-100"
                : "opacity-0"
            }`}
          />
        ))}

        {/* Previous Button */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="
            absolute
            left-3 sm:left-6
            top-1/2
            -translate-y-1/2
            z-20
            bg-transparent
            text-white
            w-10 h-10 sm:w-12 sm:h-12
            flex items-center justify-center
            text-2xl sm:text-3xl
            hover:text-gray-300
            transition-colors
          "
        >
          ❮
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="
            absolute
            right-3 sm:right-6
            top-1/2
            -translate-y-1/2
            z-20
            bg-transparent
            text-white
            w-10 h-10 sm:w-12 sm:h-12
            flex items-center justify-center
            text-2xl sm:text-3xl
            hover:text-gray-300
            transition-colors
          "
        >
          ❯
        </button>

      </section>

      {/* ================= NAVIGATION BUTTONS ================= */}
      <section className="w-full max-w-5xl mx-auto px-4 py-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* Home */}
          <Link
            to="/"
            className="
              bg-blue-600
              text-white
              px-6 py-4
              rounded-lg
              shadow-md
              hover:bg-blue-700
              hover:scale-105
              transition-all duration-200
              text-center
              font-medium
            "
          >
            Home
          </Link>

          {/* Sign Up */}
          <Link
            to="/signup"
            className="
              bg-green-500
              text-white
              px-6 py-4
              rounded-lg
              shadow-md
              hover:bg-green-600
              hover:scale-105
              transition-all duration-200
              text-center
              font-medium
            "
          >
            Sign Up
          </Link>

          {/* Login */}
          <Link
            to="/login"
            className="
              bg-indigo-500
              text-white
              px-6 py-4
              rounded-lg
              shadow-md
              hover:bg-indigo-600
              hover:scale-105
              transition-all duration-200
              text-center
              font-medium
            "
          >
            Login
          </Link>

          {/* Assignment */}
          <Link
            to="/admin-dashboard/get-all-managers"
            className="
              bg-purple-500
              text-white
              px-6 py-4
              rounded-lg
              shadow-md
              hover:bg-purple-600
              hover:scale-105
              transition-all duration-200
              text-center
              font-medium
            "
          >
            Assignment
          </Link>

          {/* Contact Us */}
          <Link
            to="/contactus"
            className="
              bg-gray-500
              text-white
              px-6 py-4
              rounded-lg
              shadow-md
              hover:bg-gray-600
              hover:scale-105
              transition-all duration-200
              text-center
              font-medium
            "
          >
            Contact Us
          </Link>

          {/* About Us */}
          <Link
            to="/AboutUs"
            className="
              bg-orange-500
              text-white
              px-6 py-4
              rounded-lg
              shadow-md
              hover:bg-orange-600
              hover:scale-105
              transition-all duration-200
              text-center
              font-medium
            "
          >
            About Us
          </Link>

        </div>
      </section>

    </div>
  );
};

export default Home;