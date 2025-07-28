import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExploreSection from "@/components/ExploreSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ExploreSection />
    </main>
  );
}
