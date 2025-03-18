'use client';

import AnimatedSections from './components/AnimatedSections';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="relative w-full">
      <AnimatedSections />
      <Footer />
    </div>
  );
}
