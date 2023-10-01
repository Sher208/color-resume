import AboutMe from "@/components/AboutMe";
import Certifications from "@/components/Certifications";
import DetailSection from "@/components/DetailSection";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import WorkExperience from "@/components/WorkExpirence";

export default function Home() {
  return (
    <div className="relative">
      <div className="relative inset-0 w-full md:h-[30vh] md:min-h-screen md:fixed md:w-4/12 lg:w-3/12 bg-portfolio-yellow border-solid border-4 border-portfolio-border overflow-auto">
        <DetailSection />
      </div>
      <div className="w-full ml-auto md:w-8/12 lg:w-9/12 bg-portfolio">
        <div
          id="aboutme"
          className="px-6 bg-portfolio-red border-solid border-b-4 border-r-4 border-portfolio-border py-4 md:border-t-4 border-l-4 md:border-l-0"
        >
          <AboutMe />
        </div>
        <div id="skills" className="container -ml-2 pr-2">
          <Technologies />
        </div>
        <div id="work" className="container -ml-2 pr-2">
          <WorkExperience />
        </div>
        <div id="projects" className="container -ml-2 pr-2">
          <Projects />
        </div>
        <div id="certifications" className="container -ml-2 pr-2">
          <Certifications />
        </div>
        <div className="px-6 mt-8 bg-portfolio-red border-solid border-portfolio-border py-4 border-4 md:border-l-0">
          <h1 className="text-center text-xs md:text-lg">
            © Copyright 2023 − Thilakraj Shetty H
          </h1>
        </div>
      </div>
    </div>
  );
}
