import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function Scroll() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "3000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);
  return (
    <section className="scroll-section-outer bg-[#292929]">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section">
            <h3>section 1</h3>
          </div>
          <div className="scroll-section">
            <h3>section 2</h3>
          </div>
          <div className="scroll-section">
            <h3>section 3</h3>
          </div>
          <div className="scroll-section">
            <h3>section 4</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
