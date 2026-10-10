import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import EngineeringSection from "@/components/EngineeringSection";
import TeamSection from "@/components/TeamSection";
import SponsorsSection from "@/components/SponsorsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <MissionSection />
      <EngineeringSection />
      <TeamSection />
      <SponsorsSection />
      <ContactSection />
    </main>
  );
}
