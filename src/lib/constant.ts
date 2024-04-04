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
    section: "Freelance",
    showButton: false,
    date: "Aug 2023 - Present ",
    name: "Software Developer",
    company: "DynastyU",
  },
  {
    isPresent: false,
    section: "Experience",
    showButton: false,
    date: "Aug 2021 - Feb 2024",
    name: "Software Developer",
    company: "Pramie Technologies",
  },
  // {
  //   isPresent: false,
  //   section: "Freelance",
  //   showButton: false,
  //   date: "2020-2021",
  //   name: "Software Developer",
  //   company: "Pramie Technologies",
  // },
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
    description: `I'm Abdul Suleiman, a passionate Software Developer who believes in the power of technology to transform lives. My arsenal includes JavaScript, TypeScript, Reactjs, and a slew of other technologies aimed at creating seamless, impactful applications`,
  },
  {
    description:
      "My professional path has been an exciting mix of freelance work and impactful contributions to companies like Pramie Technologies, where I’ve not only developed websites and applications but also mentored emerging talents. My projects, from Firstactive365 to DynastyU, highlight my commitment to excellence and innovation.",
  },
  {
    description: `I'm all about using my skills to make a difference, be it through developing apps that connect communities or websites that drive businesses forward. Interested in crafting something great together? Let’s chat.`,
  },
  {
    description:`Each version is designed to showcase Abdul's skills, experiences, and personality in a unique light while inviting readers to engage further.`
  },
  // {
  //   description: `When I'm not immersed in programming, I find joy in playing football, FIFA, watching Football matches, and Formula 1 races. These leisure activities provide the perfect balance to my intense dedication to software development.`,
  // },
];

export const globalSectionStyle = "h-full lg:h-screen flex flex-col justify-start"