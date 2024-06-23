import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const containerVariants = {
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

export const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const categoryVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.1 },
  active: { backgroundColor: "#3182CE", color: "white", scale: 1.1 },
  inactive: { backgroundColor: "#E2E8F0", color: "#3182CE", scale: 1 },
};
