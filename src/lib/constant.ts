/** @format */

import { Variants } from "framer-motion";

export const navVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 1,
    },
  },
};

interface SlideInProps {
  direction: string;
  type: string;
  delay: number;
  duration: number;
  custom?: number;
  opacity?: number;
}

export const slideIn = ({
  direction,
  type,
  delay,
  duration,
  opacity,
  custom,
}: SlideInProps) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type,
      delay: delay,
      duration,
      ease: "easeInOut",
    },
  },
});

interface ContainerProps {
  staggerChildren: number;
  delayChildren: number;
}

export const staggerContainer = ({
  staggerChildren,
  delayChildren,
}: ContainerProps) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

interface FadeInProps {
  direction: string;
  type: string;
  delay: number;
  duration: number;
  custom?: number;
  opacity?: number;
}

export const fadeIn = ({
  direction,
  type,
  delay,
  duration,
  opacity,
}: FadeInProps) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type,
      delay: delay,
      duration,
      ease: "easeInOut",
    },
  },
});

interface ZoomInProps {
  delay: number;
  duration: number;
  custom?: number;
}

export const zoomIn = ({ delay, duration, custom }: ZoomInProps) => ({
  hidden: {
    scale: 0,
    opacity: 0,
    x: 0,
    y: 0,
  },
  show: {
    y: 0,
    x: 0,
    scale: [0, 0.5, 1],
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: "easeInOut",
    },
  },
});

export const footerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.5,
    },
  },
};

export const resumeItems = [
  {
    isPresent: true,
    section: "Experience",
    showButton: false,
    date: "2021 - Present",
    name: "Software Developer",
    company: "Pramie Technologies",
  },
  {
    isPresent: true,
    section: "Freelancing",
    showButton: false,
    date: "2020",
    name: "Software Developer",
    company: "Pramie Technologies",
  },
  {
    isPresent: false,
    section: "Education",
    showButton: false,
    date: "2016 - 2019",
    name: "Bachelor Degree in Computer Application",
    company: "Bangalore University",
  },
];

export const aboutMeItems = [
  {
    description: `I pursued a degree in Computer Applications from Bangalore University-affiliated college, Bengaluru, India. After finishing my degree, I decided to pursue my passion for programming. I started my career by enrolling in coding tutorials offered on YouTube and other online platforms, where I learned about web development.`,
  },
  {
    description:
      "The art of problem-solving is one part of programming that I find quite appealing. When I eventually decipher a solution to a complex problem, I feel a sense of accomplishment.",
  },
  {
    description: `My primary skill set includes the use of technologies such as React.js, Next.js, JavaScript, and TypeScript, among others. These tools enable me to design dynamic and interesting online applications that promote efficiency and user-friendliness while meeting user needs. My commitment to learning and remaining current with industry developments drives my ongoing development as a web developer.`,
  },
  {
    description: `When I'm not immersed in programming, I find joy in playing football, FIFA, watching Football matches, and Formula 1 races. These leisure activities provide the perfect balance to my intense dedication to software development.`,
  },
];

export const globalSectionStyle = "h-full lg:h-screen flex flex-col justify-start"