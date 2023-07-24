/** @format */

"use client";

import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Introduction from "@/components/sections/introduction";
import Projects from "@/components/sections/projects";
import Resume from "@/components/sections/resume";
import Skills from "@/components/sections/skills";
import { NavContext } from "@/scroll-provider";
import { useContext } from "react";
import ScrollSpy from "react-ui-scrollspy";
import { useViewportSize } from "@mantine/hooks";

export default function Home() {
  const { height, width } = useViewportSize();
  const { value, setValue } = useContext(NavContext);
  const initialWidth = width >= 768.5;

  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="container mx-auto px-0 xl:px-2rem sm:max-w-lg xl:max-w-xl pb-3">
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
    </div>
  );
}
