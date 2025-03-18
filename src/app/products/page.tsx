'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';
import { categories, products, getProductsByCategory, sortProducts } from '../data/products';
import Footer from '../components/Footer';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = getProductsByCategory(selectedCategory);
  const sortedProducts = sortProducts(filteredProducts, sortBy);

  return (
    <div className="min-h-screen bg-[#F5E6D3]">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="relative w-full h-full">
            <Image
              src="/images/AdobeStock_266244728.jpeg"
              alt="Traditional Indian spices and ingredients"
              fill
              className="absolute inset-0 w-full h-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
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
                <span className="text-white">100% Natural Farming</span>
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
              <p className="text-[#4A644A]">100% natural farming and regenerative agricultural practices</p>
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
            <option value="name">Name: A to Z</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProducts.map((product) => (
            <div key={product.id} className="group bg-white/90 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-72">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-[#2F4F2F]/10 flex items-center justify-center">
                    <span className="text-[#2F4F2F]/50 text-lg">Product Image Coming Soon</span>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <span className="bg-[#2F4F2F] text-white px-3 py-1 rounded-full text-sm">
                    {product.certification}
                  </span>
                </div>
                {product.moq && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#2F4F2F]/80 text-white px-3 py-1 rounded-full text-sm">
                      MOQ: {product.moq}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-serif text-[#2F4F2F] mb-2">{product.name}</h3>
                  <p className="text-[#4A644A] mb-2">{product.description}</p>
                  <p className="text-sm text-[#4A644A]">Weight: {product.weight}</p>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-medium text-[#2F4F2F]">${product.price.toFixed(2)}</span>
                  <button className="bg-[#2F4F2F] text-white px-6 py-2 rounded-lg hover:bg-[#1F3F1F] transition-colors duration-300">
                    Add to Cart
                  </button>
                </div>
                <div className="pt-4 border-t border-[#2F4F2F]/10">
                  <p className="text-sm text-[#4A644A] mb-2">Category: {product.category}</p>
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
                  <li>• Supporting 35,000+ farming families</li>
                  <li>• Preserving traditional farming methods</li>
                  <li>• Funding children's education</li>
                  <li>• Empowering women farmers</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-serif text-[#2F4F2F] mb-4">Environmental Impact</h3>
                <ul className="space-y-3 text-[#4A644A]">
                  <li>• Regenerative farming practices</li>
                  <li>• Water conservation initiatives</li>
                  <li>• Native seed preservation</li>
                  <li>• Sustainable packaging</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 