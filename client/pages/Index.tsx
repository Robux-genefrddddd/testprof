import { useState, useCallback, useRef } from "react";
import ChatHeader from "@/components/ChatHeader";
import ChatMessages from "@/components/ChatMessages";
import ChatInput from "@/components/ChatInput";
import HamburgerMenu from "@/components/HamburgerMenu";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  isThinking?: boolean;
}

export default function Index() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleStartChat = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  const handleSendMessage = useCallback(async (userMessage: string) => {
    if (!userMessage.trim()) return;

    // Add user message
    const userMsgId = Date.now().toString();
    setMessages((prev) => [
      ...prev,
      {
        id: userMsgId,
        role: "user",
        content: userMessage,
      },
    ]);

    setIsLoading(true);

    // Add thinking state
    const thinkingMsgId = (Date.now() + 1).toString();
    setMessages((prev) => [
      ...prev,
      {
        id: thinkingMsgId,
        role: "assistant",
        content: "",
        isThinking: true,
      },
    ]);

    try {
      // Simulate API call - Replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Replace thinking message with actual response
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === thinkingMsgId
            ? {
                ...msg,
                isThinking: false,
                content:
                  "This is a placeholder response from VanIA. In a production environment, this would be connected to a real AI service like OpenAI, OpenRouter, or your custom backend.",
              }
            : msg,
        ),
      );
    } catch (error) {
      console.error("Error sending message:", error);

      // Replace thinking message with error
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === thinkingMsgId
            ? {
                ...msg,
                isThinking: false,
                content:
                  "Sorry, I encountered an error. Please try again later.",
              }
            : msg,
        ),
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="h-screen w-full bg-background flex overflow-hidden">
      {/* Hamburger Menu */}
      <div className="fixed top-4 left-4 z-50">
        <HamburgerMenu isOpen={isMenuOpen} onOpenChange={setIsMenuOpen} />
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <ChatHeader onMenuClick={() => setIsMenuOpen(!isMenuOpen)} />

        {/* Messages */}
        <ChatMessages messages={messages} onStartChat={handleStartChat} />

        {/* Input */}
        <ChatInput
          ref={inputRef}
          onSendMessage={handleSendMessage}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
