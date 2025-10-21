import { Github, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-5xl px-4 py-10 text-sm text-center text-foreground/70">
        <div className="mb-3 flex justify-center gap-3">
          <a href="https://linkedin.com/in/sameer-khan-312715235" target="_blank" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-full glass transition-transform duration-300 hover:scale-110">
            in
          </a>
          <a href="https://github.com/Samii2383" target="_blank" aria-label="GitHub" className="inline-flex h-9 w-9 items-center justify-center rounded-full glass transition-transform duration-300 hover:scale-110">
            <Github className="h-4 w-4" />
          </a>
          <a href="mailto:sameerkhan47149@gmail.com" aria-label="Email" className="inline-flex h-9 w-9 items-center justify-center rounded-full glass transition-transform duration-300 hover:scale-110">
            @
          </a>
          <a href="tel:+916362014972" aria-label="Phone" className="inline-flex h-9 w-9 items-center justify-center rounded-full glass transition-transform duration-300 hover:scale-110">
            <Phone className="h-4 w-4" />
          </a>
        </div>
        © {new Date().getFullYear()} Sameer Khan. All rights reserved.
      </div>
    </footer>
  );
}


