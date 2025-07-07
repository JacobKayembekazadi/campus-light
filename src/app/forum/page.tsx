"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowUp, MessageSquare, Plus, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

const initialThreads = [
  {
    id: 1,
    title: "Best way to prepare for finals week? Looking for study hacks!",
    author: "Second-Year Sam",
    upvotes: 128,
    replies: 42,
    category: "Academic Skills",
    isUpvoted: false,
  },
  {
    id: 2,
    title: "Has anyone taken the Dining Etiquette seminar? Was it worth it?",
    author: "Freshman Faith",
    upvotes: 76,
    replies: 15,
    category: "Events",
    isUpvoted: false,
  },
  {
    id: 3,
    title: "Job hunt motivation thread - share your wins and struggles!",
    author: "Final-Year Femi",
    upvotes: 256,
    replies: 89,
    category: "Job Preparedness",
    isUpvoted: false,
  },
  {
    id: 4,
    title: "Need help with a research project on AI ethics - any good resources?",
    author: "Post-Grad Priya",
    upvotes: 98,
    replies: 22,
    category: "Tech Trends",
    isUpvoted: false,
  },
  {
    id: 5,
    title: "How to deal with a difficult roommate? Advice needed!",
    author: "Freshman Faith",
    upvotes: 153,
    replies: 67,
    category: "Mind Clinic",
    isUpvoted: false,
  },
];

export default function ForumPage() {
  const [threads, setThreads] = useState(initialThreads);
  const [searchQuery, setSearchQuery] = useState("");
  const [isNewPostOpen, setIsNewPostOpen] = useState(false);

  const handleUpvote = (id: number) => {
    setThreads(threads.map(thread => 
      thread.id === id ? { ...thread, upvotes: thread.isUpvoted ? thread.upvotes - 1 : thread.upvotes + 1, isUpvoted: !thread.isUpvoted } : thread
    ));
  };

  const filteredThreads = threads.filter(thread => 
    thread.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    thread.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            <label htmlFor="forum-search" className="sr-only">Search forum</label>
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              id="forum-search"
              placeholder="Search forum..." 
              className="pl-10 h-11" 
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
          <Button onClick={() => setIsNewPostOpen(true)} style={{backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))'}} className="hover:opacity-90 h-11">
            <Plus className="mr-2 h-5 w-5" />
            New Post
          </Button>
        </div>

        <div className="space-y-4">
          {filteredThreads.map((thread) => (
            <Card key={thread.id} className="hover:border-primary/50 transition-colors">
              <CardContent className="p-4 flex items-start gap-4">
                <div className="flex flex-col items-center gap-1 w-12 text-center flex-shrink-0">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className={`h-8 w-8 p-0 ${thread.isUpvoted ? 'text-primary' : ''}`}
                    onClick={() => handleUpvote(thread.id)}
                    aria-pressed={thread.isUpvoted}
                    aria-label={`Upvote post: ${thread.title}`}
                  >
                    <ArrowUp className="h-5 w-5" />
                  </Button>
                  <span className="font-bold text-lg">{thread.upvotes}</span>
                </div>
                <div className="flex-grow">
                  <Badge variant="secondary">{thread.category}</Badge>
                  <h3 className="font-headline text-lg font-semibold mt-2">{thread.title}</h3>
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
      <Dialog open={isNewPostOpen} onOpenChange={setIsNewPostOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create a New Post</DialogTitle>
            <DialogDescription>
              Share your thoughts with the community. Please be respectful and follow our guidelines.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Input id="post-title" placeholder="Post title" aria-label="Post title" />
            <Textarea id="post-content" placeholder="What's on your mind?" className="min-h-[120px]" aria-label="Post content" />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="secondary">Cancel</Button>
            </DialogClose>
            <Button type="submit" onClick={() => setIsNewPostOpen(false)} style={{backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))'}} className="hover:opacity-90">Post</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
