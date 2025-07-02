"use client";

import { useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Zap, Globe } from "lucide-react";
import { useOnScreen } from "@/hooks/use-on-screen";
import { cn } from "@/lib/utils";

export function MissionVision() {
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useOnScreen(ref);

  return (
    <section id="mission-vision" ref={ref} className={cn("py-16 sm:py-24 bg-secondary opacity-0", isIntersecting && "animate-fade-in-up")}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-headline text-3xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-body text-lg text-muted-foreground">
                To accelerate the adoption of sustainable energy solutions by developing and manufacturing high-performance, cost-effective, and safe Sodium-Ion batteries, empowering a greener future for India and the world.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-headline text-3xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-body text-lg text-muted-foreground">
                To be a global leader in Sodium-Ion battery technology and establish India as a hub for advanced energy storage solutions, driving towards a future of complete energy independence and sustainability.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
