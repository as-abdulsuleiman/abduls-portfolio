/** @format */

"use client";

import { Home } from "lucide-react";
import { FC, useContext } from "react";
import Image from "next/image";
import { NavContext } from "@/scroll-provider";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "@/lib/constant";

interface IntroductionProps {
  viewport: boolean;
}

const Introduction: FC<IntroductionProps> = ({ viewport }) => {
  const { setValue } = useContext(NavContext);

  const onPress = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split("#")[1]
    );
    if (target) {
      setValue("projects");
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.section
      className="h-full lg:h-screen flex flex-col justify-start"
      id="introduction"
    >
      <motion.div
        className="mb-[100px] md:mb-[160px]"
        viewport={{
          once: true,
          amount: "some",
          margin: "0px 0px 30px 0px",
        }}
        initial="hidden"
        whileInView="show"
        variants={staggerContainer({
          delayChildren: 0.1,
          staggerChildren: 0.1,
        })}
      >
        <motion.div
          variants={fadeIn({
            direction: "up",
            type: "tween",
            delay: 0.1,
            duration: 1,
          })}
        >
          <div className="flex items-center justify-center border-[1px] px-[1px] rounded-2xl py-[2.5px] border-[#717070] w-[93px] drop-shadow-md shadow-lg">
            <Home className="h-3 w-3" color="#D8D3CB" />
            <div className="ml-[7px] text-[9px] mt-[1.4px] text-[#D8D3CB] font-medium">
              INTRODUCE
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn({
            direction: "up",
            type: "tween",
            delay: 0.2,
            duration: 1,
          })}
        >
          <div className="pt-[40px]">
            <h1 className="text-[#D8D3CB] font-medium text-3xl md:text-5xl">
              Hi 👋 from <span className="text-[#32DD89]">Abdul</span>, {""}
              <p className="mt-[8px]">{`I'm a Software Developer`}</p>
            </h1>
            <p className="font-sans max-w-lg text-base text-[#717070] font-medium pt-[20px]">
              I specialize in the development of interactive, user-friendly, and
              efficient web applications.
            </p>
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
                <div className="text-[#32DD89] text-5xl lg:text-6xl">
                  3<span className="text-5xl font-medium">+</span>
                </div>
                <div className="font-sans text-xs leading-3 text-[#717070] font-medium mt-[6px]">
                  <div className="text-[10px]">
                    YEARS OF
                    <div>EXPERIENCE</div>
                  </div>
                </div>
              </div>
              <div className="ml-[80px]">
                <div className="text-[#32DD89] text-5xl lg:text-6xl">
                  3<span className="text-5xl font-medium">+</span>
                </div>
                <div className="font-sans text-xs leading-3 text-[#717070] font-medium mt-[6px]">
                  <div className="text-[10px]">
                    PROJECTS
                    <div>COMPLETED</div>
                  </div>
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
