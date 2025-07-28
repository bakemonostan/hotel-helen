"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Star, Award, Heart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FocusCards } from "./ui/focus-cards";

export default function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const stats = [
    { number: "25k", label: "Happy Clients", delay: 0.2 },
    { number: "160", label: "Total Rooms", delay: 0.4 },
    { number: "28", label: "Awards Won", delay: 0.6 },
    { number: "100", label: "Team Members", delay: 0.8 },
  ];

  const focusCards = [
    {
      title: "Luxury Comfort",
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    },
    {
      title: "Award Winning",
      src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Dining Excellence",
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Wellness & Spa",
      src: "https://images.unsplash.com/photo-1578774204375-826dc5d996ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Hotel Helen: Your Gateway <br />
            <span className="text-amber-600">To Serenity</span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 leading-relaxed mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Welcome to Hotel Helen, where comfort meets tranquility. Nestled in
            the heart of a bustling city, our hotel offers a peaceful retreat
            for both business and leisure travelers. With modern amenities and a
            warm, welcoming atmosphere, we strive to make your stay with us
            unforgettable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold group transition-all duration-300">
              Read About Us
              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </motion.div>
        </div>

        {/* Focus Cards */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FocusCards cards={focusCards.map((card) => card.src)} />
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: stat.delay, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold text-amber-600 mb-2"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Features */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            {
              icon: Star,
              title: "Luxury Comfort",
              description: "Experience unmatched comfort in our premium rooms",
            },
            {
              icon: Award,
              title: "Award Winning",
              description: "Recognized for excellence in hospitality services",
            },
            {
              icon: Heart,
              title: "Personalized Care",
              description: "Dedicated staff ensuring your every need is met",
            },
            {
              icon: Shield,
              title: "Safe & Secure",
              description: "Your safety and security is our top priority",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center group p-6 rounded-xl hover:bg-amber-50 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4 group-hover:bg-amber-200 transition-colors"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <feature.icon size={32} className="text-amber-600" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
