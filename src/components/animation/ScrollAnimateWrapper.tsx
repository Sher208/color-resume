"use client";
import { motion } from "framer-motion";
import React, { FC } from "react";

interface ScrollAnimationWrapper {
  children?: React.ReactNode;
  className?: string;
}

const ScrollAnimationWrapper: FC<ScrollAnimationWrapper> = ({
  children,
  className,
  ...props
}) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.4 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;
