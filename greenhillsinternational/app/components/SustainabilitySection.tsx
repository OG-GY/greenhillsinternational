'use client';

import { Leaf, CheckCircle2 } from 'lucide-react';

type SustainabilityItem = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

type Props = {
  items?: SustainabilityItem[];
  eyebrow?: string;
  title?: string;
};

const defaultItems: SustainabilityItem[] = [
  {
    title: 'Environmental Excellence',
    description:
      'We prioritize recycled and reusable materials, reducing environmental impact while ensuring supply chain resilience. Non-ferrous metals can be recycled indefinitely without losing quality, and recycling aluminium saves about 95% of the energy compared to producing new metal.',
    icon: <Leaf className="w-6 h-6" />,
  },
  {
    title: 'Quality Assurance',
    description:
      'We adhere to international quality management standards including ISO 9001 to ensure consistency and customer satisfaction. All products are inspected and certified to meet ASTM, DIN or other applicable industry specifications.',
    icon: <CheckCircle2 className="w-6 h-6" />,
  },
];

export default function SustainabilitySection({
  items = defaultItems,
  eyebrow = 'Our Commitment',
  title = 'Sustainability & Responsible Trading',
}: Props) {
  return (
    <section className="py-24 bg-background border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">
              {eyebrow}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6 text-foreground">
              {title}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-luxury-gold to-transparent mx-auto"></div>
          </div>

          {/* Items Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-lg border border-border/50 bg-muted/30 hover:border-luxury-gold/50 hover:bg-muted/50 transition-all duration-300 hover:shadow-lg"
              >
                {/* Decorative accent */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-luxury-gold to-transparent rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                {item.icon && (
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    {item.icon}
                  </div>
                )}

                {/* Content */}
                <h3 className="text-2xl font-serif font-light text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {/* Subtle bottom accent on hover */}
                <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-luxury-gold group-hover:w-12 transition-all duration-300 rounded-full" />
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 pt-16 border-t border-border/30 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-serif font-light text-accent mb-2">95%</div>
              <p className="text-sm text-muted-foreground">Energy saved recycling vs. new production</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-light text-accent mb-2">ISO 9001</div>
              <p className="text-sm text-muted-foreground">Certified quality management standards</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-serif font-light text-accent mb-2">∞</div>
              <p className="text-sm text-muted-foreground">Non-ferrous metals recyclability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
