"use client";

import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useOnScreen } from "@/hooks/use-on-screen";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useOnScreen(ref);

  return (
    <section id="contact" ref={ref} className={cn("py-16 sm:py-24 opacity-0", isIntersecting && "animate-fade-in-up")}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-4xl md:text-5xl font-medium">Get In Touch</CardTitle>
              <CardDescription className="font-body text-lg md:text-xl max-w-2xl mx-auto pt-2">
                Have a question or a project in mind? We&apos;d love to hear from you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Your Name" className="text-base" />
                  <Input type="email" placeholder="Your Email" className="text-base" />
                </div>
                <Input placeholder="Subject" className="text-base" />
                <Textarea placeholder="Your Message" rows={5} className="text-base" />
                <div className="text-center pt-4">
                  <Button type="submit" size="lg" className="rounded-full w-full sm:w-auto">Send Message</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
