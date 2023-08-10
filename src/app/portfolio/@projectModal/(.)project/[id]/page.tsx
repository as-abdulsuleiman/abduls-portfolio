/** @format */

"use client";

import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/config";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProjectProps {
  params: {
    id: string;
  };
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

const Page: FC<ProjectProps> = ({ params }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const [showimage, setShowImage] = useState(true);
  const [loading, setLoading] = useState(false);
  const [projectItem, setProjectItem] = useState<ProjectItemProps>();

  useEffect(() => {
    getProject();
  }, [params?.id]);

  const getProject = async () => {
    try {
      setLoading(true);
      const docRef = doc(db, "projects", params?.id);
      const docSnap = await getDoc(docRef);
      if (docSnap?.exists()) {
        const { title, url, banner, tech, bgColor, description } =
          docSnap?.data();
        setProjectItem({ title, url, banner, tech, bgColor, description });
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={() => {
        setIsOpen(false);
        router.back();
      }}
    >
      <DialogContent className="container mx-auto max-w-2xl rounded-2xl bg-primary-black bg-gradient-to-tl from-primary-black via-zinc-400/5 to-zinc-900  px-[22px] md:px-[2rem] py-[2rem]">
        <AspectRatio ratio={14 / 9} className="group relative">
          {loading ? (
            <div className="mx-auto flex container my-auto items-center justify-center h-full w-full">
              <div className="h-8 w-8 rounded-full border-2 border-dotted border-[#2BD984] animate-spin" />
            </div>
          ) : (
            <>
              {projectItem?.banner && (
                <Image
                  onLoadingComplete={() => setShowImage(false)}
                  src={projectItem?.banner as string}
                  alt={(projectItem?.title as string) || "project-banner"}
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                  quality={100}
                  className={`rounded-2xl object-cover border-[#717070]  border-[0.1px] relative ${
                    showimage ? "blur-sm " : "blur-none"
                  }`}
                />
              )}
              {projectItem?.tech && (
                <div className="absolute hidden bottom-0 pb-5 px-4 py-4 group-hover:hidden bg-primary-black/20 w-full">
                  {projectItem?.tech.map((t: Tech, i: number) => {
                    return <div key={i}>{t?.name}</div>;
                  })}
                </div>
              )}
            </>
          )}
        </AspectRatio>
        <div className="flex-1 flex flex-col">
          <div className="flex-1">
            <DialogHeader>
              <DialogTitle className="mt-[8px] font-medium text-xl text-light-text">
                {projectItem?.title}
              </DialogTitle>
            </DialogHeader>
            <DialogDescription className={cn("mt-2 text-light-text")}>
              {projectItem?.description}
            </DialogDescription>
            {!loading && projectItem && (
              <Button
                size="sm"
                variant="default"
                aria-label="view project"
                className={cn(
                  "border-[#2CDB86] ring-offset-0 ml-auto flex mt-5 focus-visible:ring-[0.1px] focus-visible:ring-offset-0 focus-visible:ring-[#2CDB86] outline-0 bg-[#2CDB86] outline-none text-[#1C1C23] rounded-3xl text-[12px] font-light hover:scale-105 transition-transform ease-out duration-200 hover:bg-[#2CDB86]"
                )}
                onClick={() => {
                  window.open(projectItem?.url, "_blank");
                }}
              >
                View Project
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Page;
