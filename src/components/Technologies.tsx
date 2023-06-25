import { TECHNOLOGIES } from "@/constant/Technologies";
import { Card } from "@/components/ui/Card";
import { FC } from "react";

interface TechnologiesProps {}

const Technologies: FC<TechnologiesProps> = ({}) => {
  return (
    <div>
      <blockquote className="mt-2 border-l-2 border-l-black pl-2 font-medium text-2xl mb-4">
        Skills
      </blockquote>
      <div className="flex flex-row justify-center flex-wrap">
        {TECHNOLOGIES.map((data, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center items-center mx-1 pb-4 md:pb-6 md:mx-4"
            >
              <data.icon className="w-12 h-12" />
              <p className="font-bold text-center text-sm lg:text-lg">
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
