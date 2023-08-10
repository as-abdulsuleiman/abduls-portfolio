/** @format */

"use client";

import { usePathname } from "next/navigation";
import Navbar from "../navbar";
import Tabs from "../tabs";
import { motion } from "framer-motion";

const Wrapper = () => {
  const pathname = usePathname();

  if (!pathname.includes("project")) {
    return (
      <motion.div
        animate={{ opacity: !pathname.includes("project") ? 1 : 0 }}
        initial={{ opacity: 0 }}
        className="flex flex-col ml-auto"
      >
        <div className="flex flex-col ml-auto mr-[35px] sm:mr-[15px] md:mr-[32px] z-50">
          <Navbar />
        </div>
        <div className="hidden lg:flex flex-col ml-auto mr-[20px] sm:mr-[15px] md:mr-[36px] z-30">
          <div className="top-[280px] fixed z-30 border-[#717070] border-[0.1px] rounded-3xl drop-shadow-md shadow-lg">
            <Tabs />
          </div>
        </div>
      </motion.div>
    );
  }
};

export default Wrapper;
