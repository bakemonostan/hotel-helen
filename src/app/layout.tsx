import type { Metadata } from "next";
import { Cormorant_Upright, Sora } from "next/font/google";
import "./globals.css";

const cormorantUpright = Cormorant_Upright({
  variable: "--font-cormorant-upright",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Hotel Helen",
  description:
    "Hotel Helen - Nestled in the vibrant and upscale Lekki Phase 1, Hotel Helen offers the perfect blend of comfort, privacy, and convenience. Whether you're in town for business or a relaxing getaway, our well-appointed rooms and inviting spaces promise an exceptional stay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorantUpright.variable} ${sora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
