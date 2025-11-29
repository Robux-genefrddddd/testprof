import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
}

export default function ChatInput({ onSendMessage, isLoading }: ChatInputProps) {
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      const newHeight = Math.min(textareaRef.current.scrollHeight, 120);
      textareaRef.current.style.height = newHeight + "px";
    }
  }, [message]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 border-t border-border/50">
      <div className="bg-background/80 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <form onSubmit={handleSubmit} className="flex gap-3 items-end">
            {/* Input Area */}
            <div className="flex-1 relative">
              <textarea
                ref={textareaRef}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Write a message... (Shift+Enter for new line)"
                className={cn(
                  "w-full px-4 py-2.5 rounded-lg bg-input border border-border text-foreground text-sm",
                  "placeholder:text-foreground/40 resize-none",
                  "transition-all duration-200 ease-out",
                  "focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30",
                  "min-h-[44px] max-h-[120px]"
                )}
              />
            </div>

            {/* Send Button */}
            <button
              type="submit"
              disabled={!message.trim() || isLoading}
              className={cn(
                "p-2.5 rounded-lg transition-all duration-200 ease-out flex-shrink-0",
                "focus:outline-none focus:ring-1 focus:ring-accent",
                message.trim() && !isLoading
                  ? "bg-accent text-accent-foreground hover:bg-accent/90 cursor-pointer"
                  : "bg-secondary/50 text-foreground/40 cursor-not-allowed"
              )}
              aria-label="Send message"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>

          <p className="text-xs text-foreground/40 mt-2">
            VanIA uses AI to help you. Always verify important information.
          </p>
        </div>
      </div>
    </div>
  );
}
