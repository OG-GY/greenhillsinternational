import { Toaster } from "../components/ui/toaster";
import HeroCarousel from "../components/HeroCarousel";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialSection";
import BookAppointment from "../components/BookAppointment"

export default function Construction() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navigation />
      <main className="overflow-x-hidden">
        <HeroCarousel />
        <AboutSection />
        <ServicesSection />
        {/* <ExpertiseSection /> */}
        <ProjectsSection />
        <TestimonialsSection />
        {/* <ContactSection /> */}
        <BookAppointment/>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
