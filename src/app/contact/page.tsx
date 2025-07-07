import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          We’d love to hear from you. Whether you have a question, feedback, or just want to say hello, feel free to reach out.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Contact Form */}
        <div className="bg-card p-8 rounded-lg shadow-lg">
          <h2 className="font-headline text-2xl font-bold mb-6">Send us a Message</h2>
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Your Name</label>
                <Input id="name" name="name" type="text" required placeholder="John Doe"/>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Your Email</label>
                <Input id="email" name="email" type="email" required placeholder="john.doe@example.com"/>
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">Subject</label>
              <Input id="subject" name="subject" type="text" required placeholder="Question about events"/>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Your Message</label>
              <Textarea id="message" name="message" rows={5} required placeholder="Your message here..."/>
            </div>
            <div>
              <Button type="submit" size="lg" className="w-full" style={{backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))'}}>Send Message</Button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold font-headline">Email</h3>
                <p className="text-muted-foreground mt-1">For general inquiries and support, please email us.</p>
                <a href="mailto:hello@campuscompanion.com" className="text-primary hover:underline mt-2 inline-block">hello@campuscompanion.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold font-headline">Phone</h3>
                <p className="text-muted-foreground mt-1">You can reach our office during business hours (9am-5pm).</p>
                <a href="tel:+1234567890" className="text-primary hover:underline mt-2 inline-block">+1 (234) 567-890</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold font-headline">Office Location</h3>
                <p className="text-muted-foreground mt-1">Come visit us on campus. We're happy to help in person.</p>
                <p className="text-primary mt-2">123 University Ave, Campusville, ST 12345</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
