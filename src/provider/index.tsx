/** @format */

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";

interface ProviderProps {
  children: React.ReactNode;
}

const Provider: FC<ProviderProps> = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div>{children}</motion.div>
    </AnimatePresence>
  );
};

export default Provider;
