"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from './ui/carousel';
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

const ClientsSection = () => {
  const [clientsApi, setClientsApi] = useState<CarouselApi | undefined>(undefined);

  useEffect(() => {
    if (!clientsApi) return;
    const id = setInterval(() => {
      clientsApi.scrollNext();
    }, 3000);
    return () => clearInterval(id);
  }, [clientsApi]);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4 text-foreground">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We&apos;re proud to have collaborated with some of the most prestigious companies in the UAE construction and development sector.
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
      </div>
    </section>
  );
};

export default ClientsSection;
