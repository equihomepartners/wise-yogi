import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Navigation from './components/Navigation';

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Wise Yogi - Honoring the Hands That Feed Us",
  description: "Experience mindful living through sustainable, ethically sourced products that honor our farmers and the earth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} scroll-smooth`}>
      <body className="bg-white text-gray-900 antialiased font-sans min-h-screen overflow-x-hidden">
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
