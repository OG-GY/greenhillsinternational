import constructionExcellence from "../assets/construction-excellence.jpg"
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-6">
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">Since 1995</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-foreground">
              A Passion for Quality, Innovation and Excellence
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A people-driven company with a passion to redefine quality standards in the region, Premier Construction is a leading construction firm, shaping the industry with state-of-the-art craft and cutting-edge practices.
              </p>
              <p>
                Drawing inspiration from quality-driven industries worldwide, our processes and techniques blend seamlessly to produce world-class and futuristic projects that stand the test of time.
              </p>
              <p>
                With over 25 years of experience, we've built a legacy of excellence through superior craftsmanship, innovative engineering solutions, and an unwavering commitment to our clients' visions.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-2xl font-serif mb-4 text-foreground">Inspiring Generations Through Excellence</h3>
              <p className="text-muted-foreground">
                Our commitment extends beyond construction. We're building landmarks that will inspire future generations while contributing to sustainable urban development.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-sm">
              <Image
                src={constructionExcellence}
                height={100}
                width={100}
                alt="Construction excellence showcasing our quality work"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-8 rounded-sm shadow-2xl">
              <div className="text-5xl font-serif font-bold">25+</div>
              <div className="text-sm font-semibold tracking-wider uppercase mt-1">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
