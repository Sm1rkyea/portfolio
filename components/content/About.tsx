"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Marquee from "@/components/marquee/Marquee";
import { CONFIG } from "@/config";
import { IconChevronDown, IconClockHour12Filled } from "@tabler/icons-react";
import { ROUTES } from "@/constants/route";

gsap.registerPlugin(TextPlugin);

const About = () => {
  const typingTextRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const whoAmITitle = ["Smirkyea", "Web Developer", "UI/UX Designer"];

    if (!typingTextRef.current || !cursorRef.current) return;

    const currentText = whoAmITitle[index];
    const typeTimeline = gsap.timeline();
    
    typeTimeline.to(typingTextRef.current, {
      duration: currentText.length * 0.1,
      text: currentText,
      ease: "none",
    });
    
    typeTimeline.to({}, { duration: 5 });
    
    typeTimeline.to({}, {
      duration: currentText.length * 0.05,

      onUpdate: function() {
        const progress = this.progress();
        const charsToKeep = Math.ceil(currentText.length * (1 - progress));

        if (typingTextRef.current) {
          typingTextRef.current.textContent = currentText.substring(0, charsToKeep);
        }
      },
      
      onComplete: () => {
        if (typingTextRef.current) typingTextRef.current.textContent = "";
        setIndex((prev) => (prev + 1) % whoAmITitle.length);
      },
    });

    const cursorBlink = gsap.to(cursorRef.current, {
      opacity: 0,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "steps(1)",
    });

    return () => {
      typeTimeline.kill();
      cursorBlink.kill();
    };
  }, [index]);

  return (
    <section id={ROUTES.ABOUT} className="h-screen relative pt-64 page-spacing bg-linear-to-br from-[#e0ffe4] to-neutral-50 dark:from-[#000801] dark:to-neutral-950 transition-colors duration-200">
      <div className="xl:flex justify-between gap-[22vh] w-full duration-300 max-md:text-center">
        <div className="space-y-8">
          <div className="-space-y-2">
            <h2 className="text-[42px] font-medium delay-50">Hello, I&apos;m</h2>

            <div className="max-xl:hidden text-[62px]">
              <span ref={typingTextRef} className="text-transparent underline font-bold bg-linear-to-r bg-clip-text from-green-600 to-green-300" />
              <span ref={cursorRef}>|</span>
            </div>

            <h1 className="text-[62px] text-transparent xl:hidden underline font-bold bg-linear-to-r bg-clip-text from-green-600 to-green-300 w-fit max-md:mx-auto">
              Smirkyea
            </h1>
          </div>

          <p>
            I&apos;m a Website Developer and UI/UX Designer from the Czech Republic. I enjoy working with tools like Next.js,
            TailwindCSS, and similar. {!CONFIG.isHireable && "I'm currently focused on specific projects and not taking on new projects."}
          </p>

          <div className="bg-neutral-200/30 dark:bg-neutral-900/50 py-3 px-6 rounded-full w-fit flex items-center gap-3 max-md:mx-auto delay-100">
            <IconClockHour12Filled className={CONFIG.isHireable ? "text-green-500" : "text-red-600/80"} />

            <p>{CONFIG.isHireable ? "Currently available for new projects" : "Currently unavailable for new projects"}</p>
          </div>
        </div>

        <div className="max-xl:hidden">
          <Marquee />
        </div>
      </div>

      <button onClick={() => document.getElementById(ROUTES.PROJECTS)?.scrollIntoView({ behavior: "smooth" })} className="max-xl:hidden absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer transition-all duration-200 hover:scale-[105%]">
        <p>Scroll Down</p>

        <IconChevronDown className="animate-bounce text-green-500" />
      </button>
    </section>
  )
}

export default About
