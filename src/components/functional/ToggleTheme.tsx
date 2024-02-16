"use client";

import { FC, useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

interface ToggleThemeProps extends React.HTMLAttributes<HTMLButtonElement> {}

const ToggleTheme: FC<ToggleThemeProps> = ({ ...props }) => {
  const [theme, setTheme] = useState(
    (global as any).window?.__theme || "light"
  );

  const isDark = theme === "dark";

  const toggleTheme = () => {
    (global as any).window?.__setPreferredTheme(
      theme === "light" ? "dark" : "light"
    );
  };

  useEffect(() => {
    (global as any).window.__onThemeChange = setTheme;
  }, []);

  return (
    <button
      id="themechange"
      aria-label="Change theme of the application"
      {...props}
      onClick={toggleTheme}
    >
      {isDark ? <Sun size={25} /> : <Moon size={25} />}
    </button>
  );
};

export default ToggleTheme;
