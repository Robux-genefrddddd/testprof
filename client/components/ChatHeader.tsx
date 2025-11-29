import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatHeaderProps {
  onMenuClick: () => void;
}

export default function ChatHeader({ onMenuClick }: ChatHeaderProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-20 border-b border-border/50">
      <div className="bg-background/80 backdrop-blur-md">
        <div className="h-16 max-w-5xl mx-auto px-4 flex items-center justify-between">
          {/* Left: Hamburger Button */}
          <button
            onClick={onMenuClick}
            className={cn(
              "p-2 rounded-lg transition-all duration-200",
              "hover:bg-secondary/50 focus:outline-none focus:ring-1 focus:ring-accent",
              "text-foreground"
            )}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Center: Logo/Title */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center">
              <span className="text-sm font-bold text-accent-foreground">V</span>
            </div>
            <h1 className="text-lg font-semibold text-foreground tracking-tight">
              VanIA
            </h1>
          </div>

          {/* Right: Spacer for balance */}
          <div className="w-10 h-10" />
        </div>
      </div>
    </div>
  );
}
