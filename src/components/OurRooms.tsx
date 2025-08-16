"use client";

import React from "react";
import { motion } from "motion/react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const RoomContent = ({ roomType }: { roomType: string }) => {
  return (
    <>
      {[...new Array(2).fill(1)].map((_, index) => {
        return (
          <div
            key={`room-content-${index}`}
            className="bg-gray-50 p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-gray-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-gray-700">
                Experience luxury redefined in our {roomType}.
              </span>{" "}
              Every detail has been carefully curated to provide the ultimate
              comfort and sophistication. From premium amenities to breathtaking
              views, your stay with us promises to be nothing short of
              extraordinary.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800 text-lg">
                  Room Features
                </h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Premium bedding and linens</li>
                  <li>• High-speed Wi-Fi</li>
                  <li>• 24/7 room service</li>
                  <li>• Climate control</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800 text-lg">
                  Amenities
                </h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Luxury bathroom</li>
                  <li>• Mini refrigerator</li>
                  <li>• Coffee maker</li>
                  <li>• Safe deposit box</li>
                </ul>
              </div>
            </div>

            {/* Room Images */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative overflow-hidden rounded-xl h-48 md:h-64">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                  alt={`${roomType} interior`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-xl h-48 md:h-64">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt={`${roomType} bathroom`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-xl h-48 md:h-64">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt={`${roomType} view`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

const roomData = [
  {
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    title: "Spacious Restrooms",
    content: <RoomContent roomType="Deluxe Suite" />,
  },
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "King-size beds",
    content: <RoomContent roomType="Executive Room" />,
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "Flat-screen TVs",
    content: <RoomContent roomType="Family Suite" />,
  },
  {
    src: "https://images.unsplash.com/photo-1578774204375-826dc5d996ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    title: " Fridge",
    content: <RoomContent roomType="Deluxe Suite" />,
  },
];

export default function OurRooms() {
  const cards = roomData.map((card, index) => (
    <Card
      key={card.src}
      card={card}
      index={index}
      layout={true}
    />
  ));

  return (
    <section className="w-full h-full py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          className="text-center max-w-4xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-amber-600">Rooms</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Discover our carefully curated collection of rooms and suites, each
            designed to provide the perfect blend of comfort, luxury, and
            functionality for your stay.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}>
          <Carousel items={cards} />
        </motion.div>

        {/* Room Options Section */}
        <motion.div
          className="mt-16 md:mt-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}>
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
              Room <span className="text-amber-600">Options</span>
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Choose from our thoughtfully designed accommodations, each crafted
              to provide the perfect blend of comfort, elegance, and
              functionality for your stay.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
            <motion.div
              className="text-center mb-8 md:mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}>
              <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Executive Suites
              </h4>
              <p className="text-lg text-gray-600 leading-relaxed">
                Designed for guests who desire extra space and luxury.
                Experience unparalleled comfort with our premium amenities and
                sophisticated design.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}>
              {[
                {
                  icon: "🏠",
                  title: "Private Balcony",
                  description:
                    "Enjoy breathtaking views and fresh air from your own private outdoor space",
                },
                {
                  icon: "📐",
                  title: "Spacious Layout",
                  description:
                    "Generous room dimensions providing comfort and freedom to move around",
                },
                {
                  icon: "🛏️",
                  title: "King-size Bed",
                  description:
                    "Premium bedding with luxurious linens for the ultimate sleep experience",
                },
                {
                  icon: "🛋️",
                  title: "Lounge Room",
                  description:
                    "Separate living area perfect for relaxation and entertainment",
                },
                {
                  icon: "📺",
                  title: "Flat-screen TV",
                  description:
                    "High-definition entertainment with premium channel selection",
                },
                {
                  icon: "🧊",
                  title: "Fridge",
                  description:
                    "Convenient in-room refrigeration for your refreshments and snacks",
                },
              ].map((amenity, index) => (
                <motion.div
                  key={amenity.title}
                  className="text-center p-6 rounded-xl hover:bg-amber-50 transition-colors duration-300 border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}>
                  <div className="text-4xl mb-4">{amenity.icon}</div>
                  <h5 className="text-lg font-semibold text-gray-800 mb-2">
                    {amenity.title}
                  </h5>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {amenity.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="text-center mt-8 md:mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              viewport={{ once: true }}>
              <p className="text-lg text-gray-700 font-medium">
                Every detail has been thoughtfully considered to ensure your
                stay exceeds expectations and creates lasting memories.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
