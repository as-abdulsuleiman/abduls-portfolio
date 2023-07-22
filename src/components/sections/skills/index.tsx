/** @format */

"use client";

import { fadeIn, slideIn, staggerContainer } from "@/lib/constant";
import { motion } from "framer-motion";
import { Github, Briefcase } from "lucide-react";
import { FC, useRef } from "react";
import { Figma, Framer } from "lucide-react";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { BiLogoFirebase } from "react-icons/bi";

interface SkillsProps {
  viewport: boolean;
}

type IconProps = {
  className: string;
  color: string;
};

const Skills: FC<SkillsProps> = ({ viewport }) => {
  const skillsItems = [
    {
      hasFill: false,
      name: "Next",
      icon: ({ className, color }: IconProps) => (
        <TbBrandNextjs className={className} color={color} />
      ),
    },
    {
      hasFill: true,
      name: "React",
      icon: ({ className, color }: IconProps) => (
        <FaReact className={className} color={color} />
      ),
    },
    {
      hasFill: false,
      name: "Framer",
      icon: ({ className, color }: IconProps) => (
        <Framer className={className} color={color} />
      ),
    },
    {
      hasFill: false,
      name: "Figma",
      icon: ({ className, color }: IconProps) => (
        <Figma className={className} color={color} />
      ),
    },
    {
      hasFill: true,
      name: "Firebase",
      icon: ({ className, color }: IconProps) => (
        <BiLogoFirebase className={className} color={color} />
      ),
    },
    {
      hasFill: false,
      name: "Github",
      icon: ({ className, color }: IconProps) => (
        <Github className={className} color={color} />
      ),
    },
  ];

  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <motion.section id="skills">
      <motion.div
        variants={staggerContainer({
          delayChildren: 0.1,
          staggerChildren: 0.3,
        })}
        className="mb-[100px] md:mb-[160px]"
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: "some",
        }}
      >
        <motion.div
          variants={fadeIn({
            direction: "up",
            type: "tween",
            delay: 0,
            duration: 1,
            opacity: viewport ? 1 : 1,
          })}
        >
          <div className="flex items-center justify-center border-[1px] px-[1px] rounded-2xl py-[2.5px] border-[#717070] w-[86px] drop-shadow-md shadow-lg">
            <Briefcase className="h-3 w-3" color="#D8D3CB" />
            <div className="ml-[7px] text-[9px] mt-[1.4px] text-[#D8D3CB] font-medium">
              SKILLS
            </div>
          </div>
          <div className="pt-[30px] text-[#D8D3CB] font-medium text-4xl">
            My <span className="text-[#32DD89]">Advantages</span>
          </div>
        </motion.div>
        <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-x-7 md:gap-x-6 gap-9 pt-[30px]">
          {skillsItems.map((val, id) => {
            const Icon = () =>
              val.icon({
                className: `h-[60px] w-[60px] ${
                  val.hasFill
                    ? "fill-[1px] fill-[#D8D3CB] group-hover:fill-[#2BD984]"
                    : "stroke-[1px] stroke-[#D8D3CB] group-hover:stroke-[#2BD984]"
                }`,
                color: "#D8D3CB",
              });
            return (
              <motion.div
                variants={fadeIn({
                  direction: "up",
                  type: "tween",
                  delay: id * 0.1,
                  duration: 1,
                })}
                key={id}
                className="group justify-between w-full"
              >
                <div className="h-[180px] lg:h-[150px] flex items-center justify-center rounded-full ring-[0.6px] ring-[#717070] cursor-pointer group-hover:ring-[#2BD984]">
                  <div className="py-[9px]  cursor-pointer">
                    <Icon />
                  </div>
                </div>
                <div className="text-center mt-2 text-sm text-[#D8D3CB] font-semibold group-hover:text-[#2BD984]">
                  {val.name}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;
