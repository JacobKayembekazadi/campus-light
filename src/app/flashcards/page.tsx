import { FlashcardGenerator } from "@/components/flashcard-generator";
import { BrainCircuit } from "lucide-react";

export default function FlashcardsPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      <div className="text-center mb-12">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto">
          <BrainCircuit className="h-8 w-8" />
        </div>
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Flashcard Generator
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Turn your notes into interactive flashcards. Paste your content, and we'll do the rest.
        </p>
      </div>
      
      <FlashcardGenerator />
    </div>
  );
}
