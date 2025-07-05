import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Star, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';

// VideoBackground component with single looping video
const VideoBackground: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Effect to ensure video plays and loops
  useEffect(() => {
    const video = videoRef.current;
    
    if (video) {
      // Set up video to loop and play
      video.loop = true;
      video.play().catch(error => {
        console.log('Video playback failed:', error);
      });
    }
    
    return () => {
      // Cleanup if needed
      if (video) {
        video.pause();
      }
    };
  }, []);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="absolute inset-0 w-full h-full"
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        style={{
          filter: 'blur(5px)', // Apply blur to the video
          maskImage: 'radial-gradient(circle at center, rgba(0, 0, 0, 0.45) 10%, black 70%)', // Transparent center with partial opacity
          WebkitMaskImage: 'radial-gradient(circle at center, rgba(0, 0, 0, 0.45) 10%, black 70%)', // For cross-browser compatibility
        }}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
      >
        <source src="/penutsvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  );
};

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { getFontClass } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-gradient-to-br from-peanut-50 via-peanut-100 to-chocolate-100 dark:from-chocolate-900 dark:via-chocolate-800 dark:to-chocolate-700">
      {/* Background Videos */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <VideoBackground />
        
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-peanut-900/30 to-chocolate-900/40 dark:from-chocolate-900/50 dark:to-chocolate-900/60 z-10"></div>
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-peanut-200 dark:bg-chocolate-600 rounded-full opacity-20 blur-xl"
      />
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.1, 0.3]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-chocolate-200 dark:bg-peanut-600 rounded-full opacity-20 blur-xl"
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Trust indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center items-center gap-8 mb-8 flex-wrap"
          >
            {[
              { icon: Star, text: t('hero.rating'), color: 'text-yellow-500' },
              { icon: Users, text: t('hero.customers'), color: 'text-peanut-600' },
              { icon: Award, text: t('hero.natural'), color: 'text-peanut-600' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                className="flex items-center gap-2 bg-white/95 dark:bg-chocolate-800/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-peanut-200 dark:border-chocolate-600"
              >
                <item.icon className={`w-4 h-4 ${item.color} ${item.icon === Star ? 'fill-current' : ''}`} />
                <span className={`text-sm font-semibold text-chocolate-700 dark:text-peanut-300 ${getFontClass()}`}>
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className={`text-4xl sm:text-5xl lg:text-7xl font-bold  text-peanut-300 mb-6 leading-tight drop-shadow-lg ${getFontClass()}`}
          >
            {t('hero.title')}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className={`text-xl sm:text-2xl text-peanut-200 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md ${getFontClass()}`}
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('products')}
              className={`inline-flex items-center gap-3 px-8 py-4 bg-peanut-600 hover:bg-peanut-700 text-white rounded-full font-bold text-lg transition-all duration-300 hover:shadow-xl ${getFontClass()}`}
            >
              {t('hero.button')}
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('about')}
              className={`inline-flex items-center gap-3 px-8 py-4 bg-white/95 text-peanut-600 border-2 border-peanut-300 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-xl backdrop-blur-sm ${getFontClass()}`}
            >
              {t('hero.learnMore')}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};