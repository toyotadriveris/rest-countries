import { createContext, useContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const themeContext = createContext();

function ThemeContext({ children }) {
  const [isTheme, setIsTheme] = useLocalStorage(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
    "dark-mode"
  );

  useEffect(
    function () {
      if (isTheme) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
      }
    },
    [isTheme]
  );

  function toggleTheme() {
    setIsTheme((theme) => !theme);
  }

  return (
    <themeContext.Provider value={{ isTheme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(themeContext);

  if (context === undefined) throw new Error("theme context used out of react");

  return context;
}

export { ThemeContext, useTheme };
