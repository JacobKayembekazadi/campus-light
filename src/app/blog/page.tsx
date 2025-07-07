import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const posts = [
  {
    slug: "top-10-study-hacks",
    title: "Top 10 Study Hacks for Exam Season",
    excerpt: "Exams are around the corner. Here are our top 10 evidence-based study techniques to help you ace your tests without the stress.",
    author: "Academic Skills Team",
    date: "2024-10-01",
    category: "Academic Skills",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "students studying library"
  },
  {
    slug: "navigating-office-etiquette",
    title: "Navigating Your First Internship: Office Etiquette 101",
    excerpt: "From email tone to meeting conduct, master the unwritten rules of the workplace and make a great impression during your internship.",
    author: "Career Services",
    date: "2024-09-25",
    category: "Workplace Etiquette",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "modern office people"
  },
  {
    slug: "comedy-corner-dorm-life",
    title: "Comedy Corner: 5 Unspoken Rules of Dorm Life",
    excerpt: "A humorous take on the trials and tribulations of living in a student residence. If you know, you know.",
    author: "Freshman Faith",
    date: "2024-09-20",
    category: "Comedy Corner",
    image: "https://placehold.co/600x400.png",
    dataAiHint: "university dorm room"
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Blog & Media
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Articles, stories, and insights from the Light on Campus community.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <Card className="h-full overflow-hidden transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
              <CardHeader className="p-0">
                <Image src={post.image} alt={post.title} width={600} height={400} className="w-full object-cover aspect-video" data-ai-hint={post.dataAiHint} />
              </CardHeader>
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-2">{post.category}</Badge>
                <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                     <AvatarImage src={`https://placehold.co/32x32.png`} data-ai-hint="writer portrait" />
                    <AvatarFallback>{post.author.split(' ').map(n=>n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold">{post.author}</p>
                    <p className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
