"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-300/40 via-amber-200/30 to-amber-100/10 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/25 to-black/15 z-10"></div>
        <Image
          width={1000}
          height={1000}
          quality={100}
          src="/outside-view-two.jpg"
          alt="Luxury hotel room"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="text-center text-white space-y-6 lg:space-y-8 min-h-screen flex flex-col justify-center py-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-4 lg:space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-center gap-2 text-amber-200">
                <MapPin
                  size={18}
                  className="md:w-5 md:h-5"
                />
                <span className="text-base md:text-lg">
                  Located in Lekki Phase 1
                </span>
              </motion.div>

              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}>
                Hotel Helen Your{" "}
                <span className="text-amber-300 relative">
                  Gateway
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-amber-300"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                  />
                </span>{" "}
                To Serenity.
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}>
                Nestled in the vibrant and upscale Lekki Phase 1, Hotel Helen
                offers the perfect blend of comfort, privacy, and convenience.
                Whether you&apos;re in town for business or a relaxing getaway,
                our well-appointed rooms and inviting spaces promise an
                exceptional stay.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex justify-center">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold group transition-all duration-300 transform hover:scale-105 shadow-lg">
                Book Now
                <ArrowRight
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </motion.div>

            {/* Floating elements - hidden on mobile */}
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
              className="absolute top-20 left-10 w-20 h-20 bg-amber-400/20 rounded-full blur-xl hidden lg:block"
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
              className="absolute bottom-32 left-20 w-16 h-16 bg-white/10 rounded-full blur-lg hidden lg:block"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
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
