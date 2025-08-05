"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Star, Award, Heart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LayoutGrid } from "./ui/layout-grid";
import { FocusCards } from "./ui/focus-cards";

export default function ExploreSection() {
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
    "/cue-balls.jpg",
    "/tent.jpg",
    "/indoor-bar.jpg",
    "/bar-closeup.jpg",
  ];

  return (
    <section
      ref={ref}
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            Hotel Helen: Your Gateway <br />
            <span className="text-amber-600">To Serenity</span>
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8 px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}>
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
            viewport={{ once: true }}>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold group transition-all duration-300">
              Read About Us
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </motion.div>
        </div>

        {/* Focus Cards Section */}
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}>
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
              Explore Our Amenities
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto px-4">
              Discover the exceptional services and facilities that make Hotel
              Hotel Helen your perfect choice for an unforgettable stay.
            </p>
          </div>
          <div>
            <FocusCards cards={focusCards} />
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}>
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
              className="text-center group p-4 sm:p-6 rounded-xl hover:bg-amber-50 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}>
              <motion.div
                className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 rounded-full mb-3 sm:mb-4 group-hover:bg-amber-200 transition-colors"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}>
                <feature.icon
                  size={24}
                  className="sm:w-8 sm:h-8 text-amber-600"
                />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Layout Grid - Hidden on mobile for better performance */}
      <div className="hidden lg:block h-screen">
        <LayoutGrid
          cards={[
            {
              id: 1,
              content: (
                <div className="text-white">
                  <h1 className="text-2xl sm:text-4xl font-bold mb-4">
                    Luxury Comfort
                  </h1>
                  <p className="text-base sm:text-lg opacity-90">
                    Experience unmatched comfort in our premium rooms with
                    elegant furnishing, premium bedding, and breathtaking city
                    views that redefine luxury.
                  </p>
                </div>
              ),
              thumbnail:
                "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
              className: "col-span-1",
            },
            {
              id: 2,
              content: (
                <div className="text-white">
                  <h1 className="text-2xl sm:text-4xl font-bold mb-4">
                    Award Winning
                  </h1>
                  <p className="text-base sm:text-lg opacity-90">
                    Recognized globally for excellence in hospitality services,
                    culinary experiences, and sustainable tourism practices.
                  </p>
                </div>
              ),
              thumbnail:
                "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
              className: "col-span-2",
            },
            {
              id: 3,
              content: (
                <div className="text-white">
                  <h1 className="text-2xl sm:text-4xl font-bold mb-4">
                    Personalized Care
                  </h1>
                  <p className="text-base sm:text-lg opacity-90">
                    Our dedicated concierge team ensures every detail of your
                    stay is perfectly tailored to your preferences and needs.
                  </p>
                </div>
              ),
              thumbnail:
                "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
              className: "col-span-2",
            },
            {
              id: 4,
              content: (
                <div className="text-white">
                  <h1 className="text-2xl sm:text-4xl font-bold mb-4">
                    Dining Excellence
                  </h1>
                  <p className="text-base sm:text-lg opacity-90">
                    Savor world-class cuisine at our signature restaurants,
                    featuring locally sourced ingredients and innovative
                    culinary artistry.
                  </p>
                </div>
              ),
              thumbnail:
                "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
              className: "col-span-1",
            },
            {
              id: 5,
              content: (
                <div className="text-white">
                  <h1 className="text-2xl sm:text-4xl font-bold mb-4">
                    Wellness & Spa
                  </h1>
                  <p className="text-base sm:text-lg opacity-90">
                    Rejuvenate your body and soul at our world-class spa
                    facility with therapeutic treatments and state-of-the-art
                    wellness amenities.
                  </p>
                </div>
              ),
              thumbnail:
                "https://images.unsplash.com/photo-1578774204375-826dc5d996ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
              className: "col-span-1",
            },
            {
              id: 6,
              content: (
                <div className="text-white">
                  <h1 className="text-2xl sm:text-4xl font-bold mb-4">
                    Pool & Recreation
                  </h1>
                  <p className="text-base sm:text-lg opacity-90">
                    Dive into luxury at our stunning infinity pool and
                    recreation deck, perfect for relaxation and entertainment
                    throughout your stay.
                  </p>
                </div>
              ),
              thumbnail:
                "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2160&q=80",
              className: "col-span-2",
            },
          ]}
        />
      </div>
    </section>
  );
}
