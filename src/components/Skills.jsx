import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wrench, Sparkles, Code, Cpu, Globe, Database, Terminal, Flame, Layers, Box, Zap } from 'lucide-react';
import { skillCategories, skillsData } from '../data/portfolioData';

// Map icon strings to Lucide components
const iconMap = {
  python: Code,
  javascript: Code,
  sql: Database,
  html5: Globe,
  css3: Globe,
  cpu: Cpu,
  workflow: Zap,
  search: Sparkles,
  database: Database,
  sparkles: Sparkles,
  bot: Sparkles,
  brain: Cpu,
  layers: Layers,
  flame: Flame,
  table: Database,
  "book-open": Code,
  atom: Globe,
  globe: Globe,
  server: Terminal,
  terminal: Terminal,
  zap: Zap,
  webhook: Zap,
  palette: Globe,
  "hard-drive": Database,
  "file-code": Code,
  cloud: Database,
  link: Zap,
  "git-branch": Terminal,
  container: Box,
  code: Code,
  "pen-tool": Globe,
  "upload-cloud": Globe
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Gradient Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Wrench className="w-3.5 h-3.5" />
            Verified Technical Skills
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Technical Stack & Applied Tools
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-base text-slate-600"
          >
            Technologies verified through active repositories, machine learning deployments, and full-stack projects.
          </motion.p>
        </div>

        {/* 14.G: Animated Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillCategories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'text-blue-700 font-bold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-blue-50 border border-blue-200 rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid with Smooth Transition */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const IconComponent = iconMap[skill.icon] || Code;
              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="group bg-white hover:bg-blue-50/40 p-4 rounded-xl border border-slate-200/80 hover:border-blue-300 transition-all shadow-xs hover:shadow-sm flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-[10px] font-semibold text-slate-400 group-hover:text-blue-600 uppercase tracking-wider">
                      {skill.level}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-800 text-sm group-hover:text-blue-700 transition-colors leading-snug">
                      {skill.name}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Skill Category Summary Pills */}
        <div className="mt-14 pt-8 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50/70 p-5 rounded-2xl border border-slate-200/60">
            <h4 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              Applied AI & RAG
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              LangChain, FAISS vector search, Gemini 2.5 Flash, GPT-4o, and timestamp-aware document chunking architectures.
            </p>
          </div>

          <div className="bg-slate-50/70 p-5 rounded-2xl border border-slate-200/60">
            <h4 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-600" />
              Modern Full Stack
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              React.js, Next.js 14, Node.js, Express, FastAPI, Tailwind CSS, and Supabase cloud integrations.
            </p>
          </div>

          <div className="bg-slate-50/70 p-5 rounded-2xl border border-slate-200/60">
            <h4 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-blue-600" />
              DevOps & Engineering
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Docker Compose containerization, Git version control, RESTful API contract design, and modular service decoupling.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
