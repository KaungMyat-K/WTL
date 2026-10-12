import { useTranslation } from "react-i18next";
import type { NewsNames } from "../types/index1";
import type { siteConfig } from "../config/site1";

type Locale = (typeof siteConfig.language)[number]["id"];

export function useLocalizedNewsTitle(
  names: NewsNames | null | undefined,
  fallback = ""
): string {
  const { i18n } = useTranslation();

  if (!names) return fallback;

  const lang = i18n.language as Locale;

  const current = names[lang];
  if (current && current.trim() !== "") return current;

  const other: Locale = lang === "th" ? "en" : "th";
  const otherVal = names[other];
  if (otherVal && otherVal.trim() !== "") return otherVal;

  return fallback;
}
