import { FC } from "react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import { BiCodeAlt, BiEdit, BiMedal, BiUser } from "react-icons/bi";
import { PiSuitcaseBold } from "react-icons/pi";
import CopyToClipBoard from "./functional/CopyToClipBoard";
import ToggleTheme from "./functional/ToggleTheme";

interface DetailSectionProps {}

const DetailSection: FC<DetailSectionProps> = ({}) => {
  return (
    <div>
      <ToggleTheme className="absolute p-4" />
      <div className="container py-8 flex flex-col justify-center align-middle">
        <div className="flex flex-col justify-center align-middle h-4/12">
          <div className="mx-auto my-1 md:my-2">
            <Image
              className="rounded-full border-solid border-4 border-portfolio-border"
              src="https://media.licdn.com/dms/image/C5103AQHH50lvO9zZ8Q/profile-displayphoto-shrink_200_200/0/1552233662547?e=1701907200&v=beta&t=jPZ0OxfxM2GetQo6DMiTRfwoVex6V2oltUiMD8zYqp0"
              width={120}
              height={120}
              alt="Portfolio Picture"
            />
          </div>
          <div className="flex flex-row justify-center align-middle">
            <SocialIcon
              target="_blank"
              url="https://www.linkedin.com/in/thilakrajshetty/"
              className="m-2 cursor-pointer"
              style={{ height: 35, width: 35 }}
              fgColor="white"
              network="linkedin"
            />
            <SocialIcon
              target="_blank"
              url="https://github.com/Sher208"
              className="m-2 cursor-pointer"
              style={{ height: 35, width: 35 }}
              fgColor="white"
              network="github"
            />
            <CopyToClipBoard
              copyText="thilakrajshetty08@gmail.com"
              toastMessage="Email Successfully Copied"
            >
              <SocialIcon
                className="m-2 cursor-pointer"
                style={{ height: 35, width: 35 }}
                fgColor="white"
                bgColor="#EA4335"
                network="email"
                url=""
              />
            </CopyToClipBoard>
          </div>
        </div>
        <hr className="hidden md:block h-px my-4 bg-black border-0 dark:bg-gray-700"></hr>
        <div className="hidden md:block">
          <div className="flex flex-col p-3 justify-center align-middle w-[100%]">
            <Link href="#aboutme" scroll={false}>
              <div className="flex flex-row p-3 justify-start items-center hover:text-portfolio-darkergreen">
                <BiUser className="h-6 w-6" />
                <p className="leading-7 font-semibold mx-4">About Me</p>
              </div>
            </Link>
            <Link href="#skills" scroll={false}>
              <div className="flex flex-row p-3 justify-start items-center hover:text-portfolio-darkergreen">
                <BiCodeAlt className="h-6 w-6" />
                <p className="leading-7 font-semibold mx-4">Skills</p>
              </div>
            </Link>
            <Link href="#work" scroll={false}>
              <div className="flex flex-row p-3 justify-start items-center hover:text-portfolio-darkergreen">
                <PiSuitcaseBold className="h-6 w-6" />
                <p className="leading-7 font-semibold mx-4">Work Experience</p>
              </div>
            </Link>
            <Link href="#projects" scroll={false}>
              <div className="flex flex-row p-3 justify-start items-center hover:text-portfolio-darkergreen">
                <BiEdit className="h-6 w-6" />
                <p className="leading-7 font-semibold mx-4">Projects</p>
              </div>
            </Link>
            <Link href="#certifications" scroll={false}>
              <div className="flex flex-row p-3 justify-start items-center hover:text-portfolio-darkergreen">
                <BiMedal className="h-6 w-6" />
                <p className="leading-7 font-semibold mx-4">Certifications</p>
              </div>
            </Link>
          </div>
        </div>
        {/* <hr className="hidden md:block h-px my-4 bg-black border-0 dark:bg-gray-700"></hr> */}
      </div>
    </div>
  );
};

export default DetailSection;
