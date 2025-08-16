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
  // {
  //   icon: User,
  //   title: "Yoga & Meditation",
  //   description:
  //     "Rejuvenate your body and mind with our yoga and meditation classes in a serene environment.",
  //   color: "bg-blue-50 text-blue-600",
  // },
  {
    icon: ChefHat,
    title: "Dining",
    description:
      "Embark on a culinary journey with our on-site restaurants featuring locally sourced ingredients.",
    color: "bg-orange-50 text-orange-600",
  },
  // {
  //   icon: Waves,
  //   title: "Rooftop Pool",
  //   description:
  //     "Relax and unwind at our rooftop pool with panoramic city views and comfortable lounging areas.",
  //   color: "bg-cyan-50 text-cyan-600",
  // },
  // {
  //   icon: Dumbbell,
  //   title: "Fitness Center",
  //   description:
  //     "Stay active with our state-of-the-art fitness center equipped with cardio and strength equipment.",
  //   color: "bg-purple-50 text-purple-600",
  // },
  {
    icon: Mic,
    title: "Roof Top Space",
    description:
      "Relax and unwind at our rooftop space with panoramic city views and comfortable lounging areas.",
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

              {/* <Button
                variant="ghost"
                className="p-0 h-auto text-amber-600 hover:text-amber-700 group-hover:translate-x-1 transition-transform duration-300">
                Read More
                <ArrowRight
                  size={16}
                  className="ml-2"
                />
              </Button> */}
            </motion.div>
          ))}
        </motion.div>

        {/* Catering Section */}
        <motion.div
          className="mt-16 md:mt-24 bg-amber-50 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}>
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-8 md:mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}>
              <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
                Catering <span className="text-amber-600">Orders</span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Hotel Helen doesn&apos;t just offer a place to stay, we bring
                quality to your table too.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  Our Kitchen Services
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Our kitchen provides a range of freshly prepared meals
                  suitable for both small gatherings and large-scale catering.
                  Whether you&apos;re hosting a training, seminar, team lunch,
                  or a corporate celebration, we offer:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    Custom catering menus tailored to your event needs
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    Bulk Food Orders for offices, meetings, and staff packages
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 mr-2">•</span>
                    Timely Delivery to nearby institutions and corporate
                    buildings
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  Contact Us
                </h4>
                <p className="text-gray-600 mb-4">
                  To request a menu or place a catering order, kindly contact us
                  via:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <span className="font-medium mr-2">Email:</span>
                    <a
                      href="mailto:hotelheleninfo@gmail.com"
                      className="text-amber-600 hover:text-amber-700 transition-colors">
                      hotelheleninfo@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="font-medium mr-2">Phone:</span>
                    <a
                      href="tel:+2348055369750"
                      className="text-amber-600 hover:text-amber-700 transition-colors">
                      +234-805-536-9750
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
