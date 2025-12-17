import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { servicesData } from '@/app/lib/servicedata';
import { metalDomains } from '@/app/lib/metalservicedata';

const Footer = () => {
  const currentYear = 2025;

  return (
    <footer className="bg-primary/95 text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-8 mb-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Green Hills 
              <span className="block text-sm font-light tracking-widest mt-1">International</span>
            </h3>
            <p className="text-primary-foreground/70 mb-4 max-w-md">
              Building excellence since 2016. We deliver world-class construction projects with innovative design and superior craftsmanship.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/construction" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Construction
                </Link>
              </li>
              <li>
                <Link href="/metal" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Metal Trading
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/bookappointment" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-semibold text-lg mb-4">Construction Services</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              {servicesData.map((service) => (
                <li key={service.slug}>
                  <Link 
                    href={`/construction/services/${service.slug}`}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm block"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-semibold text-lg mb-4">Metal Trading</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              {metalDomains.map((domain) => (
                <li key={domain.id}>
                  <Link 
                    href={domain.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm block"
                  >
                    {domain.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Green Hills International Construction. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="/" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
