"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const reveal = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-4 pt-24 pb-14">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.08 } } }}>
          <motion.h1 variants={reveal} className="text-4xl md:text-6xl font-bold tracking-tight">
            SAMEER KHAN
          </motion.h1>
        <motion.p variants={reveal} className="mt-4 text-lg text-foreground/80 whitespace-nowrap">
            Software Developer | Full Stack Developer | DevOps / Cloud Enthusiast
          </motion.p>
          <motion.p variants={reveal} className="mt-2 text-foreground/70 whitespace-nowrap">
            Davangere, Karnataka, India ·
            <a className="text-cyan-400 hover:underline ml-1" href="mailto:sameerkhan47149@gmail.com">sameerkhan47149@gmail.com</a>
            <span className="ml-2">· +91-6362014972</span>
          </motion.p>
        <motion.div variants={reveal} className="mt-4">
          <a
            href="/SAMEERKHANRESUME.pdf"
            download
            className="inline-flex items-center gap-2 rounded-md bg-cyan-400 px-4 py-2 text-black transition-transform hover:scale-105"
          >
            DOWNLOAD RESUME
          </a>
        </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="justify-self-center md:justify-self-end w-48 h-48 md:w-64 md:h-64 glass rounded-full p-2">
          <Image src="/profile.jpg" alt="Sameer Khan" width={512} height={512} className="rounded-full w-full h-full object-cover" priority />
        </motion.div>
      </div>
    </section>
  );
}


