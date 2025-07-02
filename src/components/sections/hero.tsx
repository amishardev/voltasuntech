"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useRef, type MouseEvent } from "react";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;

    const { clientX, clientY } = e;
    const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = heroRef.current;
    
    const x = clientX - offsetLeft;
    const y = clientY - offsetTop;

    const centerX = offsetWidth / 2;
    const centerY = offsetHeight / 2;

    const deltaX = x - centerX;
    const deltaY = y - centerY;

    const percentX = deltaX / centerX;
    const percentY = deltaY / centerY;

    const maxRotation = 1;
    const maxParallax = 2.5;

    const rotateZ = -percentX * maxRotation;
    const translateX = -percentX * maxParallax;
    const translateY = -percentY * maxParallax;
    
    setStyle({
      transform: `perspective(1000px) rotateY(${percentX}deg) rotateX(${-percentY}deg) rotateZ(${rotateZ}deg) translateX(${translateX}px) translateY(${translateY}px)`,
      transition: "transform 0.1s ease-out",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateY(0deg) rotateX(0deg) rotateZ(0deg) translateX(0px) translateY(0px)",
      transition: "transform 0.5s ease-in-out",
    });
  };

  return (
    <section 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[90vh] min-h-[700px] flex items-center text-white overflow-hidden"
    >
      <Image
        src="https://raw.githubusercontent.com/amishardev/voltasuntechweb/main/rvsmshodiorkfetkdbja.png"
        alt="Abstract background of energy technology"
        data-ai-hint="energy technology"
        fill
        className="object-cover -z-10"
        unoptimized
      />
      <div className="absolute inset-0 bg-black/50 -z-10" />
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-left">
          <h1 className="font-headline text-5xl md:text-7xl font-medium leading-tight mb-6 animate-fade-in-down">
            Shaping Tomorrow's Energy with Smart Solutions
          </h1>
          <p className="font-body text-lg md:text-xl max-w-2xl mb-10 animate-fade-in-up">
            Offering safe, integrable, sustainable electrical energy storage technology. Minimizing the use of critical raw materials.
          </p>
          <div className="flex gap-4">
            <Button size="lg" asChild className="rounded-full bg-white text-black hover:bg-neutral-200">
              <Link href="#services">Discover</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full border-white text-white bg-transparent hover:bg-white hover:text-black">
              <Link href="#tech-advantage">Technology</Link>
            </Button>
          </div>
        </div>
        <div 
          className="hidden md:flex justify-center items-center md:self-start -mt-28"
          style={style}
        >
            <Image
                src="https://raw.githubusercontent.com/amishardev/voltasuntechweb/main/bsvavegvuxskuqsgeiep-removebg.png"
                alt="VoltAsun Sodium-Ion Battery"
                data-ai-hint="sodium ion battery"
                width={324}
                height={324}
                className="w-full h-auto max-w-sm animate-fade-in-up"
                unoptimized
            />
        </div>
      </div>
    </section>
  );
}
