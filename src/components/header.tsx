"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useActiveSection } from "@/hooks/use-active-section";

export function Header() {
  const { setTheme } = useTheme();
  const toggle = () => {
    const root = document.documentElement;
    const isDark = root.classList.contains("dark");
    root.classList.toggle("dark", !isDark); // immediate UI feedback
    setTheme(isDark ? "light" : "dark"); // persist via next-themes
  };

  const activeId = useActiveSection(["about", "skills", "projects", "experience", "contact"]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:glass border-b border-white/10">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          <span className="text-cyan-400">SK</span> • SAMEER KHAN
        </Link>
        <nav className="hidden md:flex items-center gap-4 text-sm">
          {[
            { id: "about", label: "About" },
            { id: "skills", label: "Skills" },
            { id: "projects", label: "Projects" },
            { id: "experience", label: "Experience" },
            { id: "contact", label: "Contact" },
          ].map((s) => (
            <a key={s.id} href={`#${s.id}`} className="relative py-1 text-foreground/80 hover:text-foreground transition-colors uppercase tracking-wide">
              {s.label}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full rounded bg-cyan-400 transition-transform duration-300 ${
                  activeId === s.id ? "scale-x-100" : "scale-x-0"
                } origin-left`}
              />
            </a>
          ))}
        </nav>
        <nav className="flex items-center gap-2">
          <Link href="https://linkedin.com/in/sameer-khan-312715235" target="_blank" aria-label="LinkedIn">
            <Button variant="ghost" size="icon" className="transition-transform duration-300 hover:scale-105"><Linkedin className="h-5 w-5" /></Button>
          </Link>
          <Link href="https://github.com/Samii2383" target="_blank" aria-label="GitHub">
            <Button variant="ghost" size="icon" className="transition-transform duration-300 hover:scale-105"><Github className="h-5 w-5" /></Button>
          </Link>
          <Link href="mailto:sameerkhan47149@gmail.com" aria-label="Email">
            <Button variant="ghost" size="icon" className="transition-transform duration-300 hover:scale-105">@</Button>
          </Link>
          <Button aria-label="Toggle theme" variant="outline" size="icon" onClick={toggle} className="transition-transform duration-300 hover:scale-105">
            <Sun className="h-5 w-5 hidden dark:block" />
            <Moon className="h-5 w-5 block dark:hidden" />
          </Button>
        </nav>
      </div>
    </header>
  );
}


