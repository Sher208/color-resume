import { WORK_EXPERIENCE } from "@/constant/WorkExprience";
import { FC } from "react";

interface WorkExperienceProps {}

const WorkExperience: FC<WorkExperienceProps> = () => {
  return (
    <div>
      <blockquote className="mt-2 border-l-2 border-l-portfolio-darkgreen pl-2 font-medium text-lg md:text-2xl mb-4">
        Work Experience
      </blockquote>
      <div className="ml-3">
        {WORK_EXPERIENCE.map((companyDetails) => (
          <div key={companyDetails.id}>
            <h1 className=" text-m md:text-lg lg:text-xl font-semibold text-portfolio-darkergreen">
              {companyDetails.name}
            </h1>
            <div className="border-l-2 border-yellow-300 dark:border-neutral-500">
              {companyDetails.positions.map((position) => (
                <ol key={position.id}>
                  <li>
                    <div className="flex-start flex items-center pt-3">
                      <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-portfolio-darkgreen"></div>
                      <div className="flex flex-grow justify-between items-center align-middle">
                        <div className="mb-1.5 text-sm md:text-lg lg:text-xl font-semibold">
                          {position.post}
                        </div>
                        <div className="text-xs md:text-sm text-portfolio-darkergreen font-semibold">
                          {position.date}
                        </div>
                      </div>
                    </div>
                    <div className="mb-6 ml-4 mt-2">
                      <ul className="pl-4 mb-3 list-disc">
                        {position.descriptions.map((description) => (
                          <li
                            className="text-sm md:text-base"
                            key={description.id}
                          >
                            {description.content}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                </ol>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
