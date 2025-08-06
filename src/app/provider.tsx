import { ThemeProvider } from "next-themes";
import React from "react";
import { TRPCReactProvider } from "~/trpc/react";

export default function Provider({ children }: { children: any }) {
  return (
    <TRPCReactProvider>
      <ThemeProvider defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </TRPCReactProvider>
  );
}
