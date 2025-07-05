import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  emoji: string;
  x: number;
  delay: number;
  duration: number;
}

export const SprinklingAnimation: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const emojis = ['🥜', '🌰', '🫘', '🥜', '🌰', '🫘', '🥜', '🌰'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show particles when scrolling
      if (scrollY > windowHeight * 0.1) {
        setIsVisible(true);
        
        // Generate new particles periodically
        const newParticles = Array.from({ length: 8 }, (_, i) => ({
          id: Date.now() + i,
          emoji: emojis[i % emojis.length],
          x: Math.random() * 100,
          delay: Math.random() * 2,
          duration: 6 + Math.random() * 4,
        }));
        
        setParticles(prev => [...prev.slice(-10), ...newParticles]);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Clean up old particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev.slice(-20));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ 
            y: -100, 
            x: `${particle.x}vw`,
            rotate: 0,
            opacity: 0,
            scale: 0.5
          }}
          animate={{ 
            y: '110vh', 
            rotate: 360,
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 1, 0.5]
          }}
          transition={{ 
            duration: particle.duration,
            delay: particle.delay,
            ease: "linear",
            opacity: {
              times: [0, 0.1, 0.9, 1],
              duration: particle.duration
            }
          }}
          className="absolute text-2xl"
          style={{
            filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))',
          }}
        >
          {particle.emoji}
        </motion.div>
      ))}
    </div>
  );
};