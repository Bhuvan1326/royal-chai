import { useState } from 'react';
import { motion } from 'framer-motion';
import { products } from '@/data/products';
import ProductCard from './ProductCard';
import QuickViewModal from './QuickViewModal';
import type { Product } from '@/data/products';

const FeaturedProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section className="py-24 bg-cream relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 heritage-pattern opacity-40" />
      
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
            The Collection
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-foreground mb-4">
            Our Royal Blends
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each blend is carefully crafted with premium ingredients, 
            honoring centuries-old traditions of Indian chai mastery.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              index={index}
              onQuickView={setSelectedProduct}
            />
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal 
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};

export default FeaturedProducts;
