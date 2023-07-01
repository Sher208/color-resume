import ThemeProvider from "@/providers/ThemeProvider";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/Toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Thilakraj Shetty H",
  description:
    "I am an highly skilled and experienced full-stack developer proficient in a wide range of frontend and backend technologies. With expertise in various programming languages, frameworks, and tools, I have a proven track record of delivering exceptional, high-quality, and feature-rich applications",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "bg-white text-slate-900 antialiased light",
          inter.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <main className="dark:text-gray-300">
            {children}
            <Toaster />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
