import { useEffect, useRef, useState } from "react";
import type { Language } from "../../types/index1";

interface LanguageDropdownProps {
  languages: Language[];
  currentLang: Language;
  onSelectLanguage: (lang: Language) => void;
}

function LanguageDropdown({
  languages,
  currentLang,
  onSelectLanguage,
}: LanguageDropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full mt-1 focus:outline-none"
        aria-label="Select language"
      >
        <img
          src={currentLang.img.src}
          alt={currentLang.img.alt}
          className="w-6 h-6 sm:w-8 sm:h-8 object-cover rounded-full"
        />
      </button>

      {isOpen && (
        <div className="absolute -right-1 mt-2 w-12 bg-white rounded-lg shadow-md border border-gray-200 z-50">
          {languages.map((lang) => (
            <button
              key={lang.id}
              onClick={() => {
                onSelectLanguage(lang);
                setIsOpen(false);
              }}
              className="flex items-center justify-center w-full px-2 py-2.5 hover:bg-gray-100 transition-colors duration-150"
            >
              <img
                src={lang.img.src}
                alt={lang.img.alt}
                className="w-6 h-6 object-cover rounded-sm"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageDropdown;
