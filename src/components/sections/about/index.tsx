/** @format */

"use client";

import { aboutMeItems, fadeIn, staggerContainer } from "@/lib/constant";
import { motion } from "framer-motion";
import { User2 } from "lucide-react";
import { FC } from "react";

interface AboutProps {
  viewport: boolean;
}

const About: FC<AboutProps> = ({ viewport }) => {
  return (
    <motion.section
      className="h-full lg:h-screen flex flex-col justify-start"
      id="about"
    >
      <motion.div
        className="mb-[100px] md:mb-[160px]"
        viewport={{
          once: true,
          amount: "some",
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
            delay: 0,
            duration: 1,
          })}
        >
          <div className="flex items-center justify-center border-[1px] px-[1px] rounded-2xl py-[2.5px] border-[#717070] w-[83px] drop-shadow-md shadow-lg">
            <User2 className="h-3 w-3" color="#D8D3CB" />
            <div className="ml-[7px] text-[9px] mt-[1.4px] font-medium text-[#D8D3CB]">
              ABOUT
            </div>
          </div>

          <div className="pt-[40px] text-[#D8D3CB] text-3xl max-w-lg ">
            <div className="">
              About {""}
              <span className="text-[#32DD89]">Me</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 gap-3 mt-[20px]"
          variants={fadeIn({
            direction: "up",
            type: "tween",
            delay: 0.1,
            duration: 1,
          })}
        >
          {aboutMeItems?.map((val, index) => {
            return (
              <motion.p
                key={index}
                className="font-sans text-base text-[#717070] font-medium"
              >
                {val.description}
              </motion.p>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
