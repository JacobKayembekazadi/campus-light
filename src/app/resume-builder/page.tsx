import { ResumeBuilderForm } from "@/components/resume-builder-form";
import { PenSquare } from "lucide-react";

export default function ResumeBuilderPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12">
      <div className="text-center mb-12">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto">
          <PenSquare className="h-8 w-8" />
        </div>
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          AI Resume Builder
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Optimize your resume for Applicant Tracking Systems (ATS). Paste your resume and an optional job description to get AI-powered improvements.
        </p>
      </div>
      
      <ResumeBuilderForm />
    </div>
  );
}
