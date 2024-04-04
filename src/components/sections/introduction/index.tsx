/** @format */

"use client";

import { Home } from "lucide-react";
import { FC, useContext } from "react";
import Image from "next/image";
import { NavContext } from "@/scroll-provider";
import { motion } from "framer-motion";
import { fadeIn, globalSectionStyle, staggerContainer } from "@/lib/constant";

interface IntroductionProps {
  projectCount: number;
}

const Introduction: FC<IntroductionProps> = ({ projectCount }) => {
  const { setValue } = useContext(NavContext);

  const calculateExperience = (startYear: number) => {
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
  };

  return (
    <motion.section id="introduction" className={globalSectionStyle}>
      <motion.div
        className="mb-[100px] md:mb-[160px] lg:mb-0"
        viewport={{
          once: true,
          amount: "some",
        }}
        initial="hidden"
        whileInView="show"
        variants={staggerContainer({
          delayChildren: 0,
          staggerChildren: 0,
        })}
      >
        <motion.div
          variants={fadeIn({
            direction: "up",
            type: "tween",
            delay: 0,
            duration: 1,
          })}
        >
          <div className="flex items-center justify-center border-[1px] bg-primary-black bg-gradient-to-bl from-primary-black via-primary-black/5 to-primary-black px-[1px] rounded-2xl py-[2.5px] border-light-grey w-[93px] drop-shadow-md shadow-lg">
            <Home className="h-3 w-3" color="#D8D3CB" />
            <div className="ml-[7px] text-[9px] mt-[1.4px] text-light-text font-medium">
              INTRODUCE
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn({
            direction: "up",
            type: "tween",
            delay: 0,
            duration: 1,
          })}
        >
          <div className="pt-[40px]">
            <h1 className="text-light-text font-medium text-2xl md:text-3xl xl:text-4xl">
              Hi 👋 from {""}
              <span className="text-light-green">Abdul</span>,
              <p className="mt-[8px] text-2xl md:text-3xl xl:text-4xl">
                {`I'm a Software Developer.`}
              </p>
            </h1>
            <small className="font-sans max-w-lg text-[15px] text-[#717070] mt-[20px]">
              I specialize in crafting interactive, user-friendly, and efficient
              web applications.
            </small>
            <div className="pt-[60px] flex flex-col relative">
              <Image
                onClick={(e) => {
                  e.preventDefault();
                  const target = window.document.getElementById("projects");
                  if (target) {
                    setValue("projects");
                    target.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                }}
                className=" cursor-pointer drop-shadow-2xl ml-auto hover:scale-105 hover:-translate-y-0.5 transition ease-in-out duration-300"
                src="/icons/my_project.png"
                alt="my_project"
                width={110}
                height={110}
                priority
              />
            </div>
            <div className="flex items-center w-full pt-[50px]">
              <div className="ml-0">
                <div className="text-light-green text-5xl lg:text-6xl">
                  {calculateExperience(2020)}
                  <span className="text-4xl font-medium">+</span>
                </div>
                <div className="font-sans text-xs leading-3 text-[#717070] mt-[6px]">
                  <small className="text-[11px]">
                    YEARS OF
                    <div>EXPERIENCE</div>
                  </small>
                </div>
              </div>
              <div className="ml-[80px]">
                <div className="text-light-green text-5xl lg:text-6xl">
                  {projectCount - 1}
                  <span className="text-4xl font-medium">+</span>
                </div>
                <div className="font-sans text-xs leading-3 text-[#717070] mt-[6px]">
                  <small className="text-[11px]">
                    PROJECTS
                    <div>COMPLETED</div>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Introduction;
