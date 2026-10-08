import { useTranslation } from "react-i18next";
import type { NewsNames } from "../types/index1";

export function useLocalizedNewsTitle(
  names: NewsNames | null | undefined,
  fallback = ""
): string {
  const { i18n } = useTranslation();

  if (!names) return fallback;

  const current = names[i18n.language as "th" | "en"];
  if (current && current.trim() !== "") return current;

  const other = i18n.language === "th" ? "en" : "th";
  const otherVal = names[other];
  if (otherVal && otherVal.trim() !== "") return otherVal;

  return fallback;
}
