/** @format */

"use client";

import { usePathname } from "next/navigation";
import Tabs from "../tabs";
import { motion } from "framer-motion";
import SheetDrawer from "../sheet-drawer";

const Wrapper = () => {
  const pathname = usePathname();

  if (!pathname.includes("project")) {
    return (
      <motion.div
        animate={{ opacity: !pathname.includes("project") ? 1 : 0 }}
        initial={{ opacity: 0 }}
        className="flex flex-col ml-auto"
      >
        <div className="flex flex-col ml-auto mr-[33px] sm:mr-[15px] md:mr-[36px] z-10">
          <div className="z-30 fixed flex lg:hidden">
            <SheetDrawer />
          </div>
          <div className="top-[280px] fixed z-50 border-[#717070] border-[0.1px] rounded-3xl drop-shadow-md shadow-lg bg-primary-black bg-gradient-to-bl from-primary-black via-primary-black/5 to-primary-black">
            <Tabs />
          </div>
        </div>
      </motion.div>
    );
  } else {
    return null;
  }
};

export default Wrapper;
