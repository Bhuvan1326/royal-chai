import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Leaf, Crown, Sparkles } from 'lucide-react';
import logo from '@/assets/logo.jpg';

const values = [
  {
    icon: Leaf,
    title: 'Single-Origin Spices',
    description: 'Our spices are sourced directly from the finest estates across India, ensuring exceptional quality and authenticity in every blend.',
  },
  {
    icon: Crown,
    title: 'Crafted for Royalty',
    description: 'Our recipes draw inspiration from the royal kitchens of India, where chai was elevated to an art form worthy of emperors.',
  },
  {
    icon: Sparkles,
    title: 'Modern Elegance',
    description: 'While honoring tradition, we bring a contemporary refinement to our blends, perfect for the discerning modern palate.',
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20">
        {/* Hero Banner */}
        <section className="relative py-20 bg-brown overflow-hidden">
          <div className="absolute inset-0 mandala-pattern opacity-10" />
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-gold/10 blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-gold/10 blur-[100px]" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-4xl mx-auto px-4 text-center"
          >
            <p className="text-gold font-medium tracking-[0.3em] uppercase text-xs mb-4">
              Our Story
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-cream mb-6">
              A Tradition Brewed for Royalty
            </h1>
            <div className="w-20 h-0.5 bg-gold mx-auto" />
          </motion.div>
        </section>

        {/* Brand Story */}
        <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <img src={logo} alt="Chai Culture" className="h-24 w-auto mx-auto mb-8" />
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                <span className="font-serif text-2xl text-foreground italic">
                  Inspired by royal Indian heritage,
                </span>{' '}
                Chai Culture was born from a deep reverence for the art of chai-making 
                that has been perfected over centuries in the grand palaces and intimate 
                kitchens of India.
              </p>
              <p>
                Our journey began with a simple yet profound mission: to bring the authentic 
                taste of premium Indian chai to connoisseurs around the world. Each blend in 
                our collection tells a story of tradition, craftsmanship, and the timeless 
                elegance that defines royal Indian hospitality.
              </p>
              <p>
                We believe that chai is more than just a beverage—it's a moment of connection, 
                a ritual of warmth, and an experience that transcends the ordinary. That's why 
                we're committed to using only the finest ingredients, sourced directly from 
                the most prestigious tea estates and spice gardens of India.
              </p>
              <p>
                <span className="font-serif text-xl text-foreground italic">
                  Crafted with warmth and authenticity.
                </span>
              </p>
            </div>
          </motion.div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-cream relative">
          <div className="absolute inset-0 heritage-pattern opacity-40" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4">
                Our Promise
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-4">
                Why Chai Culture
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-premium p-8 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Note */}
        <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-glass p-8 md:p-12 border-gold/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 mandala-pattern opacity-10" />
            <div className="relative z-10">
              <p className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4">
                From the Founder
              </p>
              <blockquote className="font-serif text-xl md:text-2xl text-foreground italic leading-relaxed mb-6">
                "Every cup of chai tells a story. At Chai Culture, we're not just crafting 
                beverages—we're preserving a legacy, one brew at a time. Our mission is to 
                share the warmth and richness of Indian chai culture with the world."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-serif text-xl text-primary">J</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Jay Trivedi</p>
                  <p className="text-muted-foreground text-sm">Founder, Chai Culture</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Quote Section */}
        <section className="py-16 bg-brown relative overflow-hidden">
          <div className="absolute inset-0 mandala-pattern opacity-10" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-3xl mx-auto px-4 text-center"
          >
            <p className="font-serif text-2xl sm:text-3xl text-cream italic leading-relaxed">
              "In every cup of chai, there is a story of warmth, tradition, 
              and the timeless elegance of royal India."
            </p>
            <div className="mt-6 text-gold font-medium">
              — The Chai Culture Philosophy
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
