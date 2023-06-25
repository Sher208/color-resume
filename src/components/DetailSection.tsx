import { FC } from "react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import { BiBriefcaseAlt2, BiUser } from "react-icons/bi";

interface DetailSectionProps {}

const DetailSection: FC<DetailSectionProps> = ({}) => {
  return (
    <div className="container py-8 flex flex-col justify-center align-middle">
      <h1 className="hidden scroll-m-20 text-xl text-center font-extrabold tracking-tight md:text-lg lg:text-xl text-black md:block">
        Thilakraj Shetty H
      </h1>
      <div className="mx-auto my-1 md:my-4">
        <Image
          className="rounded-full border-solid border-4 border-black"
          src="https://media.licdn.com/dms/image/C5103AQHH50lvO9zZ8Q/profile-displayphoto-shrink_400_400/0/1552233662547?e=1693440000&v=beta&t=yBVVa5XQK0dc6ZxIwXm2PSllGmpcpWFTHZOP2wFEfx8"
          width={150}
          height={150}
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
        <SocialIcon
          className="m-2 cursor-pointer"
          style={{ height: 35, width: 35 }}
          fgColor="white"
          bgColor="#EA4335"
          network="email"
        />
      </div>
      <hr className="hidden md:block h-px my-8 bg-black border-0 dark:bg-gray-700"></hr>
      <div className="hidden md:block">
        <div className="flex flex-col p-3 justify-center align-middle w-[100%]">
          <Link href="#aboutme" scroll={false}>
            <div className="flex flex-row p-3 justify-between items-center">
              <BiBriefcaseAlt2 className="h-6 w-6" />
              <p className="leading-7 font-semibold mx-4">About Me</p>
            </div>
          </Link>
          <Link href="#skills" scroll={false}>
            <div className="flex flex-row p-3 justify-between items-center">
              <BiUser className="h-6 w-6" />
              <p className="leading-7 font-semibold mx-4">Skills</p>
            </div>
          </Link>
          <Link href="#projects" scroll={false}>
            <div className="flex flex-row p-3 justify-between items-center">
              <BiUser className="h-6 w-6" />
              <p className="leading-7 font-semibold mx-4">Projects</p>
            </div>
          </Link>
          <Link href="#certifications" scroll={false}>
            <div className="flex flex-row p-3 justify-between items-center">
              <BiUser className="h-6 w-6" />
              <p className="leading-7 font-semibold mx-4">Certifications</p>
            </div>
          </Link>
        </div>
      </div>
      <hr className="hidden md:block h-px my-8 bg-black border-0 dark:bg-gray-700"></hr>
    </div>
  );
};

export default DetailSection;