"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(
  ({
    src,
    index,
    hovered,
    setHovered,
  }: {
    src: string;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <img
        src={src}
        alt="Hotel amenity"
        className="object-cover absolute inset-0 w-full h-full"
      />
    </div>
  )
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: string[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((src, index) => (
        <Card
          key={index}
          src={src}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
