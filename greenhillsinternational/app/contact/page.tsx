import { Metadata } from 'next';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { ContactForm } from '@/app/components/ContactForm';
import { ContactInfo } from '@/app/components/ContactInfo';

export const metadata: Metadata = {
  title: 'Contact Us | Green Hills International',
  description: 'Connect with Green Hills International today. Get quotes & support for construction & metal trading. Call +971 55 334 4874 or email us now.',
  keywords: ['contact', 'inquiry', 'quote', 'construction services', 'metal trading', 'support'],
  openGraph: {
    type: 'website',
    url: 'https://greenhillsinternational.com/contact',
    title: 'Contact Us | Green Hills International',
    description: 'Reach our construction & metal trading teams. Get expert support, quotes & partnership opportunities.',
    siteName: 'Green Hills International',
    locale: 'en_AE',
    images: [
      {
        url: 'https://greenhillsinternational.com/og/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Green Hills International',
        type: 'image/png',
      },
      {
        url: 'https://greenhillsinternational.com/og/og-contact.jpg',
        width: 800,
        height: 420,
        alt: 'Contact Us',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Green Hills International',
    description: 'Reach our teams. Get expert support, quotes & partnership opportunities.',
    images: ['https://greenhillsinternational.com/og/og-contact.jpg'],
  },
  alternates: {
    canonical: 'https://greenhillsinternational.com/contact',
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