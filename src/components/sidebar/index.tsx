/** @format */

"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { AtSign, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config";

interface indexProps {}

const SideBar: FC<indexProps> = ({}) => {
  const year = new Date().getFullYear();
  const [resume, setResume] = useState<string>("");

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
      <div className="w-full h-full relative mt-5">
        <AspectRatio ratio={15 / 15}>
          <Image
            src="/static/icons/abdul_suleiman.jpg"
            alt="Photo by Abdul Suleiman"
            fill
            quality={100}
            priority
            className="relative object-cover rounded-3xl"
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
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
          onClick={() => handleRedirect("https://twitter.com/Abdul__Suleiman")}
          className="inline-block h-8 w-8 group rounded-full ring-[0.6px] ring-[#717070] cursor-pointer hover:ring-[#2BD984] "
        >
          <Twitter className="flex items-center justify-center mx-auto  mt-[8px] h-4 w-4 text-center group-hover:fill-[#2BD984] text-[#717070] group-hover:text-[#2BD984]  fill-[#717070] " />
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
          onClick={() =>
            handleRedirect(
              "https://www.linkedin.com/in/abdul-suleiman-9448021b7/"
            )
          }
          className="inline-block h-8 w-8 group rounded-full ring-[0.6px] ring-[#717070] cursor-pointer hover:ring-[#2BD984]"
        >
          <Linkedin className="flex items-center justify-center mx-auto mt-[7px] h-4 w-4 text-center group-hover:fill-[#2BD984] text-[#717070] group-hover:text-[#2BD984]  fill-[#717070] " />
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "mailto:a.s.abdulsuleiman@gmail.com";
          }}
          className="inline-block h-8 w-8 group rounded-full ring-[0.6px] ring-[#717070] cursor-pointer hover:ring-[#2BD984]"
        >
          <AtSign className="flex items-center justify-center mx-auto mt-[8.5px] h-4 w-4 text-center group-hover:stroke-[#2BD984] text-[#717070] group-hover:text-[#2BD984]  stroke-[#717070] " />
        </motion.div>
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
          className="mt-[30px] w-[70%] flex mx-auto rounded-3xl text-[13px] font-light border-[#2CDB86] bg-[#2CDB86] text-[#1C1C23] hover:bg-[#2CDB86]"
        >
          View Resume
        </Button>
      </motion.div>
    </div>
  );
};

export default SideBar;
