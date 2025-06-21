import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactInfoSection: React.FC = () => {
  const googleMapsLink = "https://www.google.com/maps/search/?api=1&query=Plot+No.+168,+Survey+No.+172%2F15,+Daman+Ganga+Estate,+Karwad,+Vapi,+Valsad,+Gujarat+396195";

  return (
    <section id="contact-us-section" className="py-16 bg-gray-100 text-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Get in Touch with Shiv Industries</h2>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
          We're here to help with all your packaging needs. Reach out to us through the details below or visit our location.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="flex flex-col items-center text-center p-6 shadow-lg bg-white border-gray-200">
            <CardHeader className="pb-4 flex flex-col items-center">
              <MapPin size={48} className="text-primary mb-4" />
              <CardTitle className="text-xl font-semibold">Our Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Plot No. 168, Survey No. 172/15, Daman Ganga Estate, Karwad, Vapi, Valsad, Gujarat
                <br />
                Pin: 396195
              </p>
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium flex items-center justify-center"
              >
                View on Google Maps
                <MapPin size={16} className="ml-2" />
              </a>
            </CardContent>
          </Card>

          <Card className="flex flex-col items-center text-center p-6 shadow-lg bg-white border-gray-200">
            <CardHeader className="pb-4 flex flex-col items-center">
              <Phone size={48} className="text-primary mb-4" />
              <CardTitle className="text-xl font-semibold">Contact Us Directly</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Ankit Patel:</span>{" "}
                <a href="tel:+919054348082" className="text-blue-600 hover:underline">+91 90543 48082</a>
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">Kenil Patel:</span>{" "}
                <a href="tel:+919157372356" className="text-blue-600 hover:underline">+91 91573 72356</a>
              </p>
              <p className="text-gray-700 flex items-center justify-center">
                <Mail size={20} className="mr-2" />
                Email:{" "}
                <a href="mailto:shivindustriesvapi24@gmail.com" className="text-blue-600 hover:underline ml-1">
                  shivindustriesvapi24@gmail.com
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;