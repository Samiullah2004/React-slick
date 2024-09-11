import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import React from "react";
import { useMedia } from "use-media";

const Hero = () => {
  const isWide = useMedia({ minWidth: "1000px" });

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
  async function animateWithGSAP() {
    try {
      if (isWide) {
        await gsap
          .timeline({
            scrollTrigger: {
              trigger: "#hero-section",
              start: "top top",
              end: "bottom top",
              scrub: 1,
              pin: true,
            },
          })
          .to(".animated-bg-image", { scale: 3.7 })
          .to("#animated-bg-video", { opacity: 0 }, 0)
          .to(".hero-black-color > p", { color: "black" }, "-=0.8");
      }
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    animateWithGSAP();
  }, [isWide]);
  return (
    <section className="w-full h-screen overflow-hidden" id="hero-section">
      <div className="w-full h-screen relative overflow-hidden flex items-center justify-center section">
        <Image
          width={775}
          height={517}
          src="/tree.webp"
          alt="hero"
          className="absolute left-0 top-0 z-10 hidden h-full w-full lg:block  animated-bg-image"
        />

        <video
          id="animated-bg-video"
          autoPlay
          controls={false}
          playsInline
          loop
          muted
          height="100%"
          width="100%"
          className="absolute left-0 top-0 h-full w-full !object-cover"
        >
          <source src="https://cdn.sanity.io/files/czxzyiip/production/8a3ed04a09bc8bff837bb4875fb80491f2259c7c.mp4" />
        </video>

        <div className="z-20 mx-auto w-full max-w-[1440px] flex items-center justify-center flex-col gap-4 hero-black-color">
          <p className="hero-black-color text-white font-extrabold text-[70px]">
            We Grow Businesses.
          </p>

          <p className="hero-black-color text-white text-lg font-medium">
            A full-service agency helping established businesses gain a
            competitive edge.
          </p>
          <div className="flex items-center justify-center px-[42px] lg:px-0 mt-5">
            <button className="bg-slate-500 px-4 py-2 rounded-lg text-white font-medium text-base">
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
