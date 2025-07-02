"use client";

import { useState, useEffect, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Zap, Recycle, ShieldCheck } from "lucide-react";
import { SodiumIonIcon } from "@/components/icons";
import { useOnScreen } from "@/hooks/use-on-screen";
import { cn } from "@/lib/utils";

const advantages = [
  {
    value: "abundance",
    title: "Material Abundance",
    icon: Globe,
    description: "Sodium is one of the most abundant elements on Earth, found globally in rock salt and brines. This drastically reduces material costs and eliminates reliance on geographically concentrated and ethically challenging resources like cobalt and lithium."
  },
  {
    value: "charging",
    title: "Fast Charging",
    icon: Zap,
    description: "Our Sodium-Ion batteries are engineered for high-rate performance, allowing for rapid charging capabilities comparable to or exceeding traditional lithium-ion batteries. Get back on the road or restore power to your grid in record time."
  },
  {
    value: "cycle-life",
    title: "Extended Cycle Life",
    icon: Recycle,
    description: "With a robust crystalline structure, our batteries offer exceptional cycle stability, delivering thousands of charge-discharge cycles with minimal capacity degradation. This ensures a long-lasting and reliable power source for any application."
  },
  {
    value: "safety",
    title: "Enhanced Safety",
    icon: ShieldCheck,
    description: "Sodium-Ion chemistry is inherently safer, with a lower risk of thermal runaway compared to many lithium-ion counterparts. Our batteries can be fully discharged to zero volts, making transportation and storage significantly safer."
  }
];

export function TechAdvantage() {
  const [activeTab, setActiveTab] = useState(advantages[0].value);
  const ref = useRef<HTMLDivElement>(null);
  const isIntersecting = useOnScreen(ref);

  useEffect(() => {
    const timer = setInterval(() => {
      const currentIndex = advantages.findIndex((adv) => adv.value === activeTab);
      const nextIndex = (currentIndex + 1) % advantages.length;
      setActiveTab(advantages[nextIndex].value);
    }, 10000); // 10 seconds

    return () => clearInterval(timer);
  }, [activeTab]);

  return (
    <section 
      id="tech-advantage" 
      ref={ref} 
      className={cn("py-16 sm:py-24 opacity-0", isIntersecting && "animate-fade-in-up")}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">The Sodium-Ion Advantage</h2>
          <p className="font-body text-lg md:text-xl max-w-3xl mx-auto mt-4 text-muted-foreground">
            Discover why our 100% Made-in-India Sodium-Ion technology is the future of energy storage.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="hidden lg:flex justify-center items-center">
              <SodiumIonIcon className="w-64 h-64" />
          </div>
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
                {advantages.map((adv) => (
                  <TabsTrigger key={adv.value} value={adv.value} className="flex flex-col sm:flex-row gap-2 py-2">
                    <adv.icon className="h-5 w-5" />
                    {adv.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              {advantages.map((adv) => (
                <TabsContent key={adv.value} value={adv.value}>
                  <Card className="shadow-lg">
                    <CardContent className="p-6">
                        <h3 className="font-headline text-2xl font-semibold mb-2">{adv.title}</h3>
                        <p className="font-body text-base text-muted-foreground">{adv.description}</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
