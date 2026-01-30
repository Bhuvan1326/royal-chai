import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import logo from '@/assets/logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-brown text-cream relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 mandala-pattern opacity-10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src={logo} alt="Chai Culture" className="h-16 w-auto mb-4 brightness-110" />
            <p className="text-cream/70 text-sm max-w-sm leading-relaxed">
              A premium chai experience inspired by royal Indian heritage. 
              Crafted with warmth, served with tradition.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-gold mb-5">Explore</h4>
            <nav className="space-y-3">
              <Link to="/shop" className="block text-cream/70 hover:text-gold transition-colors text-sm">
                Shop Collection
              </Link>
              <Link to="/about" className="block text-cream/70 hover:text-gold transition-colors text-sm">
                Our Story
              </Link>
              <Link to="/contact" className="block text-cream/70 hover:text-gold transition-colors text-sm">
                Get in Touch
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif text-lg text-gold mb-5">Connect</h4>
            <div className="flex items-center gap-3">
              <a 
                href="#" 
                className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center
                         text-cream/70 hover:text-gold hover:border-gold hover:bg-gold/10 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center
                         text-cream/70 hover:text-gold hover:border-gold hover:bg-gold/10 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center
                         text-cream/70 hover:text-gold hover:border-gold hover:bg-gold/10 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
            <p className="mt-4 text-cream/50 text-sm">hello@chaiculture.com</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gold/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/50 text-sm">
            © {new Date().getFullYear()} Chai Culture — Brew the Royal Tradition
          </p>
          <p className="text-cream/40 text-xs">
            Crafted with ♥ in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
