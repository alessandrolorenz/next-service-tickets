"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

interface ThemeContextProps {
  // Define the properties of ThemeContextProps here
}

const ThemeContext = React.createContext<ThemeContextProps | undefined>(undefined);

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
      throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};