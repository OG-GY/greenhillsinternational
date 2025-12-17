"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { usePathname } from 'next/navigation';

interface DynamicNavigationProps {
  /**
   * If true (default) the navbar will switch from transparent -> blue when the page is scrolled.
   * If false, the navbar will always have the blue background.
   */
  changeOnScroll?: boolean;
}

const DynamicNavigation = ({ changeOnScroll = true }: DynamicNavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Determine configuration based on current path
  const getNavConfig = () => {
    // Metal pages
    if (pathname.startsWith('/metal')) {
      return {
        brandTitle: 'Green Hills International',
        brandSubtitle: 'METALS & TRADING',
        links: [
          { label: 'Home', href: '/' },
          { label: 'About Metals', href: '/metal' },
          { label: 'Trading Services', href: '/metal#services' },
          { label: 'Sustainability', href: '/metal#sustainability' },
          { label: 'Contact', href: '/contact' },
        ]
      };
    }
    
    // Construction pages
    if (pathname.startsWith('/construction')) {
      return {
        brandTitle: 'Green Hills International',
        brandSubtitle: 'CONSTRUCTION',
        links: [
          { label: 'Home', href: '/' },
          { label: 'About Construction', href: '/construction' },
          { label: 'Services', href: '/construction#services' },
          { label: 'Projects', href: '/construction#projects' },
          { label: 'Contact', href: '/contact' },
        ]
      };
    }

    // Default / Home
    return {
      brandTitle: 'Green Hills International',
      brandSubtitle: 'GROUP',
      links: [
        { label: 'About Us', href: '/' },
        { label: 'Construction', href: '/construction' },
        { label: 'Metals', href: '/metal' },
        { label: 'Contact Us', href: '/contact' },
      ]
    };
  };

  const config = getNavConfig();

  // Only attach the scroll listener when changeOnScroll is true. If changeOnScroll is false
  // we want the navbar to always show the blue background and there's no need for a listener.
  useEffect(() => {
    if (!changeOnScroll) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    // run once to set initial state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [changeOnScroll]);

  // showBlue should be true when the navbar must display the solid blue background.
  // If changeOnScroll is false we always show blue; otherwise only when scrolled.
  const showBlue = !changeOnScroll || isScrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showBlue ? 'bg-primary/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-primary-foreground font-serif text-2xl font-bold tracking-wider">
            {config.brandTitle}
            <span className="block text-sm font-light tracking-widest">{config.brandSubtitle}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {config.links.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-primary-foreground text-sm font-medium tracking-wider hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 bg-primary/95 backdrop-blur-md">
            {config.links.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-primary-foreground text-sm font-medium tracking-wider py-2 px-4 hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default DynamicNavigation;
