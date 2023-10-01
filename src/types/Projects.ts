import { StaticImageData } from "next/image";

export interface Projects {
  icon: StaticImageData;
  heading: string;
  description: string;
  githubLink?: string;
  shareLink?: string;
}
