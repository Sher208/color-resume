import { WorkCompany } from "@/types/WorkExpirence";
import { FC } from "react";

interface WorkExpirenceProps extends WorkCompany {}

const WorkExpirence: FC<WorkExpirenceProps> = () => {
  return (
    <div>
      <div>
        <h1>Quantiphi Analytics</h1>
        <ol className="border-l-2 border-yellow-300 dark:border-neutral-500">
          <li>
            <div className="flex-start flex items-center pt-3">
              <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-black dark:bg-neutral-500"></div>
              <p className="text-sm text-neutral-500 dark:text-neutral-300">
                April 2023 - Present
              </p>
            </div>
            <div className="mb-6 ml-4 mt-2">
              <h4 className="mb-1.5 text-xl font-semibold">
                Senior Software Developer
              </h4>
              <p className="pl-4 mb-3 text-neutral-500 dark:text-neutral-300">
                <ul className="list-disc">
                  <li>
                    Developed a scalable telematics application that can help
                    you track a fleet of vehicles on the map along with
                    rendering a huge amount of POIs based on the bounding box
                    and zoom level using ReactJS and Spring Boot.
                  </li>
                  <li>
                    Developed a scalable telematics application that can help
                    you track a fleet of vehicles on the map along with
                    rendering a huge amount of POIs based on the bounding box
                    and zoom level using ReactJS and Spring Boot.
                  </li>
                  <li>
                    Developed a scalable telematics application that can help
                    you track a fleet of vehicles on the map along with
                    rendering a huge amount of POIs based on the bounding box
                    and zoom level using ReactJS and Spring Boot.
                  </li>
                </ul>
              </p>
            </div>
          </li>

          <li>
            <div className="flex-start flex items-center pt-2">
              <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-detail dark:bg-neutral-500"></div>
              <p className="text-sm text-neutral-500 dark:text-neutral-300">
                Aug 2021 - Mar 2023
              </p>
            </div>
            <div className="mb-6 ml-4 mt-2">
              <h4 className="mb-1.5 text-xl font-semibold">
                Framework Engineer - Software Developer
              </h4>
              <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                Libero expedita explicabo eius fugiat quia aspernatur autem
                laudantium error architecto recusandae natus sapiente sit nam
                eaque, consectetur porro molestiae ipsam an deleniti.
              </p>
            </div>
          </li>

          <li>
            <div className="flex-start flex items-center pt-2">
              <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-detail dark:bg-neutral-500"></div>
              <p className="text-sm text-neutral-500 dark:text-neutral-300">
                Feb 2021 - Aug 2021
              </p>
            </div>
            <div className="ml-4 mt-2 pb-5">
              <h4 className="mb-1.5 text-xl font-semibold">Intern</h4>
              <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                Voluptatibus temporibus esse illum eum aspernatur, fugiat
                suscipit natus! Eum corporis illum nihil officiis tempore.
                Excepturi illo natus libero sit doloremque, laborum molestias
                rerum pariatur quam ipsam necessitatibus incidunt, explicabo.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default WorkExpirence;
