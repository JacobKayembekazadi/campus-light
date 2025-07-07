import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowUp, MessageSquare, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const threads = [
  {
    title: "Best way to prepare for finals week? Looking for study hacks!",
    author: "Second-Year Sam",
    upvotes: 128,
    replies: 42,
    category: "Academic Skills",
  },
  {
    title: "Has anyone taken the Dining Etiquette seminar? Was it worth it?",
    author: "Freshman Faith",
    upvotes: 76,
    replies: 15,
    category: "Events",
  },
  {
    title: "Job hunt motivation thread - share your wins and struggles!",
    author: "Final-Year Femi",
    upvotes: 256,
    replies: 89,
    category: "Job Preparedness",
  },
  {
    title: "Need help with a research project on AI ethics - any good resources?",
    author: "Post-Grad Priya",
    upvotes: 98,
    replies: 22,
    category: "Tech Trends",
  },
  {
    title: "How to deal with a difficult roommate? Advice needed!",
    author: "Freshman Faith",
    upvotes: 153,
    replies: 67,
    category: "Mind Clinic",
  },
];

export default function ForumPage() {
  return (
    <div className="bg-secondary/30 min-h-screen">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Community Forum
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Ask questions, share advice, and connect with your peers.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Search forum..." className="pl-10 h-11" />
          </div>
          <Button style={{backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))'}} className="hover:opacity-90 h-11">New Post</Button>
        </div>

        <div className="space-y-4">
          {threads.map((thread, index) => (
            <Card key={index} className="hover:border-primary/50 transition-colors">
              <CardContent className="p-4 flex items-start gap-4">
                <div className="flex flex-col items-center gap-1 w-12 text-center flex-shrink-0">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <ArrowUp className="h-5 w-5" />
                  </Button>
                  <span className="font-bold text-lg">{thread.upvotes}</span>
                </div>
                <div className="flex-grow">
                  <Badge variant="secondary">{thread.category}</Badge>
                  <Link href="#">
                    <h3 className="font-headline text-lg font-semibold mt-2 hover:text-primary cursor-pointer">{thread.title}</h3>
                  </Link>
                  <div className="flex flex-wrap items-center justify-between mt-2 text-sm text-muted-foreground gap-x-4 gap-y-2">
                    <div className="flex items-center gap-2">
                       <Avatar className="h-6 w-6">
                        <AvatarImage src={`https://placehold.co/24x24.png`} data-ai-hint="student portrait" />
                        <AvatarFallback>{thread.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <span>Posted by {thread.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      <span>{thread.replies} replies</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
