"use client";
import React, { createContext, useContext, useState } from "react";

interface ThemeContextValue {
  theme: "light" | "dark";
  toggleTheme: (theme: "light" | "dark") => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>({
  theme: "light",
  toggleTheme: (theme: "light" | "dark") => {},
});

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = (theme: "light" | "dark") => {
    console.log("theme before click", theme);
    setTheme(theme);
    console.log("theme after click", theme);
  };
  const themeContextValue = { theme, toggleTheme };
  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
