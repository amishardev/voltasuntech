"use client";

import { useRef } from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useOnScreen } from "@/hooks/use-on-screen";
import { cn } from "@/lib/utils";

export function TalentSection() {
    const ref = useRef<HTMLDivElement>(null);
    const isIntersecting = useOnScreen(ref);

    return (
        <section id="talent" ref={ref} className={cn("py-16 sm:py-24 bg-secondary opacity-0", isIntersecting && "animate-fade-in-up")}>
            <div className="container mx-auto px-4 text-center">
                <h2 className="font-headline text-4xl md:text-5xl font-medium">Get in Touch with VoltAsun</h2>
                <p className="font-body text-lg md:text-xl max-w-3xl mx-auto mt-4 text-muted-foreground">
                    Have questions about VoltAsun’s battery technology or energy solutions? Reach out — we&apos;re here to help you power the future, one innovation at a time
                </p>
                <Button size="lg" asChild className="mt-8 rounded-full">
                  <Link href="#contact">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
            </div>
        </section>
    );
}
