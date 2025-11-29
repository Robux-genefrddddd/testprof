import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  isThinking?: boolean;
}

interface ChatMessagesProps {
  messages: Message[];
}

export default function ChatMessages({ messages }: ChatMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 max-w-3xl mx-auto w-full">
      {messages.length === 0 ? (
        <div className="h-full flex flex-col items-center justify-center text-center py-16">
          <div className="mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-accent">V</span>
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Welcome to VanIA
          </h2>
          <p className="text-foreground/60 max-w-sm">
            Start a conversation to explore what VanIA can do for you. Ask anything.
          </p>
        </div>
      ) : (
        <>
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex gap-3 animate-message-fade",
                message.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              {message.role === "assistant" && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/60 to-accent/30 flex items-center justify-center flex-shrink-0 border border-accent/20">
                  <span className="text-xs font-bold text-accent-foreground">V</span>
                </div>
              )}

              <div
                className={cn(
                  "max-w-xl rounded-2xl px-4 py-3 break-words message-bubble",
                  message.role === "assistant"
                    ? "message-bubble-ai bg-secondary/40 border border-secondary/30"
                    : "message-bubble-user bg-accent/15 border border-accent/30"
                )}
              >
                {message.isThinking ? (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-foreground/80">VanIA is thinking</span>
                    <div className="flex gap-1">
                      <div
                        className="w-1.5 h-1.5 rounded-full bg-accent/60 animate-dot-travel"
                        style={{ animationDelay: "0s" }}
                      />
                      <div
                        className="w-1.5 h-1.5 rounded-full bg-accent/60 animate-dot-travel"
                        style={{ animationDelay: "0.2s" }}
                      />
                      <div
                        className="w-1.5 h-1.5 rounded-full bg-accent/60 animate-dot-travel"
                        style={{ animationDelay: "0.4s" }}
                      />
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">
                    {message.content}
                  </p>
                )}
              </div>

              {message.role === "user" && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/60 to-accent/30 flex items-center justify-center flex-shrink-0 border border-accent/20">
                  <span className="text-xs font-bold text-accent-foreground">You</span>
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </>
      )}
    </div>
  );
}
