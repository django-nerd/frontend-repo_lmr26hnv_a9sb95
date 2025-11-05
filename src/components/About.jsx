import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-zinc-300 leading-relaxed"
        >
          I’m Divyansh Kumar Pandey, a developer who loves crafting immersive, high-performance interfaces. I focus on clean design, smooth animations, and responsive experiences that feel fast and refined in a dark, modern aesthetic.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 rounded-xl border border-white/10 bg-white/5 p-6"
        >
          <p className="text-white font-medium">Education</p>
          <p className="mt-1 text-zinc-300">
            I am currently doing B.Tech from PW IOI.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[
            { label: 'Focus', value: 'Front-end, UI Engineering' },
            { label: 'Toolkit', value: 'React, Tailwind, Framer Motion, Spline' },
            { label: 'Interests', value: '3D web, micro-interactions, accessibility' },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-white/10 bg-white/5 p-4"
            >
              <p className="text-xs uppercase tracking-widest text-zinc-400">
                {item.label}
              </p>
              <p className="mt-1 text-white">{item.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
