"use client";

import { useRef } from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Car, Network } from "lucide-react";
import { MoleculeIcon } from "@/components/icons";
import { useOnScreen } from "@/hooks/use-on-screen";
import { cn } from "@/lib/utils";


const roadmapItems = [
  {
    icon: Car,
    title: "E-Mobility Expansion",
    description: "Developing next-generation Sodium-Ion battery packs for 2-wheelers, 3-wheelers, and passenger EVs, focusing on enhanced range, faster charging, and lower costs to drive mass adoption.",
    year: "Phase 1"
  },
  {
    icon: Network,
    title: "Grid Scale Storage",
    description: "Deploying large-scale battery energy storage systems (BESS) to support renewable energy integration, stabilize the grid, and provide reliable backup power for communities and industries.",
    year: "Phase 2"
  },
  {
    icon: MoleculeIcon,
    title: "Advanced Material Research",
    description: "Pioneering new cathode and anode chemistries to further boost energy density, cycle life, and performance across all temperature ranges, solidifying our technological leadership.",
    year: "Ongoing"
  }
];

export function FutureRoadmap() {
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useOnScreen(ref);

  return (
    <section id="roadmap" ref={ref} className={cn("py-16 sm:py-24 opacity-0", isIntersecting && "animate-fade-in-up")}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Our Future Applications Roadmap</h2>
          <p className="font-body text-lg md:text-xl max-w-3xl mx-auto mt-4 text-muted-foreground">
            Charting the course for a sustainable energy future, one innovation at a time.
          </p>
        </div>

        <div className="relative">
          {/* The timeline line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-border rounded-full" aria-hidden="true"></div>

          <div className="relative flex flex-col gap-12">
            {roadmapItems.map((item, index) => {
              const isEven = index % 2 === 0;
              const Icon = item.icon;
              return (
                <div key={index} className={`flex items-center w-full ${isEven ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${isEven ? 'pr-8' : 'pl-8'}`}>
                    <Card className={`shadow-lg hover:shadow-xl transition-shadow duration-300 ${isEven ? 'text-right' : 'text-left'}`}>
                      <CardHeader>
                        <p className="font-body text-sm font-semibold text-primary">{item.year}</p>
                        <CardTitle className="font-headline text-2xl">{item.title}</CardTitle>
                        <CardDescription className="font-body text-base">{item.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                  
                  {/* Timeline point and icon */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
