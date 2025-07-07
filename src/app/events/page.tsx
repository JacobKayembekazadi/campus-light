"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, MapPin, Users, CheckCircle } from "lucide-react";

const eventsData = [
  {
    id: 1,
    category: "workshops",
    title: "CV & Cover Letter Clinic",
    description: "Get expert feedback on your CV and learn to write compelling cover letters that get noticed.",
    date: "2024-10-15",
    time: "14:00 - 16:00",
    location: "Career Services Center, Room 201",
    seats_left: 15,
    seats_total: 30,
  },
  {
    id: 2,
    category: "seminars",
    title: "Dining Room Etiquette",
    description: "Master the art of dining in formal and casual settings, including cultural nuances.",
    date: "2024-10-22",
    time: "18:00 - 19:30",
    location: "University Grand Hall",
    seats_left: 48,
    seats_total: 100,
  },
  {
    id: 3,
    category: "tours",
    title: "Tech Industry Visit: Innovate Corp",
    description: "An exclusive look into one of the leading tech companies. Network with engineers and recruiters.",
    date: "2024-11-05",
    time: "10:00 - 13:00",
    location: "Innovate Corp HQ, Tech Park",
    seats_left: 5,
    seats_total: 25,
  },
  {
    id: 4,
    category: "workshops",
    title: "Public Speaking Bootcamp",
    description: "Build confidence and conquer stage fright with practical exercises and coaching.",
    date: "2024-11-12",
    time: "13:00 - 17:00",
    location: "Auditorium B",
    seats_left: 22,
    seats_total: 40,
  },
   {
    id: 5,
    category: "seminars",
    title: "Financial Fitness: Student Investing",
    description: "Learn the basics of investing, from stocks to crypto, tailored for a student budget.",
    date: "2024-11-19",
    time: "16:00 - 17:00",
    location: "Online via Zoom",
    seats_left: 89,
    seats_total: 200,
  },
  {
    id: 6,
    category: "tours",
    title: "Museum of Modern Art Edutainment Tour",
    description: "A guided tour focusing on the intersection of art, history, and social change.",
    date: "2024-11-26",
    time: "11:00 - 13:00",
    location: "MoMA Downtown",
    seats_left: 0,
    seats_total: 20,
  },
];

const categories = ["all", "workshops", "seminars", "tours"];

export default function EventsPage() {
  const [events, setEvents] = useState(eventsData.map(e => ({ ...e, isBooked: false })));
  const { toast } = useToast();

  const handleBooking = (eventId: number) => {
    const eventToBook = events.find(event => event.id === eventId);
    if (!eventToBook || eventToBook.seats_left <= 0 || eventToBook.isBooked) {
      return;
    }

    toast({
      title: "Successfully Booked!",
      description: `You're confirmed for "${eventToBook.title}".`,
    });

    setEvents(prevEvents => 
      prevEvents.map(event => {
        if (event.id === eventId) {
          return { ...event, seats_left: event.seats_left - 1, isBooked: true };
        }
        return event;
      })
    );
  };

  return (
    <div className="bg-secondary/30 min-h-screen">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Events Hub
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Browse and book upcoming seminars, workshops, and exclusive tours.
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 sm:grid-cols-4">
            {categories.map(cat => (
              <TabsTrigger key={cat} value={cat} className="capitalize">{cat}</TabsTrigger>
            ))}
          </TabsList>

          {categories.map(cat => (
             <TabsContent key={cat} value={cat}>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
                  {events
                    .filter(event => cat === 'all' || event.category === cat)
                    .map((event) => (
                    <Card key={event.id} className="flex flex-col transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                      <CardHeader>
                        <CardTitle className="font-headline">{event.title}</CardTitle>
                        <CardDescription>{event.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow space-y-3">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="mr-2 h-4 w-4 flex-shrink-0" /> <span>{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="mr-2 h-4 w-4 flex-shrink-0" /> <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="mr-2 h-4 w-4 flex-shrink-0" /> <span>{event.location}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center">
                         <div className="flex items-center text-sm">
                           <Users className="mr-2 h-4 w-4 text-primary" />
                           <span className="font-semibold">{event.seats_left}</span>
                           <span className="text-muted-foreground">/{event.seats_total} seats left</span>
                         </div>
                        <Button 
                          onClick={() => handleBooking(event.id)}
                          disabled={event.seats_left === 0 || event.isBooked} 
                          style={!event.isBooked ? {backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))'} : {}}
                          variant={event.isBooked ? 'outline' : 'default'}
                          className="hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {event.isBooked ? (
                            <>
                              <CheckCircle className="mr-2 h-4 w-4"/> Booked
                            </>
                          ) : event.seats_left === 0 ? "Full" : "Book Now"}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
