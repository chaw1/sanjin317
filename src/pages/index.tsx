import Container from "@/components/Container";
import { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { ContactSection } from "@/components/sections/ContactSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import type LocomotiveScrollType from "locomotive-scroll";

export default function Home() {
  const refScrollContainer = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [locomotiveScroll, setLocomotiveScroll] = useState<LocomotiveScrollType | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    // 最简化版本的 index.tsx 关键部分
    async function initLocomotive() {
      try {
        if (!isMobile && refScrollContainer.current) {
          const LocomotiveScroll = (await import("locomotive-scroll")).default;
          const instance = new LocomotiveScroll({
            el: refScrollContainer.current,
            smooth: !isMobile, // 移动端禁用平滑滚动
            lerp: 0.075,
            multiplier: 0.9
          });
          setLocomotiveScroll(instance);
        }
      } catch (error) {
        console.error("Failed to initialize Locomotive Scroll:", error);
      }
    }

    function handleScroll() {
      let currentSection = "";
      setIsScrolled(window.scrollY > 0);

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentSection = section.getAttribute("id") ?? "";
        }
      });

      navLinks.forEach((li) => {
        li.classList.remove("nav-active");
        if (li.getAttribute("href") === `#${currentSection}`) {
          li.classList.add("nav-active");
        }
      });
    }

    void initLocomotive();

    if (isMobile) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, [isMobile, locomotiveScroll]);

  useEffect(() => {
    if (!isMobile) {
      const tilt: HTMLElement[] = Array.from(document.querySelectorAll("#tilt"));
      VanillaTilt.init(tilt, {
        speed: 300,
        glare: true,
        "max-glare": 0.1,
        gyroscope: false,
        perspective: 900,
        scale: 0.9,
      });
    }
  }, [isMobile]);

  return (
    <Container>
      <div
        ref={refScrollContainer}
        className={isMobile ? "overflow-auto" : ""}
        data-scroll-container
      >
        <Gradient isMobile={isMobile} />

        <HeroSection isScrolled={isScrolled} />
        <AboutSection />

        <section
          id="talents"
          data-scroll-section
          className="min-h-[80vh] md:min-h-screen py-12 md:py-24"
        >
          <div
            data-scroll
            data-scroll-speed={isMobile ? "0" : ".4"}
            data-scroll-position="top"
            className="my-8 md:my-14 px-4 md:px-6"
          >
            <span className="text-gradient clash-grotesk text-xs md:text-sm font-semibold tracking-tighter">
              ✨ 达人展示
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl xl:text-6xl font-semibold tracking-tight">
              众多优秀达人，期待你的加入
            </h2>
            <div className="mt-4 md:mt-8">
              <HeroCarousel />
            </div>
          </div>
        </section>

        <ProjectsSection />
        <ServicesSection />
        <ContactSection />
      </div>
    </Container>
  );
}

function Gradient({ isMobile }: { isMobile: boolean }) {
  return (
    <>
      <div
        className={`
          absolute 
          -top-20 md:-top-40 
          right-0 
          -z-10 
          transform-gpu 
          overflow-hidden 
          blur-xl md:blur-3xl 
          sm:-top-80
        `}
      >
        <svg
          className="
            relative
            left-[calc(50%-11rem)]
            -z-10
            h-[15rem] md:h-[21.1875rem]
            max-w-none
            -translate-x-1/2
            rotate-[30deg]
            sm:left-[calc(50%-30rem)]
            sm:h-[42.375rem]
          "
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity={isMobile ? ".05" : ".1"}
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7980fe" />
              <stop offset={1} stopColor="#f0fff7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div
        className={`
          absolute 
          inset-x-0 
          top-[calc(100%-13rem)] 
          -z-10 
          transform-gpu 
          overflow-hidden 
          blur-xl md:blur-3xl 
          sm:top-[calc(100%-30rem)]
        `}
      >
        <svg
          className="
            relative
            left-[calc(50%+3rem)]
            h-[15rem] md:h-[21.1875rem]
            max-w-none
            -translate-x-1/2
            sm:left-[calc(50%+36rem)]
            sm:h-[42.375rem]
          "
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity={isMobile ? ".05" : ".1"}
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9A70FF" />
              <stop offset={1} stopColor="#838aff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}