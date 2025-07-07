import React, { useState } from 'react';
import { Mail, MapPin, Send, Instagram, Twitter, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  const { getFontClass } = useLanguage();
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitMessage('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 3000);
    }, 1000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-peanut-50 dark:bg-chocolate-800 relative overflow-hidden">
      {/* Decorative Images */}
      <div className="absolute inset-0 z-0 opacity-5">
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 2 }}
          src="https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Peanuts"
          className="absolute top-10 left-10 w-44 h-44 object-cover rounded-full animate-float"
        />
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          src="https://images.pexels.com/photos/6544373/pexels-photo-6544373.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Makhana"
          className="absolute bottom-20 right-20 w-36 h-36 object-cover rounded-full animate-bounce-gentle"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl sm:text-4xl font-bold text-chocolate-900 dark:text-peanut-100 mb-4 text-inter-bold ${getFontClass()}`}>
            {t('contact.title')}
          </h2>
          <p className={`text-lg text-chocolate-600 dark:text-peanut-300 max-w-2xl mx-auto text-inter ${getFontClass()}`}>
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            {[
              { icon: Mail, title: 'Email', content: t('contact.email') },
              { icon: MapPin, title: 'Address', content: t('contact.address') },
              { icon: Instagram, title: 'Social Media', content: t('contact.social') },
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ x: 10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="flex items-start gap-4"
              >
                <motion.div 
                  initial={{ scale: 0, rotate: 0 }}
                  whileInView={{ scale: 1, rotate: 360 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className="flex-shrink-0 w-12 h-12 bg-peanut-100 dark:bg-chocolate-700 rounded-full flex items-center justify-center"
                >
                  <item.icon className="w-6 h-6 text-peanut-600" />
                </motion.div>
                <div>
                  <h3 className={`text-xl font-bold text-chocolate-900 dark:text-peanut-100 mb-2 text-inter-bold ${getFontClass()}`}>
                    {item.title}
                  </h3>
                  <p className={`text-chocolate-600 dark:text-peanut-300 text-inter ${getFontClass()}`}>
                    {item.content}
                  </p>
                  {item.title === 'Social Media' && (
                    <div className="flex gap-4 mt-3">
                      {[Instagram, Twitter, Facebook].map((SocialIcon, socialIndex) => (
                        <motion.a
                          key={socialIndex}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          whileHover={{ scale: 1.2, y: -2 }}
                          transition={{ delay: 0.4 + socialIndex * 0.05, duration: 0.3 }}
                          href="#"
                          className="text-peanut-600 hover:text-peanut-700 transition-colors"
                          aria-label={SocialIcon.name}
                        >
                          <SocialIcon className="w-5 h-5" />
                        </motion.a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-chocolate-900 rounded-2xl p-8 shadow-lg border border-peanut-200 dark:border-chocolate-700"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: 'name', label: t('contact.nameLabel'), type: 'text' },
                { name: 'email', label: t('contact.emailLabel'), type: 'email' },
              ].map((field, index) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                >
                  <label htmlFor={field.name} className={`block text-sm font-semibold text-chocolate-700 dark:text-peanut-300 mb-2 text-inter ${getFontClass()}`}>
                    {field.label}
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02, y: -2 }}
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name as keyof ContactFormData]}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-peanut-300 dark:border-chocolate-600 rounded-lg focus:ring-2 focus:ring-peanut-500 focus:border-transparent bg-white dark:bg-chocolate-800 text-chocolate-900 dark:text-peanut-100 transition-colors"
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <label htmlFor="message" className={`block text-sm font-semibold text-chocolate-700 dark:text-peanut-300 mb-2 text-inter ${getFontClass()}`}>
                  {t('contact.messageLabel')}
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02, y: -2 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-peanut-300 dark:border-chocolate-600 rounded-lg focus:ring-2 focus:ring-peanut-500 focus:border-transparent bg-white dark:bg-chocolate-800 text-chocolate-900 dark:text-peanut-100 transition-colors resize-vertical"
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-peanut-600 hover:bg-peanut-700 disabled:bg-peanut-400 text-white rounded-lg font-bold transition-all duration-300 text-inter ${getFontClass()}`}
              >
                {isSubmitting ? (
                  <>
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {t('contact.sendMessage')}
                  </>
                )}
              </motion.button>

              {submitMessage && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 bg-peanut-100 dark:bg-chocolate-700 text-peanut-700 dark:text-peanut-300 rounded-lg"
                >
                  {submitMessage}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};