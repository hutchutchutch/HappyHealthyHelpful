"use client";

import { ChatMessage } from "./ChatMessage";

interface ChatMessagesProps {
  messages: string[];
}

export function ChatMessages({ messages }: ChatMessagesProps) {
  return (
    <div className="absolute bottom-[88px] right-4 w-full max-w-md space-y-2 max-h-[60vh] overflow-y-auto px-4">
      {messages.map((message, index) => (
        <ChatMessage key={index} message={message} />
      ))}
    </div>
  );
}