import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function updateViewCounter(count: number): string {
  if (count < 100) {
    return count.toString();
  } else {
    // Display as "k" after 100 views
    return (count / 1000).toFixed(1) + "k";
  }
}
