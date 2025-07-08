"use client";

import { useRef } from 'react';
import { useOnScreen } from "@/hooks/use-on-screen";
import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function TeamSection() {
    const ref = useRef<HTMLDivElement>(null);
    const isIntersecting = useOnScreen(ref);

    return (
        <section id="team" ref={ref} className={cn("py-16 sm:py-24 opacity-0", isIntersecting && "animate-fade-in-up")}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="font-headline text-4xl md:text-5xl font-medium">Meet Our Team</h2>
                  <p className="font-body text-lg md:text-xl max-w-5xl mx-auto mt-4 text-muted-foreground">
                      Our Team comprises Scientists and Researchers driving fundamental research and innovation in Sodium and Lithium chemistries, Process Engineers scaling up materials production and process optimization, Battery Engineers developing cutting-edge cell technologies, Commercial and Operations Experts rolling out new products to market, and Investors and Advisors with deep roots in India’s energy and materials ecosystem.
                  </p>
                </div>
                <div className="text-center mt-8">
                    <Button asChild size="lg" className="rounded-full">
                        <Link href="#contact">
                            Know more
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
