import React from 'react';
import { ShoppingCart, Star, Award, Leaf, Heart, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';
import peanutButter from '../assets/penutbutter.avif';
import makhana from '../assets/makhana.jpg';
import zomato from '../assets/zomato.png';
import blinkit from '../assets/blinkit.png';
import zepto from '../assets/zepto.png';

const products = [
  {
    id: 'peanut-butter',
    nameKey: 'products.peanutButter.name',
    descriptionKey: 'products.peanutButter.description',
    features: ['features.highProtein', 'features.naturalIngredients', 'features.noPreservatives'],
    image: peanutButter,
    price: '₹299',
    benefits: ['25g protein per serving', '100% roasted peanuts', 'No added sugar or palm oil']
  },
  {
    id: 'makhana',
    nameKey: 'products.makhana.name',
    descriptionKey: 'products.makhana.description',
    features: ['features.lowCalorie', 'features.glutenFree', 'features.veganFriendly'],
    image: makhana,
    price: '₹199',
    benefits: ['Low calorie snack', 'Rich in calcium & magnesium', 'Naturally gluten-free']
  },
];

const platforms = [
  { name: 'Blinkit', logo: blinkit },
  { name: 'Zepto', logo: zepto },
  {name:'Zomato',logo:zomato},
];

export const Products: React.FC = () => {
  const { t } = useTranslation();
  const { getFontClass } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
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
    <section id="products" className="py-20 bg-peanut-100 dark:bg-chocolate-800 relative overflow-hidden">
      {/* Decorative Images */}
      <div className="absolute inset-0 z-0 opacity-5">
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 2 }}
          src="https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Peanuts"
          className="absolute top-10 left-10 w-40 h-40 object-cover rounded-full animate-bounce-gentle"
        />
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          src="https://images.pexels.com/photos/6544373/pexels-photo-6544373.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Makhana"
          className="absolute top-20 right-20 w-32 h-32 object-cover rounded-full animate-float"
        />
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 2, delay: 1 }}
          src="https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Peanuts"
          className="absolute bottom-20 right-10 w-36 h-36 object-cover rounded-full animate-float-delayed"
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
          <h2 className={`text-3xl sm:text-4xl font-bold text-chocolate-900 dark:text-peanut-100 mb-4 text-crispy-bold ${getFontClass()}`}>
            {t('products.title')}
          </h2>
          <p className={`text-lg text-chocolate-600 dark:text-peanut-300 max-w-2xl mx-auto text-crispy ${getFontClass()}`}>
            {t('products.subtitle')}
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group bg-white dark:bg-chocolate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-peanut-200 dark:border-chocolate-700"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  src={product.image}
                  alt={t(product.nameKey)}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="bg-peanut-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1"
                  >
                    <Award className="w-3 h-3" />
                    {t('products.premium')}
                  </motion.div>
                </div>
                <div className="absolute top-4 right-4">
                  <motion.div 
                    initial={{ scale: 0, rotate: 0 }}
                    whileInView={{ scale: 1, rotate: 360 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                    className="bg-white/90 dark:bg-chocolate-800/90 backdrop-blur-sm rounded-full p-2"
                  >
                    <Leaf className="w-5 h-5 text-peanut-600" />
                  </motion.div>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-8">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className="flex items-center gap-2 mb-3"
                >
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.05, duration: 0.3 }}
                      >
                        <Star className="w-4 h-4 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                  <span className="text-sm text-chocolate-500 dark:text-peanut-400">(4.9)</span>
                </motion.div>
                
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  className={`text-2xl font-bold text-chocolate-900 dark:text-peanut-100 mb-4 text-crispy-bold ${getFontClass()}`}
                >
                  {t(product.nameKey)}
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  className={`text-chocolate-600 dark:text-peanut-300 mb-4 leading-relaxed text-crispy ${getFontClass()}`}
                >
                  {t(product.descriptionKey)}
                </motion.p>

                {/* Benefits */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  className="mb-6"
                >
                  {product.benefits.map((benefit, benefitIndex) => (
                    <motion.div
                      key={benefitIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + benefitIndex * 0.05, duration: 0.4 }}
                      className="flex items-center gap-2 mb-2"
                    >
                      <Shield className="w-4 h-4 text-peanut-600" />
                      <span className={`text-sm text-chocolate-600 dark:text-peanut-300 text-crispy ${getFontClass()}`}>
                        {benefit}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  className="flex flex-wrap gap-2 mb-6"
                >
                  {product.features.map((feature, featureIndex) => (
                    <motion.span
                      key={feature}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + featureIndex * 0.05, duration: 0.4 }}
                      className={`px-3 py-1 bg-peanut-100 dark:bg-chocolate-700 text-peanut-700 dark:text-peanut-300 rounded-full text-sm font-semibold text-crispy ${getFontClass()}`}
                    >
                      {t(feature)}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                  className="flex items-center justify-between"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 200 }}
                    className="text-2xl font-bold text-peanut-600 text-crispy-bold"
                  >
                    {product.price}
                  </motion.div>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection('contact')}
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-peanut-600 hover:bg-peanut-700 text-white rounded-full font-bold transition-all duration-300 hover:shadow-lg text-crispy ${getFontClass()}`}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    {t('products.shopNow')}
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Where to Buy Section */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 px-4"
        >
          <h3 className={`text-2xl font-bold text-chocolate-900 dark:text-peanut-100 mb-8 text-crispy-bold ${getFontClass()}`}>
            {t('products.whereToBuy')}
          </h3>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-6 max-w-4xl mx-auto"
          >
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gradient-to-br dark:from-chocolate-800 dark:to-chocolate-900 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-peanut-200 dark:border-peanut-400/20 w-44 h-32 flex flex-col items-center justify-center"
              >
                <div className="h-24 flex items-center justify-center">
                  <img 
                    src={platform.logo} 
                    alt={`${platform.name} logo`} 
                    className="h-20 w-auto object-contain" 
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-peanut-500 to-chocolate-600 rounded-2xl p-8 text-white max-w-4xl mx-auto shadow-xl">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-4"
            >
              <Heart className="w-12 h-12 mx-auto text-white/80" />
            </motion.div>
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className={`text-2xl font-bold mb-4 text-crispy-bold ${getFontClass()}`}
            >
              {t('products.specialOffer')}
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className={`text-peanut-100 mb-6 text-crispy ${getFontClass()}`}
            >
              {t('products.specialOfferDesc')}
            </motion.p>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              onClick={() => scrollToSection('contact')}
              className={`inline-flex items-center gap-2 px-8 py-4 bg-white text-peanut-600 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-lg text-crispy ${getFontClass()}`}
            >
              {t('products.orderNow')}
              <ShoppingCart className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};