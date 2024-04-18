import React, { useState } from "react";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down 400px
  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page when clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add scroll event listener to track scrolling
  window.addEventListener("scroll", toggleVisibility);

  return (
    <div className="fixed bottom-8 right-8 z-10">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-gray-300 text-black font-bold py-2 px-4 rounded-md focus:outline-none font-customFont"
        >
          Scroll to Top
        </button>
      )}
    </div>
  );
}

export default ScrollToTopButton;
