/** @format */

"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { AtSign, Linkedin, Twitter, Gitlab } from "lucide-react";
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

interface indexProps {}

type IconProps = {
  className: string;
  color: string;
};

const SideBar: FC<indexProps> = ({}) => {
  const year = new Date().getFullYear();
  const [resume, setResume] = useState<string>("");
  const [loading, setLoading] = useState(true);

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
    {
      hasFill: true,
      onclick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        handleRedirect("https://twitter.com/Abdul__Suleiman");
      },
      name: "Twitter",
      icon: ({ className, color }: IconProps) => (
        <Twitter className={className} color={color} />
      ),
    },
    {
      hasFill: true,
      onclick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        handleRedirect("https://www.linkedin.com/in/abdul-suleiman-9448021b7/");
      },
      name: "Linkedin",
      icon: ({ className, color }: IconProps) => (
        <Linkedin className={className} color={color} />
      ),
    },
    {
      hasFill: false,
      onclick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        handleRedirect("https://gitlab.com/Abdul_Suleiman/abdul-portfolio");
      },
      name: "Source Code",
      icon: ({ className, color }: IconProps) => (
        <Gitlab className={className} color={color} />
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
    <div className="h-full w-full">
      <div className="flex flex-row items-center">
        <div className="relative">
          <h2 className="text-[#D8D3CB] font-semibold font-sans text-lg">
            Abdul Suleiman
          </h2>
          <div className="absolute rounded-full border border-zinc-50 h-3 w-3 top-[-5px] right-[-10px]">
            <div className="h-full w-full flex mx-auto my-auto items-center justify-center text-[8px] text-[#D8D3CB] ">
              A
            </div>
          </div>
        </div>
        <div className="ml-auto font-sans text-[10px] text-[#D8D3CB]">
          <span>Software</span>
          <div> Developer</div>
        </div>
      </div>
      <div className="w-full relative mt-5">
        <AspectRatio ratio={15 / 15}>
          <Image
            src="/static/icons/abdul_suleiman.jpg"
            alt="Photo by Abdul"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            quality={100}
            priority
            className={`relative object-cover rounded-3xl ${
              loading ? "blur-sm " : "blur-none"
            }`}
            onLoadingComplete={() => setLoading(false)}
          />
        </AspectRatio>
      </div>
      <div className="font-sans text-[16px] mt-[30px] text-center text-[#D8D3CB] font-semibold">
        a.s.abdulsuleiman@gmail.com
      </div>
      <div className="font-sans text-[16px] text-center text-[#D8D3CB] font-medium">
        Base in Bangalore, India
      </div>
      <div className="font-sans text-[11px] mt-[6px] text-center text-[#717070] font-medium">{`© ${year} Abdul. All Rights Reserved`}</div>
      <div className="flex space-x-4 mx-auto justify-center items-center mt-[20px]">
        {sidebarItems?.map((item, index) => {
          const iconClass = `flex items-center justify-center mx-auto mt-[8px] h-4 w-4 text-center absolute inset-0  ${
            item.hasFill
              ? "group-hover:fill-[#2BD984] text-[#717070] group-hover:text-[#2BD984] fill-[#717070]"
              : "group-hover:stroke-[#2BD984] text-[#717070] group-hover:text-[#2BD984] stroke-[#717070]"
          }`;
          const Icon = () => item.icon({ className: iconClass, color: "" });
          return (
            <TooltipProvider key={index} delayDuration={400}>
              <Tooltip>
                <TooltipTrigger id="open-tooltip" aria-label="open-tooltip">
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
                  className="text-[#D8D3CB] font-medium px-[8px] py-[0.6px] bg-[#727171] border-[#717070] border-[0.1px]"
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
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.6 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          onClick={() => handleRedirect(resume)}
          size="default"
          className="mt-[20px] w-[70%] flex mx-auto rounded-3xl text-[13px] font-light border-[#2CDB86] bg-[#2CDB86] text-[#1C1C23] hover:bg-[#2CDB86]"
        >
          View Resume
        </Button>
      </motion.div>
    </div>
  );
};

export default SideBar;
