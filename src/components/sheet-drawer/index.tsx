/** @format */

"use client";

import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import {
  AtSign,
  Linkedin,
  Twitter,
  Gitlab,
  Github,
  FolderKanban,
} from "lucide-react";
import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { collection, getDocs } from "firebase/firestore";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { db } from "@/config";
import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

type IconProps = {
  className: string;
  color: string;
};

type sidebarItemsProps = {
  hasFill: boolean;
  name: string;
  icon: ({ className, color }: IconProps) => ReactNode;
  onclick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export const SheetDrawer = () => {
  const year = new Date().getFullYear();
  const [resume, setResume] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const handleRedirect = (link: string) => {
    return window.open(link, "_blank");
  };

  useEffect(() => {
    getResume();
  }, []);

  const getResume = async () => {
    const querySnapshot = await getDocs(collection(db, "rusume"));
    querySnapshot.forEach((doc) => {
      setResume(doc.data()?.resumeUrl);
    });
  };

  const sidebarItems = [
    // {
    //   hasFill: true,
    //   onclick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    //     handleRedirect("https://twitter.com/Abdul__Suleiman");
    //   },
    //   name: "Twitter",
    //   icon: ({ className, color }: IconProps) => (
    //     <Twitter className={className} color={color} />
    //   ),
    // },
    {
      hasFill: true,
      onclick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        handleRedirect(`${process.env.NEXT_PUBLIC_LINKEDIN_URL}`);
      },
      name: "Linkedin",
      icon: ({ className, color }: IconProps) => (
        <Linkedin className={className} color={color} />
      ),
    },
    {
      hasFill: false,
      onclick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        handleRedirect(`${process.env.NEXT_PUBLIC_GITHUB_URL}`);
      },
      name: "Source Code",
      icon: ({ className, color }: IconProps) => (
        <Github className={className} color={color} />
      ),
    },
    {
      hasFill: false,
      onclick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        window.location.href = "mailto:a.s.abdulsuleiman@gmail.com";
      },
      name: "Email",
      icon: ({ className, color }: IconProps) => (
        <AtSign className={className} color={color} />
      ),
    },
  ];
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          id="open-navbar"
          aria-label="open-navbar"
          className="rounded-full block fixed top-[32px] md:top-[63px] z-10 ring-[1px] p-1.5 cursor-pointer ring-[#717070] w-[30px] h-[32px] bg-primary-black bg-gradient-to-bl from-primary-black via-primary-black/5 to-primary-black transition-opacity opacity-70 hover:opacity-100"
        >
          <MenuIcon
            className="h-5 w-5 absolute inset-0 top-[6px] flex mx-auto items-center justify-center"
            color="#D8D3CB"
          />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-full sm:max-w-md overflow-y-auto sheet-scroll"
      >
        <div className="flex flex-col py-4">
          <div className="h-full w-full mt-[15px] border-[#717070] border-[0.1px] px-6 py-7 rounded-xl drop-shadow-md shadow-lg">
            <div className="flex flex-row items-center">
              <div className="relative">
                <h2 className="text-light-text font-semibold font-sans text-lg">
                  Abdul Suleiman
                </h2>
                <div className="absolute rounded-full border border-light-text h-3 w-3 top-[-5px] right-[-10px]">
                  <div className="h-full w-full flex mx-auto my-auto items-center justify-center text-[8px] text-light-text">
                    A
                  </div>
                </div>
              </div>
              <div className="ml-auto font-sans text-[10px] text-light-text">
                <span>Software</span>
                <div> Developer</div>
              </div>
            </div>
            <div className="w-full relative mt-5">
              <AspectRatio ratio={15 / 15}>
                <Image
                  src="/icons/abdul_suleiman.jpg"
                  alt="Photo by Abdul"
                  fill
                  quality={100}
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
                  className={`relative object-cover rounded-3xl ${
                    loading ? "blur-sm " : "blur-none"
                  }`}
                  onLoadingComplete={() => setLoading(false)}
                />
              </AspectRatio>
            </div>
            <div className="font-sans text-[16px] mt-[30px] text-center text-light-text font-semibold">
              a.s.abdulsuleiman@gmail.com
            </div>
            <div className="font-sans text-[16px] text-center text-light-text font-medium">
              Base in Bangalore, India
            </div>
            <div className="font-sans text-[11px] mt-[4px] text-center text-gray-text font-medium">{`© ${year} Abdul. All Rights Reserved`}</div>
            <div className="flex space-x-4 mx-auto justify-center items-center mt-[15px]">
              {sidebarItems?.map((item: sidebarItemsProps, index: number) => {
                const iconClass = `flex items-center justify-center mx-auto mt-[8px] h-4 w-4 text-center absolute inset-0  ${
                  item?.hasFill
                    ? "group-hover:fill-[#2BD984] text-[#717070] group-hover:text-[#2BD984] fill-[#717070]"
                    : "group-hover:stroke-[#2BD984] text-[#717070] group-hover:text-[#2BD984] stroke-[#717070]"
                }`;
                const Icon = () =>
                  item?.icon({ className: iconClass, color: "" });
                return (
                  <TooltipProvider key={index} delayDuration={400}>
                    <Tooltip>
                      <TooltipTrigger
                        id={item?.name}
                        aria-label={`${item.name}-open-tooltip`}
                      >
                        <motion.div
                          whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.2 },
                          }}
                          onClick={(e) => item?.onclick(e)}
                          key={index}
                          className="inline-block h-8 w-8 group rounded-full ring-[0.6px] ring-[#717070] cursor-pointer hover:ring-[#2BD984] relative"
                        >
                          <Icon />
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent
                        hideWhenDetached={true}
                        align="center"
                        className="text-[#D8D3CB] z-20 font-medium px-[8px] py-[0.6px] bg-primary-black bg-gradient-to-bl from-primary-black via-primary-black/5 to-primary-black border-[#717070] border-[0.1px]"
                        side="bottom"
                        alignOffset={900}
                        sideOffset={2}
                      >
                        <small className="text-[#D8D3CB] font-medium cursor-pointer">
                          {item?.name}
                        </small>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                );
              })}
            </div>
            <Button
              onClick={() => handleRedirect(resume)}
              size="sm"
              variant="default"
              className="mt-[15px] w-[70%] hover:scale-105 transition-transform ease-out duration-200 flex mx-auto rounded-3xl text-[13px] font-light border-[#2CDB86] bg-[#2CDB86] text-[#1C1C23] hover:bg-[#2CDB86]"
            >
              View CV
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SheetDrawer;
