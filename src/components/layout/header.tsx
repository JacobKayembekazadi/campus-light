"use client";

import Link from "next/link";
import { Menu, BookOpen, GraduationCap, Users, Newspaper, BrainCircuit, PenSquare, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
          <span className="font-headline text-xl font-bold">Light on Campus</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <AuthButtons />
        </div>
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="p-4">
                <Link href="/" className="mb-8 flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <span className="font-headline text-xl font-bold">Light on Campus</span>
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
                   <AuthButtons mobile onCloseMenu={() => setIsMenuOpen(false)}/>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function AuthButtons({ mobile = false, onCloseMenu }: { mobile?: boolean; onCloseMenu?: () => void; }) {
  const [isAuthOpen, setIsAuthOpen] = React.useState(false);
  
  const handleAuthClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // We need to stop propagation on the mobile menu, otherwise it closes the sheet
    if (mobile) {
      e.stopPropagation();
    }
  };

  const closeAll = () => {
    setIsAuthOpen(false);
    if (onCloseMenu) {
      onCloseMenu();
    }
  };

  return (
    <Dialog open={isAuthOpen} onOpenChange={setIsAuthOpen}>
      <DialogTrigger asChild>
         <div className={mobile ? "contents" : "flex items-center gap-2"}>
            <Button variant="ghost" className={mobile ? "w-full" : ""}>Log In</Button>
            <Button style={{backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))'}} className={`hover:opacity-90 ${mobile ? 'w-full' : ''}`}>Sign Up</Button>
         </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" onPointerDownOutside={(e) => {
        // This is a workaround to allow clicking the dialog trigger from within the sheet on mobile
        if(mobile && (e.target as HTMLElement).closest('[role="dialog"]')) {
           e.preventDefault();
        }
      }}>
        <Tabs defaultValue="login" className="w-full">
          <DialogHeader>
            <DialogTitle asChild>
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Log In</TabsTrigger>
                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
            </DialogTitle>
             <DialogDescription className="pt-4 text-center">
              Welcome! Please enter your details to continue.
            </DialogDescription>
          </DialogHeader>
          <TabsContent value="login" className="pt-4">
             <form onSubmit={(e) => { e.preventDefault(); closeAll(); }}>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email-login">Email</Label>
                    <Input id="email-login" type="email" placeholder="m@example.com" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password-login">Password</Label>
                    <Input id="password-login" type="password" required />
                  </div>
                </div>
                <DialogFooter className="mt-4">
                  <Button type="submit" className="w-full">Log In</Button>
                </DialogFooter>
             </form>
          </TabsContent>
          <TabsContent value="signup" className="pt-4">
            <form onSubmit={(e) => { e.preventDefault(); closeAll(); }}>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email-signup">Email</Label>
                    <Input id="email-signup" type="email" placeholder="m@example.com" required/>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password-signup">Password</Label>
                    <Input id="password-signup" type="password" required />
                  </div>
                </div>
                <DialogFooter className="mt-4">
                  <Button type="submit" className="w-full">Create Account</Button>
                </DialogFooter>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
