interface ChatHeaderProps {
  onMenuClick: () => void;
}

export default function ChatHeader({ onMenuClick }: ChatHeaderProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-20 border-b border-border h-14 bg-background/50">
      <div className="h-full max-w-4xl mx-auto px-4 flex items-center justify-center">
        {/* Spacer */}
      </div>
    </div>
  );
}
