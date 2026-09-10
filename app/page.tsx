import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoMarquee from "@/components/LogoMarquee";
import AudienceSection from "@/components/AudienceSection";
import SolutionsSection from "@/components/SolutionsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import BottomCTA from "@/components/BottomCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LogoMarquee />
        <AudienceSection />
        <SolutionsSection />
        <TestimonialsSection />
        <ContactForm />
        <BottomCTA />
      </main>
      <Footer />
    </>
  );
}
