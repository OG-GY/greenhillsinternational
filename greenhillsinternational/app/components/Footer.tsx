import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary/95 text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Green Hills 
              <span className="block text-sm font-light tracking-widest mt-1">International</span>
            </h3>
            <p className="text-primary-foreground/70 mb-4 max-w-md">
              Building excellence since 2016. We deliver world-class construction projects with innovative design and superior craftsmanship.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#expertise" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Our Expertise
                </a>
              </li>
              <li>
                <a href="#projects" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-primary-foreground/70">Civil Construction</li>
              <li className="text-primary-foreground/70">MEP Services</li>
              <li className="text-primary-foreground/70">Infrastructure</li>
              <li className="text-primary-foreground/70">Facades</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Green Hills International Construction. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
