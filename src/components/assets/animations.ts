import { Variants } from 'framer-motion'

export const interestingTitleAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, type: 'spring', duration: 0.4 },
  }),
}
export const interestingTextAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', duration: 0.4 },
  },
}
export const interestingImageAnimation = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', duration: 0.4 },
  },
}
export const aboutPAnimation = {
  hidden: {
    x: 200,
    opacity: 0,
    scale: 0.6,
  },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.4, type: 'spring' },
  }),
}
export const aboutImageAnimation = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, type: 'spring' },
  },
}
export const aboutAchievmentAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.1 },
  }),
}
export const featuredItemAnimation: Variants = {
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
  },
  hidden: {
    x: -100,
    y: 50,
    opacity: 0,
    scale: 0.5,
  },
  exit: {
    x: -200,
    y: -100,
    opacity: 0,
    scale: 0.5,
    rotate: -30,
  },
}
export const mainUkrashenieAnimation = {
  visible: (i: number) => ({
    x: 0,
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.05 },
  }),
  hidden: {
    x: 100,
    y: -20,
    opacity: 0,
  },
}
