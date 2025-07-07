import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function SubmitArticlePage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Write for Us
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Have a story to tell or advice to share? Submit your article for a chance to be featured on our blog.
        </p>
      </div>

      <form className="space-y-6 bg-card p-8 rounded-lg shadow-lg">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
          <Input id="name" name="name" type="text" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Your Email</label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">Article Title</label>
          <Input id="title" name="title" type="text" required />
        </div>
        <div>
          <label htmlFor="article" className="block text-sm font-medium mb-1">Your Article</label>
          <Textarea id="article" name="article" rows={10} required />
          <p className="mt-2 text-sm text-muted-foreground">Please submit your article in plain text.</p>
        </div>
        <div>
          <Button type="submit" size="lg" className="w-full" style={{backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))'}}>Submit Article</Button>
        </div>
      </form>
    </div>
  );
}
