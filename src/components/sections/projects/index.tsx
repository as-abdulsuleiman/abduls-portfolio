/** @format */

"use client";

import { fadeIn, staggerContainer } from "@/lib/constant";
import { FolderKanban } from "lucide-react";
import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Card } from "@/components/card";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config";
import { useRouter } from "next/navigation";

interface ProjectsProps {}

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

const Projects: FC<ProjectsProps> = () => {
  const router = useRouter();
  const [projectItems, setProjectItems] = useState<ProjectItemsProps[]>([]);

  useEffect(() => {
    getAllprojects();
  }, []);

  const getAllprojects = async () => {
    let Newitems: any = [];
    try {
      const querySnapshot = await getDocs(collection(db, "projects"));
      querySnapshot.forEach((doc) => {
        if (doc.exists()) {
          Newitems.push({
            ...doc?.data(),
            id: doc?.id,
          });
          setProjectItems(Newitems);
        }
      });
    } catch (error) {}
  };

  return (
    <motion.section
      className="h-full xl:h-screen flex flex-col justify-start"
      id="projects"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        className="mb-[100px] md:mb-[160px] xl:mb-0"
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
          <div className="flex items-center justify-center border-[1px] px-[1px] bg-primary-black bg-gradient-to-tl from-primary-black via-zinc-400/5 to-zinc-900 rounded-2xl py-[2.5px] border-[#717070] w-[93px] drop-shadow-md shadow-lg">
            <FolderKanban className="h-3 w-3" color="#D8D3CB" />
            <div className="ml-[7px] text-[9px] mt-[1.4px] text-[#D8D3CB] font-medium">
              PROJECTS
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn({
            direction: "up",
            type: "tween",
            delay: 0.1,
            duration: 1,
          })}
        >
          <div className="pt-[30px]">
            <div className="flex items-center">
              <div className="text-[#D8D3CB] text-3xl md:text-4xl">
                Featured {""}
                <span className="text-[#32DD89]">Projects</span>
              </div>
              <div
                className="text-[15px] text-[#D8D3CB] cursor-pointer ml-auto flex"
                onClick={() => router.push("/portfolio/projects")}
              >
                See all <span className="text-[#32DD89] ml-1">→</span>
              </div>
            </div>
          </div>
          <motion.div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 sm:grid-cols-1 mt-[20px]">
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projectItems?.slice(0, 4)?.map((val: ProjectItemsProps) => {
                return (
                  <Card key={val?.id}>
                    <div className="group w-full overflow-hidden relative cursor-pointer duration-700 rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600">
                      <div
                        onClick={() => {
                          window.open(val?.url, "_blank");
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
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                              quality={100}
                              className="rounded-2xl object-cover w-full h-auto"
                            />
                          </AspectRatio>
                        </article>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
