import { FC } from "react";
import { buttonVariants } from "../ui/Button";
import { FileText } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface DownloadButtonProps {}

const DownloadButton: FC<DownloadButtonProps> = ({}) => {
  return (
    <Link
      aria-label="View My Resume"
      href="https://drive.google.com/file/d/11bx8wkYMGTWZGI3uWTjn6gcBwVLMAYik/view?usp=drive_link"
      className={cn(buttonVariants())}
      download={"ThilakrajShetty.pdf"}
      target="_blank"
      rel="noreferrer"
    >
      <FileText className="m-1 h-4 w-4" />
      <p className="pl-2 hidden md:block">Download Resume</p>
    </Link>
  );
};

export default DownloadButton;
