"use client";

import React from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Hotel Description */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center mr-3">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold tracking-wider uppercase">
                Hotel Helen
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              A luxury retreat in the heart of Lekki Phase 1, offering comfort
              and elegance for both business and leisure travelers.
            </p>
          </motion.div>

          {/* Book Now Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}>
            <h4 className="text-lg font-semibold mb-4">Ready to Book?</h4>
            <p className="text-gray-300 text-sm mb-6">
              Experience luxury and comfort at Hotel Helen. Book your stay today
              and enjoy our exceptional service.
            </p>
            <Button
              onClick={() =>
                window.open(
                  "https://wa.me/2348055369750?text=Hi! I would like to book a room at Hotel Helen.",
                  "_blank"
                )
              }
              className="bg-amber-600 hover:bg-amber-700 text-white group transition-all duration-300 transform hover:scale-105">
              Book Now
              <ArrowRight
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}>
            <h4 className="text-lg font-semibold mb-4">Our Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-amber-600 mt-1 flex-shrink-0"
                />
                <p className="text-gray-300 text-sm">
                  36, Omorinre Johnson Street,
                  <br />
                  Lekki Phase 1, Lagos
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="text-amber-600 flex-shrink-0"
                />
                <p className="text-gray-300 text-sm"> +234-805-536-9750 </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="text-amber-600 flex-shrink-0"
                />
                <p className="text-gray-300 text-sm">
                  hotelheleninfo@gmail.com
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}>
          <p className="text-gray-400 text-sm">
            Copyright 2024 Hotel Helen. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
