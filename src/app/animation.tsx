'use client';
 
import { motion, AnimatePresence, Variants } from "framer-motion"
import { ReactNode } from "react";

const fadeGeral: Variants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      duration: 0.2,
      delay: 0.25,
      ease: "easeIn",
      when: "beforeChildren"
    },
  }
}

const fadeInDown: Variants = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeIn"
    }
  }
}

export const fadeIn: Variants = {
  initial: {
    // x: 60,
    opacity: 0,
  },
  animate: {
    // x: 0,
    opacity: 1,
    transition: {
      ease: "easeIn"
    }
  }
}

export const Animation = ({ children }: { children: ReactNode }) => (
  <AnimatePresence>
    <motion.div
      className="flex flex-1 flex-col"
      variants={fadeGeral}
      initial='initial'
      animate='animate'
    >
      {children}
    </motion.div>
  </AnimatePresence>
)


export const AnimationChildren = ({ children }: { children: ReactNode }) => (
  <AnimatePresence>
    <motion.div
      variants={fadeInDown}
    >
      {children}
    </motion.div>
  </AnimatePresence>
)

export const AnimationFadeChildren = ({ children }: { children: ReactNode }) => (
  <AnimatePresence>
    <motion.div
      variants={fadeIn}
    >
      {children}
    </motion.div>
  </AnimatePresence>
)