import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faWhatsapp,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-4">
        <div className="flex gap-6 flex-wrap justify-center md:justify-start">
          <Link to="/" className="hover:text-blue-400 transition">
            Home
          </Link>
          <Link to="/contact-us" className="hover:text-blue-400 transition">
            Contact Us
          </Link>
          <Link to="/about-us" className="hover:text-blue-400 transition">
            About Us
          </Link>
           <Link to="/assignment" className="hover:text-blue-400 transition">
            Assignment
          </Link>
        </div>

        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="https://github.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition text-2xl"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition text-2xl"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://www.instagram.com/black.devilofworld/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition text-2xl"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://wa.me/03700641684"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition text-2xl"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
