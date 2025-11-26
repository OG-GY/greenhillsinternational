import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface ServiceDetailLayoutProps {
  children: ReactNode;
  title: string;
}

const ServiceDetailLayout = ({ children, title }: ServiceDetailLayoutProps) => {

  return (
    <div className="min-h-screen flex flex-col">
      {/* Force the navbar to always show the blue background on service detail pages */}
      <Navigation changeOnScroll={false} />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-deep-navy to-deep-navy/90 py-24">
          <div className="container mx-auto px-4">
            {/* <Button 
              variant="ghost" 
              className="mb-8 text-warm-cream hover:text-luxury-gold"
            //   onClick={() => navigate('/')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button> */}
            <div className="max-w-4xl">
              {/* <span className="text-luxury-gold text-sm font-semibold tracking-widest uppercase">{subtitle}</span> */}
              <h1 className="text-4xl md:text-6xl font-serif font-light mt-2 mb-0 text-warm-cream">
                {title}
              </h1>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetailLayout;
