import { useTranslation } from "react-i18next";
import type { NewsTranslation, NewsTranslations } from "../types/index1";
import type { siteConfig } from "../config/site1";

type Locale = (typeof siteConfig.language)[number]["id"];

export function useLocalizedNewsContent(
  translations: NewsTranslations | null | undefined,
  fallback: NewsTranslation = { name: "", content: "" }
): NewsTranslation {
  const { i18n } = useTranslation();

  if (!translations) return fallback;

  const currentLang = i18n.language as Locale;
  const otherLang: Locale = currentLang === "th" ? "en" : "th";

  const current = translations[currentLang];
  const other = translations[otherLang];

  if (current?.content?.trim()) return current;
  if (other?.content?.trim()) return other;

  return fallback;
}
