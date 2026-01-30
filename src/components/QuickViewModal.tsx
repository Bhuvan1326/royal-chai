import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Bell } from 'lucide-react';
import { useState } from 'react';
import type { Product } from '@/data/products';
import { useToast } from '@/hooks/use-toast';

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const badgeStyles = {
  royal: 'bg-gradient-to-r from-primary to-accent text-primary-foreground',
  signature: 'bg-brown text-cream',
  limited: 'bg-primary/10 text-primary border border-primary/30',
};

const QuickViewModal = ({ product, isOpen, onClose }: QuickViewModalProps) => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  if (!product) return null;

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "You're on the royal list ✨",
        description: `We'll notify you at ${email} when ${product.name} launches.`,
      });
      setEmail('');
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brown/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 
                       md:w-full md:max-w-3xl md:max-h-[85vh] overflow-auto
                       bg-background rounded-3xl shadow-2xl z-50"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-muted 
                       transition-colors text-foreground"
            >
              <X size={20} />
            </button>

            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="aspect-square bg-cream-dark relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1.5 rounded-full text-xs font-medium ${badgeStyles[product.badgeType]}`}>
                    {product.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col">
                <div className="flex-1">
                  {/* Tasting Notes */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {product.tastingNotes.map((note) => (
                      <span key={note} className="badge-royal text-xs">
                        {note}
                      </span>
                    ))}
                  </div>

                  <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                    {product.name}
                  </h2>
                  
                  <p className="font-serif text-3xl text-primary mb-4">
                    ${product.price}
                  </p>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {product.shortDescription}
                  </p>

                  {/* Brew Time */}
                  <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
                    <Clock size={16} className="text-primary" />
                    <span>Brew time: {product.brewTime}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3 pt-4 border-t border-border">
                  <div className="relative group">
                    <button 
                      disabled
                      className="w-full py-3.5 bg-muted text-muted-foreground rounded-2xl font-medium
                               cursor-not-allowed opacity-60"
                    >
                      Add to Cart
                    </button>
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-brown text-cream 
                                  text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      Available at Launch
                    </div>
                  </div>

                  <form onSubmit={handleNotify} className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 input-premium py-3"
                      required
                    />
                    <button 
                      type="submit"
                      className="btn-primary flex items-center gap-2 px-5"
                    >
                      <Bell size={16} />
                      Notify Me
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default QuickViewModal;
