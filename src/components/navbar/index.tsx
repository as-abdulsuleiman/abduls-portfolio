/** @format */

"use client";

import { FC, Fragment, useRef, useContext, ElementRef, ReactNode } from "react";
import { Menu, Transition } from "@headlessui/react";
import { NavContext } from "@/scroll-provider";
import Link from "next/link";
import {
  Briefcase,
  Contact,
  FileText,
  Home,
  User2,
  FolderKanban,
  Menu as MenuIcon,
} from "lucide-react";

interface NavbarProps {}

type IconProps = {
  className: string;
  color: string;
};

type menuItemsProps = {
  hasFill: boolean;
  name: string;
  path: string;
  icon: ({ className, color }: IconProps) => ReactNode;
};

const Navbar: FC<NavbarProps> = ({}) => {
  const { value, setValue } = useContext(NavContext);
  const navContainerRef = useRef<ElementRef<"div">>(null);

  const onPress = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    path: string,
    close: () => void
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
    close();
  };

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
    <Menu as="div" className="block fixed top-[32px] md:top-[63px]">
      <Menu.Button
        id="open-navbar"
        aria-label="open-navbar"
        className="rounded-full z-[100] ring-[1px] cursor-pointer ring-[#717070] p-1.5 bg-primary-black bg-gradient-to-bl from-primary-black via-primary-black/5 to-primary-black transition-opacity opacity-70 hover:opacity-100"
      >
        <MenuIcon className="h-5 w-5" color="#D8D3CB" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute mt-2 w-48 right-0 z-[999] rounded-md shadow-lg ring-[1px] ring-[#717070] ring-opacity-5 focus:outline-none bg-primary-black bg-gradient-to-bl from-primary-black via-primary-black/5 to-primary-black text-[#D8D3CB] drop-shadow-md border-[#717070] border-[0.5px]">
          <div className="px-1 py-1 ">
            {menuItems.map((val: menuItemsProps, index: number) => {
              const iconClass = `h-4 w-4 ml-auto ${
                val?.hasFill
                  ? "fill-[1px] group-hover:fill-[#2BD984]"
                  : " stroke-[1px] group-hover:stroke-[#2BD984]"
              } ${
                value === `${val?.path}`
                  ? `${val?.hasFill ? "fill-[#2BD984]" : "stroke-[#2BD984]"}`
                  : `${val?.hasFill ? "fill-[#D8D3CB]" : "stroke-[#D8D3CB]"}`
              }`;
              const Icon = () =>
                val?.icon({ className: iconClass, color: "#D8D3CB" });
              return (
                <Menu.Item key={index} as={Fragment}>
                  {({ active, close }) => (
                    <Link
                      href={`#${val?.path}`}
                      onClick={(e) => onPress(e, val?.path, close)}
                      className={`text-sm flex group items-center px-2 py-2 rounded-md ${
                        active || value === val?.path
                          ? "bg-[#717070] text-[#32DD89]"
                          : "text-[#D8D3CB]"
                      }`}
                    >
                      <span ref={navContainerRef}>{val?.name}</span>
                      <Icon />
                    </Link>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Navbar;
