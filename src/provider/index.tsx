/** @format */

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface ProviderProps {
  children: React.ReactNode;
}

const Provider: FC<ProviderProps> = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait" key={pathname}>
      <motion.div>{children}</motion.div>
    </AnimatePresence>
  );
};

export default Provider;
