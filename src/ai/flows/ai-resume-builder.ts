'use server';

/**
 * @fileOverview An AI-powered resume builder flow.
 *
 * - aiResumeBuilder - A function that suggests improvements to a resume.
 * - AiResumeBuilderInput - The input type for the aiResumeBuilder function.
 * - AiResumeBuilderOutput - The return type for the aiResumeBuilder function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiResumeBuilderInputSchema = z.object({
  resumeText: z
    .string()
    .describe('The text content of the resume to be improved.'),
  jobDescription: z
    .string()
    .optional()
    .describe('Optional: The job description to tailor the resume to.'),
});
export type AiResumeBuilderInput = z.infer<typeof AiResumeBuilderInputSchema>;

const AiResumeBuilderOutputSchema = z.object({
  improvedResume: z
    .string()
    .describe('The improved resume text with suggestions.'),
});
export type AiResumeBuilderOutput = z.infer<typeof AiResumeBuilderOutputSchema>;

export async function aiResumeBuilder(input: AiResumeBuilderInput): Promise<AiResumeBuilderOutput> {
  return aiResumeBuilderFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiResumeBuilderPrompt',
  input: {schema: AiResumeBuilderInputSchema},
  output: {schema: AiResumeBuilderOutputSchema},
  prompt: `You are an expert resume writer specializing in optimizing resumes for applicant tracking systems (ATS). Review the provided resume and suggest improvements to increase its chances of getting past the ATS and landing an interview.

Resume:
{{resumeText}}

{{#if jobDescription}}
Here is the job description to tailor the resume to:
{{jobDescription}}
{{/if}}

Provide specific, actionable suggestions for improving the resume. Focus on keywords, formatting, and content.

Return the complete improved resume with your suggestions incorporated.
`,
});

const aiResumeBuilderFlow = ai.defineFlow(
  {
    name: 'aiResumeBuilderFlow',
    inputSchema: AiResumeBuilderInputSchema,
    outputSchema: AiResumeBuilderOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
