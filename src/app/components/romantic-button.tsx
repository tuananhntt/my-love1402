"use client";

import { motion } from "framer-motion";
import { MouseEventHandler } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 0px 10px rgba(255, 0, 100, 0.8)",
      }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className={twMerge(
        className,
        "px-6 py-3 bg-gradient-to-r from-pink-200 to-pink-300 text-pink-600 font-medium rounded-full  focus:outline-none"
      )}
    >
      {children}
    </motion.button>
  );
};

export default Button;
