import { CERTIFICATES } from "@/constant/Certificates";
import { Card } from "@/components/ui/Card";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface CertificationsProps {}

const Certifications: FC<CertificationsProps> = ({}) => {
  return (
    <div>
      <blockquote className="mt-2 border-l-2 border-l-portfolio-darkgreen pl-2 font-medium text-lg md:text-2xl mb-4">
        Certifications
      </blockquote>
      <div className="grid grid-cols-3 gap-2">
        {CERTIFICATES.map((data, index) => {
          return (
            <Link target="_blank" key={index} href={data.link}>
              <Card className="bg-portfolio-green shadow-lg hover:shadow-none hover:bg-portfolio-lightgreen cursor-pointer flex flex-row justify-center align-middle">
                <Image
                  src={data.icon}
                  alt="certificates"
                  height={200}
                  width={200}
                />
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Certifications;
