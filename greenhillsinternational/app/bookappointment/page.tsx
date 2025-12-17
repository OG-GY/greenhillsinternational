import { ContactForm } from '@/app/components/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book Appointment | Green Hills International',
  description: 'Book an appointment with Green Hills International.',
};

export default function BookAppointmentPage() {
  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-primary">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary" />
        <div className="relative z-10 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-serif font-light mb-4">Book an Appointment</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Ready to Start?</span>
            <h2 className="text-3xl md:text-4xl font-serif font-light mt-4 mb-6">
              Schedule Your Consultation
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Fill out the form below to book an appointment with our experts. We look forward to discussing your project requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
