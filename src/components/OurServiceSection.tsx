"use client";

import React from "react";
import { motion } from "motion/react";
import {
  User,
  ChefHat,
  Waves,
  Dumbbell,
  Mic,
  Wifi,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: User,
    title: "Yoga & Meditation",
    description:
      "Rejuvenate your body and mind with our yoga and meditation classes in a serene environment.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: ChefHat,
    title: "Dining",
    description:
      "Embark on a culinary journey with our on-site restaurants featuring locally sourced ingredients.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: Waves,
    title: "Rooftop Pool",
    description:
      "Relax and unwind at our rooftop pool with panoramic city views and comfortable lounging areas.",
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description:
      "Stay active with our state-of-the-art fitness center equipped with cardio and strength equipment.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Mic,
    title: "Event Spaces",
    description:
      "Host your events in our versatile spaces equipped with modern audiovisual technology.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Wifi,
    title: "Free Wi-Fi",
    description:
      "Stay connected with complimentary high-speed Wi-Fi throughout the hotel premises.",
    color: "bg-amber-50 text-amber-600",
  },
];

export default function OurServiceSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          className="text-center max-w-4xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-amber-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Discover our comprehensive range of services designed to enhance
            your stay and provide everything you need for a memorable
            experience.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}>
              <div
                className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={24} />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              <Button
                variant="ghost"
                className="p-0 h-auto text-amber-600 hover:text-amber-700 group-hover:translate-x-1 transition-transform duration-300">
                Read More
                <ArrowRight
                  size={16}
                  className="ml-2"
                />
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
