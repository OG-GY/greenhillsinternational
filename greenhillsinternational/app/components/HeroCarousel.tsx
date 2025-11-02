"use client";

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import hero1 from '../assets/hero-1.jpg';
import hero2 from '../assets/hero-2.jpg';
import hero3 from '../assets/hero-3.jpg';

const slides = [
  {
    image: hero1,
    title: 'A Legacy',
    subtitle: 'Built on Quality.',
  },
  {
    image: hero2,
    title: 'Delivering Functional',
    subtitle: 'and World-Class Projects.',
  },
  {
    image: hero3,
    title: 'Ground-Breaking Innovation',
    subtitle: 'with Robust Engineering.',
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0  transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className=''>

          </div>
          <div
            className="absolute inset-0  bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image.src})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
          
          <div className="relative h-full flex items-center justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-primary-foreground mb-4 animate-fade-in ml-16">
                  {slide.title}
                </h1>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-primary-foreground animate-fade-in ml-16">
                  {slide.subtitle}
                </h2>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground transition-all backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground transition-all backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? 'w-12 bg-accent' : 'w-2 bg-primary-foreground/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
