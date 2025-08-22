import Image from "next/image";
import { Users, Target, Sparkles, Smile, Handshake } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:py-24">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            About Light on Campus
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            To light every campus with confident, well-rounded graduates.
          </p>
        </div>

        {/* Image Section */}
        <div className="mt-16">
          <Image
            src="/images/light-on-campus-4.jpg"
            data-ai-hint="university campus students"
            alt="Students gathered on campus with lights"
            width={1200}
            height={600}
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Mission & Vision */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="mx-auto lg:mx-0 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Target className="h-8 w-8" />
              </div>
              <h2 className="mt-6 font-headline text-3xl font-bold leading-7 text-foreground">Our Mission</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                To equip students with practical life skills, emotional resilience, and a supportive peer network through engaging programs, expert content, and technology-enabled community.
              </p>
            </div>
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="mx-auto lg:mx-0 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Users className="h-8 w-8" />
              </div>
              <h2 className="mt-6 font-headline text-3xl font-bold leading-7 text-foreground">Our Vision</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                To light every campus with confident, well-rounded graduates who are ready to make a positive impact on the world.
              </p>
            </div>
        </div>

        {/* More Than a Community Section */}
        <div className="mx-auto mt-24 grid max-w-7xl grid-cols-1 items-center gap-x-16 gap-y-16 lg:grid-cols-2">
            <div className="lg:pr-8">
                <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">More Than an Organization. A Community.</h2>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                    Light on Campus began with a simple idea: college should be about more than just lectures and exams. We saw a need for a space where students could find practical life skills, genuine support, and a community that cheers them on. That's why we're here—a student-run organization dedicated to helping you navigate every part of campus life with confidence and joy.
                </p>
            </div>
             <Image
                src="/images/light-on-campus-5.jpg"
                data-ai-hint="students community"
                alt="A diverse group of students working together and smiling"
                width={800}
                height={600}
                className="w-full rounded-xl shadow-lg"
            />
        </div>

        {/* Values */}
         <div className="mx-auto mt-24 max-w-2xl lg:max-w-none">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Core Values</h2>
            <p className="mt-4 text-lg text-muted-foreground">The principles that guide everything we do.</p>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 text-center sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                <Users className="h-6 w-6 flex-none text-primary" aria-hidden="true" />
                Inclusivity
              </dt>
              <dd className="mt-2 text-base leading-7 text-muted-foreground">Creating a safe, welcoming space for every student.</dd>
            </div>
            <div className="flex flex-col items-center">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                <Sparkles className="h-6 w-6 flex-none text-primary" aria-hidden="true" />
                Growth-mindset
              </dt>
              <dd className="mt-2 text-base leading-7 text-muted-foreground">Fostering continuous learning and personal development.</dd>
            </div>
            <div className="flex flex-col items-center">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                <Handshake className="h-6 w-6 flex-none text-primary" aria-hidden="true" />
                Service
              </dt>
              <dd className="mt-2 text-base leading-7 text-muted-foreground">Empowering students to give back and make a difference.</dd>
            </div>
             <div className="flex flex-col items-center">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                <Smile className="h-6 w-6 flex-none text-primary" aria-hidden="true" />
                Joy
              </dt>
              <dd className="mt-2 text-base leading-7 text-muted-foreground">Celebrating the student journey and fostering positivity.</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
