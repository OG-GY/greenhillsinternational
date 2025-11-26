"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface NavigationProps {
  /**
   * If true (default) the navbar will switch from transparent -> blue when the page is scrolled.
   * If false, the navbar will always have the blue background.
   */
  changeOnScroll?: boolean;
}

const Navigation = ({ changeOnScroll = true }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const navItems = [
    { label: 'About Us', href: '/' },
    { label: 'Construction', href: '/construction' },
    { label: 'Construction Services', href: '/construction#services' },
    { label: 'Metals', href: '/metal' },
    { label: 'Metals Services', href: '/metal#services' },
    { label: 'Contact Us', href: '/contact' },
  ];

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
            Green Hills International
            <span className="block text-sm font-light tracking-widest">CONSTRUCTION</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-primary-foreground text-sm font-medium tracking-wider hover:text-accent transition-colors"
              >
                {item.label}
              </a>
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
          <div className="md:hidden py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-primary-foreground text-sm font-medium tracking-wider py-2 hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
