import MySVG from "../assets/img.svg";
import { Image } from "@nextui-org/react";
import { useEffect, useRef } from "react";

const Skill = () => {
  const topContainerRef = useRef(null);
  const bottomContainerRef = useRef(null);

  useEffect(() => {
    const topElement = topContainerRef.current;
    const bottomElement = bottomContainerRef.current;

    const observerOptions = {
      root: null,
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === topElement) {
            topElement.style.animation = "slideInFromTop 1s ease-out forwards";
          } else if (entry.target === bottomElement) {
            bottomElement.style.animation = "slideInFromBottom 1s ease-out forwards";
          }
        }
      });
    }, observerOptions);

    if (topElement) observer.observe(topElement);
    if (bottomElement) observer.observe(bottomElement);

    return () => {
      if (topElement) observer.unobserve(topElement);
      if (bottomElement) observer.unobserve(bottomElement);
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#F0F8FF] flex items-center justify-center p-4 overflow-x-hidden">
      <div className="box w-full h-full max-w-[1448px] mx-auto flex flex-col py-20 md:flex-row border border-[#383838] rounded-[13px] relative">
        
        {/* Top Text Section with Border Animation */}
        <div
          ref={topContainerRef}
          className="flex-1 flex flex-col justify-center p-6 relative"
          style={{ opacity: 0, transform: "translateY(-100px)", transition: "all 0.5s ease-in-out" }}
        >
          {/* Loader (Eye) Positioned Above the Text */}
          <div className="loader absolute top-[-50px] left-1/2 transform -translate-x-1/2"></div>

          <div className="text-[#121212] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 font-serif ">
            I’ve acquired a diverse set <br />
            of skills
          </div>
          <div className="text-[#121212] text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed ">
            and I hone them every day.
            <br />
            Currently, I’m learning React Native and some backend development.
            <br />
            〙«» ›‹ «»〘
          </div>
        </div>

        {/* Image Section with Border Animation */}
        <div
          ref={bottomContainerRef}
          className="flex-1 flex items-center justify-center p-6"
          style={{ opacity: 0, transform: "translateY(100px)", transition: "all 0.5s ease-in-out" }}
        >
          <Image
            src={MySVG}
            alt="Skill Illustration"
            className="w-full max-w-[600px] md:max-w-[700px] lg:max-w-[800px] h-auto object-cover"
          />
        </div>
      </div>

      {/* Loader CSS and Border Animation */}
      <style jsx>{`
        @keyframes slideInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-100px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInFromBottom {
          0% {
            opacity: 0;
            transform: translateY(100px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .loader {
          display: inline-flex;
          gap: 20px;
        }
        .loader:before,
        .loader:after {
          content: "";
          height: 50px;
          aspect-ratio: 1;
          border-radius: 50%;
          background: radial-gradient(farthest-side, #000 95%, #0000) 50% / 15px 15px no-repeat #FF0000;
          animation: l10 1.5s infinite alternate;
        }
        .loader:after {
          --s: -1;
        }

        @keyframes l10 {
          0%, 20% {
            transform: scaleX(var(--s, 1)) rotate(0deg);
            clip-path: inset(0);
          }
          60%, 100% {
            transform: scaleX(var(--s, 1)) rotate(30deg);
            clip-path: inset(45% 0 0);
          }
        }
      `}</style>
    </div>
  );
};

export default Skill;
