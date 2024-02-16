import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/Toaster";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { getTheme } from "@/lib/getTheme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Thilakraj Shetty",
    "Full Stack Developer",
    "Thilakraj",
    "Thilak Raj",
    "Thilakraj Shetty H",
  ],
  authors: [
    {
      name: "Thilakraj Shetty",
      url: "thilakrajshetty.vercel.app",
    },
  ],
  creator: "Thilakraj Shetty",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "../../public/personal/Me.jpeg",
        width: 500,
        height: 500,
        alt: siteConfig.name,
      },
    ],
  },
  icons: {
    icon: "../../pulbic/favicon/favicon.ico",
    shortcut: "../../pulbic/favicon/favicon-16x16.png",
    apple: "../../pulbic/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: getTheme }} />
      </head>
      <body className={cn("antialiased light", inter.className)}>
        <main className="dark:text-gray-300">
          {children}
          <Toaster />
        </main>
      </body>
    </html>
  );
}
