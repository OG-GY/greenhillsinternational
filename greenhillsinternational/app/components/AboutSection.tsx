import Image, { StaticImageData } from "next/image";
import { Globe } from 'lucide-react';

interface AboutSectionProps {
  since?: string;
  title: string;
  paragraphs: React.ReactNode[];
  highlightTitle: string;
  highlightText: React.ReactNode;
  image: StaticImageData | string;
  stats: {
    value: string;
    label: string;
  };
}

const AboutSection = ({
  since = "Since 2016",
  title,
  paragraphs,
  highlightTitle,
  highlightText,
  image,
  stats
}: AboutSectionProps) => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-6">
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">{since}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-foreground">
              {title}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {paragraphs.map((paragraph, index) => (
                <div key={index}>{paragraph}</div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="h-8 w-8 text-accent" />
                <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground">
                  {highlightTitle}
                </h2>
              </div>
              <div className="text-muted-foreground leading-relaxed">
                {highlightText}
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-sm">
              <Image
                src={image}
                height={500}
                width={500}
                alt="Excellence showcasing our quality work"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-8 rounded-sm shadow-2xl">
              <div className="text-5xl font-serif font-bold">{stats.value}</div>
              <div className="text-sm font-semibold tracking-wider uppercase mt-1">{stats.label}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
