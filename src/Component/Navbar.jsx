import { useState, useEffect } from "react";
import Logo from "./assets/logo.svg"; // Import the logo SVG
import Cursor from "./Component/Cursor";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 767);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-5 right-5 z-50">
      <div
        className="cursor-none text-4xl right-10 top-6 font-bold text-black relative hover:text-red-500"
        onClick={toggleMenu}
        style={{ animation: 'glow 3s infinite' }}
      >
        ↯ {/* This is the symbol with glow effect */}
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-[#F0F8FF] p-4 z-50 cursor-none flex flex-col items-center justify-center space-y-10">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-3xl cursor-none text-black hover:text-red-500"
            style={{ animation: 'glow 3s infinite' }}
          >
            ✖
          </button>
          {isDesktop && <Cursor isDesktop={isDesktop} />} {/* Optional Cursor */}

          {/* Animated Links */}
          <a
            href="#home"
            className="text-5xl font-bold cursor-none text-black hover:text-red-500 drop-text"
            style={{ transitionDelay: '0.1s' }}  // Animation delay for staggered effect
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-5xl font-bold cursor-none text-black hover:text-red-500 drop-text"
            style={{ transitionDelay: '0.2s' }}  // Slight delay for each link
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="#projects"
            className="text-5xl font-bold cursor-none text-black hover:text-red-500 drop-text"
            style={{ transitionDelay: '0.3s' }}  // Delay to stagger
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-5xl font-bold cursor-none text-black hover:text-red-500 drop-text"
            style={{ transitionDelay: '0.4s' }}  // Further delay
            onClick={toggleMenu}
          >
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 767);

  // Detect screen size change
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 767);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat opacity-55"
      style={{
        backgroundImage: `url(${Logo})`,
      }}
    >
      {/* Custom Cursor for Desktop */}
      {isDesktop && <Cursor isDesktop={isDesktop} />}

      {/* Your Navbar */}
      <Navbar isDesktop={isDesktop} />
    </div>
  );
};

export default App;
