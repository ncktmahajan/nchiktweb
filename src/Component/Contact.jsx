import { useEffect, useRef } from "react";

const Contact = () => {
  const touchRef = useRef(null);

  useEffect(() => {
    const letters = touchRef.current.querySelectorAll("span");

    const observerOptions = {
      root: null,
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          letters.forEach((span, idx) => {
            setTimeout(() => {
              span.classList.add("active");
            }, 750 * idx);
          });
        }
      });
    }, observerOptions);

    if (touchRef.current) {
      observer.observe(touchRef.current);
    }

    letters.forEach((span) => {
      span.addEventListener("animationend", () => {
        span.classList.remove("active");
      });
    });

    return () => {
      if (touchRef.current) {
        observer.unobserve(touchRef.current);
      }
    };
  }, []);

  return (
    <div className="relative min-h-[40vh] sm:min-h-[50vh] lg:min-h-[50vh] w-full p-4 sm:p-6 md:p-8 overflow-x-hidden">
      {/* Inline CSS for animations */}
      <style jsx>{`
        @keyframes balance {
          0%,
          100% {
            transform: rotate(0deg);
          }
          30%,
          60% {
            transform: rotate(-45deg);
          }
        }

        @keyframes shrinkjump {
          10%,
          35% {
            transform: scale(2, 0.2) translate(0, 0);
          }
          45%,
          50% {
            transform: scale(1) translate(0, -150px);
          }
          80% {
            transform: scale(1) translate(0, 0);
          }
        }

        @keyframes falling {
          12% {
            transform: rotateX(240deg);
          }
          24% {
            transform: rotateX(150deg);
          }
          36% {
            transform: rotateX(200deg);
          }
          48% {
            transform: rotateX(175deg);
          }
          60%,
          85% {
            transform: rotateX(180deg);
          }
          100% {
            transform: rotateX(0deg);
          }
        }

        @keyframes rotate {
          20%,
          80% {
            transform: rotateY(180deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }

        @keyframes toplong {
          10%,
          40% {
            transform: translateY(-48vh) scaleY(1);
          }
          90% {
            transform: translateY(-48vh) scaleY(4);
          }
        }

        /* Styles for active spans */
        .span-1.active {
          animation: balance 1.5s ease-out;
          transform-origin: bottom left;
        }

        .span-2.active {
          animation: shrinkjump 1s ease-in-out;
          transform-origin: bottom center;
        }

        .span-3.active {
          animation: falling 2s ease-out;
          transform-origin: bottom center;
        }

        .span-4.active {
          animation: rotate 1s ease-out;
        }

        .span-5.active {
          animation: toplong 1.5s linear;
        }
      `}</style>

      <div className="absolute inset-3 bg-[#D8E5F1] border border-[#383838] rounded-b-[10px] sm:rounded-b-[12px] lg:rounded-b-[13px]"></div>

      <div className="relative flex justify-between items-center font-serif z-10 text-[#242424] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
        <div>
          Stay In{" "}
          <span ref={touchRef} className="word">
            <span className="span-1 inline-block">T</span>
            <span className="span-2 inline-block">o</span>
            <span className="span-3 inline-block">u</span>
            <span className="span-4 inline-block">c</span>
            <span className="span-5 inline-block">h</span>
          </span>
          
        </div>
        {/* QR code image */}
        <div className="qr-code">
          <img src="/QRcode.png" alt="QR Code" className="h-20 w-20 lg:h-18 lg:w-18"/>
        </div>
      </div>

      <div className="relative z-10 mt-4 sm:mt-6 border-b border-[#242424] w-full max-w-8xl"></div>

      <div className="relative z-10 mt-3 sm:mt-4">
        <div className="text-[#121212] text-sm sm:text-base md:text-lg font-light leading-relaxed mb-1 sm:mb-2">
          <a href="https://linkedin.com/in/nachiket-mahajan" target="_blank" rel="noopener noreferrer" className="cursor-none">
            LinkedIn ⌁
          </a>
        </div>
        <div className="text-[#121212] text-sm sm:text-base md:text-lg font-light leading-relaxed mb-1 sm:mb-2">
          <a href="https://www.behance.net/nachiketmahajan" target="_blank" rel="noopener noreferrer" className="cursor-none">
            Behance ⌁
          </a>
        </div>
        <div className="text-[#121212] text-sm sm:text-base md:text-lg font-light leading-relaxed mb-1 sm:mb-2">
          <a href="https://github.com/ncktmahajan" target="_blank" rel="noopener noreferrer" className="cursor-none">
            Github ⌁
          </a>
        </div>
        <div className="text-[#121212] text-sm sm:text-base md:text-lg font-light leading-relaxed mb-1 sm:mb-2">
          <a href="mailto:mahajnnchikt@gmail.com" className="cursor-none">
            mahajnnchikt@gmail.com ⌁
          </a>
        </div>
      </div>

      <div className="relative z-10 mt-6 sm:mt-8 text-center lg:text-right max-w-5xl ml-auto">
        <span className="text-black text-sm sm:text-base md:text-lg font-bold leading-relaxed block">
          © 2024. Nachiket Mahajan
        </span>
        <span className="text-black text-sm sm:text-base mb-1 md:text-lg font-light leading-relaxed block">
          designed and developed by nachiket mahajan.
        </span>
      </div>
    </div>
  );
};

export default Contact;
