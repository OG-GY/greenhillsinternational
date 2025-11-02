"use client";

import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { useToast } from '@/app/hooks/use-toast';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

const ContactUs = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: '', // Add phone field to form if needed
          message: formData.message,
          service: formData.subject,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully. We'll get back to you soon!",
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        toast({
          title: "Error",
          description: data.error || "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Network error. Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

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
            <div className="bg-card p-8 rounded-sm shadow-lg">
              <h3 className="text-2xl font-serif mb-6">Send Us A Message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    className="bg-background"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    className="bg-background"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    className="bg-background"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    className="bg-background resize-none"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full" 
                  variant="luxury" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-card p-8 rounded-sm shadow-lg">
                <h3 className="text-2xl font-serif mb-6">Contact Info</h3>
                
                <div className="space-y-6">
                  {/* Call Us */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-lg">Call Us</h4>
                      <p className="text-muted-foreground">+971 55 334 4874</p>
                      <p className="text-muted-foreground">+971 50 496 7289</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-lg">Our Email</h4>
                      <p className="text-muted-foreground break-all">info@greenhillsinternational.com</p>
                      <p className="text-muted-foreground break-all">operations@greenhillsinternational.com</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-lg">Our Location</h4>
                      <p className="text-muted-foreground">
                        123 Construction Avenue<br />
                        Building District, City 12345
                      </p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-lg">Working Hours</h4>
                      <p className="text-muted-foreground">Mon-Sun: 10AM-5PM</p>
                      <p className="text-muted-foreground">Friday off</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;