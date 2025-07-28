"use client";

import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
// import { Default_Theme } from "~/constants/theme";
const DEFAULT_THEME = "dark";

type TThemeContext = {
  theme: string;
  setTheme: (theme: string) => void;
};

type ThemeProviderProps = {
  children: ReactNode;
};
const ThemeContext = createContext({} as TThemeContext);

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProviderMe({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<string>("");

  function listenStorageChanges() {
    const _theme = localStorage.getItem("theme") ?? "";

    document.querySelector("html")?.classList.add(_theme);
    setTheme(_theme);
  }

  useEffect(() => {
    setTheme(localStorage.getItem("theme") ?? DEFAULT_THEME);

    window.addEventListener("storage", listenStorageChanges);
    return () => window.removeEventListener("storage", listenStorageChanges);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
