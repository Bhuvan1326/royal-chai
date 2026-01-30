import { motion } from 'framer-motion';
import { Sparkles, Crown, Flame } from 'lucide-react';
import { trustBadges } from '@/data/products';

const iconMap = {
  sparkles: Sparkles,
  crown: Crown,
  flame: Flame,
};

const TrustBadges = () => {
  return (
    <section className="py-16 bg-cream border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {trustBadges.map((badge, index) => {
            const Icon = iconMap[badge.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center gap-4 text-center md:text-left"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-foreground mb-0.5">
                    {badge.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {badge.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
