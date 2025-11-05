import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Futuristic Dashboard',
    description:
      'A high-contrast analytics dashboard with real-time charts, micro-interactions, and elegant motion.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    title: '3D Portfolio Experience',
    description:
      'Immersive personal site blending Spline 3D objects with smooth scroll-triggered animations.',
    tags: ['Spline', 'Vite', 'Accessibility'],
  },
  {
    title: 'API-driven SaaS Landing',
    description:
      'Conversion-focused landing page with dark theme, glowing accents, and integrated pricing flows.',
    tags: ['FastAPI', 'UX', 'SEO'],
  },
];

function ProjectCard({ title, description, tags, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      className="group rounded-xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-colors p-6"
    >
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-zinc-300">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="text-xs rounded-full border border-white/10 bg-black/40 px-2 py-1 text-zinc-300"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Projects</h2>
            <p className="mt-2 text-zinc-400 max-w-2xl">
              Selected work exploring dark UI, motion design, and 3D-driven interactions.
            </p>
          </div>
          <a
            href="#home"
            className="hidden sm:inline-block text-sm text-zinc-300 hover:text-white"
          >
            Back to top
          </a>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} {...p} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
