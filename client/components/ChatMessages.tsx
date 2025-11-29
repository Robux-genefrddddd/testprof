import { useEffect, useRef } from "react";
import { MessageCircle } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  isThinking?: boolean;
}

interface ChatMessagesProps {
  messages: Message[];
  onStartChat?: () => void;
}

export default function ChatMessages({
  messages,
  onStartChat,
}: ChatMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Hero Section - shown when no messages
  if (messages.length === 0) {
    return (
      <div className="flex-1 overflow-y-auto px-4 py-6 max-w-3xl mx-auto w-full flex items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center text-center space-y-8 animate-fade-in">
          {/* Main Hero Content */}
          <div className="space-y-4 max-w-2xl">
            {/* Title */}
            <h1 className="text-5xl text-foreground tracking-tight">
              Bienvenue sur VanIA
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-foreground/70 leading-relaxed">
              Votre assistant intelligent pour explorer, créer et automatiser.
            </p>

            {/* Secondary text */}
            <p className="text-sm text-foreground/50 pt-2">
              Commencez une conversation en cliquant ci-dessous.
            </p>
          </div>

          {/* Primary CTA Button */}
          <button
            onClick={onStartChat}
            className="group relative px-8 py-3.5 rounded-full bg-gradient-to-r from-accent via-accent to-blue-600 text-white font-medium text-sm transition-all duration-300 ease-out hover:shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2 mt-4 animate-slide-up"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Démarrer une conversation</span>

            {/* Soft glow effect on hover */}
            <div className="absolute inset-0 rounded-full bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-lg" />
          </button>

          {/* Feature hints */}
          <div className="pt-8 grid grid-cols-3 gap-6 w-full max-w-md text-center">
            <div className="space-y-1">
              <div className="text-2xl">💡</div>
              <p className="text-xs text-foreground/50">Explorez</p>
            </div>
            <div className="space-y-1">
              <div className="text-2xl">✨</div>
              <p className="text-xs text-foreground/50">Créez</p>
            </div>
            <div className="space-y-1">
              <div className="text-2xl">⚙️</div>
              <p className="text-xs text-foreground/50">Automatisez</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Chat Messages View - shown when messages exist
  return (
    <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 max-w-3xl mx-auto w-full">
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
                  <div
                    className="w-1 h-1 rounded-full bg-foreground/50 animate-dot-travel"
                    style={{ animationDelay: "0s" }}
                  />
                  <div
                    className="w-1 h-1 rounded-full bg-foreground/50 animate-dot-travel"
                    style={{ animationDelay: "0.2s" }}
                  />
                  <div
                    className="w-1 h-1 rounded-full bg-foreground/50 animate-dot-travel"
                    style={{ animationDelay: "0.4s" }}
                  />
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
    </div>
  );
}
