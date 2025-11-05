import React from 'react';
import { motion } from 'framer-motion';

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="px-3 py-2 text-sm text-zinc-300 hover:text-white transition-colors"
  >
    {children}
  </a>
);

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-white">
          Divyansh Kumar Pandey
        </a>
        <nav className="flex items-center">
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#about">About</NavLink>
          <a
            href="#contact"
            onClick={(e) => e.preventDefault()}
            className="ml-2 rounded-md bg-white/10 hover:bg-white/20 text-white px-3 py-2 text-sm transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
