import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { LanguageToggle } from './LanguageToggle';
import { ThemeToggle } from './ThemeToggle';
import { useLanguage } from '../hooks/useLanguage';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  const { getFontClass } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 bg-peanut-50/95 dark:bg-chocolate-900/95 backdrop-blur-md border-b border-peanut-200 dark:border-chocolate-700 z-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer" 
            onClick={() => scrollToSection('home')}
          >
            <span className="text-3xl md:text-4xl font-extrabold text-chocolate-700 dark:text-peanut-200 font-caveat tracking-tight select-none">
  Zerofy
</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { key: 'navigation.home', section: 'home' },
              { key: 'navigation.products', section: 'products' },
              { key: 'navigation.about', section: 'about' },
              { key: 'navigation.contact', section: 'contact' },
            ].map((item, index) => (
              <motion.button
                key={item.key}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollToSection(item.section)}
                className={`text-chocolate-700 dark:text-peanut-300 hover:text-peanut-600 dark:hover:text-peanut-400 transition-colors font-semibold text-lg md:text-xl ${getFontClass()}`}
              >
                {t(item.key)}
              </motion.button>
            ))}
          </nav>

          {/* Controls */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-3"
          >
            <LanguageToggle />
            {/* <ThemeToggle /> */}
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-peanut-100 dark:bg-chocolate-800 hover:bg-peanut-200 dark:hover:bg-chocolate-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-peanut-200 dark:border-chocolate-700"
          >
            <nav className="flex flex-col gap-4">
              {[
                { key: 'navigation.home', section: 'home' },
                { key: 'navigation.products', section: 'products' },
                { key: 'navigation.about', section: 'about' },
                { key: 'navigation.contact', section: 'contact' },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.section)}
                  className={`text-left text-chocolate-700 dark:text-peanut-300 hover:text-peanut-600 dark:hover:text-peanut-400 transition-colors font-semibold text-lg md:text-xl ${getFontClass()}`}
                >
                  {t(item.key)}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};