"use client";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold uppercase tracking-wide"
      >
        CONTACT
      </motion.h2>
      <p className="mt-3 text-foreground/80">
        I’m open to full-time roles and exciting projects. Reach out via email or LinkedIn.
      </p>
      <form className="mt-6 grid gap-3 sm:grid-cols-2">
        <input className="glass rounded-md px-3 py-2 outline-none" placeholder="Name" />
        <input className="glass rounded-md px-3 py-2 outline-none" placeholder="Email" type="email" />
        <textarea className="glass rounded-md px-3 py-2 outline-none sm:col-span-2" placeholder="Message" rows={4} />
        <button className="sm:col-span-2 h-10 rounded-md bg-cyan-400 text-black hover:bg-cyan-300 transition">
          Send Message
        </button>
      </form>
      
    </section>
  );
}


