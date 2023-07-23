import { StaticImageData } from "next/image";
import SolutionArchitextAssociate from "../../public/Certificates/SolutionArchitectAssociate.png";
import DeveloperCertifiedAssociate from "../../public/Certificates/DeveloperCertifiedAssociate.png";
import DeepLearningAI from "../../public/Certificates/deeplearningai.png";

export interface Certificates {
  icon: StaticImageData;
  link: string;
}

export const CERTIFICATES: Certificates[] = [
  {
    icon: SolutionArchitextAssociate,
    link: "https://www.credly.com/badges/d4154326-b39f-44b3-b15b-9ce413ce7e9a/public_url",
  },
  {
    icon: DeveloperCertifiedAssociate,
    link: "https://www.credly.com/badges/97fab96c-aca8-4150-b56b-af1766435705/public_url",
  },
  {
    icon: DeepLearningAI,
    link: "https://www.coursera.org/account/accomplishments/certificate/9EJ5QZ952MM2",
  },
];
