'use client';

import Image from 'next/image';
import { useState } from 'react';

const categories = [
  'All Products',
  'Heritage Grains',
  'Ayurvedic Teas',
  'Sacred Spices',
  'Wellness Kits',
  'Artisan Crafts'
];

const products = [
  {
    id: 1,
    name: 'Sona Masoori Rice',
    category: 'Heritage Grains',
    price: 14.99,
    image: '/images/organic-rice.jpeg',
    description: 'Premium organic Sona Masoori rice sourced from traditional farmers, rich in nutrients and authentic flavor.',
    weight: '1 kg',
    farmer: 'Traditional Farmers Collective',
    origin: 'Tamil Nadu',
    certification: 'Organic Certified',
    impact: 'Supports sustainable farming practices'
  },
  {
    id: 2,
    name: 'Basmati Rice',
    category: 'Heritage Grains',
    price: 19.99,
    image: '/images/ayurvedic-tea.jpeg',
    description: 'Premium quality Basmati rice with traditional aroma and authentic taste.',
    weight: '1 kg',
    farmer: 'Himalayan Farmers Collective',
    origin: 'Uttarakhand',
    certification: 'Fair Trade & Organic',
    impact: 'Preserves traditional farming methods'
  },
  {
    id: 3,
    name: 'Basmati Rice Gold',
    category: 'Heritage Grains',
    price: 29.99,
    image: '/images/organic-spices.jpeg',
    description: 'Premium golden Basmati rice, aged for perfect texture and aroma.',
    weight: '1 kg',
    farmer: 'Traditional Rice Artisans',
    origin: 'North India',
    certification: 'Organic & Sustainable',
    impact: 'Supports traditional rice farmers'
  },
  {
    id: 4,
    name: 'Aged Crop Sona Masoori',
    category: 'Heritage Grains',
    price: 24.99,
    image: '/images/organic-ghee.jpeg',
    description: 'Aged crop Sona Masoori rice, carefully preserved for enhanced taste and texture.',
    weight: '1 kg',
    farmer: 'Traditional Rice Craftsmen',
    origin: 'South India',
    certification: 'Organic Certified',
    impact: 'Supports indigenous farming practices'
  }
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = products.filter(product => 
    selectedCategory === 'All Products' || product.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-[#F5E6D3]">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-[#2F4F2F]">
          <video
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            poster="/images/AdobeStock_273577993.jpeg"
            className="w-full h-full object-cover opacity-50"
            onError={(e) => {
              console.error('Video error:', e);
              const video = e.target as HTMLVideoElement;
              console.log('Video error code:', video.error?.code);
              console.log('Video error message:', video.error?.message);
            }}
          >
            <source 
              src={`/.netlify/blobs/videos/AdobeStock_688777865.mp4`}
              type="video/mp4"
            />
            <source 
              src={`/.netlify/blobs/videos/AdobeStock_679597740.mov`}
              type="video/quicktime"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-6xl font-serif text-white mb-6 drop-shadow-lg">
              Sacred Foods & Artisan Crafts
            </h1>
            <p className="text-xl text-white/90 mb-8 drop-shadow-md">
              Every purchase honors our farmers, artisans, and Mother Earth
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-[#2F4F2F]/40 backdrop-blur-sm px-6 py-3 rounded-lg">
                <span className="text-white">100% Organic</span>
              </div>
              <div className="bg-[#2F4F2F]/40 backdrop-blur-sm px-6 py-3 rounded-lg">
                <span className="text-white">Fair Trade</span>
              </div>
              <div className="bg-[#2F4F2F]/40 backdrop-blur-sm px-6 py-3 rounded-lg">
                <span className="text-white">Sustainable</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shop Section */}
      <div className="container mx-auto px-4 py-16">
        {/* Our Promise Section */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-serif text-[#2F4F2F] mb-6">Our Sacred Promise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/80 p-6 rounded-xl">
              <h3 className="text-xl font-serif text-[#2F4F2F] mb-3">Fair Compensation</h3>
              <p className="text-[#4A644A]">Every farmer and artisan receives above-market rates for their craft</p>
            </div>
            <div className="bg-white/80 p-6 rounded-xl">
              <h3 className="text-xl font-serif text-[#2F4F2F] mb-3">Sustainable Practices</h3>
              <p className="text-[#4A644A]">100% organic, regenerative farming and eco-friendly packaging</p>
            </div>
            <div className="bg-white/80 p-6 rounded-xl">
              <h3 className="text-xl font-serif text-[#2F4F2F] mb-3">Traditional Wisdom</h3>
              <p className="text-[#4A644A]">Preserving ancient knowledge and cultural heritage</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full ${
                  selectedCategory === category
                    ? 'bg-[#2F4F2F] text-white'
                    : 'bg-white/80 text-[#2F4F2F] hover:bg-[#2F4F2F] hover:text-white'
                } transition-colors duration-300`}
              >
                {category}
              </button>
            ))}
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 rounded-lg bg-white/80 text-[#2F4F2F] focus:outline-none focus:ring-2 focus:ring-[#2F4F2F]"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-white/90 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-72">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-[#2F4F2F] text-white px-3 py-1 rounded-full text-sm">
                    {product.certification}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-serif text-[#2F4F2F] mb-2">{product.name}</h3>
                  <p className="text-[#4A644A] mb-2">{product.description}</p>
                  <p className="text-sm text-[#4A644A]">Origin: {product.origin}</p>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-medium text-[#2F4F2F]">${product.price}</span>
                  <button className="bg-[#2F4F2F] text-white px-6 py-2 rounded-lg hover:bg-[#1F3F1F] transition-colors duration-300">
                    Add to Cart
                  </button>
                </div>
                <div className="pt-4 border-t border-[#2F4F2F]/10">
                  <p className="text-sm text-[#4A644A] mb-2">Sourced from: {product.farmer}</p>
                  <p className="text-sm text-[#4A644A] italic">{product.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Section */}
        <div className="mt-20 bg-white/80 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-[#2F4F2F] mb-8 text-center">
              Your Purchase Makes a Difference
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-serif text-[#2F4F2F] mb-4">Community Impact</h3>
                <ul className="space-y-3 text-[#4A644A]">
                  <li>• Supporting 200+ farming families</li>
                  <li>• Preserving traditional farming methods</li>
                  <li>• Funding children's education</li>
                  <li>• Empowering women farmers</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-serif text-[#2F4F2F] mb-4">Environmental Impact</h3>
                <ul className="space-y-3 text-[#4A644A]">
                  <li>• 100% plastic-free packaging</li>
                  <li>• Regenerative farming practices</li>
                  <li>• Water conservation initiatives</li>
                  <li>• Native seed preservation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 