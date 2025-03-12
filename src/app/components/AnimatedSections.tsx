'use client';

import Image from 'next/image';
import Link from 'next/link';

const AnimatedSections = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            className="w-full h-full object-cover"
            onError={(e) => console.error('Video error:', e)}
          >
            <source 
              src="https://api.netlify.com/api/v1/sites/440a91a3-adf0-40b3-9f3b-9c28c5420d4f/blobs/videos/AdobeStock_679597740.mov" 
              type="video/mov"
            />
            <source 
              src="https://api.netlify.com/api/v1/sites/440a91a3-adf0-40b3-9f3b-9c28c5420d4f/blobs/videos/AdobeStock_679597740.mov" 
              type="video/quicktime"
            />
            <source 
              src="https://api.netlify.com/api/v1/sites/440a91a3-adf0-40b3-9f3b-9c28c5420d4f/blobs/videos/AdobeStock_679597740.mov" 
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative flex items-center justify-center min-h-screen">
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
                <h3 className="text-2xl font-serif text-[#2F4F2F] mb-4">1000+</h3>
                <p className="text-[#4A644A]">Farmers Supported</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-serif text-[#2F4F2F] mb-4">100%</h3>
                <p className="text-[#4A644A]">Organic Certified</p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden aspect-square shadow-xl">
                <Image
                  src="/images/AdobeStock_924785063.jpeg"
                  alt="Traditional Indian farming practices"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="space-y-8">
                <div className="space-y-3">
                  <h3 className="text-2xl font-serif text-[#2F4F2F]">Sustainability</h3>
                  <p className="text-[#4A644A]">We source ethically and protect the environment through every step of our journey.</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-serif text-[#2F4F2F]">Fair Trade</h3>
                  <p className="text-[#4A644A]">Empowering farmers, especially women in agriculture, through fair compensation and support.</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-serif text-[#2F4F2F]">Spiritual Nourishment</h3>
                  <p className="text-[#4A644A]">Food isn't just fuel; it's sacred. We honor the spiritual connection in every grain.</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-serif text-[#2F4F2F]">Timeless Traditions</h3>
                  <p className="text-[#4A644A]">Preserving and sharing recipes, rituals, and wisdom passed down through generations.</p>
                </div>
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
                      src="/images/Firefly traditional indian organic grains hyper realistic ultra real photo realism 87419.jpg"
                      alt="Traditional Indian organic grains"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-center p-4">
                          <h4 className="text-lg font-serif mb-2">Organic Grains</h4>
                          <p className="text-sm">Premium quality, traditionally harvested</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product 2 */}
                <div className="group relative">
                  <div className="relative h-80 rounded-xl overflow-hidden">
                    <Image
                      src="/images/Firefly traditional indian ayurvedic powders hyper realistic ultra real photo realism 11472.jpg"
                      alt="Traditional Indian Ayurvedic powders"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-center p-4">
                          <h4 className="text-lg font-serif mb-2">Ayurvedic Powders</h4>
                          <p className="text-sm">Ancient wisdom for modern wellness</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product 3 */}
                <div className="group relative">
                  <div className="relative h-80 rounded-xl overflow-hidden">
                    <Image
                      src="/images/Firefly traditional indian ghee hyper realistic ultra real photo realism 87419.jpg"
                      alt="Traditional Indian ghee"
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

                {/* Product 4 */}
                <div className="group relative">
                  <div className="relative h-80 rounded-xl overflow-hidden">
                    <Image
                      src="/images/Firefly traditional indian naan packaged hyper realistic ultra real photo realism 87419.jpg"
                      alt="Traditional Indian naan bread"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-center p-4">
                          <h4 className="text-lg font-serif mb-2">Traditional Naan</h4>
                          <p className="text-sm">Authentic taste, modern convenience</p>
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
                <button className="bg-[#2F4F2F] text-white px-8 py-4 rounded-lg hover:bg-[#1F3F1F] transition-colors">
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
                    <button className="bg-[#2F4F2F] text-white px-6 py-3 rounded-lg hover:bg-[#1F3F1F] transition-colors w-full">
                      Shop Now
                    </button>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <h4 className="text-2xl font-serif text-[#2F4F2F] mb-4">Support Farmers</h4>
                    <p className="text-[#4A644A] mb-6">Your choices directly impact farming communities and their livelihoods, helping preserve traditional wisdom.</p>
                    <button className="bg-[#4A644A] text-white px-6 py-3 rounded-lg hover:bg-[#3A533A] transition-colors w-full">
                      Meet the Farmers
                    </button>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <h4 className="text-2xl font-serif text-[#2F4F2F] mb-4">Spread Awareness</h4>
                    <p className="text-[#4A644A] mb-6">Share the message of gratitude and sustainability with others, helping grow our mindful community.</p>
                    <button className="border-2 border-[#2F4F2F] text-[#2F4F2F] px-6 py-3 rounded-lg hover:bg-[#2F4F2F] hover:text-white transition-colors w-full">
                      Join Our Community
                    </button>
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
                      <button className="bg-[#2F4F2F] text-white px-8 py-4 rounded-lg hover:bg-[#1F3F1F] transition-colors w-full text-lg">
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
      <section className="relative min-h-[60vh] flex items-center">
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
            <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg bg-white/90 backdrop-blur-sm text-[#2F4F2F] placeholder-[#2F4F2F]/60 focus:outline-none focus:ring-2 focus:ring-[#2F4F2F]"
              />
              <button className="bg-[#2F4F2F] text-white px-8 py-4 rounded-lg hover:bg-[#1F3F1F] transition-colors duration-300">
                Subscribe
              </button>
            </form>
            <p className="text-white/80 text-sm mt-4">
              By subscribing, you agree to receive our newsletter. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2F4F2F] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              {/* Brand Column */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Image
                    src="/wise-yogi.jpeg"
                    alt="Wise Yogi Logo"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <span className="text-2xl font-serif">Wise Yogi</span>
                </div>
                <p className="text-white/80">
                  Honoring tradition, nurturing sustainability, and celebrating the sacred connection between food and life.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  </a>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-serif mb-6">Quick Links</h3>
                <ul className="space-y-4">
                  <li><a href="#" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="text-white/80 hover:text-white transition-colors">Our Products</a></li>
                  <li><a href="#" className="text-white/80 hover:text-white transition-colors">Meet the Farmers</a></li>
                  <li><a href="#" className="text-white/80 hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-serif mb-6">Contact Us</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    <span className="text-white/80">info@wiseyogi.com</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    <span className="text-white/80">+1 (555) 123-4567</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    <span className="text-white/80">123 Mindful Street<br />Sustainable City, SC 12345</span>
                  </li>
                </ul>
              </div>

              {/* Newsletter Mini */}
              <div>
                <h3 className="text-lg font-serif mb-6">Stay Updated</h3>
                <p className="text-white/80 mb-4">Get our latest updates and news directly to your inbox.</p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                  <button className="w-full bg-white text-[#2F4F2F] px-4 py-2 rounded-lg hover:bg-white/90 transition-colors">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-white/20">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-white/60 text-sm">
                  © 2024 Wise Yogi. All rights reserved.
                </p>
                <div className="flex space-x-6 text-sm">
                  <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
                  <a href="#" className="text-white/60 hover:text-white transition-colors">Cookie Policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default AnimatedSections; 