import { Menu } from "lucide-react";

interface ChatHeaderProps {
  onMenuClick: () => void;
}

export default function ChatHeader({ onMenuClick }: ChatHeaderProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-20 border-b border-border h-14 bg-background/50">
      <div className="h-full max-w-4xl mx-auto px-4 flex items-center justify-between">
        {/* Left: Hamburger Button */}
        <button
          onClick={onMenuClick}
          className="p-1.5 text-foreground hover:bg-secondary/40 rounded transition-colors duration-150"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Center: Logo/Title */}
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 bg-accent rounded flex items-center justify-center flex-shrink-0">
            <span className="text-xs font-bold text-accent-foreground">V</span>
          </span>
          <h1 className="text-sm font-medium text-foreground">VanIA</h1>
        </div>

        {/* Right: Spacer for balance */}
        <div className="w-10" />
      </div>
    </div>
  );
}
