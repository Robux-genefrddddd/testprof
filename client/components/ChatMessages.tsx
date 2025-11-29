import { useEffect, useRef } from "react";

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
            <div className="w-12 h-12 bg-accent rounded flex items-center justify-center mx-auto mb-4">
              <span className="text-xl text-accent-foreground">Ask</span>
            </div>
          </div>
          <h2 className="text-lg text-foreground mb-2">Welcome to VanIA</h2>
          <p className="text-sm text-foreground/60 max-w-sm">
            Ask anything. VanIA will help you explore new ideas.
          </p>
        </div>
      ) : (
        <>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-2 animate-message-fade ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.role === "assistant" && (
                <div className="w-6 h-6 bg-accent rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-xs text-accent-foreground">A</span>
                </div>
              )}

              <div
                className={`max-w-2xl rounded px-3 py-2 text-sm leading-relaxed message-bubble ${
                  message.role === "assistant"
                    ? "message-bubble-ai"
                    : "message-bubble-user"
                }`}
              >
                {message.isThinking ? (
                  <div className="flex items-center gap-1.5">
                    <span className="text-foreground/70">VanIA is thinking</span>
                    <div className="flex gap-0.5">
                      <div className="w-1 h-1 rounded-full bg-foreground/50 animate-dot-travel" style={{ animationDelay: "0s" }} />
                      <div className="w-1 h-1 rounded-full bg-foreground/50 animate-dot-travel" style={{ animationDelay: "0.2s" }} />
                      <div className="w-1 h-1 rounded-full bg-foreground/50 animate-dot-travel" style={{ animationDelay: "0.4s" }} />
                    </div>
                  </div>
                ) : (
                  <p className="text-foreground whitespace-pre-wrap break-words">
                    {message.content}
                  </p>
                )}
              </div>

              {message.role === "user" && (
                <div className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0 text-xs font-medium text-foreground">
                  You
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
