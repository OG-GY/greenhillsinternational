import { Metadata } from 'next';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { ContactForm } from '@/app/components/ContactForm';
import { ContactInfo } from '@/app/components/ContactInfo';

export const metadata: Metadata = {
  title: 'Contact Us | Green Hills International',
  description: 'Get in touch with Green Hills International. Contact our construction and metal trading teams for quotes, inquiries, and partnership opportunities.',
  keywords: ['contact', 'inquiry', 'quote', 'construction services', 'metal trading', 'support'],
  openGraph: {
    title: 'Contact Us | Green Hills International',
    description: 'Reach out to our team for construction and metal trading inquiries. Call +971 55 334 4874 or email us today.',
    type: 'website',
  },
};

const ContactUs = () => {

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-primary">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary" />
        <div className="relative z-10 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-serif font-light mb-4">Contact Us</h1>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-serif font-light mt-4 mb-6">
              Have Questions or Need a Quote?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We&apos;re just a call or message away! Reach out to us anytime, and our team will assist you promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Info */}
            <ContactInfo />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;