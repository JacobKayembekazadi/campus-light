"use client";

import Link from "next/link";
import { Menu, BookOpen, GraduationCap, Users, Newspaper, BrainCircuit, PenSquare, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import React from "react";

const navLinks = [
  { href: "/events", label: "Events", icon: LayoutGrid },
  { href: "/resume-builder", label: "Resume Builder", icon: PenSquare },
  { href: "/resources", label: "Resources", icon: BookOpen },
  { href: "/forum", label: "Forum", icon: Users },
  { href: "/blog", label: "Blog", icon: Newspaper },
  { href: "/flashcards", label: "Flashcards", icon: BrainCircuit },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold">Campus Companion</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost">Log In</Button>
          <Button style={{backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))'}} className="hover:opacity-90">Sign Up</Button>
        </div>
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="p-4">
                <Link href="/" className="mb-8 flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <span className="font-headline text-xl font-bold">Campus Companion</span>
                </Link>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="flex items-center gap-4 text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
                      <link.icon className="h-5 w-5 text-muted-foreground" />
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-8 flex flex-col gap-4">
                   <Button variant="ghost" className="w-full">Log In</Button>
                   <Button style={{backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))'}} className="hover:opacity-90 w-full">Sign Up</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
