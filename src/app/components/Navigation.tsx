 'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const menuItems = [
  { name: 'About Us', href: '/about' },
  { name: 'Meet the Farmers', href: '#', comingSoon: true },
  { name: 'Blog', href: '#', comingSoon: true },
  { name: 'Shop Now', href: '/products' }
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-primary-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/wise-yogi.jpeg"
                alt="Wise Yogi Logo"
                width={64}
                height={64}
                className="rounded-full"
              />
              <span className="text-3xl font-serif font-bold text-primary-800 hover:text-primary-700 transition-colors">
                Wise Yogi
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                  item.name === 'Shop Now'
                    ? 'bg-[#2F4F2F] text-white hover:bg-[#1F3F1F]'
                    : item.comingSoon
                    ? 'text-[#2F4F2F]/50 cursor-not-allowed'
                    : 'text-[#2F4F2F] hover:bg-sage-50'
                }`}
                onClick={(e) => item.comingSoon && e.preventDefault()}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  item.name === 'Shop Now'
                    ? 'bg-[#2F4F2F] text-white px-6 py-2 rounded-lg hover:bg-[#1F3F1F]'
                    : item.comingSoon
                    ? 'text-[#2F4F2F]/50 cursor-not-allowed'
                    : 'text-[#2F4F2F] hover:text-[#1F3F1F]'
                } transition-colors duration-300`}
                onClick={(e) => item.comingSoon && e.preventDefault()}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white border-t border-primary-100"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 rounded-lg transition-colors duration-300 ${
                      item.comingSoon
                        ? 'text-[#2F4F2F]/50 cursor-not-allowed'
                        : 'text-[#2F4F2F] hover:bg-sage-50'
                    }`}
                    onClick={(e) => {
                      setIsOpen(false);
                      item.comingSoon && e.preventDefault();
                    }}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation; 