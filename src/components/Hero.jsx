import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative h-[90vh] sm:h-[92vh] overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Z4mFOe-VPbTX4W76/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays for contrast (non-interactive) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

      {/* Content Overlay */}
      <div className="relative z-10 mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
          >
            Divyansh Kumar Pandey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-zinc-300 max-w-2xl"
          >
            Building sleek, modern web experiences with a passion for dark aesthetics, 3D visuals, and smooth, delightful interactions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: 'easeOut', delay: 0.2 }}
            className="mt-8 flex gap-3"
          >
            <a
              href="#projects"
              className="rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-zinc-200 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="rounded-md border border-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              About Me
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
