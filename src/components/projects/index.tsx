/** @format */

"use client";

import { FC } from "react";
import { fadeIn, footerVariants, staggerContainer } from "@/lib/constant";
import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Card } from "@/components/card";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FolderKanban } from "lucide-react";

interface ProjectsProps {
  projects: ProjectItemsProps[];
}

type ProjectItemsProps = {
  url: string;
  bgColor: string;
  tech: {
    name: string;
  }[];
  description: string;
  title: string;
  banner: string;
  id: string;
};

const Projects: FC<ProjectsProps> = ({ projects }) => {
  const router = useRouter();

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: "some",
      }}
      variants={staggerContainer({
        delayChildren: 0.1,
        staggerChildren: 0.1,
      })}
      className="w-full h-full"
    >
      <motion.div
        variants={fadeIn({
          direction: "up",
          type: "tween",
          delay: 0,
          duration: 1,
        })}
      >
        <div className="flex items-center">
          <div className="flex items-center justify-center border-[1px] px-[1px] bg-primary-black bg-gradient-to-tl from-primary-black via-zinc-400/5 to-zinc-900 rounded-2xl py-[2.5px] border-[#717070] w-[93px] drop-shadow-md shadow-lg">
            <FolderKanban className="h-3 w-3" color="#D8D3CB" />
            <div className="ml-[7px] text-[9px] mt-[1.4px] text-[#D8D3CB] font-medium">
              PROJECTS
            </div>
          </div>
          <Button
            className={cn(
              "bg-primary-black hover:bg-primary-black/80 hover:bg-gradient-to-tl hover:from-primary-black hover:via-zinc-400/5 ml-auto transition-opacity opacity-70 hover:opacity-100"
            )}
            onClick={() => router.push("/portfolio")}
            size="sm"
            variant="default"
          >
            Back
          </Button>
        </div>
      </motion.div>
      <motion.div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 sm:grid-cols-1 mt-[25px]">
        <motion.div variants={footerVariants} className="flex items-center">
          <small className="font-sans max-w-lg text-[15px] text-[#717070]">
            Some of the projects are from work and some are on my own time.
          </small>
        </motion.div>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-y-5">
          {projects?.map((val: ProjectItemsProps, index: number) => {
            return (
              <motion.div
                key={val?.id}
                variants={fadeIn({
                  direction: "up",
                  type: "tween",
                  delay: index * 0.1,
                  duration: 0.8,
                })}
              >
                <Card>
                  <div
                    className="group w-full overflow-hidden relative cursor-pointer duration-700 rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600"
                    onClick={() => {
                      router.push(`/portfolio/project/${val?.id}`);
                    }}
                  >
                    <article className="p-4 md:p-4 md:px-4 hover:scale-105 transition-transform ease-out duration-200">
                      <h2 className="z-20 pb-2 text-[15px] font-medium duration-1000 lg:text-md text-light-text group-hover:text-light-text font-display">
                        {val?.title}
                      </h2>
                      <AspectRatio ratio={14 / 9}>
                        <Image
                          src={val?.banner}
                          alt={val?.title}
                          fill
                          priority
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
                          quality={100}
                          className="rounded-2xl object-cover w-full h-full"
                        />
                      </AspectRatio>
                    </article>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
