import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gray-900 text-white fixed w-full z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold">
          Port<span className="text-cyan-400">folio</span>
        </a>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:items-center md:space-x-8 absolute md:static left-0 w-full md:w-auto bg-gray-900 md:bg-transparent text-center md:text-left transition-all duration-300 ease-in-out ${
            isOpen
              ? "top-16 opacity-100"
              : "top-[-500px] opacity-0 md:opacity-100"
          }`}
        >
          <li>
            <a href="#home" className="block py-2 px-4 hover:text-cyan-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="block py-2 px-4 hover:text-cyan-400">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="block py-2 px-4 hover:text-cyan-400">
              Skills
            </a>
          </li>
          <li>
            <a href="#portfolio" className="block py-2 px-4 hover:text-cyan-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#services" className="block py-2 px-4 hover:text-cyan-400">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="block py-2 px-4 hover:text-cyan-400">
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger Icon (Mobile) */}
        <div
          className="md:hidden cursor-pointer text-2xl"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
}
