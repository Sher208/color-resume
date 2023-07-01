import { TECHNOLOGIES } from "@/constant/Technologies";
import { FC } from "react";

interface TechnologiesProps {}

const Technologies: FC<TechnologiesProps> = ({}) => {
  return (
    <div>
      <blockquote className="mt-4 border-l-2 border-l-portfolio-darkgreen pl-2 font-medium text-lg md:text-2xl mb-4 md:mt-2">
        Skills
      </blockquote>
      <div className="flex flex-row justify-center flex-wrap">
        {TECHNOLOGIES.map((data, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center items-center mx-1 pb-4 md:pb-6 md:mx-4 dark:text-white"
            >
              <data.icon className="w-6 h-6 md:w-12 md:h-12" />
              <p className="font-bold text-center text-xs md:text-sm lg:text-lg">
                {data.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Technologies;
