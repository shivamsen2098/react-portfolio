// Footer.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaDribbble, FaBehance, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between gap-8">
        {/* About Section */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-white mb-2">Port<span className="text-cyan-500">folio</span></h1>
          <p className="text-gray-400">
            Crafting digital experiences that users love and businesses benefit from.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1">
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-cyan-500 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-cyan-500 transition-colors">About</a></li>
            <li><a href="#projects" className="hover:text-cyan-500 transition-colors">Projects</a></li>
            <li><a href="#services" className="hover:text-cyan-500 transition-colors">Services</a></li>
            <li><a href="#contact" className="hover:text-cyan-500 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex-1">
          <h4 className="font-semibold text-white mb-3">Follow Me</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-cyan-500 transition-colors"><FaLinkedin size={22} /></a>
            <a href="#" className="hover:text-cyan-500 transition-colors"><FaGithub size={22} /></a>
            <a href="#" className="hover:text-cyan-500 transition-colors"><FaDribbble size={22} /></a>
            <a href="#" className="hover:text-cyan-500 transition-colors"><FaBehance size={22} /></a>
            <a href="#" className="hover:text-cyan-500 transition-colors"><FaInstagram size={22} /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8 text-sm">
        &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
      </div>
    </footer>
  );
}
