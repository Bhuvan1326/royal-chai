import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Bell, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { products } from '@/data/products';
import { useToast } from '@/hooks/use-toast';

const badgeStyles = {
  royal: 'bg-gradient-to-r from-primary to-accent text-primary-foreground',
  signature: 'bg-brown text-cream',
  limited: 'bg-primary/10 text-primary border border-primary/30',
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [showNotifyForm, setShowNotifyForm] = useState(false);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-32 pb-20 text-center">
          <h1 className="font-serif text-3xl text-foreground mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft size={18} />
            Back to Shop
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "You're on the royal list ✨",
        description: `We'll notify you at ${email} when ${product.name} launches.`,
      });
      setEmail('');
      setShowNotifyForm(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link 
              to="/shop" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Collection
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden bg-cream-dark shadow-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Badge */}
              <div className="absolute top-6 left-6">
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${badgeStyles[product.badgeType]}`}>
                  {product.badge}
                </span>
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              {/* Tasting Notes */}
              <div className="flex flex-wrap gap-2 mb-4">
                {product.tastingNotes.map((note) => (
                  <span key={note} className="badge-royal">
                    {note}
                  </span>
                ))}
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-4">
                {product.name}
              </h1>

              <p className="font-serif text-4xl text-primary mb-6">
                ${product.price}
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                {product.fullDescription}
              </p>

              {/* Brew Time */}
              <div className="flex items-center gap-3 mb-8 p-4 bg-cream rounded-2xl">
                <Clock className="w-6 h-6 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Brew Time</p>
                  <p className="font-medium text-foreground">{product.brewTime}</p>
                </div>
              </div>

              {/* Ingredients */}
              <div className="mb-8">
                <h3 className="font-serif text-xl text-foreground mb-4">Ingredients</h3>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ingredient) => (
                    <span 
                      key={ingredient}
                      className="px-4 py-2 bg-card border border-border rounded-xl text-sm text-foreground"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>

              {/* Serving Suggestions */}
              <div className="mb-8">
                <h3 className="font-serif text-xl text-foreground mb-4">Best Served With</h3>
                <ul className="space-y-2">
                  {product.servingSuggestions.map((suggestion) => (
                    <li key={suggestion} className="flex items-center gap-3 text-muted-foreground">
                      <Check size={16} className="text-primary" />
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="mt-auto space-y-4">
                <div className="relative group">
                  <button 
                    disabled
                    className="w-full py-4 bg-muted text-muted-foreground rounded-2xl font-medium
                             cursor-not-allowed opacity-60 text-lg"
                  >
                    Add to Cart
                  </button>
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 bg-brown text-cream 
                                text-sm rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Available at Launch
                  </div>
                </div>

                {!showNotifyForm ? (
                  <button 
                    onClick={() => setShowNotifyForm(true)}
                    className="w-full btn-secondary flex items-center justify-center gap-2"
                  >
                    <Bell size={18} />
                    Notify Me When Available
                  </button>
                ) : (
                  <form onSubmit={handleNotify} className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 input-premium"
                      required
                      autoFocus
                    />
                    <button type="submit" className="btn-primary">
                      Notify Me
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
