import React, { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        scrolled
          ? "bg-gray-800"
          : "bg-gray-900"
      } text-white p-6 sticky top-0 z-50 shadow-lg transition-all ease-in-out duration-300`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold cursor-pointer">
          <span className="text-yellow-300 hover:text-yellow-400 transition duration-300 ease-in-out">MyPortfolio</span>
        </div>

        <div className="hidden lg:flex flex-grow justify-center">
          <ul className="flex space-x-8">
            {["Home", "About", "Education", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item} className="group relative">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-xl hover:text-yellow-400 transition duration-300 ease-in-out focus:outline-none"
                >
                  {item}
                </a>
                <span className="absolute w-0 h-1 bg-yellow-300 left-0 bottom-0 group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-3xl"
          >
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      <div className={`${menuOpen ? 'block' : 'hidden'} lg:hidden`}>
        <ul className="text-center space-y-4 py-4 bg-gray-800">
          {["Home", "About", "Education", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-xl text-white hover:text-yellow-400 transition duration-300 focus:outline-none"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
