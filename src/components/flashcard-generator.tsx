"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, RotateCcw } from "lucide-react";

interface FlashcardData {
  term: string;
  definition: string;
}

function Flashcard({ term, definition }: FlashcardData) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full h-64 [perspective:1000px]" onClick={() => setIsFlipped(!isFlipped)}>
      <div className={`relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 cursor-pointer ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
        {/* Front */}
        <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center p-6 bg-card border rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-center font-headline">{term}</h3>
        </div>
        {/* Back */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center p-6 bg-card border rounded-lg shadow-lg">
          <p className="text-center text-muted-foreground">{definition}</p>
        </div>
      </div>
    </div>
  );
}

export function FlashcardGenerator() {
  const [input, setInput] = useState("");
  const [flashcards, setFlashcards] = useState<FlashcardData[]>([]);

  const generateFlashcards = () => {
    const lines = input.trim().split('\n').filter(line => line.includes(':'));
    const generated = lines.map(line => {
      const parts = line.split(':');
      return {
        term: parts[0].trim(),
        definition: parts.slice(1).join(':').trim()
      };
    });
    setFlashcards(generated);
  };
  
  const reset = () => {
    setInput("");
    setFlashcards([]);
  }

  return (
    <div className="space-y-8">
      {flashcards.length === 0 ? (
        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-6 space-y-4">
            <Textarea 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter your terms and definitions, one per line, separated by a colon (:).&#10;Example:&#10;Mitochondria: The powerhouse of the cell&#10;Photosynthesis: The process by which green plants use sunlight to synthesize foods"
              className="min-h-[200px]"
            />
            <Button onClick={generateFlashcards} disabled={!input.trim()} size="lg" className="w-full">
              <Lightbulb className="mr-2 h-4 w-4" />
              Generate Flashcards
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
