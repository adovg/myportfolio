"use client";
import { useContext } from "react";
import { ThemeContext } from "@/context/Theme-context";
import styles from "./ThemeToggle.module.scss";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className={styles.toggle__light}>
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
};
