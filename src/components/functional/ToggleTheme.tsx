"use client";

import { FC } from "react";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/Button";

interface ToggleThemeProps extends React.HTMLAttributes<HTMLButtonElement> {}

const ToggleTheme: FC<ToggleThemeProps> = ({ ...props }) => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    const currentTheme = theme === "dark" ? "light" : "dark";
    setTheme(currentTheme);
  };
  return (
    <button {...props} onClick={changeTheme}>
      {theme === "dark" ? <Sun size={25} /> : <Moon size={25} />}
    </button>
  );
};

export default ToggleTheme;
