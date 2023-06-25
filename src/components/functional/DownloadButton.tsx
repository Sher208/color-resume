import { FC } from "react";
import { buttonVariants } from "../ui/Button";
import { FileText } from "lucide-react";
import Link from "next/link";

interface DownloadButtonProps {}

const DownloadButton: FC<DownloadButtonProps> = ({}) => {
  return (
    <Link
      href="https://drive.google.com/file/d/11bx8wkYMGTWZGI3uWTjn6gcBwVLMAYik/view?usp=drive_link"
      className={buttonVariants()}
      download={"ThilakrajShetty.pdf"}
      target="_blank"
      rel="noreferrer"
    >
      <FileText size={18} />
      <p className="pl-2">Download Resume</p>
    </Link>
  );
};

export default DownloadButton;
