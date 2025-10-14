import Image, { type StaticImageData } from "next/image";

interface AlternatingSectionProps {
  title: string;
  description: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  reverse?: boolean;
}

const AlternatingSection = ({ title, description, imageSrc, imageAlt, reverse = false }: AlternatingSectionProps) => {
  return (
    <section className={`py-16 ${reverse ? 'bg-muted/30' : 'bg-background'}`}>
      <div className="container mx-auto px-4">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
          {/* Text Content */}
          <div className={`space-y-6 ${reverse ? 'md:order-2' : 'md:order-1'}`}>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground">
              {title}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {description}
            </p>
          </div>

          {/* Image */}
          <div className={`${reverse ? 'md:order-1' : 'md:order-2'}`}>
            <div className="relative overflow-hidden rounded-sm shadow-lg aspect-video">
              <Image
                src={imageSrc} 
                height={300}
                width={300}
                alt={imageAlt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlternatingSection;
