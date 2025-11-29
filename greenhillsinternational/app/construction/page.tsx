import { Metadata } from 'next';
import { Toaster } from "../components/ui/toaster";
import HeroCarousel from "../components/HeroCarousel";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialSection";
import BookAppointment from "../components/BookAppointment"

export const metadata: Metadata = {
  title: 'Construction Services | Green Hills International',
  description: 'Professional construction services in UAE including civil construction, MEP services, infrastructure, and facades. Award-winning contractor delivering world-class projects.',
  keywords: ['construction services', 'civil construction', 'MEP services', 'infrastructure', 'facades', 'Dubai construction', 'building contractor'],
  openGraph: {
    title: 'Construction Services | Green Hills International',
    description: 'Expert construction contractor offering comprehensive building solutions including design, MEP, and project management.',
    type: 'website',
  },
};

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
