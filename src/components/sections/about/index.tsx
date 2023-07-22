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
    <motion.section id="about">
      <motion.div
        className="mb-[100px] md:mb-[160px]"
        viewport={{
          once: true,
          amount: "some",
          margin: "0px 0px 0px 0px",
        }}
        initial="hidden"
        whileInView="show"
        variants={staggerContainer({
          delayChildren: 0.1,
          staggerChildren: 0.3,
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

          <div className="pt-[30px] text-[#D8D3CB] text-3xl md:text-4xl max-w-lg">
            <span className="text-[#32DD89]">
              Hi, {""}👋
              {/* <span className=" text-[#32DD89] bg-text-[#32DD89]">
                {" "}
                &#129306;
              </span> */}
            </span>{" "}
            {""}
            <div className="pt-2">
              {`I'm Abdul Suleiman,`}{" "}
              <span className="text-[#32DD89]">a Software Developer</span>
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
                className="font-sans text-base text-[#717070] font-medium "
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
