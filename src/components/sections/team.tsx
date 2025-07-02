"use client";

import { useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useOnScreen } from "@/hooks/use-on-screen";
import { cn } from "@/lib/utils";

const teamMembers = [
  {
    name: "Dr. Alok Kumar",
    role: "Founder & CEO",
    image: "https://placehold.co/400x400.png",
    hint: "male portrait"
  },
  {
    name: "Dr. Priyanka Sharma",
    role: "Chief Technology Officer",
    image: "https://placehold.co/400x400.png",
    hint: "female portrait"
  },
  {
    name: "Mr. Rohan Mehta",
    role: "Head of Operations",
    image: "https://placehold.co/400x400.png",
    hint: "male portrait"
  },
];

export function TeamSection() {
    const ref = useRef<HTMLDivElement>(null);
    const isIntersecting = useOnScreen(ref);

    return (
        <section id="team" ref={ref} className={cn("py-16 sm:py-24 opacity-0", isIntersecting && "animate-fade-in-up")}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="font-headline text-4xl md:text-5xl font-bold">Meet Our Team</h2>
                  <p className="font-body text-lg md:text-xl max-w-3xl mx-auto mt-4 text-muted-foreground">
                      The driving force behind our innovation and success.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {teamMembers.map((member) => (
                    <Card key={member.name} className="text-center overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                       <Image
                        src={member.image}
                        alt={`Portrait of ${member.name}`}
                        data-ai-hint={member.hint}
                        width={400}
                        height={400}
                        className="w-full h-auto object-cover"
                        unoptimized
                      />
                      <CardContent className="p-6">
                        <h3 className="font-headline text-xl font-bold">{member.name}</h3>
                        <p className="font-body text-muted-foreground">{member.role}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
            </div>
        </section>
    );
}
