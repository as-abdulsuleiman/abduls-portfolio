/** @format */

"use client";

import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Introduction from "@/components/sections/introduction";
import Projects from "@/components/sections/projects";
import Resume from "@/components/sections/resume";
import Skills from "@/components/sections/skills";
import { NavContext } from "@/scroll-provider";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import ScrollSpy from "react-ui-scrollspy";
import { useViewportSize } from "@mantine/hooks";

export default function Home() {
  const { height, width } = useViewportSize();
  const { value, setValue } = useContext(NavContext);
  const [initialId, setInitialId] = useState<string>("");
  const initialWidth = width >= 768.5;

  // useEffect(() => {
  //   const alertUser = () => {
  //     if (initialId) {
  //       const target = window.document.getElementById(value);
  //       if (target) {
  //         setValue(value);
  //         target.scrollIntoView({
  //           behavior: "smooth",
  //         });
  //       }
  //     } else {
  //       setValue("introduction");
  //     }
  //   };
  //   window.addEventListener("beforeunload", alertUser);
  //   return () => {
  //     window.removeEventListener("beforeunload", alertUser);
  //   };

  //   // const handler = () => {
  //   //   if (value) {
  //   //     const target = window.document.getElementById(value);
  //   //     if (target) {
  //   //       setValue(value);
  //   //       target.scrollIntoView({
  //   //         behavior: "smooth",
  //   //       });
  //   //     }
  //   //   } else {
  //   //     setValue("introduction");
  //   //   }
  //   // };

  //   // if (document.readyState === "complete") {
  //   //   handler();
  //   // } else {
  //   //   window.addEventListener("load", handler);
  //   //   return () => document.removeEventListener("load", handler);
  //   // }
  // }, [setValue, value]);

  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="container mx-auto px-0 xl:px-2rem max-w-full md:max-w-lg xl:max-w-xl pb-3">
        <ScrollSpy
          updateHistoryStack={false}
          useBoxMethod={true}
          offsetTop={100}
          offsetBottom={100}
          scrollThrottle={100}
          onUpdateCallback={(id) => {
            setValue(id);
          }}
        >
          <Introduction viewport={initialWidth} />
          <About viewport={initialWidth} />
          <Resume viewport={initialWidth} />
          <Skills viewport={initialWidth} />
          <Projects viewport={initialWidth} />
          <Contact viewport={initialWidth} />
        </ScrollSpy>
      </div>
      {/* <a
        href="/static/icons/a.s.abdulsuleiman.pdf"
        download="a.s.abdulsuleiman.pdf"
      >
        Abdul Resume
      </a>

      <Link href="/static/icons/a.s.abdulsuleiman.pdf"></Link> */}
    </div>
  );
}
