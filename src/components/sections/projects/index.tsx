/** @format */

"use client";

import { fadeIn, projectItems, staggerContainer } from "@/lib/constant";
import { ChevronLeft, ChevronRight, FolderKanban } from "lucide-react";
import { FC, useState } from "react";
import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Carousel, { ArrowProps } from "react-multi-carousel";

interface ProjectsProps {
  viewport: boolean;
}

const Projects: FC<ProjectsProps> = ({ viewport }) => {
  const CustomRightArrow = ({ onClick }: ArrowProps) => {
    return (
      <div
        onClick={onClick}
        className="ring-[0.9px] top-[35%] ring-[#D8D3CB] group hover:ring-[#32DD89] absolute z-[1000] inline-block left-[6px] cursor-pointer bg-[rgba(0,0,0,0.5)] min-h-[34px] min-w-[34px] overflow-hidden rounded-full "
      >
        <span className="h-full w-full top-[5.3px] left-[4px] absolute">
          <ChevronLeft
            className="group-hover:stroke-[#32DD89] h-6 w-6 text-center "
            color="#D8D3CB"
          />
        </span>
      </div>
    );
  };

  const CustomLeftArrow = ({ onClick }: ArrowProps) => {
    return (
      <div
        onClick={onClick}
        className="ring-[0.9px] top-[35%] ring-[#D8D3CB] group hover:ring-[#32DD89] absolute z-[1000] inline-block right-[6px] cursor-pointer bg-[rgba(0,0,0,0.5)] min-h-[34px] min-w-[34px] overflow-hidden rounded-full "
      >
        <span className="h-full w-full top-[5.3px] left-[5.5px] absolute">
          <ChevronRight
            className="group-hover:stroke-[#32DD89] h-6 w-6 text-center "
            color="#D8D3CB"
          />
        </span>
      </div>
    );
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <motion.section
      className="h-full lg:h-screen flex flex-col justify-start"
      id="projects"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        className="mb-[100px] md:mb-[160px]"
        viewport={{
          once: true,
          amount: "some",
        }}
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
          <div className="flex items-center justify-center border-[1px] px-[1px] rounded-2xl py-[2.5px] border-[#717070] w-[93px] drop-shadow-md shadow-lg">
            <FolderKanban className="h-3 w-3" color="#D8D3CB" />
            <div className="ml-[7px] text-[9px] mt-[1.4px] text-[#D8D3CB] font-medium">
              PROJECTS
            </div>
          </div>
          <div className="pt-[40px]">
            <div className="text-[#D8D3CB] text-3xl md:text-4xl">
              Featured {""}
              <span className="text-[#32DD89]">Projects</span>
            </div>
          </div>
        </motion.div>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 mt-[20px]">
          {projectItems?.map((val, index) => {
            return (
              <motion.div
                key={index}
                variants={fadeIn({
                  direction: "up",
                  type: "tween",
                  delay: index + 1 * 0.1,
                  duration: 1,
                })}
                className="grid grid-cols-1 gap-4"
              >
                <div className="group w-full relative cursor-pointer  ">
                  <AspectRatio
                    ratio={14 / 9}
                    className="hover:scale-105 transition-transform ease-out duration-200 bg-transparent "
                  >
                    <Image
                      src={val?.url}
                      alt={val.name}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw"
                      quality={100}
                      className="rounded-xl object-cover w-full h-full"
                    />
                    {/* <div className="hidden group-hover:flex bottom-[0px] pb-3 w-full absolute px-3 bg-primary-black/70">
                      <div className="py-2 px-1 bottom-[20px]"></div>
                    </div> */}
                  </AspectRatio>
                </div>
                <div
                  className="pt-3 ml-3 text-[#D8D3CB] text-base font-medium cursor-pointer hover:underline hover:underline-[0.1px] w-fit"
                  onClick={() => window.open(val?.path, "_blank")}
                >
                  {val.name}
                </div>
                {/* <div className="pt-5 text-base text-[#D8D3CB]">
                  {val?.description}
                </div> */}
              </motion.div>
            );
          })}
          {/* <Carousel
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            swipeable={true}
            draggable={true}
            showDots={false}
            ssr={true}
            infinite={true}
            removeArrowOnDeviceType={["mobile"]}
            customTransition="transform 800ms linear"
            autoPlaySpeed={1300}
            keyBoardControl={true}
            arrows={true}
            transitionDuration={500}
            responsive={responsive}
            autoPlay={false}
            itemClass="px-2 sm:px-1"
          >
            {projectItems?.map((val, index) => {
              return (
                <motion.div key={index}>
                  <div className="group w-full relative cursor-pointer">
                    <AspectRatio ratio={14 / 9}>
                      <Image
                        src={val?.url}
                        alt={val.name}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw"
                        quality={100}
                        className="rounded-2xl object-cover w-full h-auto"
                      />
                      <div className="hidden group-hover:flex bottom-[0px] pb-3 w-full absolute px-3 bg-primary-black/70">
                        <div className="py-2 px-1 bottom-[20px]">
                          <div
                            className="pt-3 ml-3 text-[#D8D3CB] text-xl font-medium cursor-pointer hover:underline hover:underline-[0.1px] w-fit"
                            onClick={() => window.open(val?.path, "_blank")}
                          >
                            {val.name}
                          </div>
                        </div>
                      </div>
                    </AspectRatio>
                  </div>
                  <div className="pt-5 text-base text-[#D8D3CB]">
                    {val?.description}
                  </div>
                </motion.div>
              );
            })}
          </Carousel> */}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
