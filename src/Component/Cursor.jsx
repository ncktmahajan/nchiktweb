import { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = ({ isDesktop }) => {
  const cursor = useRef(null);
  const follower = useRef(null);

  useEffect(() => {
    if (isDesktop && document.body.clientWidth > 767) {
      // Remove hidden class to make the cursor visible
      follower.current.classList.remove("hidden");
      cursor.current.classList.remove("hidden");

      // Move cursor and follower on mouse move
      const moveCircle = (e) => {
        gsap.to(cursor.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: "none",
        });
        gsap.to(follower.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: "none",
        });
      };

      // Hover effect to shrink cursor
      const hover = () => {
        console.log("Hovering over button/link");
        gsap.to(cursor.current, {
          scale: 0.7, // Shrink cursor on hover
          duration: 0.3,
        });
        gsap.to(follower.current, {
          scale: 0.3, // Shrink follower on hover (optional)
          duration: 0.3,
        });
      };

      // Unhover effect to restore cursor size
      const unHover = () => {
        console.log("No longer hovering");
        gsap.to(cursor.current, {
          scale: 1, // Restore cursor to original size
          duration: 0.3,
        });
        gsap.to(follower.current, {
          scale: 1, // Restore follower to original size
          duration: 0.3,
        });
      };

      // Mousemove listener to move cursor
      document.addEventListener("mousemove", moveCircle);

      // Apply hover and unhover to clickable elements
      document.querySelectorAll("a, button, .clickable").forEach((el) => {
        el.addEventListener("mouseenter", hover);
        el.addEventListener("mouseleave", unHover);
      });

      return () => {
        // Cleanup event listeners
        document.removeEventListener("mousemove", moveCircle);

        document.querySelectorAll("a, button, .clickable").forEach((el) => {
          el.removeEventListener("mouseenter", hover);
          el.removeEventListener("mouseleave", unHover);
        });
      };
    }
  }, [isDesktop]);

  return (
    <div className="cursor-custom">
      <div
        ref={cursor}
        className="bg-[#FF0000] mix-blend-difference rounded-full fixed -top-3 -left-3 w-10 h-10 select-none pointer-events-none z-50"
      />
      <div
        ref={follower}
        className="border-1.5 border-[#FF0000] rounded-full fixed -top-3 -left-3 w-20 h-20 select-none pointer-events-none z-50"
      />
    </div>
  );
};

export default Cursor;
