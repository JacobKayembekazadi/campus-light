"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { aiResumeBuilder } from "@/ai/flows/ai-resume-builder";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Sparkles } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const formSchema = z.object({
  resumeText: z.string().min(100, "Please enter at least 100 characters for your resume."),
  jobDescription: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function ResumeBuilderForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [improvedResume, setImprovedResume] = useState("");
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      resumeText: "",
      jobDescription: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setImprovedResume("");
    try {
      const result = await aiResumeBuilder(values);
      setImprovedResume(result.improvedResume);
    } catch (error) {
      console.error("Error improving resume:", error);
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Failed to get suggestions. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Your Information</CardTitle>
          <CardDescription>Provide your resume and a job description for tailored suggestions.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="resumeText"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Your Resume</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Paste your full resume text here..."
                        className="min-h-[300px] text-sm"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="jobDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Job Description (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Paste the job description to tailor your resume..."
                        className="min-h-[200px] text-sm"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} size="lg" className="w-full" style={{backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))'}}>
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Sparkles className="mr-2 h-4 w-4" />
                )}
                {isLoading ? "Analyzing..." : "Improve My Resume"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle className="font-headline">AI Suggestions</CardTitle>
          <CardDescription>
            {improvedResume ? "Here is the improved version of your resume." : "Your improved resume will appear here."}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          {isLoading ? (
             <div className="flex flex-col items-center justify-center h-full pt-16">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="mt-4 text-muted-foreground">Generating suggestions...</p>
             </div>
          ) : (
            <ScrollArea className="h-[560px] w-full rounded-md border bg-secondary/30 p-4">
              <pre className="whitespace-pre-wrap font-body text-sm">
                {improvedResume || "Awaiting submission..."}
              </pre>
            </ScrollArea>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
