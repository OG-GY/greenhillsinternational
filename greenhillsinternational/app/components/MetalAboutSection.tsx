'use client';

import { Globe, Zap, Shield } from 'lucide-react';

type Props = {
  eyebrow?: string;
  title?: string;
  paragraphs?: string[];
  highlight?: string;
};

const defaultParagraphs = [
  "Green Hills Metals & Its Products Trading L.L.C. is a UAE-headquartered international trading company specializing in metals, industrial materials, and comprehensive scrap trading. With a strong operational presence in Dubai – a global commodities hub – we partner with leading manufacturers, smelters, recyclers, and suppliers to deliver high-quality metals and industrial inputs worldwide.",
  "Our portfolio includes ferrous and non-ferrous metals, steel products, metal ores, cargo containers, industrial packaging, and a complete range of scrap and recycled materials. By combining transparent sourcing, technical expertise, and sustainable practices, we ensure reliable supply chains and long-term value for clients across global markets.",
];

export default function MetalAboutSection({
  eyebrow = 'About Green Hills Metals',
  title = 'International Trading Excellence',
  paragraphs = defaultParagraphs,
  highlight = 'Dubai',
}: Props) {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-luxury-gold/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
              <div className="w-2 h-2 rounded-full bg-luxury-gold" />
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">
                {eyebrow}
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6 text-foreground">
              {title}
            </h2>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent to-luxury-gold w-12" />
              <div className="w-2 h-2 rounded-full bg-luxury-gold" />
              <div className="h-px bg-gradient-to-l from-transparent to-luxury-gold w-12" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 mb-12">
            {paragraphs.map((paragraph, index) => {
              // Highlight specific word if provided
              if (highlight && paragraph.includes(highlight)) {
                const parts = paragraph.split(highlight);
                return (
                  <p
                    key={index}
                    className="text-muted-foreground text-lg leading-relaxed hover:text-foreground transition-colors duration-300"
                  >
                    {parts[0]}
                    <span className="text-luxury-gold font-semibold">{highlight}</span>
                    {parts[1]}
                  </p>
                );
              }

              return (
                <p
                  key={index}
                  className="text-muted-foreground text-lg leading-relaxed hover:text-foreground transition-colors duration-300"
                >
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 pt-12 border-t border-border/30">
            {/* Feature 1 */}
            <div className="group relative p-6 rounded-lg border border-border/50 bg-muted/30 hover:border-luxury-gold/50 hover:bg-muted/50 transition-all duration-300">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-luxury-gold to-transparent rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent transition-all duration-300">
                <Globe className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                Global Presence
              </h3>
              <p className="text-sm text-muted-foreground">
                UAE-headquartered with reach across international commodity markets
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group relative p-6 rounded-lg border border-border/50 bg-muted/30 hover:border-luxury-gold/50 hover:bg-muted/50 transition-all duration-300">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-luxury-gold to-transparent rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent transition-all duration-300">
                <Zap className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                Technical Expertise
              </h3>
              <p className="text-sm text-muted-foreground">
                Industry specialists with deep knowledge of metals and materials
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group relative p-6 rounded-lg border border-border/50 bg-muted/30 hover:border-luxury-gold/50 hover:bg-muted/50 transition-all duration-300">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-luxury-gold to-transparent rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent transition-all duration-300">
                <Shield className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                Reliable Supply
              </h3>
              <p className="text-sm text-muted-foreground">
                Consistent quality and transparent sourcing for long-term partnerships
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
