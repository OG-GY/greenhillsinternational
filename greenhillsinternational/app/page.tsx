import { Toaster } from "./components/ui/toaster";
import HeroCarousel from "./components/HeroCarousel";
import AboutSection from "./components/AboutSection";
import ExpertiseSection from "./components/ExpertiseSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroCarousel />
        <AboutSection />
        <ServicesSection/>
        <TestimonialsSection/>
        {/* <ExpertiseSection /> */}
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
