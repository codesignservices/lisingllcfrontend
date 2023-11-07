import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center md:text-left flex items-center">
            <div className="mb-4">
              <p className="text-3xl md:text-4xl text-yellow-600 font-bold">
                <img src={Logo} alt="Your Logo" className="h-16 w-22" />
              </p>
            </div>
          </div>
          <div className="text-center md:text-left">
            <div className="mb-4">
              <p className="text-2xl md:text-3xl text-yellow-600">About Us</p>
              <p className="text-lg text-yellow-900">
                Our driving principle is rooted in the conviction that everyone
                should have the chance to reclaim what rightfully belongs to
                them, and our commitment is unwavering in pursuit of this goal.
              </p>
            </div>
          </div>
          <div className="text-center md:text-left">
            <div className="mb-4">
              <p className="text-2xl md:text-3xl text-yellow-600">
                Contact info
              </p>
              <p className="text-lg text-yellow-900">
                98 Wadsworth Blvd Unit 127 PMB 5146
              </p>
              <p className="text-lg text-yellow-900">Lakewood, CO 80226</p>
              <p className="text-lg text-yellow-900">+1-720-621-7056</p>
              <p className="text-lg text-yellow-900">
                jdotson@legacyrisingllc.com
              </p>
            </div>
          </div>
          <div className="text-center md:text-left">
            <div className="mb-4">
              <div className="flex flex-col">
                {" "}
                <Link
                  activeClass="active"
                  to="banner"
                  spy={true}
                  smooth={true}
                  className="text-yellow-600 hover:text-yellow-900 text-2xl md:text-3xl "
                >
                  Home
                </Link>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  className="text-yellow-600 hover:text-yellow-900 text-2xl md:text-3xl "
                >
                  About
                </Link>
                <Link
                  activeClass="active"
                  to="services"
                  spy={true}
                  smooth={true}
                  className="text-yellow-600 hover:text-yellow-900 text-2xl md:text-3xl "
                >
                  Services
                </Link>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  className="text-yellow-600 hover:text-yellow-900 text-2xl md:text-3xl "
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
