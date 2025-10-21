"use client";
import * as React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const projects = [
  {
    title: "AI Interview Assistant",
    tech: "React.js | Node.js | OpenAI API",
    desc:
      "AI-powered assistant that simulates real-time interviews with adaptive questions, evaluation, and scoring.",
    image: "/ai-interview.jpg",
    links: [{ label: "GitHub", href: "https://github.com/Samii2383/ai-interview-assistant.git" }]
  },
  {
    title: "Note App",
    tech: "React.js | Vite | Tailwind CSS",
    desc:
      "Lightweight web app for creating, editing, and deleting notes with local storage support and a clean, responsive interface.",
    image: "/note-app.jpg",
    links: [{ label: "GitHub", href: "https://github.com/Samii2383/Note-App.git" }],
  },
  {
    title: "Mini CRM App",
    tech: "React Native | AsyncStorage | React Navigation",
    desc:
      "Mobile CRM application to manage clients with add, edit, and delete features, persistent local storage, and smooth multi-screen navigation.",
    image: "/mini-crm.jpg",
    links: [{ label: "GitHub", href: "https://github.com/Samii2383/mini-crm-react-native.git" }],
  },
  {
    title: "Lost Data Retrieval System",
    tech: "Java | AWS | SQL",
    desc:
      "Cloud-based system integrating AWS for secure data restoration; optimized recovery algorithms improved performance by 35%.",
    image: "/lost-data.jpg",
    links: [{ label: "GitHub", href: "#" }],
  },
  {
    title: "Hospital Management System",
    tech: "DBMS | Java | SQL",
    desc:
      "Web-based hospital management solution automating patient records, billing, and appointments.",
    image: "/hospital.jpg",
    links: [{ label: "GitHub", href: "#" }],
  },
];

import Image from "next/image";

export function Projects() {
  const scrollerRef = React.useRef<HTMLDivElement | null>(null);
  const scrollNext = () => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: 360, behavior: "smooth" });
  };
  const scrollPrev = () => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: -360, behavior: "smooth" });
  };
  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold uppercase tracking-wide"
      >
        PROJECTS
      </motion.h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-6 overflow-x-auto no-scrollbar"
        ref={scrollerRef}
      >
        <div className="flex gap-4 pr-4">
          {projects.map((p) => (
            <motion.article
              key={p.title}
              variants={item}
              className="glass rounded-lg p-5 w-[320px] shrink-0 transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              {p.image ? (
                <div className="mb-3 overflow-hidden rounded-md">
                  <Image src={p.image} alt={p.title} width={1200} height={630} className="aspect-[16/9] h-auto w-full object-cover" />
                </div>
              ) : null}
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-foreground/60">{p.tech}</p>
              <p className="mt-3 text-foreground/80">{p.desc}</p>
              <div className="mt-4 flex gap-3">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    className="text-cyan-400 underline-offset-4 hover:underline transition-all"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={scrollPrev}
          className="inline-flex items-center gap-2 rounded-md border border-white/10 px-4 py-2 text-foreground transition-transform hover:scale-105"
        >
          ← Back
        </button>
        <button
          onClick={scrollNext}
          className="inline-flex items-center gap-2 rounded-md bg-cyan-400 px-4 py-2 text-black transition-transform hover:scale-105"
        >
          Next →
        </button>
      </div>
    </section>
  );
}


