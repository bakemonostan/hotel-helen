"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingForm from "./BookingForm";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/10 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Luxury hotel room"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center h-full py-20">
            {/* Left side - Content */}
            <div className="text-white space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-2 text-amber-300"
                >
                  <MapPin size={20} />
                  <span className="text-lg">Located in Paradise</span>
                </motion.div>

                <motion.h1
                  className="text-5xl md:text-7xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Hotel Helen Your{" "}
                  <span className="text-amber-400 relative">
                    Gateway
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-1 bg-amber-400"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                    />
                  </span>{" "}
                  To Serenity.
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl text-gray-200 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  Experience luxury redefined in our tranquil oasis where
                  comfort meets elegance, creating memories that last a
                  lifetime.
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg font-semibold group transition-all duration-300 transform hover:scale-105">
                  Explore Rooms
                  <ArrowRight
                    size={20}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </Button>

                <Button
                  variant="outline"
                  className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-gray-800 px-8 py-6 text-lg font-semibold transition-all duration-300"
                >
                  Read About Us
                </Button>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-20 left-10 w-20 h-20 bg-amber-400/20 rounded-full blur-xl"
              />

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -1, 1, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute bottom-32 left-20 w-16 h-16 bg-white/10 rounded-full blur-lg"
              />
            </div>

            {/* Right side - Booking Form */}
            <div className="flex justify-center lg:justify-end">
              <BookingForm />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
