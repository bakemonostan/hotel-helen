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
          </div>
        );
      })}
    </>
  );
};

const roomData = [
  {
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    title: "Deluxe Suite",
    category: "Luxury",
    content: <RoomContent roomType="Deluxe Suite" />,
  },
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "Executive Room",
    category: "Business",
    content: <RoomContent roomType="Executive Room" />,
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "Family Suite",
    category: "Family",
    content: <RoomContent roomType="Family Suite" />,
  },
  {
    src: "https://images.unsplash.com/photo-1578774204375-826dc5d996ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    title: "Presidential Suite",
    category: "Ultimate Luxury",
    content: <RoomContent roomType="Presidential Suite" />,
  },
  {
    src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "Garden View Room",
    category: "Relaxation",
    content: <RoomContent roomType="Garden View Room" />,
  },
  {
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Honeymoon Suite",
    category: "Romance",
    content: <RoomContent roomType="Honeymoon Suite" />,
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
      </div>
    </section>
  );
}
