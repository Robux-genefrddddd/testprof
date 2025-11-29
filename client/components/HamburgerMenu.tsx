import { useState } from "react";
import { Menu, X, Settings, History, CreditCard, LogOut } from "lucide-react";
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
        className="relative z-40 p-1.5 text-foreground hover:bg-secondary/40 rounded transition-colors duration-150"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <Menu className="w-5 h-5" />
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 transition-opacity duration-300"
          onClick={closeMenu}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 h-screen w-80 bg-sidebar-background border-r border-sidebar-border",
          "transform transition-transform duration-300 ease-out z-40 overflow-y-auto flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header with close button */}
        <div className="sticky top-0 z-10 border-b border-sidebar-border px-5 py-4 flex items-center justify-between bg-sidebar-background">
          <span className="text-xs text-sidebar-foreground/60 uppercase tracking-wider">
            Menu
          </span>
          <button
            onClick={closeMenu}
            className="p-1 hover:bg-sidebar-accent/50 rounded transition-colors"
          >
            <X className="w-4 h-4 text-sidebar-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col gap-6 px-5 py-5 overflow-y-auto">
          {/* Account Section */}
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              {/* Minimal avatar - monogram */}
              <div className="w-10 h-10 bg-sidebar-accent border border-sidebar-border rounded flex items-center justify-center flex-shrink-0">
                <span className="text-xs text-sidebar-foreground">AJ</span>
              </div>
              <div className="flex-1 min-w-0 pt-0.5">
                <p className="text-sm text-sidebar-foreground truncate">
                  Alex Johnson
                </p>
                <p className="text-xs text-sidebar-foreground/50 truncate">
                  alex@example.com
                </p>
              </div>
            </div>
          </div>

          {/* Plan Section */}
          <div className="space-y-2 border-t border-sidebar-border pt-4">
            <p className="text-xs text-sidebar-foreground/50 uppercase tracking-wider">
              Plan
            </p>
            <p className="text-sm text-sidebar-foreground">Free</p>
            <a
              href="#"
              className="inline-flex text-xs text-accent hover:text-accent/80 transition-colors"
            >
              Upgrade to Pro →
            </a>
          </div>

          {/* Credits Section */}
          <div className="space-y-2 border-t border-sidebar-border pt-4">
            <p className="text-xs text-sidebar-foreground/50 uppercase tracking-wider">
              Credits
            </p>

            {/* Numbers */}
            <div className="flex items-baseline gap-1">
              <span className="text-lg text-sidebar-foreground">
                1,250
              </span>
              <span className="text-xs text-sidebar-foreground/50">/ 5,000</span>
            </div>

            {/* Progress bar - very fine and minimal */}
            <div className="h-1 bg-sidebar-accent/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-accent transition-all duration-500"
                style={{ width: "25%" }}
              />
            </div>
            <p className="text-xs text-sidebar-foreground/50">25% used this month</p>
          </div>

          {/* Menu items */}
          <div className="space-y-1 border-t border-sidebar-border pt-4">
            <button
              onClick={closeMenu}
              className="w-full flex items-center gap-3 px-3 py-2 rounded text-sm text-sidebar-foreground hover:bg-sidebar-accent/40 transition-colors duration-150"
            >
              <History className="w-4 h-4 text-sidebar-foreground/50" />
              History
            </button>

            <button
              onClick={closeMenu}
              className="w-full flex items-center gap-3 px-3 py-2 rounded text-sm text-sidebar-foreground hover:bg-sidebar-accent/40 transition-colors duration-150"
            >
              <Settings className="w-4 h-4 text-sidebar-foreground/50" />
              Settings
            </button>

            <button
              onClick={closeMenu}
              className="w-full flex items-center gap-3 px-3 py-2 rounded text-sm text-sidebar-foreground hover:bg-sidebar-accent/40 transition-colors duration-150"
            >
              <CreditCard className="w-4 h-4 text-sidebar-foreground/50" />
              Billing
            </button>
          </div>
        </div>

        {/* Logout Footer */}
        <div className="border-t border-sidebar-border px-5 py-4 mt-auto">
          <button
            onClick={closeMenu}
            className="w-full flex items-center gap-3 px-3 py-2 rounded text-sm text-foreground/70 hover:text-foreground hover:bg-destructive/10 transition-colors duration-150"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
