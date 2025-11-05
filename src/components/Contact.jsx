import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-zinc-950 to-black">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact</h2>
          <p className="mt-2 text-zinc-400">Let’s build something sleek and memorable.</p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6"
          >
            <p className="text-sm uppercase tracking-wider text-zinc-400">Direct</p>
            <a
              href="mailto:divyansh1069@gmail.com"
              className="mt-2 inline-flex items-center gap-2 text-white hover:text-zinc-200"
            >
              <Mail size={18} />
              <span>divyansh1069@gmail.com</span>
            </a>
            <div className="mt-4">
              <a
                href="https://www.linkedin.com/in/divyansh-pandey-0a4192381"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20 transition-colors"
              >
                <Linkedin size={18} />
                LinkedIn Profile
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={(e) => e.preventDefault()}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6"
          >
            <p className="text-sm uppercase tracking-wider text-zinc-400">Quick message</p>
            <div className="mt-4 grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <textarea
                rows="4"
                placeholder="Your message"
                className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <button
                type="submit"
                className="inline-flex justify-center rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-zinc-200 transition-colors"
              >
                Send (disabled in demo)
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
