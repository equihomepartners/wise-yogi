export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image?: string;
  description: string;
  weight: string;
  certification: string;
  moq?: string;
};

export const categories = [
  'All Products',
  'Traditional Rice',
  'Commercial Rice',
  'Wheat and Cereals',
  'Dals and Pulses',
  'Flours',
  'Processed Foods',
  'Millets',
  'Dry Fruits',
  'Spices',
  'Herbs',
  'Sweeteners',
  'Oils and Ghee',
  'Natural Salts',
  'Superfoods',
  'Masalas',
  'Ready to Eat',
  'Jaggery and Sugar'
];

const generatePrice = (id: string) => {
  // Generate a consistent price based on the product ID
  const numericPart = parseInt(id.replace(/[^\d]/g, ''), 10);
  return (numericPart % 50 + 10).toFixed(2);
};

export const products: Product[] = [
  // Traditional Rice
  {
    id: 'RAJATR01',
    name: 'Natural Farming Sona Masoori Rice - Unpolished',
    category: 'Traditional Rice',
    price: parseFloat(generatePrice('RAJATR01')),
    image: '/images/organic-rice.jpeg',
    description: 'Premium unpolished Sona Masoori rice cultivated using natural farming methods.',
    weight: '25kg',
    certification: 'Natural Farming Certified',
    moq: '100kg'
  },
  {
    id: 'RAJATR02',
    name: 'Natural Farming Sona Masoori Rice - Semipolished',
    category: 'Traditional Rice',
    price: parseFloat(generatePrice('RAJATR02')),
    image: '/images/organic-ghee.jpeg',
    description: 'Semi-polished Sona Masoori rice, perfect balance of taste and nutrition.',
    weight: '25kg',
    certification: 'Natural Farming Certified',
    moq: '100kg'
  },
  {
    id: 'RAJATR03',
    name: 'Natural Farming Ambe Mohar Rice (Hand Pounded)',
    category: 'Traditional Rice',
    price: parseFloat(generatePrice('RAJATR03')),
    description: 'Traditional hand-pounded Ambe Mohar rice with authentic taste.',
    weight: '25kg',
    certification: 'Natural Farming Certified',
    moq: '100kg'
  },

  // Commercial Rice
  {
    id: 'RAJACR01',
    name: 'Natural Farming Basmati Rice (White)',
    category: 'Commercial Rice',
    price: parseFloat(generatePrice('RAJACR01')),
    image: '/images/organic-spices.jpeg',
    description: 'Premium white Basmati rice grown with natural farming practices.',
    weight: '25kg',
    certification: 'Natural Farming Certified',
    moq: '100kg'
  },
  {
    id: 'RAJACR02',
    name: 'Natural Farming Basmati Rice (Brown)',
    category: 'Commercial Rice',
    price: parseFloat(generatePrice('RAJACR02')),
    image: '/images/ayurvedic-tea.jpeg',
    description: 'Nutritious brown Basmati rice with natural goodness.',
    weight: '25kg',
    certification: 'Natural Farming Certified',
    moq: '100kg'
  },

  // Wheat and Cereals
  {
    id: 'RAJAWC01',
    name: 'Natural Farming Wheat (Lokwan)',
    category: 'Wheat and Cereals',
    price: parseFloat(generatePrice('RAJAWC01')),
    description: 'Premium Lokwan wheat cultivated using natural farming methods.',
    weight: '25kg',
    certification: 'Natural Farming Certified',
    moq: '100kg'
  },
  {
    id: 'RAJAWC02',
    name: 'Natural Farming Wheat (Sharbati)',
    category: 'Wheat and Cereals',
    price: parseFloat(generatePrice('RAJAWC02')),
    description: 'Premium Sharbati wheat for perfect chapatis.',
    weight: '25kg',
    certification: 'Natural Farming Certified',
    moq: '100kg'
  },

  // Dals and Pulses
  {
    id: 'RAJADP01',
    name: 'Natural Farming Toor Dal',
    category: 'Dals and Pulses',
    price: parseFloat(generatePrice('RAJADP01')),
    description: 'Premium quality Toor Dal grown naturally.',
    weight: '25kg',
    certification: 'Natural Farming Certified',
    moq: '100kg'
  },
  {
    id: 'RAJADP02',
    name: 'Natural Farming Moong Dal',
    category: 'Dals and Pulses',
    price: parseFloat(generatePrice('RAJADP02')),
    description: 'Nutritious Moong Dal for everyday cooking.',
    weight: '25kg',
    certification: 'Natural Farming Certified',
    moq: '100kg'
  },

  // Flours
  {
    id: 'RAJAF01',
    name: 'Natural Farming Whole Wheat Flour',
    category: 'Flours',
    price: parseFloat(generatePrice('RAJAF01')),
    description: 'Stone-ground whole wheat flour.',
    weight: '25kg',
    certification: 'Natural Farming Certified',
    moq: '100kg'
  },
  {
    id: 'RAJAF02',
    name: 'Natural Farming Multi-Grain Flour',
    category: 'Flours',
    price: parseFloat(generatePrice('RAJAF02')),
    description: 'Blend of seven nutritious grains.',
    weight: '25kg',
    certification: 'Natural Farming Certified',
    moq: '100kg'
  },

  // Processed Foods
  {
    id: 'RAJAPF01',
    name: 'Ayurvedic Wellness Tea',
    category: 'Processed Foods',
    price: parseFloat(generatePrice('RAJAPF01')),
    description: 'Blend of traditional herbs for wellness.',
    weight: '250g',
    certification: 'Natural Farming Certified',
    moq: '25kg'
  },

  // Spices
  {
    id: 'RAJAS01',
    name: 'Sacred Spices Collection',
    category: 'Spices',
    price: parseFloat(generatePrice('RAJAS01')),
    description: 'Premium collection of traditional Indian spices.',
    weight: '500g',
    certification: 'Natural Farming Certified',
    moq: '50kg'
  },

  // Oils and Ghee
  {
    id: 'RAJAOG01',
    name: 'Traditional Pure Ghee',
    category: 'Oils and Ghee',
    price: parseFloat(generatePrice('RAJAOG01')),
    description: 'Pure cow ghee made using traditional methods.',
    weight: '1L',
    certification: 'Natural Farming Certified',
    moq: '100L'
  },

  // Millets
  {
    id: 'RAJAM01',
    name: 'Natural Farming Foxtail Millet',
    category: 'Millets',
    price: parseFloat(generatePrice('RAJAM01')),
    description: 'Nutritious foxtail millet grown naturally.',
    weight: '25kg',
    certification: 'Natural Farming Certified',
    moq: '100kg'
  },
  {
    id: 'RAJAM02',
    name: 'Natural Farming Pearl Millet',
    category: 'Millets',
    price: parseFloat(generatePrice('RAJAM02')),
    description: 'Premium quality pearl millet.',
    weight: '25kg',
    certification: 'Natural Farming Certified',
    moq: '100kg'
  },

  // Dry Fruits
  {
    id: 'RAJADF01',
    name: 'Premium Cashews',
    category: 'Dry Fruits',
    price: parseFloat(generatePrice('RAJADF01')),
    description: 'Premium grade whole cashews.',
    weight: '10kg',
    certification: 'Natural Farming Certified',
    moq: '50kg'
  },

  // Herbs
  {
    id: 'RAJAH01',
    name: 'Holy Basil (Tulsi)',
    category: 'Herbs',
    price: parseFloat(generatePrice('RAJAH01')),
    description: 'Sacred holy basil leaves.',
    weight: '500g',
    certification: 'Natural Farming Certified',
    moq: '25kg'
  },

  // Sweeteners
  {
    id: 'RAJAS01',
    name: 'Natural Palm Sugar',
    category: 'Sweeteners',
    price: parseFloat(generatePrice('RAJAS01')),
    description: 'Traditional palm sugar.',
    weight: '25kg',
    certification: 'Natural Farming Certified',
    moq: '100kg'
  },

  // Natural Salts
  {
    id: 'RAJANS01',
    name: 'Himalayan Pink Salt',
    category: 'Natural Salts',
    price: parseFloat(generatePrice('RAJANS01')),
    description: 'Pure Himalayan pink salt.',
    weight: '25kg',
    certification: 'Natural Farming Certified',
    moq: '100kg'
  },

  // Superfoods
  {
    id: 'RAJASF01',
    name: 'Moringa Powder',
    category: 'Superfoods',
    price: parseFloat(generatePrice('RAJASF01')),
    description: 'Pure moringa leaf powder.',
    weight: '1kg',
    certification: 'Natural Farming Certified',
    moq: '25kg'
  },

  // Masalas
  {
    id: 'RAJAMA01',
    name: 'Garam Masala',
    category: 'Masalas',
    price: parseFloat(generatePrice('RAJAMA01')),
    description: 'Traditional blend of spices.',
    weight: '1kg',
    certification: 'Natural Farming Certified',
    moq: '25kg'
  },

  // Ready to Eat
  {
    id: 'RAJARTE01',
    name: 'Instant Khichdi Mix',
    category: 'Ready to Eat',
    price: parseFloat(generatePrice('RAJARTE01')),
    description: 'Traditional instant khichdi mix.',
    weight: '500g',
    certification: 'Natural Farming Certified',
    moq: '50kg'
  },

  // Jaggery and Sugar
  {
    id: 'RAJAJS01',
    name: 'Natural Jaggery Powder',
    category: 'Jaggery and Sugar',
    price: parseFloat(generatePrice('RAJAJS01')),
    description: 'Pure natural jaggery powder.',
    weight: '25kg',
    certification: 'Natural Farming Certified',
    moq: '100kg'
  }
];

// Helper function to sort products with images first
const sortProductsWithImagesFirst = (products: Product[]) => {
  return [...products].sort((a, b) => {
    if (a.image && !b.image) return -1;
    if (!a.image && b.image) return 1;
    return 0;
  });
};

// Helper function to get products by category
export const getProductsByCategory = (category: string) => {
  const filteredProducts = category === 'All Products' 
    ? products 
    : products.filter(product => product.category === category);
  return sortProductsWithImagesFirst(filteredProducts);
};

// Helper function to sort products
export const sortProducts = (products: Product[], sortBy: string) => {
  let sortedProducts = sortProductsWithImagesFirst(products);
  
  switch (sortBy) {
    case 'price-low':
      return sortedProducts.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sortedProducts.sort((a, b) => b.price - a.price);
    case 'name':
      return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    default:
      return sortedProducts;
  }
}; 