import { useState, useEffect } from "react";
import About from "./Component/About";
import Exp from "./Component/Exp";
import Scroll from "./assets/Scroll.svg";
import Blur from "./assets/blur.png";
import Nachiket from "./assets/Nachiket.svg";
import { Image } from "@nextui-org/react";
import Skill from "./Component/Skill";
import Projects from "./Component/Project";
import Contact from "./Component/Contact";
import Cursor from "./Component/Cursor";
import Spline from "@splinetool/react-spline";
import { SpeedInsights } from "@vercel/speed-insights/react";

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
        className="cursor-none text-5xl right-12 top-8 font-bold text-black relative hover:text-red-500"
        onClick={toggleMenu}
        style={{ animation: 'glow 3s infinite' }}
      >
        ↯ {/* This is the symbol with glow effect */}
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-[#F0F8FF] p-4 z-50 cursor-none flex flex-col items-center justify-center md:cursor-auto space-y-10">
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
            className="text-5xl font-bold cursor-none text-black hover:text-red-500 animate-drop"
            style={{ animationDelay: '0.1s' }}  // Animation delay for staggered effect
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className="text-5xl font-bold cursor-none text-black hover:text-red-500 animate-drop"
            style={{ animationDelay: '0.2s' }}  // Slight delay for each link
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="#projects"
            className="text-5xl font-bold cursor-none text-black hover:text-red-500 animate-drop"
            style={{ animationDelay: '0.3s' }}  // Delay to stagger
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-5xl font-bold cursor-none text-black hover:text-red-500 animate-drop"
            style={{ animationDelay: '0.4s' }}  // Further delay
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

  // Inline styles for animations
  const logoKeyframes = `
   
    @keyframes bounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    @keyframes float {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-5px);
      }
      100% {
        transform: translateY(0);
      }
    }

    @keyframes glow {
      0% {
        text-shadow: 0 0 10px #83EEFF, 0 0 20px #83EEFF, 0 0 30px #83EEFF, 0 0 40px #83EEFF;
        filter: drop-shadow(0 0 20px #83EEFF);
      }
      50% {
        text-shadow: none;
        filter: drop-shadow(0 0 0px #83EEFF);
      }
      100% {
        text-shadow: 0 0 10px #83EEFF, 0 0 20px #83EEFF, 0 0 30px #83EEFF, 0 0 40px #83EEFF;
        filter: drop-shadow(0 0 20px #83EEFF);
      }
    }
  `;

  return (
    <>
      {isDesktop && <Cursor isDesktop={isDesktop} />}

      <style>{logoKeyframes}</style> {/* Define keyframes inside the component */}

      <div className="bg-[#F0F8FF] overflow-x-hidden pr-4">
        
        <Navbar />

        <div className="home-container m-1 ml-5 mt-5 rounded-2xl border-1 border-[#383838]">
          <div className="h-screen m-4 rounded-xl border-1 border-[#383838] relative">
            <div className="logo-container flex justify-center items-center h-screen relative">
              <div className="vector-container1 absolute top-5 right-10 m-4"></div>
              <div className="rectangle absolute bottom-40 w-full flex justify-center items-center">
</div>


              {/* Logo with looping animation */}
              <main className="h-screen w-full">
              <SpeedInsights/>
                
      {/* Spline 3D Scene Embed */}
      <Spline
         scene="https://prod.spline.design/8B4fZ0w2cXsT8kpM/scene.splinecode"
        style={{ width: '100%', height: '100%' }} // Ensure it takes full width and height
        
      />
      
    </main>
              {/* Nachiket.svg with animated glow effect */}
              <img
                src={Nachiket}
                className="absolute h-80% w-full sm:w-1/2 z-20"
                style={{
                  top: '50%',
                  left: '51%',
                  transform: 'translate(-50%, -50%)',
                  animation: 'glow 3s infinite', // Glow on/off animation
                }}
              />
            </div>

            <div className="rectangle absolute top-1/2 mt-36 w-full flex justify-center items-center">
              <div
                className="box absolute rounded-full border-2 border-black py-2 flex justify-center items-center mr-42"
                style={{
                  backgroundImage: `url(${Blur})`,
                  backgroundSize: '200px 200px',
                  backgroundPosition: 'center',
                }}
              >
                <span className="text-black text-sm sm:text-2xl mx-5">
                  UI/UX Designer & Developer
                  <span className="text-red-500">™</span>
                </span>
              </div>
            </div>

            {/* Scroll SVG with bounce animation */}
            <div className="scroll-container absolute bottom-20 right-36 mr-2 ">
              <a href="#Scroll">
                <Image
                  src={Scroll}
                  className="animate-bounce"
                  style={{
                    animation: 'bounce 1s infinite, float 2s ease-in-out infinite',
                    animationDuration: '1s',
                  }}
                />
              </a>
            </div>
          </div>

          <div id="about">
            <About />
          </div>

          <div id="exp">
            <Exp />
          </div>

          <div id="skills">
            <Skill />
          </div>

          <div id="projects">
            <Projects />
          </div>

          <div id="contact">
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
