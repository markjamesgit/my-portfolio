import React from "react";
import { FaGithub, FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-accent text-text py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Section - About Me */}
          <div className="text-center md:text-left">
            <h4 className="text-3xl font-semibold text-text mb-4">About Me</h4>
            <p className="text-lg mb-4">
              I'm Mark James, a passionate 4th-year IT student specializing in
              web and mobile app development. I aim to combine functionality
              with visually appealing designs to create impactful digital
              solutions.
            </p>
            <p className="text-sm text-background">
              I am constantly learning new technologies to enhance my skills and
              stay ahead in the tech industry.
            </p>
          </div>

          {/* Center Section - Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-3xl font-semibold text-text mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-lg hover:text-accent">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-lg hover:text-accent">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="text-lg hover:text-accent">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-lg hover:text-accent">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section - Social Media Links */}
          <div className="text-center md:text-right">
            <h4 className="text-3xl font-semibold text-text mb-4">Follow Me</h4>
            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href="https://github.com/markjamesgit"
                className="text-3xl md:text-4xl text-secondary hover:text-background transition duration-300 ease-in-out"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.facebook.com/mark.james"
                className="text-3xl md:text-4xl text-secondary hover:text-background transition duration-300 ease-in-out"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/_mrkjmsv"
                className="text-3xl md:text-4xl text-secondary hover:text-background transition duration-300 ease-in-out"
              >
                <FaInstagram />
              </a>
              <a
                href="mailto:markjames.villagonzalo06@gmail.com"
                className="text-3xl md:text-4xl text-secondary hover:text-background transition duration-300 ease-in-out"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom - Copyright */}
        <div className="mt-12 text-center border-t border-primary pt-6 text-sm text-background ">
          <p>
            &copy; {new Date().getFullYear()} Mark James. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
