import React, { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../assets/logo.png";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <header className="bg-black p-3 md:p-5 fixed top-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={Logo} alt="Your Logo" className="h-16 w-22" />
        </div>
        <div className="md:flex hidden">
          <nav className="md:flex space-x-4">
            <Link
              activeClass="active"
              to="banner"
              spy={true}
              smooth={true}
              className="text-yellow-600 hover:text-yellow-900"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              className="text-yellow-600 hover:text-yellow-900"
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              className="text-yellow-600 hover:text-yellow-900"
            >
              Services
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              className="text-yellow-600 hover:text-yellow-900"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-yellow-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {menuOpened && (
            <div className="absolute top-12 right-0 bg-black p-4 mt-2">
              <nav>
                <Link
                  onClick={() => setMenuOpened(false)}
                  activeClass="active"
                  to="banner"
                  spy={true}
                  smooth={true}
                  className="block text-yellow-600 hover:text-yellow-900 my-2"
                >
                  Home
                </Link>
                <Link
                  onClick={() => setMenuOpened(false)}
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  className="block text-yellow-600 hover:text-yellow-900 my-2"
                >
                  About
                </Link>
                <Link
                  onClick={() => setMenuOpened(false)}
                  activeClass="active"
                  to="services"
                  spy={true}
                  smooth={true}
                  className="block text-yellow-600 hover:text-yellow-900 my-2"
                >
                  Services
                </Link>
                <Link
                  onClick={() => setMenuOpened(false)}
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  className="block text-yellow-600 hover:text-yellow-900 my-2"
                >
                  Contact
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
