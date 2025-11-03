"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from './ui/carousel';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAllProjects } from '@/app/lib/projectsData';

const allProjects = getAllProjects();

// Duplicate slides to guarantee seamless infinite experience across breakpoints
const infiniteProjects = [...allProjects, ...allProjects, ...allProjects];

const ProjectsSection = () => {
  const [projectsApi, setProjectsApi] = useState<CarouselApi | undefined>(undefined);

  useEffect(() => {
    if (!projectsApi) return;
    const id = setInterval(() => {
      projectsApi.scrollNext();
    }, 3000);
    return () => clearInterval(id);
  }, [projectsApi]);

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6 text-foreground">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our portfolio of exceptional projects that showcase our commitment to quality and innovation.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setProjectsApi}
            className="w-full"
          >
            <CarouselContent>
              {infiniteProjects.map((project, index) => (
                <CarouselItem key={`proj-${index}`} className="md:basis-1/2 lg:basis-1/3">
                  <Link href={`/projects/${project.id}`}>
                    <div className="group relative overflow-hidden rounded-sm cursor-pointer">
                      <div className="relative h-[400px] overflow-hidden">
                        <Image
                          src={project.heroImage}
                          height={500}
                          width={500}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-primary-foreground transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-accent text-xs font-semibold tracking-widest uppercase mb-2 block">
                          {project.category}
                        </span>
                        <h3 className="text-2xl font-serif font-semibold mb-2">{project.title}</h3>
                        <p className="text-primary-foreground/80 text-sm">{project.location}</p>
                      </div>
                    </div>
                  </Link>
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

export default ProjectsSection;