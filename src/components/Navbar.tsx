"use client";

import { motion } from "motion/react";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Search,
} from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  return (
    <motion.nav
      className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Top bar with contact info */}
      <div className="bg-amber-50 py-2 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <motion.div
              className="flex items-center gap-2 text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Phone size={14} />
              <span>(555) 123-4567</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Mail size={14} />
              <span>hello@hotelhelen.com</span>
            </motion.div>
          </div>

          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Facebook
              size={16}
              className="text-gray-600 hover:text-amber-600 cursor-pointer transition-colors"
            />
            <Twitter
              size={16}
              className="text-gray-600 hover:text-amber-600 cursor-pointer transition-colors"
            />
            <Instagram
              size={16}
              className="text-gray-600 hover:text-amber-600 cursor-pointer transition-colors"
            />
            <Linkedin
              size={16}
              className="text-gray-600 hover:text-amber-600 cursor-pointer transition-colors"
            />
          </motion.div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center mr-3">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 tracking-wider uppercase">
              Hotel Helen
            </h1>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {["Home", "Explore", "Rooms", "About", "Contact"].map(
              (item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-300 relative group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              )
            )}
          </motion.div>

          {/* Search */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative hidden lg:block">
              <Input
                placeholder="Search here..."
                className="w-64 pr-10 bg-gray-50 border-gray-200 focus:border-amber-600"
              />
              <Search
                size={18}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
            <Search
              size={20}
              className="text-gray-600 hover:text-amber-600 cursor-pointer transition-colors lg:hidden"
            />
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
