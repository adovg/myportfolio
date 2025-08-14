"use client";
import { useContext } from "react";
import { ThemeContext } from "@/app/context/Theme-context"; // Adjust the import path as necessary

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Переключить на {theme === "light" ? "тёмную" : "светлую"} тему
    </button>
  );
};
