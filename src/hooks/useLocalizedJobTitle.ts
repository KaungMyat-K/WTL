// hooks/useLocalizedField.ts
import { useTranslation } from "react-i18next";
import type { JobTranslation, JobTranslations } from "../types/index1";
import type { siteConfig } from "../config/site1";

type Locale = (typeof siteConfig.language)[number]["id"];

export function useLocalizedJobTitle(
  translations: JobTranslations | null | undefined,
  field: keyof JobTranslation = "jobPosition",
  fallback = ""
): string {
  const { i18n } = useTranslation();
  if (!translations) return fallback;

  const lang = i18n.language as Locale;

  const current = translations[lang]?.[field];
  if (current?.trim()) return current;

  const other: Locale = lang === "th" ? "en" : "th";
  const otherVal = translations[other]?.[field];
  if (otherVal?.trim()) return otherVal;

  return fallback;
}
