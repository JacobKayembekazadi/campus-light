import Image from "next/image";
import { Users, Target, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:py-24">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            About Campus Companion
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Empowering students to graduate with confidence and thrive in their future careers.
          </p>
        </div>

        {/* Image Section */}
        <div className="mt-16">
          <Image
            src="https://placehold.co/1200x600.png"
            alt="Diverse group of students collaborating"
            data-ai-hint="students collaborating"
            width={1200}
            height={600}
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Mission, Vision, Values */}
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Target className="h-8 w-8" />
              </div>
              <h2 className="mt-6 font-headline text-2xl font-semibold leading-7 text-foreground">Our Mission</h2>
              <p className="mt-4 text-muted-foreground">
                To provide students with the essential skills, supportive community, and practical resources needed to excel academically and professionally.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Users className="h-8 w-8" />
              </div>
              <h2 className="mt-6 font-headline text-2xl font-semibold leading-7 text-foreground">Our Vision</h2>
              <p className="mt-4 text-muted-foreground">
                A world where every student has the confidence and competence to achieve their full potential, both during their studies and beyond.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Heart className="h-8 w-8" />
              </div>
              <h2 className="mt-6 font-headline text-2xl font-semibold leading-7 text-foreground">Our Values</h2>
              <p className="mt-4 text-muted-foreground">
                We are driven by community, empowerment, accessibility, and a relentless commitment to student success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
