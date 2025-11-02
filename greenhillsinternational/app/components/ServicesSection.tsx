import { Building2, Hammer, Layers, Zap, Paintbrush, Home, Trees, Shield, Package, Wrench, HardHat, Scissors, Lightbulb, HeartHandshake } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import Link from 'next/link';
import { servicesData } from '../lib/servicedata';


type ServiceIconMap = Record<string, React.ComponentType<{ className?: string }>>;

const services = servicesData.map((s) => {
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
  return {
    icon: iconMap[s.slug] ?? Building2,
    title: s.title,
    summary: s.summary,
    path: `/construction/services/${s.slug}`
  };
});

const ServicesSection = () => {

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6 text-foreground">
            Comprehensive Construction Services
          </h2>
          <p className="text-muted-foreground text-lg">
            From concept to completion, we deliver excellence across all aspects of construction and building services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
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
                    <Link href={service.path}>Learn More</Link>
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
