import Link from "next/link";
import { GraduationCap, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-4 md:text-left">
          {/* About Section */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="font-headline text-2xl font-bold">Light on Campus</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Your go-to companion for every stage of campus life.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/events" className="text-muted-foreground hover:text-primary">Events</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link href="/resources" className="text-muted-foreground hover:text-primary">Resources</Link></li>
            </ul>
          </div>

          {/* Get Involved Section */}
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/forum" className="text-muted-foreground hover:text-primary">Join the Forum</Link></li>
              <li><Link href="/blog/submit" className="text-muted-foreground hover:text-primary">Write for Us</Link></li>
              <li><Link href="/mentorship" className="text-muted-foreground hover:text-primary">Become a Mentor</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Contact Section */}
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex justify-center md:justify-start gap-4 mb-4">
              <Link href="#" aria-label="Twitter"><Twitter className="h-6 w-6 text-muted-foreground hover:text-primary" /></Link>
              <Link href="#" aria-label="Instagram"><Instagram className="h-6 w-6 text-muted-foreground hover:text-primary" /></Link>
              <Link href="#" aria-label="LinkedIn"><Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary" /></Link>
            </div>
            <p className="text-sm text-muted-foreground">
              <a href="mailto:hello@lightoncampus.com" className="hover:text-primary">hello@lightoncampus.com</a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t pt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground text-center md:text-left">© {new Date().getFullYear()} Light on Campus. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
