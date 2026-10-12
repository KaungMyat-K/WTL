import { useTranslation } from "react-i18next";
import type { siteConfig } from "../config/site1";
import type {
  JobDetailsTranslation,
  JobDetailsTranslations,
} from "../types/index1";

type Locale = (typeof siteConfig.language)[number]["id"];

export function useLocalizedJobContent(
  translations: JobDetailsTranslations | null | undefined,
  field: keyof JobDetailsTranslation,
  fallback = ""
): string {
  const { i18n } = useTranslation();

  if (!translations) return fallback;

  const currentLang = i18n.language as Locale;

  const current = translations[currentLang]?.[field];
  if (current?.trim()) return current;

  const otherLang = (Object.keys(translations) as Locale[]).find(
    (l) => l !== currentLang
  );
  const other = otherLang ? translations[otherLang]?.[field] : undefined;
  if (other?.trim()) return other;

  return fallback;
}
