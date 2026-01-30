import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import QuickViewModal from '@/components/QuickViewModal';
import { products, type Product } from '@/data/products';

type FilterCategory = 'all' | Product['category'];
type SortOption = 'featured' | 'price-asc' | 'price-desc';

const filters: { label: string; value: FilterCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Spiced', value: 'spiced' },
  { label: 'Floral', value: 'floral' },
  { label: 'Energizing', value: 'energizing' },
];

const sortOptions: { label: string; value: SortOption }[] = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
];

const Shop = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [showSort, setShowSort] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return 0;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4">
              Shop
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-4">
              The Royal Collection
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our exquisite range of premium chai blends, 
              each crafted to transport you to the royal courts of India.
            </p>
          </motion.div>

          {/* Filters & Sort */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-12"
          >
            {/* Filter Pills */}
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={18} className="text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => setActiveFilter(filter.value)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                      ${activeFilter === filter.value
                        ? 'bg-primary text-primary-foreground shadow-gold'
                        : 'bg-card text-muted-foreground hover:bg-muted hover:text-foreground border border-border'
                      }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowSort(!showSort)}
                className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium
                         bg-card text-foreground border border-border hover:bg-muted transition-colors"
              >
                Sort: {sortOptions.find(s => s.value === sortBy)?.label}
                <ChevronDown size={16} className={`transition-transform ${showSort ? 'rotate-180' : ''}`} />
              </button>
              
              {showSort && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 top-full mt-2 w-48 bg-card rounded-2xl shadow-card border border-border 
                           overflow-hidden z-20"
                >
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSortBy(option.value);
                        setShowSort(false);
                      }}
                      className={`w-full px-4 py-3 text-sm text-left transition-colors
                        ${sortBy === option.value 
                          ? 'bg-primary/10 text-primary' 
                          : 'text-foreground hover:bg-muted'
                        }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map((product, index) => (
              <div key={product.id} className="relative">
                <ProductCard 
                  product={product} 
                  index={index}
                  onQuickView={setSelectedProduct}
                />
                <Link 
                  to={`/product/${product.id}`}
                  className="absolute inset-0 z-10"
                  aria-label={`View ${product.name}`}
                />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {sortedProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No products found in this category.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />

      {/* Quick View Modal */}
      <QuickViewModal 
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default Shop;
