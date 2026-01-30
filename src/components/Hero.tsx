import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Bell } from 'lucide-react';
import logo from '@/assets/logo.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36 md:pt-40 pb-20">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 mandala-pattern opacity-40" />
      
      {/* Decorative Blurs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-gold/10 blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-gold/8 blur-[120px]" />
      
      {/* Steam Effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 opacity-20">
        <div className="w-1 h-8 bg-gold/30 rounded-full animate-steam" style={{ animationDelay: '0s' }} />
        <div className="w-1 h-6 bg-gold/20 rounded-full animate-steam absolute left-4" style={{ animationDelay: '0.5s' }} />
        <div className="w-1 h-10 bg-gold/25 rounded-full animate-steam absolute -left-4" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-16 h-px bg-primary mx-auto mb-8"
        />

        {/* Premium Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-primary font-medium tracking-[0.4em] uppercase text-xs mb-8"
        >
          Premium Royal Chai
        </motion.p>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-8"
        >
          <img 
            src={logo} 
            alt="Chai Culture" 
            className="h-32 md:h-44 w-auto mx-auto gold-glow"
          />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl font-semibold text-foreground mb-4 leading-tight"
        >
          Chai Culture
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-serif text-2xl sm:text-3xl text-primary italic mb-6"
        >
          Brew the Royal Tradition
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          A premium chai experience inspired by royal Indian heritage. 
          Crafted with warmth, served with tradition.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/shop"
            className="btn-primary inline-flex items-center gap-2 group"
          >
            Explore Collection
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="#notify"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Bell size={18} />
            Notify Me
          </a>
        </motion.div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="w-16 h-px bg-primary mx-auto mt-16"
        />
      </div>
    </section>
  );
};

export default Hero;
