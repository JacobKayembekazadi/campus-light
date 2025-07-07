import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const benefits = [
    "Give back to the student community",
    "Develop leadership and coaching skills",
    "Expand your professional network",
    "Gain personal satisfaction and fulfillment",
    "Receive a certificate of appreciation",
];

export default function MentorshipPage() {
    return (
        <div className="container mx-auto max-w-5xl px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                    Become a Mentor
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Share your experience and guide the next generation of students. Join our mentorship program and make a lasting impact.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">Why Become a Mentor?</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start">
                                        <Check className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                                        <span className="text-muted-foreground">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
                <div className="bg-card p-8 rounded-lg shadow-lg text-center md:text-left">
                    <h2 className="font-headline text-3xl font-bold mb-4">Ready to Join?</h2>
                    <p className="text-muted-foreground mb-6">
                        We are looking for alumni and senior students who are passionate about helping others succeed. If you're ready to take the next step, fill out our application form.
                    </p>
                    <Button size="lg" style={{backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))'}}>Apply to be a Mentor</Button>
                </div>
            </div>
        </div>
    );
}
