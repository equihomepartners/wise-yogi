'use client';

import { motion } from 'framer-motion';
import { FaLeaf, FaHandHoldingHeart, FaSeedling, FaBalanceScale, FaUsers, FaGlobeAsia } from 'react-icons/fa';
import Image from 'next/image';
import Footer from '../components/Footer';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-[#2F4F2F]">
        <div className="absolute inset-0">
          <Image
            src="/images/AdobeStock_465691858.jpeg"
            alt="Traditional Indian Spices and Grains"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2F4F2F]/40 to-[#2F4F2F]/70" />
        </div>
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Image
              src="/wise-yogi.jpeg"
              alt="Wise Yogi Logo"
              width={80}
              height={80}
              className="rounded-full border-2 border-white/20"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-[#F5E6D3] drop-shadow-lg">About Wise Yogi</h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto text-white/90 drop-shadow-md">
            Empowering farmers through fair trade partnerships and direct farm-to-table connections
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5E6D3] to-transparent" />
      </section>

      {/* Vision Statement - Light Background */}
      <section className="relative py-32 bg-[#F5E6D3]">
        <div className="absolute inset-0 bg-[url('/grain-pattern.png')] opacity-10" />
        <div className="container mx-auto px-4 relative">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-8 text-[#2F4F2F]">Our Vision</h2>
            <p className="text-xl text-[#4A644A] leading-relaxed">
              At Wise Yogi, we envision a world where every meal tells a story of harmony between nature and nurture. Our commitment to natural farming practices isn't just about producing food—it's about preserving ancient wisdom, empowering communities, and fostering a sustainable future for generations to come.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats - Deep Green */}
      <section className="relative py-32 bg-[#2F4F2F]">
        <div className="absolute inset-0 bg-[url('/grain-pattern.png')] opacity-10" />
        <div className="container mx-auto px-4 relative">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6 text-white">Our Impact</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Making a difference through mindful choices
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { number: "35,000+", label: "Farming Families", sublabel: "Across multiple regions" },
              { number: "100%", label: "Natural Farming", sublabel: "No chemical interventions" },
              { number: "2", label: "Countries Served", sublabel: "US & UAE (and more coming)" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl font-bold mb-4 text-white">{stat.number}</div>
                <div className="text-xl font-medium mb-2 text-white/90">{stat.label}</div>
                <div className="text-white/70">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values - White */}
      <section className="relative py-32 bg-white">
        <div className="absolute inset-0 bg-[url('/grain-pattern.png')] opacity-10" />
        <div className="container mx-auto px-4 relative">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6 text-[#2F4F2F]">Our Core Values</h2>
            <p className="text-xl text-[#4A644A] max-w-3xl mx-auto">
              Guided by principles that honor both tradition and innovation
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: FaLeaf,
                title: "Natural Farming",
                description: "Embracing chemical-free practices that work in harmony with nature's rhythms"
              },
              {
                icon: FaUsers,
                title: "Community First",
                description: "Supporting over 35,000 farming families through fair partnerships"
              },
              {
                icon: FaSeedling,
                title: "Mindful Sourcing",
                description: "Carefully selecting products that meet our strict quality standards"
              },
              {
                icon: FaBalanceScale,
                title: "Fair Trade",
                description: "Ensuring equitable compensation for our farming partners"
              },
              {
                icon: FaGlobeAsia,
                title: "Global Impact",
                description: "Creating positive change across international communities"
              },
              {
                icon: FaHandHoldingHeart,
                title: "Sacred Connection",
                description: "Honoring the divine relationship between farmer and food"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="bg-[#F5E6D3]/30 backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-[#2F4F2F] w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#2F4F2F]">{value.title}</h3>
                <p className="text-[#4A644A] leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement - Light Background */}
      <section className="relative py-32 bg-[#F5E6D3]">
        <div className="absolute inset-0 bg-[url('/grain-pattern.png')] opacity-10" />
        <div className="container mx-auto px-4 relative">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-6 text-[#2F4F2F]">Our Mission</h2>
              <p className="text-xl text-[#4A644A]">Committed to excellence in every harvest</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-[#2F4F2F]/10">
                <h3 className="text-xl font-bold mb-6 text-[#2F4F2F]">What We Do</h3>
                <ul className="space-y-4">
                  {[
                    "Source premium natural farming products",
                    "Support sustainable agricultural practices",
                    "Ensure fair compensation for farmers",
                    "Maintain highest quality standards"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-[#2F4F2F] mt-1">✦</span>
                      <span className="text-[#4A644A]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-[#2F4F2F]/10">
                <h3 className="text-xl font-bold mb-6 text-[#2F4F2F]">How We Do It</h3>
                <ul className="space-y-4">
                  {[
                    "Direct partnerships with farming communities",
                    "Rigorous quality control processes",
                    "Transparent supply chain practices",
                    "Continuous sustainability improvements"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-[#2F4F2F] mt-1">✦</span>
                      <span className="text-[#4A644A]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA - White */}
      <section className="relative py-32 bg-white">
        <div className="absolute inset-0">
          <Image
            src="/images/AdobeStock_213253766.jpeg"
            alt="Traditional Indian farming background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/20"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold mb-6 text-white drop-shadow-lg">Join Our Journey</h2>
            <p className="text-xl text-white mb-8 drop-shadow-md">
              Together, we can create a sustainable future where every meal nourishes both people and planet.
            </p>
            <a href="/products" className="inline-block bg-[#2F4F2F] text-white px-8 py-3 rounded-lg hover:bg-[#1F3F1F] transition-colors duration-300">
              Explore Our Products
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 