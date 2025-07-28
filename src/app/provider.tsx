import { ThemeProvider } from "next-themes";
import React from "react";

export default function Provider({ children }: { children: any }) {
  return (
    <>
      <ThemeProvider defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </>
  );
}
