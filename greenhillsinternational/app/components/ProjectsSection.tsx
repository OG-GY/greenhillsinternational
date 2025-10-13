import hero1 from '../assets/hero-1.jpg';
import hero2 from '../assets/hero-2.jpg';
import hero3 from '../assets/hero-3.jpg';
import ConstructionExcellence from "@/app/assets/construction-excellence.jpg"
import Image from 'next/image';

const projects = [
  {
    image: hero1,
    title: 'Luxury Residential Tower',
    category: 'Residential',
    location: 'Downtown District',
  },
  {
    image: hero2,
    title: 'Corporate Headquarters',
    category: 'Commercial',
    location: 'Business Park',
  },
  {
    image: hero3,
    title: 'Premium Penthouse',
    category: 'Residential',
    location: 'Waterfront',
  },
  {
    image: ConstructionExcellence,
    title: 'Mixed-Use Development',
    category: 'Mixed-Use',
    location: 'City Center',
  },
];

const ProjectsSection = () => {
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

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-sm cursor-pointer"
            >
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src={project.image}
                  height={100}
                  width={100}
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
