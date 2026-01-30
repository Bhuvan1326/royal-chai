import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ComingSoonSignup = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 800));
    
    toast({
      title: "You're on the royal list ✨",
      description: "Be the first to taste the royal tradition.",
    });
    
    setEmail('');
    setIsSubmitting(false);
  };

  // Countdown display (static for now)
  const countdown = { days: 14, hours: 8, minutes: 32, seconds: 15 };

  return (
    <section id="notify" className="py-20 bg-brown relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 mandala-pattern opacity-10" />
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-gold/10 blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-gold/10 blur-[100px]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-glass p-8 md:p-12 text-center border-gold/30"
        >
          <Sparkles className="w-10 h-10 text-gold mx-auto mb-6" />
          
          <h2 className="font-serif text-3xl md:text-4xl text-cream mb-3">
            Get Notified at Launch
          </h2>
          
          <p className="text-cream/70 mb-8 max-w-md mx-auto">
            Be the first to taste the royal tradition. 
            Sign up for exclusive early access and launch discounts.
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 md:gap-6 mb-10">
            {Object.entries(countdown).map(([label, value]) => (
              <div key={label} className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gold/10 border border-gold/20 
                              flex items-center justify-center mb-2">
                  <span className="font-serif text-2xl md:text-3xl text-gold">{value}</span>
                </div>
                <span className="text-cream/50 text-xs uppercase tracking-wider">{label}</span>
              </div>
            ))}
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-cream/10 border-2 border-gold/30 
                         text-cream placeholder:text-cream/50
                         focus:border-gold focus:ring-0 focus:outline-none transition-colors"
                required
              />
            </div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="btn-primary whitespace-nowrap disabled:opacity-70"
            >
              {isSubmitting ? 'Joining...' : 'Get Notified'}
            </button>
          </form>

          <p className="text-cream/40 text-sm mt-4">
            Be the first to taste the royal tradition.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ComingSoonSignup;
