import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExploreSection from "@/components/ExploreSection";
import OurRooms from "@/components/OurRooms";
import OurServiceSection from "@/components/OurServiceSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ExploreSection />
      <OurRooms />
      <OurServiceSection />
      <FooterSection />
    </main>
  );
}
