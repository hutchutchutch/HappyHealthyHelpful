"use client";

import { ChatMessage } from "./ChatMessage";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useEffect, useRef } from "react";

interface ChatMessagesProps {
  messages: Array<{text: string; response?: string}>;
}

export function ChatMessages({ messages }: ChatMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="absolute top-0 right-4 bottom-[88px] w-full max-w-md overflow-y-auto px-4">
      <div className="flex flex-col justify-end min-h-full pb-4 space-y-3">
        {messages.map((message, index) => (
          <div key={index} className="space-y-3">
            <ChatMessage message={message.text} isUser={true} />
            <ChatMessage 
              message={message.response || "I'm processing your message..."} 
              isUser={false} 
            />
            {message.response && (
              <Card className="bg-[#1a1a1a] border-white/10 text-white rounded-[20px]">
                <CardHeader>
                  <CardTitle className="text-lg">Suggested Actions</CardTitle>
                  <CardDescription className="text-white/70">
                    {message.response}
                  </CardDescription>
                </CardHeader>
              </Card>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}