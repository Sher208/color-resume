"use client";

import React, { FC, useEffect, useState } from "react";
import { ThemeProvider as LocalThemeProvider } from "next-themes";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  return <LocalThemeProvider>{children}</LocalThemeProvider>;
};

export default ThemeProvider;
