import { useState } from "react";
import { Menu, X, Settings, History, CreditCard, LogOut, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HamburgerMenuProps {
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
}

export default function HamburgerMenu({
  isOpen: controlledIsOpen,
  onOpenChange,
}: HamburgerMenuProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = controlledIsOpen ?? internalIsOpen;
  const setIsOpen = onOpenChange ?? setInternalIsOpen;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className={cn(
          "relative z-40 p-2 rounded-lg transition-all duration-200",
          "hover:bg-secondary/50 focus:outline-none focus:ring-1 focus:ring-accent",
          "text-foreground"
        )}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <Menu className="w-5 h-5" />
        )}
      </button>

      {/* Overlay Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeMenu}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 h-screen w-80 bg-sidebar-background border-r border-sidebar-border",
          "transform transition-transform duration-300 ease-out z-40 overflow-y-auto",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "flex flex-col"
        )}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-sidebar-background/95 backdrop-blur-sm border-b border-sidebar-border">
          <div className="flex items-center justify-between px-6 py-4">
            <h2 className="text-sm font-semibold text-sidebar-foreground">Account</h2>
            <button
              onClick={closeMenu}
              className="p-1.5 rounded-lg hover:bg-sidebar-accent transition-colors"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 px-6 py-6 space-y-8">
          {/* Avatar Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/60 to-accent/30 flex items-center justify-center border border-accent/30 flex-shrink-0">
                <span className="text-sm font-semibold text-accent-foreground">AJ</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-sidebar-foreground truncate">
                  Alex Johnson
                </p>
                <p className="text-xs text-sidebar-foreground/60 truncate">
                  alex@example.com
                </p>
              </div>
            </div>
          </div>

          {/* Plan Section */}
          <div className="space-y-3">
            <div className="space-y-2">
              <p className="text-xs font-medium text-sidebar-foreground/70 uppercase tracking-wider">
                Plan
              </p>
              <div className="inline-block px-3 py-1 rounded-full bg-sidebar-accent/50 border border-sidebar-accent/50">
                <span className="text-xs font-medium text-sidebar-foreground">Free</span>
              </div>
            </div>

            {/* Upgrade Card */}
            <div className="mt-4 p-4 rounded-lg bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 hover:border-accent/40 transition-colors cursor-pointer">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-sidebar-foreground">
                    Upgrade to Pro
                  </p>
                  <p className="text-xs text-sidebar-foreground/60 mt-1">
                    Get unlimited chats
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
              </div>
            </div>
          </div>

          {/* Credits Section */}
          <div className="space-y-3">
            <p className="text-xs font-medium text-sidebar-foreground/70 uppercase tracking-wider">
              Credits
            </p>

            {/* Credit Counter */}
            <div className="space-y-2">
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-semibold text-sidebar-foreground">
                  1,250
                </span>
                <span className="text-xs text-sidebar-foreground/60">/ 5,000</span>
              </div>

              {/* Progress Bar */}
              <div className="h-1.5 bg-sidebar-accent/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-accent/60 to-accent rounded-full transition-all duration-500 ease-out"
                  style={{ width: "25%" }}
                />
              </div>
              <p className="text-xs text-sidebar-foreground/60">25% of monthly credits used</p>
            </div>
          </div>

          {/* History Section */}
          <div className="space-y-3">
            <button
              onClick={closeMenu}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg",
                "text-sidebar-foreground text-sm font-medium",
                "hover:bg-sidebar-accent/40 transition-colors duration-200",
                "border border-transparent hover:border-sidebar-border"
              )}
            >
              <History className="w-4 h-4 text-sidebar-foreground/70" />
              <span>History</span>
            </button>
          </div>

          {/* Settings Section */}
          <div className="space-y-3">
            <button
              onClick={closeMenu}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg",
                "text-sidebar-foreground text-sm font-medium",
                "hover:bg-sidebar-accent/40 transition-colors duration-200",
                "border border-transparent hover:border-sidebar-border"
              )}
            >
              <Settings className="w-4 h-4 text-sidebar-foreground/70" />
              <span>Settings</span>
            </button>
          </div>

          {/* Billing Section */}
          <div className="space-y-3">
            <button
              onClick={closeMenu}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg",
                "text-sidebar-foreground text-sm font-medium",
                "hover:bg-sidebar-accent/40 transition-colors duration-200",
                "border border-transparent hover:border-sidebar-border"
              )}
            >
              <CreditCard className="w-4 h-4 text-sidebar-foreground/70" />
              <span>Billing</span>
            </button>
          </div>
        </div>

        {/* Footer - Logout Button */}
        <div className="sticky bottom-0 border-t border-sidebar-border bg-sidebar-background/95 backdrop-blur-sm px-6 py-4">
          <button
            onClick={closeMenu}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-lg",
              "text-destructive text-sm font-medium",
              "hover:bg-destructive/10 transition-colors duration-200",
              "border border-transparent hover:border-destructive/30"
            )}
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
}
