"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from './ui/carousel';
import { Quote } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

export interface Testimonial {
  name: string;
  role: string;
  message: string;
  image: StaticImageData | string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
  const [testimonialsApi, setTestimonialsApi] = useState<CarouselApi | undefined>(undefined);

  useEffect(() => {
    if (!testimonialsApi) return;
    const id = setInterval(() => {
      testimonialsApi.scrollNext();
    }, 4000);
    return () => clearInterval(id);
  }, [testimonialsApi]);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* User Testimonials */}
        <div className="">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-bold mb-4 text-foreground">
              What Our Clients Say
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear from the people who have experienced our commitment to excellence firsthand.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              setApi={setTestimonialsApi}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-6 bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                      <Quote className="w-8 h-8 text-primary mb-4" />
                      <p className="text-muted-foreground mb-6 flex-grow italic">
                        &quot;{testimonial.message}&quot;
                      </p>
                      <div className="flex items-center gap-4 mt-auto">
                        <Image
                        height={500}
                        width={500}
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 -translate-x-12" />
              <CarouselNext className="right-0 translate-x-12" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;