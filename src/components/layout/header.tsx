"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const navLinks = [
    { href: "#tech-advantage", label: "Technology" },
    { href: "#team", label: "Team" },
    { href: "#talent", label: "Talent" },
    { href: "#mission-vision", label: "Vision & Mission" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <div className="flex-1 flex justify-start">
          <Link href="/" aria-label="Home">
            <Image
              src="https://raw.githubusercontent.com/amishardev/voltasuntechweb/main/download.png"
              alt="VoltAsun Technologies Logo"
              width={224}
              height={64}
              className="h-16 w-auto"
              priority
              unoptimized
            />
          </Link>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex-1 flex justify-end">
          <Button asChild className="rounded-full">
            <Link href="#contact">
              Contact us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
