import React from 'react';
import { Instagram, Twitter, Facebook, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { getFontClass } = useLanguage();

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/thezerofy', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/thezerofy', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com/thezerofy', label: 'Facebook' },
  ];

  const legalLinks = [
    { key: 'footer.privacyPolicy', href: '#' },
    { key: 'footer.termsOfUse', href: '#' },
    { key: 'footer.returnPolicy', href: '#' },
    { key: 'footer.shippingInfo', href: '#' },
  ];

  return (
    <footer className="bg-chocolate-900 text-peanut-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="text-4xl md:text-5xl font-extrabold text-peanut-200 font-inter tracking-tight select-none"
              >
                Zerofy
              </motion.span>
            </div>
            <p className={`text-peanut-300 mb-6 text-xl md:text-2xl leading-relaxed text-inter ${getFontClass()}`}>
              {t('footer.tagline')}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.2, y: -2 }}
                  transition={{ delay: index * 0.1 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-peanut-400 hover:text-peanut-300 transition-colors p-2 bg-chocolate-800 rounded-full hover:bg-chocolate-700"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={`text-xl md:text-2xl font-bold mb-6 text-peanut-200 text-inter-bold ${getFontClass()}`}>
              Contact Info
            </h3>
            <div className="space-y-4">
              {[
                { icon: Mail, content: t('contact.email') },
                { icon: MapPin, content: t('contact.address') },
                { icon: Instagram, content: t('contact.social') },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-start gap-3"
                >
                  <item.icon className="w-5 h-5 text-peanut-400 mt-1 flex-shrink-0" />
                  <p className={`text-peanut-300 text-lg md:text-xl text-inter ${getFontClass()}`}>
                    {item.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className={`text-xl md:text-2xl font-bold mb-6 text-peanut-200 text-inter-bold ${getFontClass()}`}>
              Legal
            </h3>
            <div className="space-y-3">
              {legalLinks.map((link, index) => (
                <motion.a
                  key={link.key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ delay: 0.1 * index }}
                  href={link.href}
                  className={`text-peanut-300 hover:text-peanut-200 transition-colors block text-lg md:text-xl text-inter ${getFontClass()}`}
                >
                  {t(link.key)}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-chocolate-700 mt-12 -mb-7 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className={`text-peanut-300 text-center md:text-left text-base md:text-lg text-inter ${getFontClass()}`}>
              {t('footer.copyright')}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};