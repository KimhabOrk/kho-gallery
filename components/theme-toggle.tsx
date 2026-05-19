"use client";

import * as React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-20 h-6" />;
  }

  return (
    <div className="flex items-center justify-center gap-2 bg-card border border-border rounded-full px-2 py-2 shadow-lg backdrop-blur-sm">
      <button
        onClick={() => setTheme("light")}
        className={cn(
          "p-2 rounded-full transition-all flex mx-auto items-center justify-center",
          theme === "light"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground hover:bg-muted"
        )}
        aria-label="Light mode"
      >
        <Sun className="h-4 w-4" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={cn(
          "p-2 rounded-full transition-all flex mx-auto items-center justify-center",
          theme === "dark"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground hover:bg-muted"
        )}
        aria-label="Dark mode"
      >
        <Moon className="h-4 w-4" />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={cn(
          "p-2 rounded-full transition-all flex mx-auto items-center justify-center",
          theme === "system"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground hover:bg-muted"
        )}
        aria-label="System mode"
      >
        <Monitor className="h-4 w-4" />
      </button>
    </div>
  );
}
