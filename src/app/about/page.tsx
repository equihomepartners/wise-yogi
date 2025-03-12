'use client';

import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-[#F5E6D3]">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-[#2F4F2F]">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="Traditional Indian farming landscape"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-6xl font-serif text-white mb-6">About Us</h1>
            <p className="text-2xl text-white/90 font-serif">
              A movement to honor the sacred connection between earth, farmer, and consumer
            </p>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif text-[#2F4F2F] mb-8 text-center">
              Our Philosophy: Honoring the Hands That Feed Us
            </h2>
            <div className="prose prose-lg mx-auto text-[#4A644A]">
              <p className="mb-6">
                At Wise Yogi, we believe that food is more than just nourishment; it's a sacred connection between the earth, the farmer, and the consumer. In a world of fast-paced living and convenience, we're bringing mindfulness back into the way we eat, the way we source, and the way we give back.
              </p>
              <p className="mb-6">
                We are a movement—one that embraces gratitude for the hands that cultivate, harvest, and prepare the food we consume. From the farmers in the field to the chefs in the kitchen and the hands that prepare meals in your home, we honor them all.
              </p>
              <p>
                Every product we offer tells a story of dedication, love, and the deep connection we share with nature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Difference Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif text-[#2F4F2F] mb-16 text-center">
              Our Difference: Conscious Sourcing, Community Support, Spiritual Nourishment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/ethical-sourcing.jpg"
                    alt="Ethical sourcing practices"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-serif text-[#2F4F2F]">Ethical Sourcing</h3>
                <p className="text-[#4A644A]">
                  We are committed to sourcing only the purest, most sustainable ingredients from small-scale farmers who practice regenerative farming techniques.
                </p>
              </div>
              <div className="space-y-4">
                <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/community-support.jpg"
                    alt="Community support initiatives"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-serif text-[#2F4F2F]">Community Support</h3>
                <p className="text-[#4A644A]">
                  We work directly with farmers and artisans, building fair and transparent relationships that uplift entire communities.
                </p>
              </div>
              <div className="space-y-4">
                <div className="relative h-64 rounded-xl overflow-hidden mb-6">
                  <Image
                    src="/images/spiritual-nourishment.jpg"
                    alt="Spiritual nourishment practices"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-serif text-[#2F4F2F]">Spiritual Nourishment</h3>
                <p className="text-[#4A644A]">
                  Inspired by ancient yogic principles, we curate products that align with holistic well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif text-[#2F4F2F] mb-12 text-center">
              Our Impact: Empowering Farmers, Rejuvenating the Earth
            </h2>
            <div className="bg-white/80 rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative h-80 rounded-xl overflow-hidden">
                  <Image
                    src="/images/regenerative-farming-impact.jpg"
                    alt="Regenerative farming practices"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <p className="text-[#4A644A]">
                    We don't just talk about sustainability; we live it. From seed to plate, every step of our process respects the earth and its cycles. Our regenerative farming practices go beyond organic methods to heal and nurture the land.
                  </p>
                  <p className="text-[#4A644A]">
                    By working with farmers who use natural fertilization techniques, like Jeevaamrutham, we support the restoration of soil health, biodiversity, and sustainable agricultural practices.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="text-center">
                      <h4 className="text-3xl font-serif text-[#2F4F2F] mb-2">1000+</h4>
                      <p className="text-[#4A644A]">Farmers Supported</p>
                    </div>
                    <div className="text-center">
                      <h4 className="text-3xl font-serif text-[#2F4F2F] mb-2">5000+</h4>
                      <p className="text-[#4A644A]">Acres Regenerated</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Movement Section */}
      <section className="py-20 bg-[#2F4F2F] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif mb-8">Join Us on Our Journey</h2>
            <p className="text-xl text-white/90 mb-12">
              We are more than a business. We are a movement to reconnect with the land, the farmer, and the food that sustains us. We invite you to honor the hands that feed us by choosing products that are mindful, sustainable, and full of intention.
            </p>
            <button className="bg-white text-[#2F4F2F] px-8 py-4 rounded-lg hover:bg-white/90 transition-colors duration-300 font-bold">
              Join the Movement
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 