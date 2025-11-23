'use client';

import { useState } from 'react';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { MetalDomainDetail } from '@/app/lib/metalservicedata';
import { Button } from '@/app/components/ui/button';
import Link from 'next/link';
import { ChevronRight, CheckCircle2, Package, Zap, Building2, Mountain, Container, Cable, Drum } from 'lucide-react';

type Props = {
  domain: MetalDomainDetail;
};

const iconMap = {
  Package,
  Zap,
  Building2,
  Mountain,
  Container,
  Cable,
  Drum,
};

export default function MetalServiceDetailClient({ domain }: Props) {
  const [tabIndex, setTabIndex] = useState(0);

  const IconComponent = iconMap[domain.iconName];
  const tabs = [
    { label: 'Overview', id: 'overview' },
    { label: 'Capabilities', id: 'capabilities' },
    { label: 'Benefits', id: 'benefits' },
    ...(domain.specifications ? [{ label: 'Specifications', id: 'specifications' }] : []),
    { label: 'Applications', id: 'applications' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation  changeOnScroll={false} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-deep-navy to-deep-navy/90">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="w-20 h-20 rounded-lg bg-luxury-gold/20 flex items-center justify-center mb-6 mx-auto border border-luxury-gold/40">
              <IconComponent className="w-10 h-10 text-luxury-gold" />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-light mt-4 mb-6 text-warm-cream">
              {domain.title}
            </h1>
            <p className="text-xl text-warm-cream/80 max-w-3xl mx-auto leading-relaxed">
              {domain.summary}
            </p>
          </div>
        </section>

        {/* Breadcrumb & Navigation */}
        <section className="py-6 bg-background border-b border-border/50">
          <div className="container mx-auto px-4 flex items-center gap-2 text-sm">
            <Link href="/metal" className="text-accent hover:text-accent/80 transition-colors">
              Metal Trading
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">{domain.title}</span>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-foreground">
                  Service Overview
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {domain.description}
                </p>
              </div>

              {/* Tab Navigation */}
              <div className="flex flex-wrap gap-2 mb-12 border-b border-border">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    onClick={() => setTabIndex(index)}
                    className={`px-6 py-3 text-sm font-semibold tracking-widest uppercase transition-all duration-300 border-b-2 ${
                      tabIndex === index
                        ? 'text-accent border-b-accent'
                        : 'text-muted-foreground border-b-transparent hover:text-foreground'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="space-y-8">
                {tabIndex === 0 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-serif text-foreground">Key Highlights</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {domain.benefits.slice(0, 4).map((benefit, i) => (
                        <div key={i} className="flex gap-4">
                          <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                          <p className="text-muted-foreground">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {tabIndex === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-serif text-foreground">Core Capabilities</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {domain.capabilities.map((capability, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-lg bg-muted/50 border border-border/50 hover:border-accent/30 transition-colors"
                        >
                          <div className="flex gap-3">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                            <p className="text-foreground">{capability}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {tabIndex === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-serif text-foreground">Strategic Benefits</h3>
                    <div className="space-y-4">
                      {domain.benefits.map((benefit, i) => (
                        <div key={i} className="flex gap-4 pb-4 border-b border-border/30 last:border-b-0">
                          <CheckCircle2 className="w-6 h-6 text-luxury-gold flex-shrink-0" />
                          <div>
                            <p className="text-foreground font-medium">{benefit}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {tabIndex === 3 && domain.specifications && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-serif text-foreground">Technical Specifications</h3>
                    <div className="space-y-4">
                      {domain.specifications.map((spec, i) => (
                        <div key={i} className="p-4 bg-muted/50 rounded-lg border border-border/50">
                          <div className="flex justify-between items-start">
                            <span className="text-accent font-semibold">{spec.label}</span>
                            <span className="text-foreground text-right">{spec.value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {((tabIndex === 4 && domain.specifications) || (tabIndex === 3 && !domain.specifications)) && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-serif text-foreground">Industry Applications</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {domain.applications.map((app, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-lg bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 hover:border-accent/40 transition-colors"
                        >
                          <p className="text-foreground">{app}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-muted/30 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-foreground">
                Ready to Partner?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact our trading specialists to discuss your {domain.title.toLowerCase()} requirements and explore partnership opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-luxury-gold hover:bg-luxury-gold/90 text-deep-navy font-semibold"
                >
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent/10"
                >
                  <Link href="/metal">View All Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
