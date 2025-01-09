import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);

  // Toggle the mobile menu visibility
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    if (!isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  // Close the mobile menu when a menu item is clicked
  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  // Handle the scroll event
  const handleScroll = () => {
    if (typeof window !== "undefined") {
      // Get the current scroll position
      const currentScrollY = window.scrollY;

      // If scrolling down, hide the navbar
      if (currentScrollY > lastScrollY) {
        setNavbarVisible(false);
      } else {
        // If scrolling up, show the navbar
        setNavbarVisible(true);
      }

      // Update the last scroll position
      setLastScrollY(currentScrollY);
    }
  };

  // Listen to scroll event
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Cleanup body overflow class on component unmount
  useEffect(() => {
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <nav
      className={`text-text bg-background fixed top-0 left-0 w-full p-8 transition-transform duration-300 ${
        navbarVisible ? "transform-none" : "-translate-y-full"
      } z-50`}
    >
      <div className="flex justify-between items-center">
        {/* Desktop Menu (visible on medium and larger screens) */}
        <ul className="hidden md:flex justify-center flex-grow space-x-12">
          <li className="text-xl text-text">
            <a href="#home">Home</a>
          </li>
          <li className="text-xl text-text">
            <a href="#about">About Me</a>
          </li>
          <li className="text-xl text-text">
            <a href="#skills">Skills</a>
          </li>
          <li className="text-xl text-text">
            <a href="#projects">Projects</a>
          </li>
        </ul>

        {/* Burger Menu Icon (visible on mobile) */}
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <button className="text-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (visible only on small screens) */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]`}
      >
        <div className="bg-background p-6 w-full h-full relative text-center">
          <ul className="space-y-4 mt-60">
            <li className="text-text">
              <a href="#home" className="text-lg" onClick={() => closeMenu()}>
                Home
              </a>
            </li>
            <li className="text-text">
              <a href="#about" className="text-lg" onClick={() => closeMenu()}>
                About Me
              </a>
            </li>
            <li className="text-text">
              <a href="#skills" className="text-lg" onClick={() => closeMenu()}>
                Skills
              </a>
            </li>
            <li className="text-text">
              <a
                href="#projects"
                className="text-lg"
                onClick={() => closeMenu()}
              >
                Projects
              </a>
            </li>
          </ul>

          {/* Close Button */}
          <div className="text-center mt-4" onClick={closeMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 mx-auto text-text"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
