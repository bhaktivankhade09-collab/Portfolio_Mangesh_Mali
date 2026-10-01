import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Wrench, FolderGit2, Rocket } from 'lucide-react';

export default function AnimatedBeam() {
  const steps = [
    {
      title: "Education",
      subtitle: "B.E. IT Foundations",
      icon: GraduationCap,
      href: "#education"
    },
    {
      title: "Skills",
      subtitle: "Full Stack & AI/ML",
      icon: Wrench,
      href: "#skills"
    },
    {
      title: "Projects",
      subtitle: "RAG, ML & Web Apps",
      icon: FolderGit2,
      href: "#projects"
    },
    {
      title: "Focus",
      subtitle: "Agentic AI & Scale",
      icon: Rocket,
      href: "#focus"
    }
  ];

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Section Label */}
        <div className="text-center mb-8">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Engineering Progression
          </p>
        </div>

        {/* 14.F: Interactive Animated Beam Connecting the Stages */}
        <div className="relative">
          {/* Background Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-12 right-12 -translate-y-1/2 h-[2px] bg-slate-200 z-0">
            {/* Animated glowing beam pulses across the path */}
            <motion.div
              className="h-full bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-400 rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.a
                  key={step.title}
                  href={step.href}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="group flex flex-col items-center text-center p-4 rounded-2xl bg-white hover:bg-blue-50/50 border border-slate-200/80 hover:border-blue-300/80 shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  {/* Icon Node */}
                  <div className="w-12 h-12 rounded-xl bg-white border-2 border-blue-500/20 group-hover:border-blue-500 text-blue-600 flex items-center justify-center mb-3 shadow-xs group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-blue-600 group-hover:text-blue-700" />
                  </div>

                  <span className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </span>
                  <span className="text-xs text-slate-500 mt-0.5">
                    {step.subtitle}
                  </span>
                </motion.a>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
