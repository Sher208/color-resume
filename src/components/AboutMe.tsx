import { FC } from "react";
import DownloadButton from "./functional/DownloadButton";

interface AboutMeProps {}

const AboutMe: FC<AboutMeProps> = ({}) => {
  return (
    <div>
      <div className="flex flex-row justify-between align-middle md:pt-2">
        <div className="scroll-m-20">
          <h1 className="text-m font-extrabold tracking-tight md:text-2xl lg:text-4xl text-porfolio-heading">
            Thilakraj Shetty H
          </h1>
          <h1 className="text-sm font-medium tracking-tight text-blue-700 dark:text-blue-300 md:text-lg lg:text-xl">
            Senior Software Developer
          </h1>
        </div>
        <div className="py-1">
          <DownloadButton />
        </div>
      </div>
      <blockquote className="mt-2 border-l-2 border-l-portfolio-darkgreen pl-6 font-medium text-xs md:text-lg text-justify">
        I am an highly skilled and experienced full-stack developer proficient
        in a wide range of frontend and backend technologies. With expertise in
        various programming languages, frameworks, and tools, I have a proven
        track record of delivering exceptional, high-quality, and feature-rich
        applications. My passion lies in creating scalable, performant, and
        user-friendly solutions that are visually appealing. I am dedicated to
        continuous learning, keeping myself up-to-date with the latest
        advancements, trends, and best practices in the ever-evolving technology
        landscape.
      </blockquote>
    </div>
  );
};

export default AboutMe;
