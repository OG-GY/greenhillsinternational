"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from './ui/carousel';
import { Quote } from 'lucide-react';
import { useEffect, useState } from 'react';
import client1 from '../assets/hero-3.jpg';
import client2 from '../assets/clients/Binghatti.jpg';
import client3 from '../assets/clients/CircleMall.jpg';
import client4 from '../assets/clients/CityCentre.jpg';
import client5 from '../assets/clients/Damac.jpg';
import client6 from '../assets/clients/DubaiMall.jpg';
import client7 from '../assets/clients/Emaar.jpg';
import client8 from '../assets/clients/MAG.jpg';
import client9 from '../assets/clients/MAG2.jpg';
import client10 from '../assets/clients/RIT.jpg';
import client11 from '../assets/clients/RTA.jpg';
import client12 from '../assets/clients/Sheikh.jpg';
import client13 from '../assets/clients/TheAddress.jpg';
import client14 from '../assets/clients/TheVilla.jpg';
import client15 from '../assets/clients/VillaPalm.jpg';
import user1 from '../assets/testimonials/user-1.jpg';
import user2 from '../assets/testimonials/user-2.jpg';
import user3 from '../assets/testimonials/user-3.jpg';
import user4 from '../assets/testimonials/user-4.jpg';
import user5 from '../assets/testimonials/user-5.jpg';
import user6 from '../assets/testimonials/user-6.jpg';
import user7 from '../assets/testimonials/user7.jpeg';
import user8 from '../assets/testimonials/user8.jpeg';
import Image from 'next/image';

// Build clients list from imported image names. This uses the imported image object's
// `src` (when available) to derive a readable company name (e.g. "client-2" -> "Client 2").
function humanizeFilename(src?: string) {
  if (!src) return "Client";
  const parts = src.split("/");
  const file = parts[parts.length - 1] || src;
  const base = file.split(".")[0];
  return base
    .replace(/[_-]+/g, " ")
    .split(" ")
    .map((w) => (w.length ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}

const clientLogos = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
  client10,
  client11,
  client12,
  client13,
  client14,
  client15,
];

function getImageSrc(img: unknown): string | undefined {
  if (!img) return undefined;
  if (typeof img === "string") return img;
  if (typeof img === "object" && img !== null && "src" in img) {
    const asObj = img as { src?: string };
    return asObj.src;
  }
  return undefined;
}

const clients = clientLogos.map((logo) => ({
  name: humanizeFilename(getImageSrc(logo)),
  subtitle: "Our Trusted Partner",
  logo,
}));

const testimonials = [
  {
    name: 'Sheikh Mohammed bin hammad bin tahnoon al nahyan​​',
    role: 'CEO, Premier Construction Group',
    message: 'GKBC delivered exceptional quality on our home renovation. Their work was timely, professional, and within budget.​',
    image: user8,
  },
    {
    name: 'Sheikh Khalifa bin Tahnoon bin mohammed al nahyan​​',
    role: 'CEO, Premier Construction Group',
    message: 'We hired them for a commercial project and were impressed by their clear communication and attention to detail. A reliable team that truly stands by their promises!',
    image: user7,
  },
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
    {
    name: 'Khalil Ahmad',
    role: 'Property Developer',
    message: 'I have worked with many contractors over the years, but Green Hills stands out for their transparency, communication, and ability to deliver exceptional results consistently.',
    image: user5,
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
            We&amp;apos;re proud to have collaborated with some of the most prestigious companies in the UAE construction and development sector.
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