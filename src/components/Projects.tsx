"use client";

import React, { FC, useMemo } from "react";
import { Card } from "@/components/ui/Card";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { PROJECTS } from "@/constant/Projects";
import {
  getScrollAnimationComponents,
  getScrollAnimationHeading,
} from "@/lib/animation";
import ScrollAnimationWrapper from "./animation/ScrollAnimateWrapper";
import { motion } from "framer-motion";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = () => {
  const _getScrollAnimationHeading = useMemo(
    () => getScrollAnimationHeading(),
    []
  );
  const _getScrollAnimationComponents = useMemo(
    () => getScrollAnimationComponents(),
    []
  );
  return (
    <div>
      <ScrollAnimationWrapper>
        <motion.blockquote
          variants={_getScrollAnimationHeading}
          className="mt-2 border-l-2 border-l-portfolio-darkgreen pl-2 font-medium text-lg md:text-2xl mb-4"
        >
          Projects
        </motion.blockquote>
        <div className="flex flex-row md:flex-col gap-2 ml-3">
          {PROJECTS.map((data, index) => {
            return (
              <motion.div key={index} variants={_getScrollAnimationComponents}>
                <Card className="flex flex-col lg:flex-row mb-4 justify-center align-middle bg-portfolio-yellow rounded-none">
                  <Image
                    className="border-b-2 border-portfolio-border md:border-b-0"
                    src={data.icon}
                    alt="my gif"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="py-2 px-2 bg-porfolio-yellow">
                    <h1 className="scroll-m-20 text-center font-medium tracking-tight text-xs md:text-2xl text-porfolio-heading my-2">
                      {data.heading}
                    </h1>
                    <p className="hidden flex flex-row justify-center align-middle text-justify text-sm md:text-base md:block">
                      {data.description}
                    </p>
                  </div>
                  <div className="flex flex-row justify-center align-middle bg-portfolio-red border-t-2 border-portfolio-border lg:flex-col lg:border-t-0 lg:border-l-2">
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
              </motion.div>
            );
          })}
        </div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Projects;
