/** @format */

"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { NavContext } from "@/scroll-provider";
import {
  Briefcase,
  Contact,
  FileText,
  Home,
  User2,
  FolderKanban,
} from "lucide-react";
import { Menu } from "lucide-react";
import { FC, useContext, useEffect, useRef } from "react";

interface NavbarProps {}

type IconProps = {
  className: string;
  color: string;
};

const Navbar: FC<NavbarProps> = ({}) => {
  const { value, setValue } = useContext(NavContext);
  const navContainerRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {}, [activeLinkId]);

  const menuItems = [
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
      name: "Resume",
      path: "resume",
      icon: ({ className, color }: IconProps) => (
        <FileText className={className} color={color} />
      ),
    },
    {
      hasFill: false,
      name: "Skills",
      path: "skills",
      icon: ({ className, color }: IconProps) => (
        <Briefcase className={className} color={color} />
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

  return (
    <Menubar className="h-0 w-0 bg-transparent rounded-none p-0 border-none">
      <MenubarMenu>
        <MenubarTrigger className="rounded-full ring-[1px] cursor-pointer top-[28px] lg:top-[59px] fixed ring-[#717070] p-1.5 z-50 bg-transparent focus:bg-transparent focus:text-[#D8D3CB] data-[state=open]:bg-transparent data-[state=open]:text-[#D8D3CB]">
          <Menu className="h-5 w-5" color="#D8D3CB" />
        </MenubarTrigger>
        <MenubarContent
          alignOffset={-160}
          data-state="closed"
          hideWhenDetached
          className="bg-primary-black text-[#D8D3CB] drop-shadow-md border-[#717070] border-[0.5px]"
        >
          {menuItems.map((val, index) => {
            const iconClass = `h-4 w-4${
              val.hasFill
                ? "fill-[1px] group-hover:fill-[#2BD984]"
                : " stroke-[1px] group-hover:stroke-[#2BD984]"
            } ${
              value === `${val.path}`
                ? `${val.hasFill ? "fill-[#2BD984]" : "stroke-[#2BD984]"}`
                : `${val.hasFill ? "fill-[#D8D3CB]" : "stroke-[#D8D3CB]"}`
            }`;
            const Icon = () =>
              val.icon({ className: iconClass, color: "#D8D3CB" });

            return (
              <MenubarItem
                ref={navContainerRef}
                className={`font-medium cursor-pointer  ${
                  value === val.path
                    ? "text-[#32DD89] focus:text-[#32DD89] focus:bg-[#717070]"
                    : "text-[#D8D3CB] focus:bg-[#717070] focus:text-[#D8D3CB]"
                }`}
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  const target = window.document.getElementById(val.path);
                  if (target) {
                    setValue(val.path);
                    target.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                }}
              >
                {val.name}
                <MenubarShortcut>
                  <Icon />
                </MenubarShortcut>
                {/* <Link href={`#${val.path}`} className="bg-red-500 w-full">
                  <div
                    data-to-scrollspy-id={val.path}
                    ref={navContainerRef}
                    onClick={() => {
                      console.log("event", val.path);
                      const target = window.document.getElementById(val.path);
                      console.log("target", target);
                      if (target) {
                        setActiveLinkId(val.path);
                        target.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                   
                  </div> */}
                {/* </Link> */}

                {/* <Link
                  className="w-full bg-red-300"
                  key={index}
                  href={`#${val.path}`}
                  onClick={(e) => onPress(e, val.path)}
                >
                  <div
                    data-to-scrollspy-id={val.path}
                    ref={navContainerRef}
                    className={` font-medium cursor-pointer  ${
                      activeLinkId === val.path
                        ? "text-[#32DD89]"
                        : "text-[#D8D3CB]"
                    }`}
                  >
                    {val.name}
                    
                  </div>
                </Link> */}
              </MenubarItem>
            );
          })}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
export default Navbar;
