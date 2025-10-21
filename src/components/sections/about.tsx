"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold uppercase tracking-wide"
      >
        ABOUT
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        viewport={{ once: true }}
        className="mt-4"
      >
        <p className="md:max-w-3xl leading-7 text-foreground/80 text-left">
          Aspiring Software Developer and DevOps Engineer skilled in full-stack development and automation with expertise in Java, Python, React.js, SQL, and Spring. Strong foundation in cloud computing, networking, CI/CD pipelines, and system debugging. Passionate about building scalable, secure, and high-performance applications while ensuring efficient deployment, monitoring, and reliability across development and production environments.
        </p>
      </motion.div>
    </section>
  );
}


