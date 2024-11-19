import { Accordion, AccordionItem } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Mind Mosaic Web Design & Development",
      role: "@ Product Design/Development",
      description:
        "The MindMosaic project is a web-based platform designed to offer an interactive and engaging user experience for mental health and well-being. The application focuses on helping users visualize and manage their thoughts, emotions, and mental patterns through an intuitive and user-friendly interface.",
      image: "Mindmosic.png",
      behanceLink: "https://mindmosaic-eb254.web.app/"
    },

    {
      id: 2,
      title: "Redesign SRCS Landing Page",
      role: "@ Product Design",
      description:
        "I redesigned the landing page for a prestigious co-ed boarding school to create a more engaging and modern user experience. The new design features a streamlined layout with a full-width hero image, enhanced navigation, and clear calls to action. By improving the visual hierarchy and utilizing a refined color palette, the redesign effectively highlights the school’s values and offerings, ensuring a seamless experience across devices.",
      image: "SRCS.png",
      behanceLink: "https://www.behance.net/gallery/194206607/Redesign-UI-of-SRCS-Website-Home-page"

    },

    {
      id: 3,
      title: "Gamerz App Design",
      role: "@ Product Design",
      description:
        "I designed Gamerz, an innovative app for online gaming tournaments and live streaming of e-sports events. The platform allows gamers to participate in competitive tournaments and watch live streams of their favorite games. My design focused on creating a dynamic and immersive user experience, with intuitive navigation, real-time updates, and interactive features that engage the gaming community. The interface is sleek and modern, reflecting the fast-paced world of e-sports.",
      image: "Gamerz.png",
      behanceLink: "https://www.behance.net/gallery/192534811/Gamerz-UI-for-online-gaming-streaming-platform"
    },

    {
      id: 4,
      title: "Prish Auditors Website",
      role: "@ Product Design/Development",
      description:
        "The Prish Auditors project is a web-based platform designed to provide a professional and user-friendly experience for clients seeking Audit, Tax Consultancy, and Business Advisory services. The website focuses on showcasing the firm’s expertise across these domains, emphasizing its commitment to delivering high-quality and personalized services with integrity.",
      image: "PrishWeb.png",
      behanceLink: "https://prish-web.vercel.app/"
    },

    {
      id: 5,
      title: "Fit Track App Design",
      role: "@ Product Design",
      description:
        "I designed FitTrack, an advanced app for tracking workouts and analyzing health metrics. The platform enables users to log their exercises, monitor performance, and gain insights into their overall health. My design emphasized creating a seamless and engaging user experience, with features such as intuitive navigation, detailed analytics, and personalized recommendations. The interface is clean and modern, ensuring that users can easily manage and enhance their fitness routines.",
      image: "Fittrack.png",
      behanceLink: "https://www.behance.net/gallery/206856097/FitTrack-The-Fitness-Tracking-Application"
    },

    {
      id: 6,
      title: "Nixor Obex Web Design",
      role: "@ Product Design",
      description:
        "I contributed to designing an intuitive and secure user interface for Nixor Obex, a platform revolutionizing digital transaction management. My focus was on creating a seamless experience across devices, ensuring that users could navigate payments and authentication processes effortlessly. The design prioritized clarity and accessibility, making advanced features approachable while maintaining robust security. By balancing innovation with user-centric design, I helped deliver a platform that combines functionality with ease of use.",
      image: "Nixorobex.png",
    },
    
    {
      id: 7,
      title: "CommunityHub Web/App Design",
      role: "@ Product Design",
      description:
        "Community Hub is a platform that connects people from diverse fields, allowing them to collaborate, participate in events, and participate in discussions. It caters to designers, developers, entrepreneurs, and wellness enthusiasts, offering a user-friendly interface and accessibility focus. The app fosters an inclusive environment, allowing users to grow their network, share knowledge, and stay updated on industry trends.",
      image: "CommunityHub.png",
      behanceLink:"https://www.behance.net/gallery/207325659/Community-Hub-Web-Application"
    },
  ];

  const [visibleProjects, setVisibleProjects] = useState([]);
  const titleRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = entry.target.getAttribute("data-id");
            if (!visibleProjects.includes(projectId)) {
              setVisibleProjects((prevVisible) => [...prevVisible, projectId]);
            }
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    titleRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      titleRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleProjects]);

  return (
    <div className="w-full p-4 md:p-4"> {/* Adjusted padding for mobile */}
    
      <div className="text-[#121212] text-2xl md:text-3xl lg:text-4xl font-light leading-tight mb-6">
        ⁄⁄ Projects
        {/* Loader animation added beside the Projects heading */}
      <div className="load ml-5"></div>

      </div>

      
      <div className="flex flex-col lg:flex-row border border-[#383838] rounded-lg p-4 space-y-3 lg:space-y-0 lg:space-x-6">
        <Accordion>
          {projects.map((project, index) => (
            <AccordionItem
              key={project.id}
              aria-label={project.title}
              className="font-semibold font-serif"
              title={
                <span
                  ref={(el) => (titleRefs.current[index] = el)}
                  data-id={project.id}
                  className="#121212 cursor-none inline-block"
                  style={{
                    overflow: "hidden",
                    display: "inline-block",
                    borderRight: "1px solid #121212",
                    maxWidth: "100%", // Prevents text from overflowing the container
                    width: visibleProjects.includes(project.id.toString())
                      ? "100%"
                      : "0px", // Initially hidden
                    animation: visibleProjects.includes(project.id.toString())
                      ? `typing 3s steps(${project.title.length}, end), blink 0.75s step-end infinite`
                      : "none",
                    animationFillMode: "forwards",
                    animationDelay: "0.2s", // Small delay before typing starts
                    fontSize: "clamp(1rem, 4vw, 1.5rem)", // Adjusted for responsiveness
                    whiteSpace: "normal", // Allow text to wrap on smaller screens
                    lineHeight: "1.2", // Ensures good line spacing for wrapped text
                  }}
                >
                  {project.id + ". " + project.title}
                </span>
              }
            >
              <div className="flex flex-col lg:flex-row border border-[#383838] rounded-lg p-4 space-y-4 lg:space-y-0 lg:space-x-6">
                <div className="flex-shrink-0 w-full lg:w-1/2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="flex-1 lg:w-1/2 flex flex-col space-y-4 lg:mt-4">
                  <div className="text-[#FF0000] text-xl md:text-2xl lg:text-3xl mt-12 font-bold">
                    {project.title}
                  </div>
                  <div className="text-[#121212] text-lg md:text-xl lg:text-2xl font-light">
                    {project.role}
                  </div>
                  <div className="text-[#121212] text-base md:text-lg lg:text-xl font-light">
                    {project.description}
                  </div>
                  {/* View More Button */}
                  <div>
                    <a
                      href={project.behanceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline text-base md:text-lg lg:text-xl"
                    >
                      View More ↝
                    </a>
                  </div>
                </div>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Inline styles for loader and other animations */}
      <style jsx>{`
        .load {
          display: inline-flex;
          gap: 10px;
        }
        .load:before,
        .load:after {
          content: "";
          height: 20px;
          aspect-ratio: 1;
          border-radius: 50%;
          background: radial-gradient(farthest-side, #000 95%, #0000) 35% 35%/6px 6px no-repeat #ff0000;
          transform: scaleX(var(--s, 1)) rotate(0deg);
          animation: l6 1s infinite linear;
        }
        .load:after {
          --s: -1;
          animation-delay: -0.1s;
        }
        @keyframes l6 {
          100% {
            transform: scaleX(var(--s, 1)) rotate(360deg);
          }
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink {
          50% {
            border-right-color: transparent;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;