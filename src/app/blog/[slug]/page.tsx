import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

// In a real app, you'd fetch this data based on the slug
const postData: { [key: string]: any } = {
  "top-10-study-hacks": {
    slug: "top-10-study-hacks",
    title: "Top 10 Study Hacks for Exam Season",
    author: "Academic Skills Team",
    date: "2024-10-01",
    category: "Academic Skills",
    image: "https://placehold.co/1200x600.png",
    dataAiHint: "university library students",
    content: `
      <p class="text-lg text-muted-foreground leading-relaxed">The pressure of final exams can be overwhelming. But with the right strategies, you can study smarter, not harder. Here are ten study hacks backed by science to help you conquer exam season.</p>
      <h3 class="font-headline text-2xl mt-8 mb-4 font-bold">1. The Pomodoro Technique</h3>
      <p class="text-lg text-muted-foreground leading-relaxed">Work in focused 25-minute intervals, followed by a 5-minute break. This method, developed by Francesco Cirillo, helps maintain high levels of concentration and prevents mental fatigue. After four "Pomodoros," take a longer break of 15-30 minutes.</p>
      <h3 class="font-headline text-2xl mt-8 mb-4 font-bold">2. Active Recall</h3>
      <p class="text-lg text-muted-foreground leading-relaxed">Instead of passively rereading your notes, actively try to retrieve information from your memory. You can do this by closing your book and summarizing a topic, or by using flashcards. This process strengthens neural pathways, making information easier to remember.</p>
      <h3 class="font-headline text-2xl mt-8 mb-4 font-bold">3. Spaced Repetition</h3>
      <p class="text-lg text-muted-foreground leading-relaxed">Review material at increasing intervals. For example, review a topic one day after learning it, then three days later, then a week later, and so on. This technique combats the "forgetting curve" and helps transfer information to your long-term memory.</p>
      <blockquote class="border-l-4 border-primary pl-4 italic my-8 text-muted-foreground">"Tell me and I forget, teach me and I may remember, involve me and I learn." - Benjamin Franklin</blockquote>
      <h3 class="font-headline text-2xl mt-8 mb-4 font-bold">4. Feynman Technique</h3>
      <p class="text-lg text-muted-foreground leading-relaxed">Choose a concept you want to understand and try to explain it in simple terms, as if you were teaching it to a child. This forces you to identify gaps in your own understanding. If you get stuck, go back to your source material until you can explain it clearly.</p>
      <p class="mt-8 text-lg text-muted-foreground leading-relaxed">By incorporating these techniques into your study routine, you'll not only improve your grades but also develop more effective learning habits for life. Good luck!</p>
    `
  },
  "default": {
    slug: "post-not-found",
    title: "Post Not Found",
    author: "System",
    date: new Date().toISOString(),
    category: "Error",
    image: "https://placehold.co/1200x600.png",
    dataAiHint: "empty classroom",
    content: `<p class="text-lg text-muted-foreground leading-relaxed">The post you are looking for could not be found. It might have been moved or deleted.</p>`
  }
};


export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = postData[params.slug] || postData.default;

  return (
    <article className="container mx-auto max-w-3xl px-4 py-12">
      <div className="text-center mb-8">
        <Badge variant="secondary">{post.category}</Badge>
        <h1 className="font-headline text-4xl font-bold tracking-tight mt-4 sm:text-5xl">
          {post.title}
        </h1>
        <div className="flex items-center justify-center gap-3 mt-6">
          <Avatar className="h-10 w-10">
            <AvatarImage src={`https://placehold.co/40x40.png`} data-ai-hint="writer portrait" />
            <AvatarFallback>{post.author.split(' ').map((n: string)=>n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-semibold">{post.author}</p>
            <p className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })}</p>
          </div>
        </div>
      </div>
      
      <div className="my-8 rounded-lg overflow-hidden shadow-lg">
        <Image src={post.image} alt={post.title} width={1200} height={600} className="w-full object-cover" data-ai-hint={post.dataAiHint} />
      </div>

      <div 
        className="space-y-6"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}

export async function generateStaticParams() {
  const slugs = Object.keys(postData).filter(key => key !== 'default');
  return slugs.map(slug => ({
    slug,
  }));
}
