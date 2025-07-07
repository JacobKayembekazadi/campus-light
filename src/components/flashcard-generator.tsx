"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, RotateCcw, Loader2 } from "lucide-react";
import { generateFlashcards } from "@/ai/flows/flashcard-generator-flow";
import { useToast } from "@/hooks/use-toast";

interface FlashcardData {
  term: string;
  definition: string;
}

function Flashcard({ term, definition }: FlashcardData) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleFlip();
    }
  }

  return (
    <div className="w-full h-64 [perspective:1000px]">
      <button 
        onClick={handleFlip}
        onKeyDown={handleKeyDown}
        className={`relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 ${isFlipped ? '[transform:rotateY(180deg)]' : ''} focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg`}
        aria-label={`Flashcard for ${term}. Click or press enter to flip.`}
      >
        {/* Front */}
        <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center p-6 bg-card border rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-center font-headline">{term}</h3>
        </div>
        {/* Back */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center p-6 bg-card border rounded-lg shadow-lg">
          <p className="text-center text-muted-foreground">{definition}</p>
        </div>
      </button>
    </div>
  );
}

export function FlashcardGenerator() {
  const [topic, setTopic] = useState("");
  const [flashcards, setFlashcards] = useState<FlashcardData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    setIsLoading(true);
    setFlashcards([]);
    try {
      const result = await generateFlashcards({ topic });
      if (result.flashcards && result.flashcards.length > 0) {
        setFlashcards(result.flashcards);
      } else {
        toast({
          variant: "destructive",
          title: "No flashcards generated",
          description: "The AI could not generate flashcards from the provided text. Please try again with different content.",
        });
      }
    } catch (error) {
      console.error("Error generating flashcards:", error);
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Failed to generate flashcards. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const reset = () => {
    setTopic("");
    setFlashcards([]);
  }

  return (
    <div className="space-y-8">
      {flashcards.length === 0 ? (
        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-6 space-y-4">
            <Textarea 
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Paste a block of text or describe a topic here, and our AI will create flashcards for you. For example, paste your lecture notes on cellular respiration."
              className="min-h-[200px]"
              aria-label="Topic or text for flashcard generation"
            />
            <Button onClick={handleGenerate} disabled={!topic.trim() || isLoading} size="lg" className="w-full">
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Lightbulb className="mr-2 h-4 w-4" />
              )}
              {isLoading ? "Generating..." : "Generate with AI"}
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div>
           <div className="text-center mb-8">
             <Button onClick={reset} variant="outline">
                <RotateCcw className="mr-2 h-4 w-4" />
                Create a new set
            </Button>
           </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {flashcards.map((card, index) => (
              <Flashcard key={index} term={card.term} definition={card.definition} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
