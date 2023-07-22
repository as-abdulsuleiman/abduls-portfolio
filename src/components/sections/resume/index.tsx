/** @format */

"use client";

import { fadeIn, resumeItems, slideIn, staggerContainer } from "@/lib/constant";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { FC, useRef } from "react";

interface ResumeProps {
  viewport: boolean;
}

type ResumeItemsProps = {
  isPresent: boolean;
  section: string;
  showButton: boolean;
  date: string;
  name: string;
  company: string;
};

const Resume: FC<ResumeProps> = ({ viewport }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const newItems = resumeItems.reduce((acc: any, value: ResumeItemsProps) => {
    if (!acc[value.section]) {
      acc[value.section] = [];
    }
    acc[value.section].push(value);
    return acc;
  }, {});

  return (
    <motion.section id="resume">
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
          variants={slideIn({
            direction: "up",
            type: "tween",
            delay: 0,
            duration: 1,
            opacity: viewport ? 1 : 1,
          })}
        >
          <div className="flex items-center justify-center border-[1px] px-[1px] rounded-2xl py-[2.5px] border-[#717070] w-[83px] drop-shadow-md shadow-lg">
            <FileText className="h-2 w-3" color="#D8D3CB" />
            <div className="ml-[7px] text-[9px] mt-[1.4px] text-[#D8D3CB] font-medium">
              RESUME
            </div>
          </div>
          <div className="pt-[30px] text-[#D8D3CB] text-3xl md:text-4xl">
            Education & <span className="text-[#32DD89]">Experience</span>
          </div>
        </motion.div>
        <motion.div className="mt-[20px]">
          {Object.keys(newItems)?.map((header: string, index: number) => {
            //  direction: index % 2 === 0 ? "up" : "down",
            return (
              <motion.div
                variants={fadeIn({
                  direction: "up",
                  type: "tween",
                  delay: index * 0.1,
                  duration: 1,
                })}
                key={index}
                className="py-2"
              >
                <div className="flex flex-row ml-1">
                  <div className="flex flex-col">
                    <div className="w-[6.5px] h-[6.5px] rounded-full bg-[#32DD89]" />
                    <div className="w-1 h-full border-[#717070] border-l-[0.02px] ml-[3px]" />
                  </div>
                  <div className="flex flex-col ml-[45px] self-start">
                    <div className="pb-2 text-base text-[#D8D3CB]">
                      {header}
                    </div>
                    {newItems[header].map(
                      (val: ResumeItemsProps, id: number) => {
                        const newsp = val.section === "Courses";
                        return (
                          <div
                            className={`flex flex-col ${
                              newsp ? "py-2" : "py-0"
                            }`}
                            key={id}
                          >
                            <div
                              className={`font-medium pb-1 ${
                                val.isPresent
                                  ? "text-[#32DD89] text-sm"
                                  : "text-[#717070] text-xs"
                              }`}
                            >
                              {val.date}
                            </div>
                            <div className="">
                              <div className="text-base text-[#D8D3CB] font-semibold">
                                {val.name}
                              </div>
                              <div className="text-[#D8D3CB] text-xs">
                                {val.company}
                              </div>
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Resume;
