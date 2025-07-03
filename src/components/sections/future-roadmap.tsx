"use client";

import { useRef } from 'react';
import { Card } from "@/components/ui/card";
import { Globe, ShieldCheck, Recycle, Sparkles } from "lucide-react";
import { useOnScreen } from "@/hooks/use-on-screen";
import { cn } from "@/lib/utils";

const commitmentItems = [
  {
    text: "Solving India’s energy storage needs with earth-abundant materials",
    icon: Globe,
  },
  {
    text: "Delivering renewable and sustainable energy solutions for national security",
    icon: ShieldCheck,
  },
  {
    text: "Enabling a 100% Made-in-India battery value chain",
    icon: Recycle,
  },
  {
    text: "Innovating through indigenous technology development",
    icon: Sparkles,
  },
];

export function FutureRoadmap() {
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useOnScreen(ref);

  return (
    <section id="roadmap" ref={ref} className={cn("py-16 sm:py-24 bg-secondary opacity-0", isIntersecting && "animate-fade-in-up")}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-medium">Our Commitments</h2>
          <p className="font-body text-lg md:text-xl max-w-3xl mx-auto mt-4 text-muted-foreground">
            Our commitments towards solving energy challenges with sustainable, secure, and <span className="whitespace-nowrap">Made-in-India</span> solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commitmentItems.map((item, index) => {
                const Icon = item.icon;
                return (
                    <Card key={index} className="h-full text-center shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center">
                        <div className="bg-primary/10 p-4 rounded-full mb-4 shrink-0">
                            <Icon className="h-10 w-10 text-primary" />
                        </div>
                        <div className="flex-grow flex items-center">
                            <p className="font-body text-base text-muted-foreground">
                                {item.text}
                            </p>
                        </div>
                    </Card>
                );
            })}
        </div>
      </div>
    </section>
  );
}
