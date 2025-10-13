import { Building2, Hammer, Layers, Home, Sparkles, TreesIcon } from 'lucide-react';

const expertiseAreas = [
  {
    icon: Building2,
    title: 'Civil Construction',
    description: 'Comprehensive civil engineering solutions with precision and innovation.',
  },
  {
    icon: Hammer,
    title: 'MEP Services',
    description: 'Mechanical, Electrical, and Plumbing excellence for modern infrastructures.',
  },
  {
    icon: TreesIcon,
    title: 'Infrastructure & Landscaping',
    description: 'Creating sustainable environments that blend functionality with aesthetics.',
  },
  {
    icon: Layers,
    title: 'Facades',
    description: 'Cutting-edge facade systems that define architectural excellence.',
  },
  {
    icon: Home,
    title: 'Modular Construction',
    description: 'Innovative modular solutions for faster, efficient project delivery.',
  },
  {
    icon: Sparkles,
    title: 'Interior Fit-outs',
    description: 'Luxury interior solutions that transform spaces into experiences.',
  },
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6 text-foreground">
            Comprehensive Construction Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From concept to completion, we deliver excellence across every aspect of construction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                className="group bg-card p-8 rounded-sm border border-border hover:border-accent transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <Icon className="h-7 w-7 text-accent group-hover:text-accent-foreground" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">{area.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
