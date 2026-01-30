import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import ComingSoonSignup from '@/components/ComingSoonSignup';
import RoyalRitual from '@/components/RoyalRitual';
import TrustBadges from '@/components/TrustBadges';
import Testimonials from '@/components/Testimonials';
import NewsletterFooter from '@/components/NewsletterFooter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AnnouncementBar />
      <main>
        <Hero />
        <TrustBadges />
        <FeaturedProducts />
        <RoyalRitual />
        <ComingSoonSignup />
        <Testimonials />
        <NewsletterFooter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
