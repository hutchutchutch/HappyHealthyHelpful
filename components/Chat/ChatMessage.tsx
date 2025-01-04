"use client";

import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isUser?: boolean;
}

export function ChatMessage({ message, isUser = true }: ChatMessageProps) {
  return (
    <div className={cn(
      "relative max-w-[80%] mb-4",
      isUser ? "ml-auto" : "mr-auto"
    )}>
      <div className={cn(
        "relative px-4 py-2 rounded-2xl",
        "break-words text-sm md:text-base",
        isUser ? 
          "bg-[#0B93F6] text-white" : 
          "bg-[#E5E5EA] text-black dark:bg-[#383838] dark:text-white",
        isUser ? 
          "rounded-br-lg" : 
          "rounded-bl-lg"
      )}>
        {message}
      </div>
    </div>
  );
}