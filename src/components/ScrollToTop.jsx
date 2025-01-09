import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check if the user has scrolled to the bottom of the page
  const checkScrollPosition = () => {
    const isAtBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight;
    setIsVisible(isAtBottom);
  };

  // Scroll the page back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Listen for scroll events
  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className="fixed bottom-10 right-10 z-50 cursor-pointer"
          onClick={scrollToTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-12 h-12 text-accent bg-text p-2 rounded-full shadow-lg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7-7-7 7"
            />
          </svg>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
