"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from './ui/carousel';
import { Quote } from 'lucide-react';
import { useEffect, useState } from 'react';
import client1 from '../assets/hero-3.jpg';
import client2 from '../assets/clients/client-2.jpg';
import client3 from '../assets/clients/client-3.jpg';
import client4 from '../assets/clients/client-4.jpg';
import client5 from '../assets/clients/client-5.jpg';
import client6 from '../assets/clients/client-6.jpg';
import user1 from '../assets/testimonials/user-1.jpg';
import user2 from '../assets/testimonials/user-2.jpg';
import user3 from '../assets/testimonials/user-3.jpg';
import user4 from '../assets/testimonials/user-4.jpg';
import user5 from '../assets/testimonials/user-5.jpg';
import user6 from '../assets/testimonials/user-6.jpg';
import Image from 'next/image';

const clients = [
  {
    name: 'Premier Construction Group',
    subtitle: 'Leading Construction & Development Partner',
    logo: client1,
  },
  {
    name: 'Real Estate Holdings',
    subtitle: 'Luxury Property Development',
    logo: client2,
  },
  {
    name: 'Industrial Engineering Solutions',
    subtitle: 'Advanced Manufacturing & Engineering',
    logo: client3,
  },
  {
    name: 'Architecture & Design Studio',
    subtitle: 'Contemporary Design Excellence',
    logo: client4,
  },
  {
    name: 'Smart Technology Partners',
    subtitle: 'Innovative Building Solutions',
    logo: client5,
  },
  {
    name: 'Hospitality Group International',
    subtitle: 'Premium Hotel & Resort Development',
    logo: client6,
  },
];

const testimonials = [
  {
    name: 'Ahmed Al-Mansouri',
    role: 'CEO, Premier Construction Group',
    message: 'Green Hills exceeded our expectations with their exceptional attention to detail and commitment to quality. Their team delivered our commercial project on time and within budget.',
    image: user1,
  },
  {
    name: 'Sarah Johnson',
    role: 'Lead Architect, Design Studio',
    message: 'Working with Green Hills has been a game-changer. Their innovative approach to construction and willingness to embrace cutting-edge technology sets them apart from competitors.',
    image: user2,
  },
  {
    name: 'Mohammed Hassan',
    role: 'Project Manager, Industrial Solutions',
    message: 'The professionalism and expertise demonstrated by Green Hills throughout our industrial facility project was outstanding. They truly understand the complexities of large-scale construction.',
    image: user3,
  },
  {
    name: 'Layla Al-Rashid',
    role: 'Director of Operations, Real Estate Holdings',
    message: 'From concept to completion, Green Hills Building Contracting proved to be a reliable partner. Their commitment to sustainable practices and quality craftsmanship is commendable.',
    image: user4,
  },
  {
    name: 'Omar Abdullah',
    role: 'Property Developer',
    message: 'I have worked with many contractors over the years, but Green Hills stands out for their transparency, communication, and ability to deliver exceptional results consistently.',
    image: user5,
  },
  {
    name: 'Fatima Al-Said',
    role: 'CEO, Hospitality Group',
    message: 'Green Hills transformed our vision into reality with their impeccable execution. Their team\'s dedication to excellence and client satisfaction is truly impressive.',
    image: user6,
  },
];

const TestimonialsSection = () => {
  const [clientsApi, setClientsApi] = useState<CarouselApi | undefined>(undefined);
  const [testimonialsApi, setTestimonialsApi] = useState<CarouselApi | undefined>(undefined);

  useEffect(() => {
    if (!clientsApi) return;
    const id = setInterval(() => {
      clientsApi.scrollNext();
    }, 3000);
    return () => clearInterval(id);
  }, [clientsApi]);

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
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4 text-foreground">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We&apot;re proud to have collaborated with some of the most prestigious companies in the UAE construction and development sector.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setClientsApi}
            className="w-full"
          >
            <CarouselContent>
              {clients.map((client, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-6 bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-6">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 text-foreground">
                          {client.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {client.subtitle}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <Image
                        height={500}
                        width={500}
                          src={client.logo}
                          alt={`${client.name} logo`}
                          className="w-20 h-20 object-contain rounded-lg"
                        />
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

        {/* User Testimonials */}
        <div className="mt-16">
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
                        "{testimonial.message}"
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