import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6">
              Let's Build Something Extraordinary
            </h2>
            <p className="text-primary-foreground/80 mb-8 leading-relaxed">
              Whether you're planning a residential project, commercial development, or infrastructure initiative, our team is ready to bring your vision to life.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-primary-foreground/70">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-primary-foreground/70">info@premierconstruction.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Office</h4>
                  <p className="text-primary-foreground/70">
                    123 Construction Avenue<br />
                    Building District, City 12345
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card text-card-foreground p-8 rounded-sm">
            <h3 className="text-2xl font-serif mb-6">Send us a message</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  className="bg-background"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-background"
                />
              </div>
              <Input
                placeholder="Subject"
                className="bg-background"
              />
              <Textarea
                placeholder="Your Message"
                rows={6}
                className="bg-background resize-none"
              />
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold shadow-lg hover:shadow-xl transition-all">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
