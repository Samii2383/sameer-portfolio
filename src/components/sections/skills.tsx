"use client";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const skills = {
  "💻 Programming Languages": [
    "Java",
    "Python",
    "JavaScript",
    "SQL",
    "HTML",
    "CSS",
  ],
  "🧩 Frameworks & Libraries": [
    "React.js",
    "Spring Boot",
    "Node.js",
    "Express.js",
  ],
  "☁️ Cloud & DevOps": [
    "AWS",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "GitHub Actions",
  ],
  "🗄️ Databases": ["MySQL", "MongoDB", "PostgreSQL"],
  "🔄 Version Control & CI/CD": [
    "Git",
    "GitHub",
    "GitLab",
    "CI/CD Pipelines",
  ],
  "🧰 Tools & Platforms": [
    "VS Code",
    "IntelliJ IDEA",
    "Postman",
    "Linux",
    "Maven",
  ],
  "🧠 Core Competencies": [
    "Operating Systems (OS)",
    "Data Structures & Algorithms",
    "Computer Networks",
    "DBMS",
    "Object-Oriented Programming (OOP)",
    "RESTful APIs",
    "Microservices",
    "Networking",
    "Debugging",
    "Problem Solving",
    "System Design",
  ],
};

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold uppercase tracking-wide"
      >
        ⚙️ TECHNICAL SKILLS
      </motion.h2>
      
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-4 grid gap-4 sm:grid-cols-2 items-start"
      >
        {Object.entries(skills).map(([group, list]) => (
          <motion.div
            key={group}
            variants={item}
            className="glass rounded-lg p-4 transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/10"
          >
            <h3 className="font-medium text-foreground/90">{group}</h3>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {list.map((s) => (
                <span
                  key={s}
                  className="rounded-md bg-muted/60 px-2 py-0.5 text-sm text-foreground/80 hover:bg-muted transition-all duration-300 hover:scale-[1.02]"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}


