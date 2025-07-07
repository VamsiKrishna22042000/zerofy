import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Leaf, Shield, Heart, Award, Target } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import customer1 from '../assets/customer1.jpeg';
import customer2 from '../assets/customer2.jpg';
import customer3 from '../assets/customer3.jpeg';

export const About: React.FC = () => {
  const { t } = useTranslation();
  const { getFontClass } = useLanguage();

  const values = [
    {
      icon: Leaf,
      titleKey: 'about.values.pure.title',
      contentKey: 'about.values.pure.content'
    },
    {
      icon: Shield,
      titleKey: 'about.values.transparent.title',
      contentKey: 'about.values.transparent.content'
    },
    {
      icon: Heart,
      titleKey: 'about.values.health.title',
      contentKey: 'about.values.health.content'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-chocolate-900 relative overflow-hidden">
      {/* Decorative Images */}
      <div className="absolute inset-0 z-0 opacity-5">
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 2 }}
          src="https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Peanuts"
          className="absolute top-20 right-10 w-48 h-48 object-cover rounded-full animate-float"
        />
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          src="https://images.pexels.com/photos/6544373/pexels-photo-6544373.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Makhana"
          className="absolute bottom-10 left-10 w-40 h-40 object-cover rounded-full animate-bounce-gentle"
        />
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 2, delay: 1 }}
          src="https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Peanuts"
          className="absolute top-1/2 left-20 w-32 h-32 object-cover rounded-full animate-float-delayed"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`text-3xl sm:text-4xl font-bold text-chocolate-900 dark:text-peanut-100 mb-6 text-inter-bold ${getFontClass()}`}>
              {t('about.title')}
            </h2>
            <p className={`text-lg text-chocolate-600 dark:text-peanut-300 mb-8 leading-relaxed text-inter ${getFontClass()}`}>
              {t('about.content')}
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  initial={{ scale: 0, rotate: 0 }}
                  whileInView={{ scale: 1, rotate: 360 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="flex-shrink-0 w-12 h-12 bg-peanut-100 dark:bg-chocolate-700 rounded-full flex items-center justify-center"
                >
                  <Target className="w-6 h-6 text-peanut-600" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <h3 className={`text-xl font-bold text-chocolate-900 dark:text-peanut-100 mb-2 text-inter-bold ${getFontClass()}`}>
                    {t('about.mission')}
                  </h3>
                  <p className={`text-chocolate-600 dark:text-peanut-300 text-inter ${getFontClass()}`}>
                    {t('about.missionContent')}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-peanut-400 to-chocolate-600 rounded-2xl p-8 text-white shadow-xl"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  style={{
                    animationDuration: '2s',
                    animationIterationCount: 'infinite',
                    animationTimingFunction: 'ease-in-out'
                  }}
                >
                  <Heart className="w-16 h-16 mx-auto mb-4 text-white/80" />
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className={`text-2xl font-bold mb-4 text-inter-bold ${getFontClass()}`}
                >
                  Zero Guilt, 100% Nutrition
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className={`text-peanut-100 text-inter ${getFontClass()}`}
                >
                  {t('about.tagline')}
                </motion.p>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.2 }}
              transition={{ delay: 1, duration: 1 }}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              style={{
                animationDuration: '3s',
                animationIterationCount: 'infinite',
                animationTimingFunction: 'ease-in-out'
              }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-peanut-200 dark:bg-chocolate-600 rounded-full opacity-20 blur-xl"
            />
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.2 }}
              transition={{ delay: 1.2, duration: 1 }}
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.1, 0.3]
              }}
              style={{
                animationDuration: '4s',
                animationIterationCount: 'infinite',
                animationTimingFunction: 'ease-in-out'
              }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-chocolate-300 dark:bg-peanut-600 rounded-full opacity-20 blur-xl"
            />
          </motion.div>
        </div>

        {/* Our Story Section */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h3 className={`text-2xl sm:text-3xl font-bold text-chocolate-900 dark:text-peanut-100 mb-8 text-inter-bold ${getFontClass()}`}>
            {t('about.story.title')}
          </h3>
          <div className="max-w-4xl mx-auto">
            <p className={`text-lg text-chocolate-600 dark:text-peanut-300 mb-6 leading-relaxed text-inter ${getFontClass()}`}>
              {t('about.story.content1')}
            </p>
            <p className={`text-lg text-chocolate-600 dark:text-peanut-300 mb-6 leading-relaxed text-inter ${getFontClass()}`}>
              {t('about.story.content2')}
            </p>
            <p className={`text-lg text-chocolate-600 dark:text-peanut-300 leading-relaxed text-inter ${getFontClass()}`}>
              {t('about.story.content3')}
            </p>
          </div>
        </motion.div>

        {/* Why Zerofy Section */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className={`text-2xl sm:text-3xl font-bold text-chocolate-900 dark:text-peanut-100 mb-12 text-center text-inter-bold ${getFontClass()}`}>
            {t('about.whyZerofy.title')}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-peanut-50 dark:bg-chocolate-800 rounded-2xl p-6 text-center border border-peanut-200 dark:border-chocolate-700 shadow-lg"
              >
                <motion.div
                  initial={{ scale: 0, rotate: 0 }}
                  whileInView={{ scale: 1, rotate: 360 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  className="w-16 h-16 bg-peanut-100 dark:bg-chocolate-700 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <value.icon className="w-8 h-8 text-peanut-600" />
                </motion.div>
                <h4 className={`text-xl font-bold text-chocolate-900 dark:text-peanut-100 mb-3 text-inter-bold ${getFontClass()}`}>
                  {t(value.titleKey)}
                </h4>
                <p className={`text-chocolate-600 dark:text-peanut-300 text-inter ${getFontClass()}`}>
                  {t(value.contentKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className={`text-2xl sm:text-3xl font-bold text-chocolate-900 dark:text-peanut-100 mb-12 text-inter-bold ${getFontClass()}`}>
            {t('about.testimonials.title')}
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((testimonial, index) => (
              <motion.div
                key={testimonial}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gradient-to-br dark:from-chocolate-800 dark:to-chocolate-900 rounded-2xl p-6 shadow-lg border border-peanut-200 dark:border-peanut-400/20"
              >
                <div className="flex flex-col items-center justify-center mb-6">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="mb-4"
                  >
                    <img 
                      src={testimonial === 1 ? customer1 : testimonial === 2 ? customer2 : customer3} 
                      alt={`Customer ${testimonial}`}
                      className="w-28 h-28 rounded-full object-cover border-3 border-peanut-300 dark:border-peanut-400/40 shadow-lg dark:shadow-peanut-400/10"
                    />
                  </motion.div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.05, duration: 0.3 }}
                      >
                        <Award className="w-4 h-4 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                </div>
                <p className={`text-chocolate-600 dark:text-peanut-300 mb-4 italic text-inter ${getFontClass()}`}>
                  "{t(`about.testimonials.testimonial${testimonial}.content`)}"
                </p>
                <p className={`font-bold text-chocolate-900 dark:text-peanut-100 text-inter-bold ${getFontClass()}`}>
                  {t(`about.testimonials.testimonial${testimonial}.author`)}
                </p>
                <p className={`text-sm text-chocolate-500 dark:text-peanut-400 text-inter ${getFontClass()}`}>
                  {t(`about.testimonials.testimonial${testimonial}.role`)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};