"use client";

import React, { FC, useEffect, useState } from "react";
import { ThemeProvider as LocalThemeProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

const ThemeProvider: FC<ThemeProviderProps> = ({ children, ...props }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  return <LocalThemeProvider {...props}>{children}</LocalThemeProvider>;
};

export default ThemeProvider;
