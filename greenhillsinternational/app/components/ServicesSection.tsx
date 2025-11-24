import { Building2, Hammer, Layers, Zap, Paintbrush, Home, Trees, Shield, Package, Wrench, HardHat, Scissors, Lightbulb, HeartHandshake } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import Link from 'next/link';
import { servicesData } from '../lib/servicedata';

type ServiceIconMap = Record<string, React.ComponentType<{ className?: string }>>;

export type ServiceItem = {
  icon?: React.ComponentType<{ className?: string }>;
  iconName?: string;
  title: string;
  summary: string;
  path?: string;
};

type Props = {
  list?: ServiceItem[];
  /**
   * Optional heading overrides
   */
  heading?: {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
  };
};

const buildDefaultList = (): ServiceItem[] => {
  const iconMap: ServiceIconMap = {
    construction: Building2,
    design: Hammer,
    structural: Layers,
    mep: Zap,
    interior: Paintbrush,
    facades: Home,
    landscaping: Trees,
    waterproofing: Shield,
    modular: Package,
    maintenance: Wrench,
    temporary: HardHat,
    specialty: Scissors,
    smart: Lightbulb,
    'value-added': HeartHandshake,
  };

  return servicesData.map((s) => ({
    icon: iconMap[s.slug] ?? Building2,
    title: s.title,
    summary: s.summary,
    path: `/construction/services/${s.slug}`,
  }));
};

const ServicesSection = ({ list, heading }: Props) => {
  const items = list ?? buildDefaultList();

  return (
    <section className="py-24 bg-muted/30" id='services'>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">{heading?.eyebrow ?? 'Our Expertise'}</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6 text-foreground">
            {heading?.title ?? 'Comprehensive Construction Services'}
          </h2>
          <p className="text-muted-foreground text-lg">
            {heading?.subtitle ?? 'From concept to completion, we deliver excellence across all aspects of construction and building services.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {items.map((service, index) => {
            let Icon: React.ComponentType<{ className?: string }>;
            
            if (service.icon) {
              Icon = service.icon;
            } else if (service.iconName) {
              // Map iconName string to component
              const iconNameMap: ServiceIconMap = {
                'Package': Package,
                'Zap': Zap,
                'Building2': Building2,
                'Mountain': Building2, // Placeholder
                'Container': Package,
                'Cable': Wrench,
                'Drum': Package,
              };
              Icon = iconNameMap[service.iconName as keyof typeof iconNameMap] ?? Building2;
            } else {
              Icon = Building2;
            }
            
            return (
              <Card 
                key={index} 
                className="group hover:border-accent transition-all duration-300 hover:shadow-xl"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-7 w-7 text-accent group-hover:text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.summary}
                  </p>
                  <Button 
                    asChild
                    variant="outline" 
                    className="w-full group-hover:border-accent group-hover:text-accent cursor-pointer"
                  >
                    <Link href={service.path ?? '#'}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
