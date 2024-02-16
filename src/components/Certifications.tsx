"use client";

import { CERTIFICATES } from "@/constant/Certificates";
import { Card } from "@/components/ui/Card";
import { FC, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollAnimationWrapper from "./animation/ScrollAnimateWrapper";
import {
  getScrollAnimationComponents,
  getScrollAnimationHeading,
} from "@/lib/animation";
import { motion } from "framer-motion";

interface CertificationsProps {}

const Certifications: FC<CertificationsProps> = ({}) => {
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
          Certifications
        </motion.blockquote>
        <motion.div
          variants={_getScrollAnimationComponents}
          className="grid grid-cols-3 gap-2 ml-3"
        >
          {CERTIFICATES.map((data, index) => {
            return (
              <Link target="_blank" key={index} href={data.link}>
                <Card className="bg-portfolio-green shadow-lg hover:shadow-none hover:bg-portfolio-lightgreen cursor-pointer flex flex-row justify-center align-middle rounded-none">
                  <Image
                    src={data.icon}
                    alt="certificates"
                    height={200}
                    width={200}
                  />
                </Card>
              </Link>
            );
          })}
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Certifications;
