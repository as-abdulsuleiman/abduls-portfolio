/** @format */

"use client";

import { NavContext } from "@/scroll-provider";
import { motion } from "framer-motion";
import Link from "next/link";
import { ElementRef, FC, useContext, useRef } from "react";
import {
  Contact,
  FileText,
  Home,
  User2,
  FolderKanban,
  FolderRoot,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface indexProps {}

type IconProps = {
  className: string;
  color: string;
};

const Tabs: FC<indexProps> = ({}) => {
  const { value, setValue } = useContext(NavContext);
  const navContainerRef = useRef<ElementRef<"div">>(null);
  const navs = [
    {
      hasFill: false,
      name: "Home",
      path: "introduction",
      icon: ({ className, color }: IconProps) => (
        <Home className={className} color={color} />
      ),
    },
    {
      hasFill: false,
      name: "About",
      path: "about",
      icon: ({ className, color }: IconProps) => (
        <User2 className={className} color={color} />
      ),
    },
    {
      hasFill: false,
      name: "Experience",
      path: "experience",
      icon: ({ className, color }: IconProps) => (
        <FileText className={className} color={color} />
      ),
    },
    {
      hasFill: false,
      name: "Skills",
      path: "skills",
      icon: ({ className, color }: IconProps) => (
        <FolderRoot className={className} color={color} />
      ),
    },
    {
      hasFill: false,
      name: "Projects",
      path: "projects",
      icon: ({ className, color }: IconProps) => (
        <FolderKanban className={className} color={color} />
      ),
    },
    {
      hasFill: false,
      name: "Contact",
      path: "contact",
      icon: ({ className, color }: IconProps) => (
        <Contact className={className} color={color} />
      ),
    },
  ];

  const onPress = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    path: string
  ) => {
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split("#")[1]
    ) as HTMLAnchorElement;
    if (target) {
      setValue(path);
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col px-[10px] py-[9px] relative ">
      {navs?.map((val, index) => {
        const iconClass = `h-3 w-3 sm:h-4 sm:w-4 ${
          val.hasFill
            ? "fill-[1px] group-hover:fill-[#2BD984]"
            : "stroke-[1px] group-hover:stroke-[#2BD984]"
        } ${
          value === `${val.path}`
            ? `${val.hasFill ? "fill-[#2BD984]" : "stroke-[#2BD984]"}`
            : `${val.hasFill ? "fill-[#D8D3CB]" : "stroke-[#D8D3CB]"}`
        }`;
        const Icon = () => val.icon({ className: iconClass, color: "#D8D3CB" });
        return (
          <TooltipProvider key={index} delayDuration={400}>
            <Tooltip>
              <TooltipTrigger
                id={val.name}
                aria-label={`${val.name}-open-menu`}
              >
                <Link
                  aria-label={val.name}
                  onClick={(e) => onPress(e, val.path)}
                  href={`#${val.path}`}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      transition: { duration: 0.6 },
                    }}
                    ref={navContainerRef}
                    whileTap={{ scale: 0.9 }}
                    data-to-scrollspy-id={val.path}
                    className="py-[9px] group cursor-pointer"
                  >
                    <Icon />
                  </motion.div>
                </Link>
              </TooltipTrigger>
              <TooltipContent
                hideWhenDetached={true}
                className="text-[#D8D3CB] font-medium px-[8px] py-[0.6px] bg-primary-black bg-gradient-to-bl from-primary-black via-primary-black/5 to-primary-black border-[#717070] border-[0.1px]"
                side="left"
                alignOffset={0}
                sideOffset={11}
              >
                <small className="text-[#D8D3CB] font-medium cursor-pointer">
                  {val.name}
                </small>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </div>
  );
};

export default Tabs;
