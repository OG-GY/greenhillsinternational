import { Calendar } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import Link from 'next/link';

const BookAppointment = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">Ready to Start?</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light mt-4 mb-6">
            Book an Appointment Today
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
            Schedule a consultation with our expert team. Whether it&apos;s construction, metal fabrication, or project planning, we&apos;re here to help turn your vision into reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/bookappointment">
              <Button variant="luxury" size="lg" className="gap-2 min-w-[200px]">
                <Calendar className="h-5 w-5" />
                Book Appointment
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="min-w-[200px] border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;