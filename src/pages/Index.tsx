import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { EnvironmentalServices } from "@/components/EnvironmentalServices";
import { GeneralServices } from "@/components/GeneralServices";
import { StatsSection } from "@/components/StatsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EnvironmentalServices />
      <GeneralServices />
      <StatsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
