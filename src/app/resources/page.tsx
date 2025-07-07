import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, ListChecks, Presentation } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const resources = [
  {
    title: "CV Template Pack (ATS-Friendly)",
    description: "A collection of 5 professional, ATS-optimized resume templates in .docx format.",
    icon: FileText,
    type: "Template",
  },
  {
    title: "Interview Preparation Checklist",
    description: "A comprehensive checklist to ensure you're fully prepared for your next job interview.",
    icon: ListChecks,
    type: "Checklist",
  },
  {
    title: "Public Speaking Slide Deck",
    description: "Slides from our 'Public Speaking Bootcamp' workshop, filled with tips and tricks.",
    icon: Presentation,
    type: "Slide Deck",
  },
  {
    title: "Networking Email Templates",
    description: "A set of effective email templates for reaching out to professionals and alumni.",
    icon: FileText,
    type: "Template",
  },
  {
    title: "Financial Budgeting Spreadsheet",
    description: "An easy-to-use Google Sheets template for managing your student budget.",
    icon: ListChecks,
    type: "Template",
  },
  {
    title: "Case Study Analysis Framework",
    description: "A guide and slide deck to help you structure and present case study analyses.",
    icon: Presentation,
    type: "Guide",
  },
];

export default function ResourcesPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Resource Library
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Downloadable templates, checklists, and guides to accelerate your growth.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource, index) => (
          <Card key={index} className="flex flex-col justify-between transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                  <resource.icon className="h-6 w-6" />
                </div>
                <Badge variant="outline">{resource.type}</Badge>
              </div>
              <CardTitle className="font-headline text-xl pt-4">{resource.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{resource.description}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
