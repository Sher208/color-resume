import { FC } from "react";
import { Card } from "@/components/ui/Card";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { PROJECTS } from "@/constant/Projects";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = () => {
  return (
    <div>
      <blockquote className="mt-2 border-l-2 border-l-black pl-2 font-medium text-2xl mb-4">
        Projects
      </blockquote>
      <div className="flex flex-row md:flex-col gap-2">
        {PROJECTS.map((data, index) => {
          return (
            <Card
              key={index}
              className="flex flex-col lg:flex-row mb-4 justify-center align-middle"
            >
              <Image
                className="border-b-2 border-black md:border-r-2 md:border-b-0"
                src={data.icon}
                alt="my gif"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="py-2 px-2 bg-yellow-100">
                <h1 className="scroll-m-20 text-s font-medium tracking-tight lg:text-xl text-black my-2 md:text-lg">
                  {data.heading}
                </h1>
                <p className="hidden flex flex-row justify-center align-middle text-justify text-sm md:text-base md:block">
                  {data.description}
                </p>
              </div>
              <div className="flex flex-row justify-center align-middle bg-red-200 border-t-2 border-black lg:flex-col lg:border-t-0 lg:border-l-2">
                {data.githubLink && (
                  <SocialIcon
                    target="_blank"
                    url={data.githubLink}
                    className="m-2 cursor-pointer"
                    style={{ height: 35, width: 35 }}
                    fgColor="white"
                    network="github"
                  />
                )}
                {data.shareLink && (
                  <SocialIcon
                    target="_blank"
                    url={data.shareLink}
                    className="m-2 cursor-pointer"
                    style={{ height: 35, width: 35 }}
                    fgColor="white"
                    network="sharethis"
                  />
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
