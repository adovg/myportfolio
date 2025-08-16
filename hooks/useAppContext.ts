"use client";

import { useTheme } from "../context/Theme-context";
import { useLocale } from "../context/LocaleContext";

export function useAppContext() {
  const theme = useTheme();
  const locale = useLocale();

  return { ...theme, ...locale };
}
