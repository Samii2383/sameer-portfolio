"use client";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const experience = [
  {
    role: "Java Full Stack Trainee",
    org: "TAP Academy, Bangalore",
    period: "Feb 2025 – Jul 2025",
    details: "Built full-stack web apps using Java, Spring, React, and SQL.",
  },
  {
    role: "C Programming Intern",
    org: "ATMECE Mysore",
    period: "Nov 2022 – Dec 2022",
    details: "Strengthened system-level programming and algorithmic problem solving.",
  },
  {
    role: "Intern",
    org: "Tosko Technologies Pvt. Ltd., Mysore",
    period: "Oct 2023 – Nov 2023",
    details: "Contributed to rural tech-driven community development projects.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold uppercase tracking-wide"
      >
        EXPERIENCE
      </motion.h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-6 grid gap-4 sm:grid-cols-2"
      >
        {experience.map((e, idx) => (
          <motion.article
            key={idx}
            variants={item}
            className="glass rounded-lg p-5 transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/10"
          >
            <h3 className="font-semibold">{e.role}</h3>
            <p className="text-sm text-foreground/70">{e.org} • {e.period}</p>
            <p className="mt-2 text-foreground/80">{e.details}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}


