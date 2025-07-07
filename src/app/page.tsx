import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, BrainCircuit, LayoutGrid, Newspaper, PenSquare, Users } from "lucide-react";

const features = [
  {
    icon: LayoutGrid,
    title: "Events Hub",
    description: "Browse and book upcoming seminars, workshops, and tours with ease.",
    href: "/events",
    cta: "Explore Events"
  },
  {
    icon: PenSquare,
    title: "AI Resume Builder",
    description: "Get AI-powered suggestions to optimize your resume for success.",
    href: "/resume-builder",
    cta: "Build My Resume"
  },
  {
    icon: BookOpen,
    title: "Resource Library",
    description: "Access a wealth of templates, checklists, and guides for your studies.",
    href: "/resources",
    cta: "Get Resources"
  },
  {
    icon: Users,
    title: "Community Forum",
    description: "Connect with peers, ask questions, and share your knowledge.",
    href: "/forum",
    cta: "Join Discussion"
  },
  {
    icon: Newspaper,
    title: "Blog & Media",
    description: "Stay informed and entertained with articles and videos from fellow students.",
    href: "/blog",
    cta: "Read Articles"
  },
  {
    icon: BrainCircuit,
    title: "Flashcard Generator",
    description: "Create and study with custom flashcards for any subject.",
    href: "/flashcards",
    cta: "Create Flashcards"
  }
];

const testimonials = [
  {
    name: "Freshman Faith",
    role: "First-Year Student",
    testimonial: "Campus Companion was a lifesaver in my first year! The orientation tips and community forum helped me feel at home right away."
  },
  {
    name: "Second-Year Sam",
    role: "Engineering Student",
    testimonial: "The AI resume builder is pure magic. It helped me land an internship by tailoring my resume perfectly for the job description."
  },
  {
    name: "Final-Year Femi",
    role: "Business Major",
    testimonial: "From interview prep to networking events, this platform gave me the confidence to step into the professional world. Highly recommended!"
  },
    {
    name: "Post-Grad Priya",
    role: "Teaching Assistant",
    testimonial: "As a new TA, the resources on mentorship and professional skills have been invaluable. It's great for grad students too."
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-background to-secondary/30">
          <div className="container mx-auto max-w-7xl px-4 text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Graduate with Confidence
            </h1>
            <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground md:text-xl">
              Your go-to companion for every stage of campus life. We provide the skills, community, and support you need to thrive.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link href="/events">
                <Button size="lg" style={{backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))'}} className="hover:opacity-90 shadow-lg shadow-amber-500/20">
                  Upcoming Events
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(hsl(var(--primary)/0.1)_1px,transparent_1px)] [background-size:16px_16px]"></div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Everything You Need to Succeed</h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-lg">
                From academic skills to career prep, we've got you covered.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <Card key={feature.title} className="flex flex-col justify-between transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="font-headline">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Link href={feature.href}>
                      <Button variant="link" className="p-0 h-auto text-primary">
                        {feature.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full bg-secondary/50 py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Loved by Students Like You</h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-lg">
                Real stories from students who've grown with Campus Companion.
              </p>
            </div>
            <Carousel opts={{ align: "start", loop: true, }} className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="h-full">
                        <CardContent className="flex flex-col justify-between h-full p-6">
                          <blockquote className="text-lg mb-6 flex-grow">"{testimonial.testimonial}"</blockquote>
                          <div className="flex items-center gap-4">
                            <Avatar>
                              <AvatarImage src={`https://placehold.co/40x40.png`} data-ai-hint="student portrait" />
                              <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-semibold">{testimonial.name}</p>
                              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="ml-12" />
              <CarouselNext className="mr-12" />
            </Carousel>
          </div>
        </section>
      </main>
    </div>
  );
}
