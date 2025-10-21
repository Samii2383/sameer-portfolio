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

// Sample education data
const education = [
  {
    degree: "B. E in Computer Science and Design",
    institution: "ATME College of Engineering, Mysore",
    period: "2021 – 2025 | CGPA: 7.6",
    details: "Focused on software development, data structures, algorithms, and full-stack projects.",
  },
  {
    degree: "Pre - University",
    institution: "DVS Composite PU College, Shivamogga",
    period: "2019 – 2021 | 91.5%",
    details: "Specialized in Physics, Chemistry, Mathematics; secured top grades.",
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Sri Veerabhadreshwara High School, Honnali",
    period: "2018 – 2019 | 91.36% ",
    details: "Completed schooling with distinction in academics and extracurriculars.",
  },
];

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-4 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold uppercase tracking-wide"
      >
        EDUCATION
      </motion.h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-6 grid gap-4 sm:grid-cols-2"
      >
        {education.map((edu, idx) => (
          <motion.article
            key={idx}
            variants={item}
            className="glass rounded-lg p-5 transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/10"
          >
            <h3 className="font-semibold">{edu.degree}</h3>
            <p className="text-sm text-foreground/70">{edu.institution} • {edu.period}</p>
            <p className="mt-2 text-foreground/80">{edu.details}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
