/** @format */

"use client";

import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useRouter } from "next/navigation";

interface ProjectProps {
  project: ProjectItemProps;
}

type ProjectItemProps = {
  url: string;
  bgColor: string;
  description: string;
  title: string;
  banner: string;
  tech: Tech[];
};

type Tech = {
  name: string;
};

const ProjectDetails: FC<ProjectProps> = ({ project }) => {
  const router = useRouter();
  const [loadingImage, setLoadingImage] = useState(true);

  return (
    <>
      <div className="flex ml-auto">
        <Button
          className={cn(
            "bg-primary-black hover:bg-primary-black/80 hover:bg-gradient-to-tl hover:from-primary-black hover:via-zinc-400/5 transition-opacity opacity-70 hover:opacity-100"
          )}
          onClick={() => router.back()}
          size="sm"
          variant="default"
        >
          Back
        </Button>
      </div>
      <div className="pt-[30px] relative">
        <AspectRatio ratio={16 / 10} className="group relative cursor-pointer">
          <Image
            onLoadingComplete={() => setLoadingImage(false)}
            src={project?.banner as string}
            alt={(project?.title as string) || "project-banner"}
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
            quality={100}
            className={`rounded-2xl object-cover border-[#717070] border-[0.1px] relative w-full h-full ${
              loadingImage ? "blur-sm " : "blur-none"
            }`}
          />
          {project?.tech && (
            <div className="absolute hidden bottom-0 pb-5 px-4 py-4 group-hover:flex bg-primary-black/20 w-full transition-transform ease-out duration-200">
              <div className="flex items-center px-2">
                {project?.tech.map((t: Tech, i: number) => {
                  return (
                    <div
                      className="mr-4 bg-[#2CDB86] text-[#1C1C23] hover:scale-105 transition-transform ease-out duration-200 p-1 px-2 text-[12px] rounded-3xl"
                      key={i}
                    >
                      {t?.name}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </AspectRatio>
        <div className="flex-1 flex flex-col">
          <div className="flex-1">
            <h2 className="mt-[8px] font-medium text-xl text-light-text">
              {project?.title}
            </h2>
            <p className={cn("mt-2 text-light-text")}>{project?.description}</p>
            <Button
              size="sm"
              variant="default"
              aria-label="view project"
              className={cn(
                "border-[#2CDB86] ring-offset-0 ml-auto flex mt-5 focus-visible:ring-[0.1px] focus-visible:ring-offset-0 focus-visible:ring-[#2CDB86] outline-0 bg-[#2CDB86] outline-none text-[#1C1C23] rounded-3xl text-[12px] font-light hover:scale-105 transition-transform ease-out duration-200 hover:bg-[#2CDB86]"
              )}
              onClick={() => {
                window.open(project?.url, "_blank");
              }}
            >
              View Project
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
