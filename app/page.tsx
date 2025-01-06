"use client";

import { Button } from "@/components/ui/button";
import ForceGraph from "@/components/ForceGraph";
import ChatInput from "@/components/ChatInput";
import { BlurredHeader } from "@/components/BlurredHeader";
import { ChatMessages } from "@/components/Chat/ChatMessages";
import { DesignLifeModal } from "@/components/DesignLifeModal";
import { graphData } from "@/lib/data/graph-data";
import { useState, useEffect } from "react";
import { GraphService } from "@/lib/langchain/graphs";

export default function Home() {
  const [messages, setMessages] = useState<Array<{text: string; response?: string}>>([]);
  const [isDesignModalOpen, setIsDesignModalOpen] = useState(false);
  const graphService = new GraphService();

  useEffect(() => {
    graphService.initialize().catch(console.error);
  }, []);

  const handleChatSubmit = async (message: string) => {
    // Add user message immediately
    setMessages(prev => [...prev, { text: message }]);

    try {
      const result = await graphService.processMessage(message);
      
      // Update the last message with the AI response
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1].response = result.response;
        return newMessages;
      });
    } catch (error) {
      console.error('Error processing message:', error);
    }
  };

  return (
    <main className="fixed inset-0 bg-background">
      <div className="relative w-full h-full">
        {/* Top Gradient */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-background to-transparent z-[5] pointer-events-none" />
        
        {/* Graph */}
        <div className="absolute inset-0 bottom-[88px]">
          <ForceGraph
            data={graphData}
            defaultWidth={1200}
            defaultHeight={800}
          />
          {/* Bottom Gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </div>

        {/* Header Section */}
        <div className="absolute top-16 left-16 z-10 flex flex-col items-start space-y-12">
          <BlurredHeader />
          
          <Button
            size="lg"
            className="gradient-shadow text-base md:text-lg px-6 md:px-8 h-[48px] md:h-[60px] rounded-2xl bg-[#121212] hover:bg-[#1a1a1a] transition-colors flex items-center justify-center"
            onClick={() => setIsDesignModalOpen(true)}
          >
            <span className="gradient-text">Create Yours</span>
          </Button>
        </div>

        {/* Chat Messages */}
        <ChatMessages messages={messages} />

        {/* Chat Input */}
        <ChatInput onSubmit={handleChatSubmit} />

        {/* Design Life Modal */}
        <DesignLifeModal 
          isOpen={isDesignModalOpen}
          onClose={() => setIsDesignModalOpen(false)}
        />
      </div>
    </main>
  );
}