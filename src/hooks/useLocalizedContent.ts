import { useTranslation } from "react-i18next";
import type { NewsTranslation, NewsTranslations } from "../types/index1";

export function useLocalizedContent(
  translations: NewsTranslations | null | undefined,
  fallback: NewsTranslation = { name: "", content: "" }
): NewsTranslation {
  const { i18n } = useTranslation();

  if (!translations) return fallback;

  const currentLang = i18n.language as "th" | "en";
  const otherLang = currentLang === "th" ? "en" : "th";

  const current = translations[currentLang];
  const other = translations[otherLang];

  if (current?.content?.trim()) return current;
  if (other?.content?.trim()) return other;

  return fallback;
}
