"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu as MenuIcon,
  X as CloseIcon,
  Music as MusicIcon,
} from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleMenuClick = () => setIsMenuOpen(!isMenuOpen);
  const handleDropdownClick = (id) => setDropdownOpen(dropdownOpen === id ? null : id);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    // <header className="bg-transparent text-gray-800 py-4 px-6 z-50 fixed w-full">
    <header className="bg-neutralGray text-textGray py-4 px-6 z-50 fixed w-full">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 text-accentRed">
          <MusicIcon className="w-8 h-8" />
          <h1 className="text-2xl font-bold">Rock 'n' Read</h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 ml-auto">
          {/* <Link href="#" className="flex items-center hover:text-blue-600 hover:bg-blue-100 transition-colors duration-200 rounded-md px-3 py-2">Home</Link>
          <Link href="#" className="flex items-center hover:text-blue-600 hover:bg-blue-100 transition-colors duration-200 rounded-md px-3 py-2">About Us</Link> */}
          <Link href="#" className="hover:text-accentYellow transition-colors">Home</Link>
          <Link href="#" className="hover:text-accentYellow transition-colors">About Us</Link>
          {/* Impact Dropdown */}
          <div className="relative group">
            <button onClick={() => handleDropdownClick(1)} className="flex items-center hover:text-blue-600 hover:bg-blue-100 transition-colors duration-200 rounded-md px-3 py-2">Impact</button>
            {dropdownOpen === 1 && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                <Link href="#" onClick={closeMenu} className="block px-4 py-2 hover:bg-gray-200">Real Challenges</Link>
                <Link href="#" onClick={closeMenu} className="block px-4 py-2 hover:bg-gray-200">Real Solutions</Link>
                <Link href="#" onClick={closeMenu} className="block px-4 py-2 hover:bg-gray-200">Real Evidence</Link>
              </div>
            )}
          </div>

          {/* Help Children Dropdown */}
          <div className="relative group">
            <button onClick={() => handleDropdownClick(2)} className="flex items-center hover:text-blue-600 hover:bg-blue-100 transition-colors duration-200 rounded-md px-3 py-2">Help Children</button>
            {dropdownOpen === 2 && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                <Link href="#" onClick={closeMenu} className="block px-4 py-2 hover:bg-gray-200">Strategies</Link>
                <Link href="#" onClick={closeMenu} className="block px-4 py-2 hover:bg-gray-200">Workshops</Link>
                <Link href="#" onClick={closeMenu} className="block px-4 py-2 hover:bg-gray-200">Musical Fitness Assessment</Link>
              </div>
            )}
          </div>

          <Link href="#" className="flex items-center hover:text-blue-600 hover:bg-blue-100 transition-colors duration-200 rounded-md px-3 py-2">A Song a Day Lessons</Link>
          
          {/* More Dropdown */}
          <div className="relative group">
            <button onClick={() => handleDropdownClick(3)} className="flex items-center hover:text-blue-600 hover:bg-blue-100 transition-colors duration-200 rounded-md px-3 py-2">More</button>
            {dropdownOpen === 3 && (
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md">
                <Link href="#" onClick={closeMenu} className="block px-4 py-2 hover:bg-gray-200">Why Singing Works--Brain Research</Link>
                <Link href="#" onClick={closeMenu} className="block px-4 py-2 hover:bg-gray-200">Videos</Link>
                <Link href="#" onClick={closeMenu} className="block px-4 py-2 hover:bg-gray-200">Quotes from Researchers</Link>
                <Link href="#" onClick={closeMenu} className="block px-4 py-2 hover:bg-gray-200">Media</Link>
              </div>
            )}
          </div>

          {/* Buttons */}
          <Link href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md ml-4 hover:bg-blue-700">Contact Us</Link>
          <Link href="#" className="bg-green-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-green-600">Donate</Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="flex md:hidden">
          <button onClick={handleMenuClick} aria-label="Toggle menu">
            {isMenuOpen ? <CloseIcon className="h-6 w-6 text-blue-600" /> : <MenuIcon className="h-6 w-6 text-blue-600" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute inset-0 bg-white flex flex-col items-center justify-start py-8 px-4 space-y-4">
            <Link href="#" onClick={closeMenu} className="flex items-center hover:text-blue-600 hover:bg-blue-100 transition-colors duration-200 rounded-md px-3 py-2">Home</Link>
            <Link href="#" onClick={closeMenu} className="flex items-center hover:text-blue-600 hover:bg-blue-100 transition-colors duration-200 rounded-md px-3 py-2">About Us</Link>

            {/* Mobile Impact Dropdown */}
            <div className="flex flex-col items-center">
              <button onClick={() => handleDropdownClick(1)} className="flex items-center hover:text-blue-600 hover:bg-blue-100 transition-colors duration-200 rounded-md px-3 py-2">Impact</button>
              {dropdownOpen === 1 && (
                <div className="flex flex-col items-start mt-2 space-y-1">
                  <Link href="#" onClick={closeMenu} className="hover:bg-gray-200">Real Challenges</Link>
                  <Link href="#" onClick={closeMenu} className="hover:bg-gray-200">Real Solutions</Link>
                  <Link href="#" onClick={closeMenu} className="hover:bg-gray-200">Real Evidence</Link>
                </div>
              )}
            </div>

            {/* Mobile Help Children Dropdown */}
            <div className="flex flex-col items-center">
              <button onClick={() => handleDropdownClick(2)} className="flex items-center hover:text-blue-600 hover:bg-blue-100 transition-colors duration-200 rounded-md px-3 py-2">Help Children</button>
              {dropdownOpen === 2 && (
                <div className="flex flex-col items-start mt-2 space-y-1">
                  <Link href="#" onClick={closeMenu} className="hover:bg-gray-200">Strategies</Link>
                  <Link href="#" onClick={closeMenu} className="hover:bg-gray-200">Workshops</Link>
                  <Link href="#" onClick={closeMenu} className="hover:bg-gray-200">Musical Fitness Assessment</Link>
                </div>
              )}
            </div>

            <Link href="#" onClick={closeMenu} className="flex items-center hover:text-blue-600 hover:bg-blue-100 transition-colors duration-200 rounded-md px-3 py-2">A Song a Day Lessons</Link>

            {/* Mobile More Dropdown */}
            <div className="flex flex-col items-center">
              <button onClick={() => handleDropdownClick(3)} className="flex items-center hover:text-blue-600 hover:bg-blue-100 transition-colors duration-200 rounded-md px-3 py-2">More</button>
              {dropdownOpen === 3 && (
                <div className="flex flex-col items-start mt-2 space-y-1">
                  <Link href="#" onClick={closeMenu} className="hover:bg-gray-200">Why Singing Works--Brain Research</Link>
                  <Link href="#" onClick={closeMenu} className="hover:bg-gray-200">Videos</Link>
                  <Link href="#" onClick={closeMenu} className="hover:bg-gray-200">Quotes from Researchers</Link>
                  <Link href="#" onClick={closeMenu} className="hover:bg-gray-200">Media</Link>
                </div>
              )}
            </div>

            {/* Mobile Buttons */}
            <Link href="#" onClick={closeMenu} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Contact Us</Link>
            <Link href="#" onClick={closeMenu} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Donate</Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;

