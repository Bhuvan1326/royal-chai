import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const AnnouncementBar = () => {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed top-20 md:top-24 left-0 right-0 z-40 bg-gradient-gold"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center gap-3">
        <Sparkles size={16} className="text-primary-foreground animate-pulse" />
        <p className="text-sm font-medium text-primary-foreground text-center">
          Coming Soon — Our Royal Chai Collection Launches Soon!
        </p>
        <Sparkles size={16} className="text-primary-foreground animate-pulse" />
      </div>
    </motion.div>
  );
};

export default AnnouncementBar;
