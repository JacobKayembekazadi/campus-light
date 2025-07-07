import Link from "next/link";
import { GraduationCap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="font-headline text-xl font-bold">Campus Companion</span>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Campus Companion. All rights reserved.</p>
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            <Link href="#" className="text-sm hover:underline">About</Link>
            <Link href="#" className="text-sm hover:underline">Contact</Link>
            <Link href="#" className="text-sm hover:underline">Privacy Policy</Link>
            <Link href="#" className="text-sm hover:underline">Terms of Service</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
