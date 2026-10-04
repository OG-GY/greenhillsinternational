import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const ContactInfo = () => {
  return (
    <div className="bg-card text-card-foreground p-8 rounded-sm shadow-lg">
      <h3 className="text-2xl font-serif mb-6">Contact Info</h3>
      
      <div className="space-y-6">
        {/* Call Us */}
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
            <Phone className="h-5 w-5 text-accent" />
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-lg">Call Us</h4>
            <p className="text-muted-foreground">+971 4 575 2216</p>
            <p className="text-muted-foreground">+971 55 966 9001</p>
            <p className="text-muted-foreground">+971 58 388 3991</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
            <Mail className="h-5 w-5 text-accent" />
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-lg">Our Email</h4>
            <p className="text-muted-foreground break-all">info@greenhillsinternational.com</p>
            <p className="text-muted-foreground break-all">operations@greenhillsinternational.com</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
            <MapPin className="h-5 w-5 text-accent" />
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-lg">Our Location</h4>
            <p className="text-muted-foreground">
              Al Bannai Building, Office No. 111, 1st Floor<br />
              Al Nahda 1, Dubai, UAE
            </p>
          </div>
        </div>

        {/* Map */}
        <div className="w-full aspect-[16/9] rounded-sm overflow-hidden">
          <iframe
            src="https://www.google.com/maps?q=25.290653,55.367931&z=17&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Green Hills International Location"
          />
        </div>

        {/* Working Hours */}
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
            <Clock className="h-5 w-5 text-accent" />
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-lg">Working Hours</h4>
            <p className="text-muted-foreground">Monday - Thursday: 9:00 AM - 5:00 PM</p>
            <p className="text-muted-foreground">Friday: 9:00 AM - 12:00 PM &amp; 2:00 PM - 5:00 PM</p>
            <p className="text-muted-foreground">Saturday: 9:00 AM - 2:00 PM</p>
            <p className="text-muted-foreground">Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};
