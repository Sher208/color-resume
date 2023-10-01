import { WorkCompany } from "@/types/WorkExperience";

export const WORK_EXPERIENCE: WorkCompany[] = [
  {
    id: 1,
    name: "Quantiphi Analytics",
    website: "",
    positions: [
      {
        id: 1,
        date: "Apr 2023 - Present",
        post: "Senior Software Developer",
        descriptions: [
          {
            id: 1,
            content:
              "Designed and implemented high-performance computational APIs that enhanced application responsiveness by minimizing response time by 40% and decreasing failure by 20% through the implementation of a backoff mechanism.",
          },
          {
            id: 2,
            content:
              "Revitalized application theming and design through the utilization of advanced React concepts, yielding an enhanced user experience, and devised a method to achieve a 50% reduction in future development time through dynamic changes.",
          },
        ],
      },
      {
        id: 2,
        date: "Aug 2021 - Apr 2023",
        post: "Framework Engineer – Software Developer",
        descriptions: [
          {
            id: 1,
            content:
              "Engineered a scalable telematics application to monitor fleet vehicles, utilizing the capabilities of Mapbox for geospatial visualization and achieving efficient rendering of 100,000+ points of interest on the map.",
          },
          {
            id: 2,
            content:
              "Designed and implemented Authorization and Authentication for Spring Boot and React, concurrently establishing a comprehensive logging mechanism.",
          },
          {
            id: 3,
            content:
              "Optimized the system and crafted 50+ REST APIs, seamlessly integrating them with AWS services including SES, Secret Manager, and S3.",
          },
        ],
      },
      {
        id: 3,
        date: "Feb 2021 - Aug 2021",
        post: "Framework Engineering Intern - Software Developer",
        descriptions: [
          {
            id: 1,
            content:
              "Spearheaded a successful POC for integrating on-premise Power BI to a React Application.",
          },
          {
            id: 2,
            content:
              "Created reusable React components and enhanced APIs through the implementation of industry-standard mechanisms.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Huviair Technologies",
    website: "",
    positions: [
      {
        id: 1,
        date: "Nov 2020 - Jan 2021",
        post: "Intern - Machine Learning",
        descriptions: [
          {
            id: 1,
            content:
              "Developed a PyTorch-based social distancing application, extending its functionality to vehicle – person, machine – person and vehicle – obstacle.",
          },
          {
            id: 2,
            content:
              "Enhanced safety conditions for construction workers by implementing image classification solutions.",
          },
        ],
      },
    ],
  },
];
