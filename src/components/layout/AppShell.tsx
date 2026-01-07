import { ReactNode, useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { NavLink } from "@/components/NavLink";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { FeedbackButton } from "@/components/feedback/FeedbackButton";
import { cn } from "@/lib/utils";

export function AppShell({ children, className }: { children: ReactNode; className?: string }) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  const reducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || reducedMotion) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      el.style.setProperty("--px", `${x}%`);
      el.style.setProperty("--py", `${y}%`);
    };

    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, [reducedMotion]);

  return (
    <div ref={rootRef} className="min-h-screen bg-mesh">
      <div className="pointer-events-none fixed inset-0 opacity-70" aria-hidden>
        <div className="absolute inset-0 bg-mesh" />
      </div>

      <header className="relative z-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-6 md:pt-8">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="glass-card glow-soft rounded-2xl px-5 py-4 md:px-6 md:py-5"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="h-10 w-10 md:h-11 md:w-11 rounded-xl bg-gradient-brand shadow-glow flex-shrink-0" aria-hidden />
                  <div className="min-w-0">
                    <p className="text-xs md:text-sm text-muted-foreground tracking-wide">Premium Text-to-Speech Pro</p>
                    <h1 className="truncate text-base md:text-lg font-semibold tracking-tight">Voice Studio for TikTok & YouTube</h1>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 md:gap-2">
                <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
                  <NavLink
                    to="/privacy-policy"
                    className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-foreground tap-target"
                    activeClassName="bg-accent text-foreground"
                  >
                    Privacy
                  </NavLink>
                  <NavLink
                    to="/terms-of-service"
                    className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-foreground tap-target"
                    activeClassName="bg-accent text-foreground"
                  >
                    Terms
                  </NavLink>
                </nav>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      <main className={cn("relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-16 md:pb-20 pt-8 md:pt-10", className)}>
        {children}
      </main>

      <footer className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-10 md:pb-12">
        <div className="glass-card rounded-2xl px-5 py-5 md:px-6 md:py-6 text-sm text-muted-foreground">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="leading-relaxed">© {new Date().getFullYear()} Premium Text-to-Speech Pro. Audio is processed locally on your device.</p>
            <div className="flex items-center gap-5 md:gap-6">
              <NavLink to="/privacy-policy" className="story-link transition-colors duration-200 hover:text-foreground">Privacy Policy</NavLink>
              <NavLink to="/terms-of-service" className="story-link transition-colors duration-200 hover:text-foreground">Terms of Service</NavLink>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Feedback Button */}
      <FeedbackButton />
    </div>
  );
}
