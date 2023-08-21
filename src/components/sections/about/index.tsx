/** @format */

"use client";

import {
  aboutMeItems,
  fadeIn,
  globalSectionStyle,
  staggerContainer,
} from "@/lib/constant";
import { motion } from "framer-motion";
import { User2 } from "lucide-react";
import { FC } from "react";

interface AboutProps {}

type aboutMeItemsProps = {
  description: string;
};

const About: FC<AboutProps> = () => {
  return (
    <motion.section id="about" className={globalSectionStyle}>
      <motion.div
        className="mb-[100px] md:mb-[160px] xl:mb-0"
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
          <div className="flex items-center justify-center border-[1px] px-[1px] rounded-2xl py-[2.5px] border-[#717070] w-[83px] drop-shadow-md shadow-lg bg-primary-black bg-gradient-to-bl from-primary-black via-primary-black/5 to-primary-black">
            <User2 className="h-3 w-3" color="#D8D3CB" />
            <div className="ml-[7px] text-[9px] mt-[1.4px] font-medium text-[#D8D3CB]">
              ABOUT
            </div>
          </div>
          <div className="pt-[30px] text-[#D8D3CB] text-3xl">
            <div className="text-[#D8D3CB]">
              About {""}
              <span className="text-[#32DD89]">Me</span>
            </div>
          </div>
        </motion.div>
        <div className="max-w-lg">
          <motion.div
            className="grid grid-cols-1 gap-3 mt-[10px]"
            variants={fadeIn({
              direction: "up",
              type: "tween",
              delay: 0.1,
              duration: 1,
            })}
          >
            {aboutMeItems?.map((val: aboutMeItemsProps, index: number) => {
              return (
                <motion.article key={index} className="text-[#D8D3CB]">
                  <motion.div className="text-[14px] md:text-[15px] text-[#D8D3CB]">
                    {val?.description}
                  </motion.div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
