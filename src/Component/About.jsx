import { useEffect, useRef } from "react";
import cardImage from "../image/card-img.png";
import { Image } from "@nextui-org/react";

const About = () => {
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
            bottomElement.style.animation =
              "slideInFromBottom 1s ease-out forwards";
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
    <div
      id="Scroll"
      className="w-full min-h-screen px-4 py-6 bg-[#F0F8FF] flex justify-center items-center overflow-x-hidden"
    >
      {/* Inline CSS with @keyframes */}
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

        .hidden {
          opacity: 0;
        }

         /* Hover effect for whoami */
        .whoami:hover {
          font-weight: bold;
          transition: font-weight 0.3s ease-in-out;
          }

      `}</style>

      <div className="flex flex-col md:flex-row md:space-x-12 w-full max-w-8xl">
        {/* Top Container */}
        <div
          ref={topContainerRef}
          className="relative flex-1 mb-8 md:mb-0"
          style={{
            opacity: 0,
            transform: "translateY(-100px)", // Start off-screen (above)
            transition: "all 0.5s ease-in-out",
          }}
        >
          <div className="relative w-full bg-transparent rounded-xl border border-black p-4 h-full flex items-center justify-center">
            <div className="absolute -top-4 left-5 flex items-center px-2 py-1 bg-[#F0F8FF] text-[#121212] text-sm md:text-base font-normal">
              Trading Card
            </div>
            <div className="absolute -bottom-3 right-4 flex items-center px-2 py-1 bg-[#F0F8FF] text-[#121212] text-sm md:text-base font-normal">
              2024-25
            </div>
            <Image
              className="w-6/12 md:w-9/12 lg:w-10/12 mx-auto shadow-lg "
              src={cardImage}
              alt="Card"
            />
          </div>
        </div>

        {/* Bottom Container */}
        <div
          ref={bottomContainerRef}
          className="relative flex-1"
          style={{
            opacity: 0,
            transform: "translateY(100px)", // Start off-screen (below)
            transition: "all 0.5s ease-in-out",
          }}
        >
          <div className="relative w-full bg-transparent rounded-[13px] border border-[#383838] p-4">
          <div className="absolute -top-4 left-5 flex items-center px-2 py-1 bg-[#F0F8FF] text-[#121212] text-sm md:text-base font-normal whoami">
              whoami
            </div>
            <div className="details mt-12 overflow-auto">
              <div className="relative text-[#121212] font-light">
                <div className="text-xl md:text-2xl lg:text-2xl font-semibold m-6">
                  Nachiket
                </div>
                <div className="text-sm md:text-base lg:text-lg leading-relaxed m-6 ">
                  <div>
                    <strong>Name:</strong> Nachiket –  <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                    engineer and designer
                  </div>
                </div>
                <div className="description2 mt-10 text-[#121212] p-4 leading-relaxed break-words">
                  <div className="text-base md:text-lg font-semibold">
                    Description
                  </div>
                  <div className="text-sm md:text-base p-4 leading-relaxed mt-2">
                  From a young age, I’ve been captivated by the blend of
                    creativity and technology. The magic of turning ideas into
                    visually engaging and intuitive digital experiences drew me
                    towards the world of UI/UX design & development. Over time,
                    I’ve developed a deep passion for crafting seamless user
                    interfaces and efficient workflows. My journey has equipped
                    me with a strong foundation in tools. My approach is
                    centered on user-centered design principles, ensuring
                    visually appealing and meaningful projects for end-users,
                    bringing fresh perspectives and innovative ideas to the
                    evolving digital product design world.
                  </div>
                </div>
                <div className="mt-10 text-[#121212] p-4 ">
                  <div className="text-base md:text-lg font-semibold">
                    Usage
                  </div>
                  <div className="text-sm md:text-base text-center mt-2">
                    Currently, Nachiket is being applied in the following
                    contexts:
                  </div>
                  <div className="text-xs md:text-sm text-center mt-1 font-semibold">
                    Nachiket [UI/UX Design, Figma, Wireframing, Prototyping]{" "}
                    <br />
                    [React, React Native, Front-End Development]
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
