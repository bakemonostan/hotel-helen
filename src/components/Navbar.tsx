"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Phone, Mail, Search, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [isBannerVisible, setIsBannerVisible] = useState(true);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}>
      {/* Top bar with contact info */}
      {/* {isBannerVisible && (
        <motion.div 
          className="bg-amber-50 py-2 px-4 md:px-8 relative"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm gap-2 md:gap-0">
            <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-6">
              <motion.div
                className="flex items-center gap-2 text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}>
                <Phone size={14} />
                <span>(555) 123-4567</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}>
                <Mail size={14} />
                <span>hello@hotelhelen.com</span>
              </motion.div>
            </div>

            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}>
              <IconBrandFacebook
                size={16}
                className="text-gray-600 hover:text-amber-600 cursor-pointer transition-colors"
              />
              <IconBrandTwitter
                size={16}
                className="text-gray-600 hover:text-amber-600 cursor-pointer transition-colors"
              />
              <IconBrandInstagram
                size={16}
                className="text-gray-600 hover:text-amber-600 cursor-pointer transition-colors"
              />
              <IconBrandLinkedin
                size={16}
                className="text-gray-600 hover:text-amber-600 cursor-pointer transition-colors"
              />
            </motion.div>
          </div>
          
          <button
            onClick={() => setIsBannerVisible(false)}
            className="absolute top-2 right-4 md:right-8 p-1 text-gray-500 hover:text-gray-700 transition-colors">
            <X size={16} />
          </button>
        </motion.div>
      )} */}

      {/* Main navigation */}
      <div className="py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}>
            <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center mr-3">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800 tracking-wider uppercase">
              Hotel Helen
            </h1>
          </motion.div>

          {/* Desktop Navigation Links - Centered */}
          <motion.div
            className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}>
            {[
              { name: "Home", id: "home" },
              { name: "Explore", id: "explore" },
              { name: "Rooms", id: "rooms" },
              { name: "Services", id: "services" },
              { name: "Contact", id: "contact" },
            ].map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-300 relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}>
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
              </motion.button>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-amber-600 transition-colors">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="pt-4 space-y-4">
              {[
                { name: "Home", id: "home" },
                { name: "Explore", id: "explore" },
                { name: "Rooms", id: "rooms" },
                { name: "Services", id: "services" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-gray-700 hover:text-amber-600 font-medium transition-colors duration-300 py-2 w-full text-left">
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
