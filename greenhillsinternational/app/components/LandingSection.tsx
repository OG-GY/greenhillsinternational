import { Building2, Hammer, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import landingHero from '@/app/assets/landing-hero.jpg';
import constructionExcellence from '@/app/assets/construction-excellence.jpg';
import metalExcellence from '@/app/assets/metal-excellence.jpg';
import Link from 'next/link';
import Image from 'next/image';

const LandingSection = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* helper to get src from imported image (handles string or StaticImageData) */}
        {/* avoid using `any` to satisfy ESLint */}
        {/**/}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${(() => {
              if (!landingHero) return "";
              if (typeof landingHero === "string") return landingHero;
              const asObj = landingHero as { src?: string };
              return asObj.src ?? "";
            })()})`,
          }}
        />

        {/* Overlay between background and content */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-black/25 to-black/60 pointer-events-none" />

        <div className="relative h-full flex items-center justify-center z-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-primary-foreground mb-6 animate-fade-in">
              Building Excellence
            </h1>
              <p className="text-xl md:text-3xl text-white/95 mb-12 max-w-3xl mx-auto animate-fade-in drop-shadow-lg">
                Two Specialized Divisions. One Commitment to Quality.
              </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
              <Button asChild size="lg" variant="luxury" className="text-lg">
                <Link href="/construction">
                  <Building2 className="mr-2 h-5 w-5" />
                  Construction Division
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20">
                <Link href="/metal">
                  <Hammer className="mr-2 h-5 w-5" />
                  Metal Division
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '25+', label: 'Years Experience' },
              { number: '500+', label: 'Projects Completed' },
              { number: '2', label: 'Specialized Divisions' },
              { number: '100%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-serif text-accent mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Division Section */}
      <section className="py-24 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-2 bg-accent/10 rounded-sm mb-6">
                <span className="text-accent font-semibold">CONSTRUCTION DIVISION</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">
                Comprehensive Construction Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From design to completion, our construction division delivers world-class projects across residential, commercial, and industrial sectors. With cutting-edge technology and experienced professionals, we bring your vision to life.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Design-Build & Architectural Services',
                  'Commercial & Residential Construction',
                  'MEP Systems & Smart Solutions',
                  'Interior Fitout & Landscaping',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" variant="luxury">
                <Link href="/construction">
                  Explore Construction
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl">
                <Image
                  src={constructionExcellence}
                  alt="Construction Excellence"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metal Division Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl">
                <Image
                  src={metalExcellence}
                  alt="Metal Excellence"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div>
              <div className="inline-block px-4 py-2 bg-accent/10 rounded-sm mb-6">
                <span className="text-accent font-semibold">METAL DIVISION</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">
                Precision Metal Fabrication
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our specialized metal division combines traditional craftsmanship with modern technology. From structural steel to custom architectural metalwork, we deliver precision-engineered solutions that stand the test of time.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Structural Steel Fabrication',
                  'Architectural Metal Work',
                  'Custom Metal Cladding',
                  'Precision Metalwork Solutions',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" variant="luxury">
                <Link href="/metal">
                  Explore Metal Division
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Ready to Build Your Vision?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Whether you need comprehensive construction services or specialized metal fabrication, we&apos;re here to deliver excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" variant="luxury" className="text-lg">
              <Link href="/construction#contact">
                Get in Touch
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg">
              <Link href="/construction#projects">
                View Our Work
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingSection;