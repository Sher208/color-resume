import { CERTIFICATES } from "@/constant/Certificates";
import { Card } from "@/components/ui/Card";
import { FC } from "react";
import Image from "next/image";

interface CertificationsProps {}

const Certifications: FC<CertificationsProps> = ({}) => {
  return (
    <div>
      <blockquote className="mt-2 border-l-2 border-l-black pl-2 font-medium text-2xl mb-4">
        Certifications
      </blockquote>
      <div className="grid grid-cols-3 gap-2">
        {CERTIFICATES.map((data, index) => {
          return (
            <Card
              key={index}
              className="bg-green-300 shadow-lg hover:shadow-none hover:bg-green-100 cursor-pointer flex flex-row justify-center align-middle"
            >
              <Image
                src={data.icon}
                alt="certificates"
                height={200}
                width={200}
              />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Certifications;
