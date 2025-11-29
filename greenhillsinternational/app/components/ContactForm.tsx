"use client";

import { useState, FormEvent } from 'react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { useToast } from '@/app/hooks/use-toast';

export const ContactForm = () => {
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
  );
};
