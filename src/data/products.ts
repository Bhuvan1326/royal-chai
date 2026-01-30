export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  category: 'spiced' | 'floral' | 'energizing';
  badge: string;
  badgeType: 'royal' | 'signature' | 'limited';
  tastingNotes: string[];
  ingredients: string[];
  brewTime: string;
  servingSuggestions: string[];
  image: string;
}

export const products: Product[] = [
  {
    id: 'royal-cardamom-bloom',
    name: 'Royal Cardamom Bloom',
    shortDescription: 'A fragrant blend infused with green cardamom and royal warmth.',
    fullDescription: 'Experience the essence of royal Indian courts with our signature Cardamom Bloom. This exquisite blend combines premium Assam tea leaves with hand-selected green cardamom pods, creating a symphony of floral and aromatic notes that transport you to the grandeur of palatial traditions.',
    price: 48,
    category: 'floral',
    badge: 'Royal Edition',
    badgeType: 'royal',
    tastingNotes: ['Floral', 'Creamy', 'Aromatic'],
    ingredients: ['Premium Assam Tea', 'Green Cardamom Pods', 'Natural Spices', 'Rose Petals'],
    brewTime: '4–5 minutes',
    servingSuggestions: ['Best served with warm milk', 'A touch of honey', 'Pair with buttery biscuits'],
    image: '/products/cardamom-chai.jpg',
  },
  {
    id: 'masala-heritage-fusion',
    name: 'Masala Heritage Fusion',
    shortDescription: 'A bold masala mix inspired by timeless Indian kitchens and royalty.',
    fullDescription: 'Our Heritage Fusion pays homage to centuries of chai mastery passed down through generations. A bold, invigorating blend of classic spices including cinnamon, cloves, and ginger, perfectly balanced with robust tea leaves for an authentic masala chai experience.',
    price: 48,
    category: 'spiced',
    badge: 'Signature Blend',
    badgeType: 'signature',
    tastingNotes: ['Spiced', 'Bold', 'Warming'],
    ingredients: ['Darjeeling Tea', 'Ceylon Cinnamon', 'Whole Cloves', 'Star Anise', 'Black Pepper'],
    brewTime: '5–6 minutes',
    servingSuggestions: ['Perfect with full-cream milk', 'Add jaggery for sweetness', 'Enjoy with samosas'],
    image: '/products/masala-chai.jpg',
  },
  {
    id: 'zesty-ginger-elixir',
    name: 'Zesty Ginger Elixir',
    shortDescription: 'A vibrant ginger-forward chai crafted for a luxurious kick.',
    fullDescription: 'Awaken your senses with our Zesty Ginger Elixir. This energizing blend features hand-cut ginger root and premium tea leaves, creating a bright, invigorating cup that delivers a luxurious kick with every sip. Perfect for those who crave a bold, refreshing chai experience.',
    price: 48,
    category: 'energizing',
    badge: 'Limited Blend',
    badgeType: 'limited',
    tastingNotes: ['Zesty', 'Energizing', 'Bright'],
    ingredients: ['Premium Black Tea', 'Fresh Ginger Root', 'Lemongrass', 'Citrus Zest'],
    brewTime: '4–5 minutes',
    servingSuggestions: ['Excellent with oat milk', 'Add fresh lemon', 'Best enjoyed morning or afternoon'],
    image: '/products/ginger-chai.jpg',
  },
];

export const testimonials = [
  {
    id: 1,
    quote: "The Royal Cardamom Bloom transported me straight to my grandmother's kitchen in Jaipur. Absolutely divine.",
    author: "Priya M.",
    location: "Mumbai",
  },
  {
    id: 2,
    quote: "Finally, a chai that honors the true tradition. The Masala Heritage Fusion is everything I've been searching for.",
    author: "Rahul S.",
    location: "London",
  },
  {
    id: 3,
    quote: "The attention to quality is evident in every sip. This is luxury chai at its finest.",
    author: "Sarah K.",
    location: "New York",
  },
];

export const ritualSteps = [
  {
    id: 1,
    title: 'Handpicked Spices',
    description: 'Sourced from the finest estates across India, each spice is selected for its exceptional quality and aroma.',
    icon: 'leaf',
  },
  {
    id: 2,
    title: 'Slow Brewed Tradition',
    description: 'Our chai is crafted using time-honored methods, allowing flavors to develop naturally and fully.',
    icon: 'clock',
  },
  {
    id: 3,
    title: 'Served with Warmth',
    description: 'Every cup is a celebration of heritage, meant to be shared and savored with loved ones.',
    icon: 'heart',
  },
];

export const trustBadges = [
  {
    id: 1,
    title: 'Premium Ingredients',
    description: 'Only the finest quality',
    icon: 'sparkles',
  },
  {
    id: 2,
    title: 'Authentic Heritage Recipe',
    description: 'Centuries of tradition',
    icon: 'crown',
  },
  {
    id: 3,
    title: 'Small Batch Crafted',
    description: 'Artisanal excellence',
    icon: 'flame',
  },
];

export const faqs = [
  {
    question: 'When will the store launch?',
    answer: 'We are putting the finishing touches on our royal collection. Sign up for our newsletter to be the first to know when we launch and receive an exclusive early-bird discount.',
  },
  {
    question: 'Will you ship internationally?',
    answer: 'Yes! We will offer worldwide shipping to bring the royal chai experience to tea lovers across the globe. Shipping rates and times will vary by location.',
  },
  {
    question: 'Can I order in bulk / wholesale?',
    answer: 'Absolutely. We welcome wholesale inquiries from cafes, restaurants, hotels, and retailers. Please reach out to us at hello@chaiculture.com for bulk pricing and partnership opportunities.',
  },
  {
    question: 'What makes your chai different?',
    answer: 'Our chai blends are crafted using traditional recipes passed down through generations, using only premium single-origin spices and the finest tea leaves. Each batch is small-batch produced to ensure exceptional quality.',
  },
];
