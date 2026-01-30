import { motion } from 'framer-motion';
import { Leaf, Clock, Heart } from 'lucide-react';
import { ritualSteps } from '@/data/products';

const iconMap = {
  leaf: Leaf,
  clock: Clock,
  heart: Heart,
};

const RoyalRitual = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/5 blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gold/5 blur-[100px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4">
            Our Process
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-foreground mb-4">
            The Royal Chai Ritual
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Every cup of Chai Culture follows a time-honored tradition, 
            passed down through generations of chai masters.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ritualSteps.map((step, index) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center group"
              >
                {/* Step Number */}
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 rounded-full bg-cream border-2 border-primary/20 
                                flex items-center justify-center mx-auto
                                group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground
                                 text-sm font-medium flex items-center justify-center">
                    {step.id}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoyalRitual;
