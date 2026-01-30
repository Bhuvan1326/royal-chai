import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  index?: number;
  onQuickView?: (product: Product) => void;
}

const badgeStyles = {
  royal: 'bg-gradient-to-r from-primary to-accent text-primary-foreground',
  signature: 'bg-brown text-cream',
  limited: 'bg-primary/10 text-primary border border-primary/30',
};

const ProductCard = ({ product, index = 0, onQuickView }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="card-premium overflow-hidden group"
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-cream-dark">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.src = '/placeholder.svg';
          }}
        />
        
        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1.5 rounded-full text-xs font-medium ${badgeStyles[product.badgeType]}`}>
            {product.badge}
          </span>
        </div>

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-brown/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button 
            onClick={() => onQuickView?.(product)}
            className="flex items-center gap-2 px-5 py-2.5 bg-gold text-brown font-medium text-sm rounded-full
                     transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-gold-light"
          >
            <Eye size={16} />
            Quick View
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        {/* Tasting Notes */}
        <div className="flex flex-wrap gap-2 mb-3">
          {product.tastingNotes.map((note) => (
            <span key={note} className="text-xs text-muted-foreground">
              {note}
            </span>
          ))}
        </div>

        <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
          {product.shortDescription}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="font-serif text-2xl text-primary">${product.price}</span>
          <div className="relative group/btn">
            <button 
              disabled
              className="px-5 py-2.5 bg-muted text-muted-foreground rounded-xl text-sm font-medium
                       cursor-not-allowed opacity-60"
            >
              Add to Cart
            </button>
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-brown text-cream 
                          text-xs rounded-lg opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap">
              Available at Launch
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-brown" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
