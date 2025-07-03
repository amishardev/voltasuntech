"use client";

import { useRef } from 'react';
import Image from "next/image";
import { useOnScreen } from "@/hooks/use-on-screen";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Active Materials",
    description: "Manufacture Cathode, Anode, Electrolytes",
    image: {
      src: "https://raw.githubusercontent.com/amishardev/voltasuntechweb/refs/heads/main/fuVT9386ThMU0CGVjpb0v2CPYgBtVC2FVHlr3wwVIFa9T5k2Ubw1DEhLFwtTjJCt.webp",
      alt: "Dark crystalline active materials for batteries",
      hint: "dark mineral",
    },
  },
  {
    title: "Cells",
    description: "Cylindrical, Prismatic & Pouch",
    image: {
      src: "https://raw.githubusercontent.com/amishardev/voltasuntechweb/refs/heads/main/1f7yv7lSSTgmZlFknK8YZkrRojG7rnjVNm7OiPEJD5Ja2IsQzFuQKBA1xXzATqWR.webp",
      alt: "Different types of battery cells",
      hint: "battery cells",
    },
  },
  {
    title: "Battery Testing & Characterisation",
    description: "Testing, Validation",
    image: {
      src: "https://media.gettyimages.com/id/1485479297/photo/lithium-solid-state-battery-for-ev-electric-vehicle-new-research-and-development-batteries.jpg?b=1&s=2048x2048&w=0&k=20&c=1VzvkUGGwzJ2gt0A-R9n__q2s6H8nWev-WMqG6Cfq9s=",
      alt: "Battery testing and characterisation process",
      hint: "battery research",
    },
  },
  {
    title: "Custom Development",
    description: "Customised materials development",
    image: {
      src: "https://media.gettyimages.com/id/1932920841/photo/battery-recycling-facility.jpg?b=1&s=2048x2048&w=0&k=20&c=rC2fjhAuYPBzUkmNSRnHeEC7tkYdUC2EES4nWe_02u4=",
      alt: "A modern battery recycling facility",
      hint: "battery recycling",
    },
  },
  {
    title: "Training & Support",
    description: "",
    image: {
      src: "https://raw.githubusercontent.com/amishardev/voltasuntechweb/refs/heads/main/lithium-ion-of-car-battery-pack.webp",
      alt: "Training and support for battery technology",
      hint: "car battery",
    },
  },
  {
    title: "Lab-as-a-service & Pre-commericialisation",
    description: "",
    image: {
      src: "https://raw.githubusercontent.com/amishardev/voltasuntechweb/refs/heads/main/battery-with-wind-turbine-and-solar-panel-green-technology-and-sustainability-concept.webp",
      alt: "Lab-as-a-service with renewable energy sources",
      hint: "renewable energy",
    },
  },
];

export function ServicePortfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useOnScreen(ref);
  
  return (
    <section id="services" ref={ref} className={cn("py-16 sm:py-24 bg-secondary opacity-0", isIntersecting && "animate-fade-in-up")}>
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-medium">What we do</h2>
          <p className="font-body text-lg md:text-xl mt-4 text-muted-foreground">
            Solving Supply Chain for Sodium-ion Battery
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {services.map((service, index) => (
            <div key={index}>
              <div className="relative h-56 w-full overflow-hidden rounded-lg shadow-md mb-4">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  data-ai-hint={service.image.hint}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div>
                <h3 className="font-headline text-xl font-medium">{service.title}</h3>
                <p className="font-body text-muted-foreground mt-1">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
