import ThemeProvider from "@/providers/ThemeProvider";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/Toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Thilakraj Shetty H",
  description: "Thilak's Portfolio",
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
