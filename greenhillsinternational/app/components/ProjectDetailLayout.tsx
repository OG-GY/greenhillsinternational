import { ReactNode } from 'react';
import Image, { StaticImageData } from 'next/image';

interface ProjectDetailLayoutProps {
  children: ReactNode;
  title: string;
  category: string;
  location: string;
  heroImage: StaticImageData | string;
}

const ProjectDetailLayout = ({ 
  children, 
  title, 
  category, 
  location, 
  heroImage 
}: ProjectDetailLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-1">
        {/* Hero Section with Background Image */}
        <section className="relative h-[60vh] min-h-[500px] w-full">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          
          {/* Content */}
          <div className="relative h-full flex items-end">
            <div className="container mx-auto px-4 pb-16">
              <div className="max-w-4xl">
                <span className="text-accent text-sm font-semibold tracking-widest uppercase inline-block mb-4">
                  {category}
                </span>
                <h1 className="text-4xl md:text-6xl font-serif font-light mb-4 text-white">
                  {title}
                </h1>
                <p className="text-white/90 text-lg flex items-center gap-2">
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                    />
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                    />
                  </svg>
                  {location}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        {children}
      </main>
    </div>
  );
};

export default ProjectDetailLayout;
