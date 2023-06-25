import AboutMe from "@/components/AboutMe";
import Certifications from "@/components/Certifications";
import DetailSection from "@/components/DetailSection";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <div className="relative inset-0 w-full h-[30vh] md:min-h-screen md:fixed md:w-3/12 bg-yellow-100 border-solid border-4 border-black">
        <DetailSection />
      </div>
      <div className="w-full ml-auto md:w-9/12">
        <div
          id="aboutme"
          className="px-6 bg-red-200 border-solid border-b-4 border-r-4 border-black py-4 md:border-t-4 border-l-4 md:border-l-0"
        >
          <AboutMe />
        </div>
        <div id="skills" className="container -ml-2 pr-2">
          <Technologies />
        </div>
        <div id="projects" className="container -ml-2 pr-2">
          <Projects />
        </div>
        <div id="certifications" className="container -ml-2 pr-2">
          <Certifications />
        </div>
        <div className="px-6 mt-8 bg-red-200 border-solid border-black py-4 border-4">
          <h1 className="text-center">© Copyright 2023 − Thilakraj Shetty H</h1>
        </div>
      </div>
    </div>
  );
}
