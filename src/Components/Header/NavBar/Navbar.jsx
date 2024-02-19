import React, { useState } from "react";
import image from "../../../../public/image/header.png1.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="bg-cover bg-center w-[100%] h-40 fixed z-50"
      style={{ backgroundImage: `url(${image})`}}
    >
      <nav className="mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="#" className="text-white font-bold text-6xl">
                  Logo
                </a>
              </div>
            </div>
            <div className="hidden md:flex">
              <div className="ml-auto flex items-center space-x-4">
                <a
                  href="#"
                  className="text-4xl text-white rounded-md font-semibold"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-4xl text-white rounded-md font-semibold"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-4xl text-white rounded-md font-semibold"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="text-4xl text-white rounded-md font-semibold"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-gray-300 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-semibold"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-semibold"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-semibold"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-semibold"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
