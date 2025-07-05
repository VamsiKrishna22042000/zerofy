import React, { useState } from "react";
import { Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";

export const LanguageToggle: React.FC = () => {
  const { currentLanguage, changeLanguage, languages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (languageCode: string) => {
    changeLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-peanut-100 dark:bg-chocolate-800 hover:bg-peanut-200 dark:hover:bg-chocolate-700 transition-colors"
        aria-label="Change language"
      >
        <Globe className="w-5 h-5 text-chocolate-700 dark:text-peanut-300" />
        <span className="text-base font-medium text-chocolate-700 dark:text-peanut-300 font-caveat">
          {languages.find((lang) => lang.code === currentLanguage)?.nativeName}
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-36 bg-peanut-50 dark:bg-chocolate-800 rounded-lg shadow-lg border border-peanut-200 dark:border-chocolate-700 z-50"
          >
            {languages.map((language, index) => (
              <motion.button
                key={language.code}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ backgroundColor: "rgba(241, 133, 72, 0.1)" }}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full text-left px-4 py-2 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                  currentLanguage === language.code
                    ? "bg-peanut-100 dark:bg-chocolate-700/50 text-chocolate-700 dark:text-peanut-300"
                    : ""
                }`}
              >
                <span className="text-base font-medium font-caveat">
                  {language.nativeName}
                </span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
