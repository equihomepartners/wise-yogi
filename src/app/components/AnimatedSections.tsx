'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';

const AnimatedSections = () => {
  const [showFarmerForm, setShowFarmerForm] = useState(false);
  const [email, setEmail] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  const handlePartnerClick = () => {
    setShowFarmerForm(true);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Send email to srilu11@gmail.com
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, adminEmail: 'srilu11@gmail.com' }),
      });

      // Show thank you message
      setShowThankYou(true);
      setEmail('');

      // Hide thank you message after 5 seconds
      setTimeout(() => {
        setShowThankYou(false);
      }, 5000);
    } catch (error) {
      console.error('Error subscribing:', error);
    }
  };

  return (
    <>
      {/* Farmer Registration Form Dialog */}
      {showFarmerForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-serif text-[#2F4F2F]">Farmer Registration</h3>
              <button 
                onClick={() => setShowFarmerForm(false)}
                className="text-[#4A644A] hover:text-[#2F4F2F] transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#4A644A] mb-1">Name</label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg border border-[#2F4F2F]/20 focus:outline-none focus:ring-2 focus:ring-[#2F4F2F]" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#4A644A] mb-1">Contact Number</label>
                  <input type="tel" className="w-full px-4 py-2 rounded-lg border border-[#2F4F2F]/20 focus:outline-none focus:ring-2 focus:ring-[#2F4F2F]" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#4A644A] mb-1">Email Address</label>
                  <input type="email" className="w-full px-4 py-2 rounded-lg border border-[#2F4F2F]/20 focus:outline-none focus:ring-2 focus:ring-[#2F4F2F]" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#4A644A] mb-1">Farm Size (Acres)</label>
                  <input type="number" className="w-full px-4 py-2 rounded-lg border border-[#2F4F2F]/20 focus:outline-none focus:ring-2 focus:ring-[#2F4F2F]" required />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-[#4A644A] mb-1">Farm Location (Address)</label>
                  <textarea className="w-full px-4 py-2 rounded-lg border border-[#2F4F2F]/20 focus:outline-none focus:ring-2 focus:ring-[#2F4F2F] h-24" required></textarea>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-[#4A644A] mb-1">Crop Types</label>
                  <textarea className="w-full px-4 py-2 rounded-lg border border-[#2F4F2F]/20 focus:outline-none focus:ring-2 focus:ring-[#2F4F2F]" placeholder="List the types of crops you grow" required></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#4A644A] mb-1">Expected Yield (kg/year)</label>
                  <input type="number" className="w-full px-4 py-2 rounded-lg border border-[#2F4F2F]/20 focus:outline-none focus:ring-2 focus:ring-[#2F4F2F]" required />
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded text-[#2F4F2F] focus:ring-[#2F4F2F]" />
                      <span className="text-sm text-[#4A644A]">Sustainable Practices</span>
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded text-[#2F4F2F] focus:ring-[#2F4F2F]" />
                      <span className="text-sm text-[#4A644A]">Organic Certification</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <button type="submit" className="w-full bg-[#2F4F2F] text-white px-8 py-4 rounded-lg hover:bg-[#1F3F1F] transition-colors">
                  Submit Registration
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative h-screen w-full">
        <div className="absolute inset-0 w-full h-full">
          <div className="relative w-full h-full">
            <CldVideoPlayer
              src="AdobeStock_679597740_compressed_99mb_hcljnt"
              width="1920"
              height="1080"
              autoplay={true}
              loop={true}
              muted={true}
              className="absolute inset-0 w-full h-full object-cover"
              controls={false}
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-white text-6xl font-serif font-bold mb-8 drop-shadow-lg">
              Honoring the Hands<br />That Feed Us
            </h1>
            <p className="text-white text-xl font-medium mb-12 drop-shadow-md">
              Join us in celebrating mindful living, sustainable farming, and the sacred connection between nourishment and gratitude.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/products" className="bg-white text-[#2F4F2F] font-bold px-8 py-4 rounded-lg hover:bg-opacity-90 transition-colors duration-300">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <section className="relative min-h-screen bg-[#F5E6D3] flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              {/* Image Side */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
                <Image
                  src="/images/AdobeStock_1244503976.jpeg"
                  alt="Indian farmer working in traditional organic farm"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/10"></div>
              </div>
              
              {/* Content Side */}
              <div className="space-y-8">
                <h2 className="text-5xl font-serif text-[#2F4F2F]">
                  A Movement,<br />Not Just a Brand
                </h2>
                <p className="text-xl text-[#4A644A] leading-relaxed">
                  Wise Yogi is a call to gratitude—a way to honor the hands that grow, create, and nourish us. We are more than a brand; we are a mindful movement reconnecting people with food, culture, and sustainability.
                </p>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-[#2F4F2F] flex items-center justify-center">
                      <span className="text-2xl text-white">🌱</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-serif text-[#2F4F2F]">Sustainable Future</h4>
                      <p className="text-[#4A644A]">Building a better tomorrow through mindful practices</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-[#2F4F2F] flex items-center justify-center">
                      <span className="text-2xl text-white">🤝</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-serif text-[#2F4F2F]">Community First</h4>
                      <p className="text-[#4A644A]">Supporting local farmers and artisans</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-serif text-[#2F4F2F] mb-4">35,000</h3>
                <p className="text-[#4A644A]">Farmers and Their Families</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-serif text-[#2F4F2F] mb-4">100%</h3>
                <p className="text-[#4A644A]">Fair Trade</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-serif text-[#2F4F2F] mb-4">50+</h3>
                <p className="text-[#4A644A]">Traditional Products</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Wise Yogi Difference Section */}
      <section className="relative py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif text-center text-[#2F4F2F] mb-16">
              Why Wise Yogi?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="space-y-4">
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <Image
                    src="/images/AdobeStock_337352433.jpeg"
                    alt="Traditional Indian regenerative farming practices"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="text-2xl font-serif text-[#2F4F2F]">Beyond Organic</h3>
                <p className="text-[#4A644A]">We embrace regenerative farming and sustainable sourcing practices that go beyond organic certification.</p>
              </div>

              {/* Feature 2 */}
              <div className="space-y-4">
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <Image
                    src="/images/AdobeStock_495040641.jpeg"
                    alt="Traditional Indian eco-friendly practices"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="text-2xl font-serif text-[#2F4F2F]">Eco-Friendly Practices</h3>
                <p className="text-[#4A644A]">From biodegradable packaging to ethical sourcing, sustainability is at our core.</p>
              </div>

              {/* Feature 3 */}
              <div className="space-y-4">
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <Image
                    src="/images/AdobeStock_844249898.jpeg"
                    alt="Local Indian farmers and artisans"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="text-2xl font-serif text-[#2F4F2F]">Mindful Collaboration</h3>
                <p className="text-[#4A644A]">Supporting small-scale farmers and local artisans to preserve traditional wisdom.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="relative py-40 min-h-[80vh] bg-[#F5E6D3] flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif text-center text-[#2F4F2F] mb-16">
              Mindful, Sustainable, and Rooted in Tradition
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Value Cards */}
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-serif text-[#2F4F2F] mb-4">Mindful Living</h3>
                <p className="text-[#4A644A]">Embracing conscious choices in every aspect of our journey</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-serif text-[#2F4F2F] mb-4">Sacred Connection</h3>
                <p className="text-[#4A644A]">Honoring the divine relationship between farmer and food</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-serif text-[#2F4F2F] mb-4">Sustainable Future</h3>
                <p className="text-[#4A644A]">Creating positive impact for generations to come</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="relative py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif text-center text-[#2F4F2F] mb-16">
              A Deeper Connection to Your Food
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="space-y-4">
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <Image
                    src="/images/AdobeStock_179213490.jpeg"
                    alt="Traditional Indian seed planting"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <h3 className="text-xl font-serif text-[#2F4F2F]">Planting the Seeds</h3>
                <p className="text-sm text-[#4A644A]">Sustainable farming practices that respect the earth.</p>
              </div>

              {/* Step 2 */}
              <div className="space-y-4">
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <Image
                    src="/images/AdobeStock_943886334.jpeg"
                    alt="Traditional Indian harvesting methods"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <h3 className="text-xl font-serif text-[#2F4F2F]">Harvesting with Care</h3>
                <p className="text-sm text-[#4A644A]">Respecting the land and labor that nurtures our food.</p>
              </div>

              {/* Step 3 */}
              <div className="space-y-4">
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <Image
                    src="/images/AdobeStock_1136885898.jpeg"
                    alt="Traditional Indian grain processing"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <h3 className="text-xl font-serif text-[#2F4F2F]">Processing with Wisdom</h3>
                <p className="text-sm text-[#4A644A]">Traditional methods that preserve nutrients and flavor.</p>
              </div>

              {/* Step 4 */}
              <div className="space-y-4">
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <Image
                    src="/images/AdobeStock_1153909115.jpeg"
                    alt="Traditional Indian cooking and preparation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <h3 className="text-xl font-serif text-[#2F4F2F]">From Farm to Table</h3>
                <p className="text-sm text-[#4A644A]">Bringing mindful nourishment to your home.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="relative min-h-screen bg-[#F5E6D3]">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/pattern-bg.jpg"
            alt="Traditional pattern"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-5xl font-serif text-center text-[#2F4F2F] mb-16">
                Conscious Choices for a<br />Conscious Life
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {/* Product 1 */}
                <div className="group relative">
                  <div className="relative h-80 rounded-xl overflow-hidden">
                    <Image
                      src="/images/organic-rice.jpeg"
                      alt="Traditional organic rice"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-center p-4">
                          <h4 className="text-lg font-serif mb-2">Heritage Rice</h4>
                          <p className="text-sm">Premium organic rice, traditionally cultivated</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product 2 (Previously Product 3 - Ghee) */}
                <div className="group relative">
                  <div className="relative h-80 rounded-xl overflow-hidden">
                    <Image
                      src="/images/organic-ghee.jpeg"
                      alt="Traditional organic ghee"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-center p-4">
                          <h4 className="text-lg font-serif mb-2">Pure Ghee</h4>
                          <p className="text-sm">Traditionally crafted, naturally pure</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product 3 (Previously Product 2 - Spices) */}
                <div className="group relative">
                  <div className="relative h-80 rounded-xl overflow-hidden">
                    <Image
                      src="/images/organic-spices.jpeg"
                      alt="Traditional organic spices"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-center p-4">
                          <h4 className="text-lg font-serif mb-2">Sacred Spices</h4>
                          <p className="text-sm">Hand-picked and sustainably sourced</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product 4 */}
                <div className="group relative">
                  <div className="relative h-80 rounded-xl overflow-hidden">
                    <Image
                      src="/images/ayurvedic-tea.jpeg"
                      alt="Traditional Ayurvedic tea"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-center p-4">
                          <h4 className="text-lg font-serif mb-2">Ayurvedic Tea</h4>
                          <p className="text-sm">Ancient wellness in every cup</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-4xl mx-auto mt-20 text-center">
                <h3 className="text-3xl font-serif text-[#2F4F2F] mb-8">Experience Our Collection</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg">
                    <h4 className="text-xl font-serif text-[#2F4F2F] mb-4">Monthly Subscription</h4>
                    <p className="text-[#4A644A] mb-4">Curated seasonal products delivered to your doorstep</p>
                    <button className="bg-[#2F4F2F] text-white px-6 py-3 rounded-lg hover:bg-[#1F3F1F] transition-colors">
                      Learn More
                    </button>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg">
                    <h4 className="text-xl font-serif text-[#2F4F2F] mb-4">Gift Boxes</h4>
                    <p className="text-[#4A644A] mb-4">Share the gift of mindful living with loved ones</p>
                    <button className="bg-[#2F4F2F] text-white px-6 py-3 rounded-lg hover:bg-[#1F3F1F] transition-colors">
                      Shop Gifts
                    </button>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg">
                    <h4 className="text-xl font-serif text-[#2F4F2F] mb-4">Bulk Orders</h4>
                    <p className="text-[#4A644A] mb-4">Perfect for restaurants and wholesale buyers</p>
                    <button className="bg-[#2F4F2F] text-white px-6 py-3 rounded-lg hover:bg-[#1F3F1F] transition-colors">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Farmers Section */}
      <section className="relative min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-serif text-center text-[#2F4F2F] mb-16">
              The Hands Behind the Harvest
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              {/* Farmer 1 */}
              <div className="space-y-6">
                <div className="relative h-96 rounded-xl overflow-hidden">
                  <Image
                    src="/images/AdobeStock_402589975.jpeg"
                    alt="Lakshmi, traditional Indian organic rice farmer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif text-[#2F4F2F]">Lakshmi Devi</h3>
                  <p className="text-[#4A644A]">Following ancestral wisdom, Lakshmi practices traditional farming methods that honor both the soil and her heritage. As a third-generation rice farmer from Tamil Nadu, she leads a women's farming collective dedicated to preserving organic farming practices.</p>
                </div>
              </div>

              {/* Farmer 2 */}
              <div className="space-y-6">
                <div className="relative h-96 rounded-xl overflow-hidden">
                  <Image
                    src="/images/AdobeStock_123708977.jpeg"
                    alt="Rajesh, traditional Indian spice farmer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif text-[#2F4F2F]">Rajesh Kumar</h3>
                  <p className="text-[#4A644A]">Drawing from generations of farming expertise, Rajesh maintains a biodiverse spice farm in Kerala. His dedication to traditional methods ensures the cultivation of premium turmeric, cardamom, and pepper through regenerative farming practices.</p>
                </div>
              </div>
            </div>
            <div className="max-w-4xl mx-auto mt-20">
              <div className="bg-[#F5E6D3] rounded-2xl p-12 text-center">
                <h3 className="text-3xl font-serif text-[#2F4F2F] mb-6">Join Our Farmer Network</h3>
                <p className="text-xl text-[#4A644A] mb-8">Are you a farmer practicing traditional, sustainable methods? We'd love to partner with you.</p>
                <button 
                  onClick={handlePartnerClick}
                  className="bg-[#2F4F2F] text-white px-8 py-4 rounded-lg hover:bg-[#1F3F1F] transition-colors"
                >
                  Partner With Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved & Join Our Network Section */}
      <section className="relative py-32 min-h-screen bg-[#F5E6D3] flex items-center">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/pattern-bg.jpg"
            alt="Traditional pattern background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-serif text-[#2F4F2F] mb-6">
                Be a Part of the Change
              </h2>
              <p className="text-xl text-[#4A644A] max-w-3xl mx-auto">
                Join our growing community of mindful consumers and sustainable farmers as we work together to preserve traditions and protect our planet.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
              {/* Left Column - For Consumers */}
              <div className="space-y-12">
                <h3 className="text-3xl font-serif text-[#2F4F2F] text-center">For Mindful Consumers</h3>
                <div className="grid grid-cols-1 gap-8">
                  <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <h4 className="text-2xl font-serif text-[#2F4F2F] mb-4">Shop Mindfully</h4>
                    <p className="text-[#4A644A] mb-6">Purchase from sustainable sources that support local communities and preserve traditional farming methods.</p>
                    <Link href="/products" className="bg-[#2F4F2F] text-white px-6 py-3 rounded-lg hover:bg-[#1F3F1F] transition-colors w-full inline-block text-center">
                      Shop Now
                    </Link>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <h4 className="text-2xl font-serif text-[#2F4F2F] mb-4">Support Farmers</h4>
                    <p className="text-[#4A644A] mb-6">Your choices directly impact farming communities and their livelihoods, helping preserve traditional wisdom.</p>
                    <button disabled className="bg-gray-400 text-white px-6 py-3 rounded-lg w-full cursor-not-allowed">
                      Meet the Farmers (Coming Soon)
                    </button>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <h4 className="text-2xl font-serif text-[#2F4F2F] mb-4">Spread Awareness</h4>
                    <p className="text-[#4A644A] mb-6">Share the message of gratitude and sustainability with others, helping grow our mindful community.</p>
                    <a href="#newsletter" className="border-2 border-[#2F4F2F] text-[#2F4F2F] px-6 py-3 rounded-lg hover:bg-[#2F4F2F] hover:text-white transition-colors w-full inline-block text-center">
                      Join Our Community
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column - For Farmers */}
              <div className="space-y-12">
                <h3 className="text-3xl font-serif text-[#2F4F2F] text-center">For Traditional Farmers</h3>
                <div className="bg-white/90 backdrop-blur-sm p-12 rounded-2xl shadow-xl">
                  <div className="space-y-8">
                    <h4 className="text-2xl font-serif text-[#2F4F2F]">Join Our Farmer Network</h4>
                    <p className="text-lg text-[#4A644A]">Are you a farmer practicing traditional, sustainable methods? Partner with us to:</p>
                    <ul className="space-y-4 text-[#4A644A]">
                      <li className="flex items-start space-x-3">
                        <svg className="w-6 h-6 text-[#2F4F2F] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Get fair compensation for your traditional farming practices</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <svg className="w-6 h-6 text-[#2F4F2F] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Access a global market for your organic products</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <svg className="w-6 h-6 text-[#2F4F2F] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Join a community of like-minded sustainable farmers</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <svg className="w-6 h-6 text-[#2F4F2F] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Receive support for organic certification and training</span>
                      </li>
                    </ul>
                    <div className="pt-8">
                      <button 
                        onClick={handlePartnerClick}
                        className="bg-[#2F4F2F] text-white px-8 py-4 rounded-lg hover:bg-[#1F3F1F] transition-colors w-full text-lg"
                      >
                        Partner With Us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/AdobeStock_273577993.jpeg"
            alt="Traditional Indian spices and ingredients"
            fill
            className="object-cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-serif text-white mb-6">
              Join Our Community
            </h2>
            <p className="text-xl text-white/90 mb-12">
              Subscribe to receive mindful living tips, traditional recipes, and updates on our farmer communities.
            </p>
            {showThankYou ? (
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 mb-8 animate-fade-in">
                <h3 className="text-2xl font-serif text-[#2F4F2F] mb-2">Thank You for Joining Our Community!</h3>
                <p className="text-[#4A644A]">We're excited to share our journey with you.</p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-6 py-4 rounded-lg bg-white/90 backdrop-blur-sm text-[#2F4F2F] placeholder-[#2F4F2F]/60 focus:outline-none focus:ring-2 focus:ring-[#2F4F2F]"
                />
                <button type="submit" className="bg-[#2F4F2F] text-white px-8 py-4 rounded-lg hover:bg-[#1F3F1F] transition-colors duration-300">
                  Subscribe
                </button>
              </form>
            )}
            <p className="text-white/80 text-sm mt-4">
              By subscribing, you agree to receive our newsletter. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AnimatedSections; 