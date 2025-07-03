"use client";

import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Globe, MapPin } from "lucide-react";
import { useOnScreen } from "@/hooks/use-on-screen";
import { cn } from "@/lib/utils";

export function LocationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useOnScreen(ref);

  return (
    <section id="location" ref={ref} className={cn("py-16 sm:py-24 bg-secondary opacity-0", isIntersecting && "animate-fade-in-up")}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-medium">Find Us</h2>
          <p className="font-body text-lg md:text-xl max-w-3xl mx-auto mt-4 text-muted-foreground">
            Come visit us at our registered office.
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3 rounded-lg overflow-hidden shadow-lg border">
             <iframe
                src="https://maps.google.com/maps?q=Jaypee%20Wishtown,%20Sector-128%20Noida,%20UP,%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="VoltAsun Technologies Location"
            ></iframe>
          </div>
          <div className="lg:col-span-2">
            <Card className="shadow-lg h-full">
                <CardHeader>
                    <CardTitle className="font-headline text-3xl">Contact Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 text-base">
                    <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-medium text-lg font-headline">Registered Office</h3>
                            <p className="text-muted-foreground font-body">
                                1606, PH1, Jaypee Wishtown, Sector-128<br />
                                Noida, UP, India
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-medium text-lg font-headline">Mobile</h3>
                            <a href="tel:+919958159054" className="text-muted-foreground font-body hover:text-primary transition-colors">+91 9958159054</a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Globe className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-medium text-lg font-headline">Website</h3>
                            <a href="https://www.voltasuntech.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground font-body hover:text-primary transition-colors">www.voltasuntech.com</a>
                        </div>
                    </div>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
