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
            <p className="text-muted-foreground">+971 50 496 7289</p>
            <p className="text-muted-foreground">+971 52 952 7666 </p>
            <p className="text-muted-foreground">+971 55 966 9001</p>
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
              Port saeed area DUBAI UAE<br />
              Arab bank building 4th floor office No 24
            </p>
          </div>
        </div>

        {/* Working Hours */}
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
            <Clock className="h-5 w-5 text-accent" />
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-lg">Working Hours</h4>
            <p className="text-muted-foreground">Working 24/7</p>
            <p className="text-muted-foreground"></p>
          </div>
        </div>
      </div>
    </div>
  );
};
