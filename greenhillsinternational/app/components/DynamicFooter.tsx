"use client";

import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { usePathname } from 'next/navigation';

const DynamicFooter = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  // Determine footer configuration based on current path
  const getFooterConfig = () => {
    // Metal pages
    if (pathname.startsWith('/metal')) {
      return {
        brandSubtitle: 'Metals & Trading',
        description: 'Premier metal trading company in Dubai & UAE. Ferrous, non-ferrous metals, steel, ores & scrap materials.',
        quickLinks: [
          { label: 'Home', href: '/' },
          { label: 'About Metals', href: '/metal' },
          { label: 'Trading Services', href: '/metal#services' },
          { label: 'Sustainability', href: '/metal#sustainability' },
          { label: 'Contact', href: '/contact' },
        ],
        services: [
          'Ferrous Metals',
          'Non-Ferrous Metals',
          'Scrap Trading',
          'Steel Products',
          'Industrial Materials'
        ]
      };
    }
    
    // Construction pages
    if (pathname.startsWith('/construction')) {
      return {
        brandSubtitle: 'Construction',
        description: 'Building excellence since 2016. We deliver world-class construction projects with innovative design and superior craftsmanship.',
        quickLinks: [
          { label: 'Home', href: '/' },
          { label: 'About Construction', href: '/construction' },
          { label: 'Services', href: '/construction#services' },
          { label: 'Projects', href: '/construction#projects' },
          { label: 'Contact', href: '/contact' },
        ],
        services: [
          'Civil Construction',
          'MEP Services',
          'Infrastructure',
          'Facades',
          'Interior Fit-out'
        ]
      };
    }

    // Default / Home
    return {
      brandSubtitle: 'International',
      description: 'Leading construction and metal trading company in UAE. Premium building projects and global supply chain solutions.',
      quickLinks: [
        { label: 'About Us', href: '/' },
        { label: 'Construction', href: '/construction' },
        { label: 'Metals', href: '/metal' },
        { label: 'Contact', href: '/contact' },
      ],
      services: [
        'Construction Services',
        'Metal Trading',
        'Scrap Trading',
        'MEP Services',
        'Industrial Materials'
      ]
    };
  };

  const config = getFooterConfig();

  return (
    <footer className="bg-primary/95 text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Green Hills 
              <span className="block text-sm font-light tracking-widest mt-1">{config.brandSubtitle}</span>
            </h3>
            <p className="text-primary-foreground/70 mb-4 max-w-md">
              {config.description}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/greenhillsinternational"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/greenhillsinternational"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/green-hills-international-construction"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/greenhillsintl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {config.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Key Services</h4>
            <ul className="space-y-2">
              {config.services.map((service) => (
                <li key={service} className="text-primary-foreground/70">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Green Hills International. All rights reserved.
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

export default DynamicFooter;
