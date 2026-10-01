import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Target, Sparkles, CheckCircle2, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50/60 border-y border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            About Me
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Engineering Pragmatic, Intelligent Systems
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-base text-slate-600"
          >
            Information Technology student and developer building production-oriented full-stack software and applied AI.
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative & Mindset */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-blue-600" />
                Background & Engineering Philosophy
              </h3>
              
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                {personalInfo.aboutBio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Engineering Core Principles */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Core Engineering Principles
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    "Clean Code & Modularity",
                    "Microservices Architecture",
                    "Grounding & Hallucination Defense",
                    "RESTful API Integrity",
                    "Performance & Low Latency",
                    "Agile & Git-driven Workflows"
                  ].map((principle, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{principle}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Open to Roles Card */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-2xl text-white shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-blue-200" />
                <h3 className="text-lg font-bold">Actively Open To Opportunities</h3>
              </div>
              <p className="text-blue-100 text-xs sm:text-sm mb-4">
                Looking for impactful engineering opportunities where I can apply my experience in AI engineering, RAG, and full-stack software development.
              </p>
              <div className="flex flex-wrap gap-2">
                {personalInfo.openToRoles.map((role, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white/15 hover:bg-white/20 backdrop-blur-sm rounded-lg text-xs font-medium text-white transition-colors"
                  >
                    ✓ {role}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Quick Facts & Education Highlight */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Facts Card */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-600" />
                Quick Profile Overview
              </h3>

              <div className="divide-y divide-slate-100">
                {personalInfo.quickFacts.map((fact, idx) => (
                  <div key={idx} className="py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 text-sm">
                    <span className="text-slate-500 font-medium">{fact.label}</span>
                    <span className="text-slate-900 font-semibold sm:text-right">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Highlight Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-blue-50 rounded-full -mr-8 -mt-8 pointer-events-none" />
              <div className="flex items-start gap-3 relative z-10">
                <div className="p-3 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                    Degree
                  </span>
                  <h4 className="font-bold text-slate-900 text-base mt-0.5">
                    Bachelor of Engineering (B.E.)
                  </h4>
                  <p className="text-sm font-medium text-slate-600">
                    Information Technology
                  </p>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    Pune, Maharashtra, India
                  </p>
                </div>
              </div>
              <p className="mt-4 text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                Rigorous grounding in Data Structures, Relational & Vector Databases, Distributed Systems, Computer Networks, and Machine Learning algorithms.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
