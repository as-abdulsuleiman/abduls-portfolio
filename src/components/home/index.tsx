/** @format */

"use client";

import { useContext } from "react";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Introduction from "@/components/sections/introduction";
import Projects from "@/components/sections/projects";
import Resume from "@/components/sections/resume";
import Skills from "@/components/sections/skills";
import { NavContext } from "@/scroll-provider";
import ScrollSpy from "react-ui-scrollspy";

interface HomeProps {
  projectCount: number;
}

const Home = ({ projectCount }: HomeProps) => {
  const { value, setValue } = useContext(NavContext);
  return (
    <>
      <ScrollSpy
        updateHistoryStack={false}
        useBoxMethod={false}
        offsetTop={100}
        offsetBottom={100}
        scrollThrottle={100}
        onUpdateCallback={(id) => {
          setValue(id);
        }}
      >
        <Introduction projectCount={projectCount} />
        <About />
        <Resume />
        <Skills />
        <Projects />
        <Contact />
      </ScrollSpy>
    </>
  );
};

export default Home;