"use client";

import { useState } from 'react';
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import { useTypingPlaceholder } from '@/hooks/useTypingPlaceholder';
import { GradientContainer } from '@/components/ui/gradient-container';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const PLACEHOLDER_PHRASES = [
  "What the hell is this?",
  "How does this help anyone?",
  "Why did you spend so much time on this?",
  "What drugs did you take?"
];

interface ChatInputProps {
  onSubmit: (message: string) => void;
}

export default function ChatInput({ onSubmit }: ChatInputProps) {
  const [message, setMessage] = useState('');
  const placeholder = useTypingPlaceholder(PLACEHOLDER_PHRASES);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    onSubmit(message);
    setMessage('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4"
    >
      <GradientContainer className="rounded-2xl animated-shadow">
        <div className="relative">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            rows={1}
            className={cn(
              "w-full bg-[#121212] border-white/20 text-white pr-12 py-3 text-lg resize-none overflow-hidden rounded-2xl",
              "min-h-[48px] max-h-[120px]",
              "scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
            )}
            style={{ height: 'auto' }}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = 'auto';
              target.style.height = `${target.scrollHeight}px`;
            }}
          />
          <Button 
            type="submit"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-xl bg-[#3B82F6] hover:bg-[#3B82F6]/90"
          >
            <ArrowRight className="h-5 w-5 text-white" />
          </Button>
        </div>
      </GradientContainer>
    </form>
  );
}