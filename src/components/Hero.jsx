import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, FileText, Send, Mail, MapPin, Sparkles, Code2, Cpu, Database, Bot, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import MagneticButton from './MagneticButton';

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // 14.C: Text Morph Animation cycling strictly verified roles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % personalInfo.morphRoles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-16 flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-white">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] radial-glow rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] radial-glow-cyan rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Intro & Details */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status & Location Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/70 text-blue-700 text-xs font-semibold mb-6 shadow-xs"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-blue-500" />
                {personalInfo.location}
              </span>
              <span className="text-blue-300">•</span>
              <span>Available for Roles</span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base sm:text-lg font-medium text-slate-600 mb-2"
            >
              Hi, I'm
            </motion.p>

            {/* 14.A: Animated Gradient Text for Name */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-4 leading-[1.1]"
            >
              <span className="animate-gradient-text">
                {personalInfo.name}
              </span>
            </motion.h1>

            {/* 14.C: Dynamic Text Morphing Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-2 text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 h-10 mb-6"
            >
              <span className="text-slate-500 font-normal">Specialized in</span>
              <div className="relative inline-block overflow-hidden py-1">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRoleIndex}
                    initial={{ y: 25, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -25, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="inline-block text-blue-600 font-bold border-b-2 border-blue-400/50 pb-0.5"
                  >
                    {personalInfo.morphRoles[currentRoleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Short genuine 1-2 line intro */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8"
            >
              {personalInfo.heroBio}
            </motion.p>

            {/* 14.D: Magnetic CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              {/* View Projects */}
              <MagneticButton href="#projects" strength={0.2}>
                <div className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                  <span>View My Projects</span>
                  <ArrowDown className="w-4 h-4" />
                </div>
              </MagneticButton>

              {/* Contact Me */}
              <MagneticButton href="#contact" strength={0.2}>
                <div className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 hover:text-blue-600 font-semibold text-sm px-6 py-3.5 rounded-xl border border-slate-300/80 shadow-xs hover:border-blue-300 transition-all">
                  <span>Contact Me</span>
                  <Send className="w-4 h-4" />
                </div>
              </MagneticButton>

              {/* Download Resume (Configured with local verified path) */}
              {personalInfo.hasResume && (
                <MagneticButton href={personalInfo.resumePath} download="Mangesh_Mali_Resume.pdf" strength={0.2}>
                  <div className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium text-sm px-4 py-3.5 rounded-xl hover:bg-slate-100/70 transition-all">
                    <FileText className="w-4 h-4 text-blue-500" />
                    <span>Resume</span>
                  </div>
                </MagneticButton>
              )}
            </motion.div>

            {/* Verified Social Profile Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-3 pt-2 border-t border-slate-200/70 w-full max-w-md"
            >
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-950 bg-slate-100 hover:bg-slate-200/70 px-3 py-1.5 rounded-lg transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-700 hover:text-blue-900 bg-blue-50 hover:bg-blue-100/70 px-3 py-1.5 rounded-lg transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <button
                onClick={handleCopyEmail}
                aria-label="Copy Email Address"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-950 bg-slate-100 hover:bg-slate-200/70 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Mail className="w-4 h-4" />}
                <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
              </button>
            </motion.div>

          </div>

          {/* Right Column: 14.E Circle Path Animation with Avatar Card & Orbiting Nodes */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-72 h-72 sm:w-88 sm:h-88 flex items-center justify-center"
            >
              {/* Outer Decorative Circles */}
              <div className="absolute inset-0 rounded-full border border-blue-100/90" />
              <div className="absolute inset-6 rounded-full border border-dashed border-blue-200/70 animate-orbit" />
              <div className="absolute inset-14 rounded-full border border-slate-200/60" />

              {/* Orbiting Tech Node 1: AI / Gemini */}
              <div className="absolute inset-0 animate-orbit pointer-events-none">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white border border-blue-200 p-2.5 rounded-2xl shadow-md text-blue-600 pointer-events-auto hover:scale-110 transition-transform">
                  <Bot className="w-5 h-5 text-blue-600" />
                </div>
              </div>

              {/* Orbiting Tech Node 2: Python / FastAPI */}
              <div className="absolute inset-0 animate-orbit-reverse pointer-events-none">
                <div className="absolute top-1/2 -right-3 -translate-y-1/2 bg-white border border-blue-200 p-2.5 rounded-2xl shadow-md text-cyan-600 pointer-events-auto hover:scale-110 transition-transform">
                  <Code2 className="w-5 h-5 text-cyan-600" />
                </div>
              </div>

              {/* Orbiting Tech Node 3: Vector DB / RAG */}
              <div className="absolute inset-0 animate-orbit pointer-events-none">
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white border border-blue-200 p-2.5 rounded-2xl shadow-md text-indigo-600 pointer-events-auto hover:scale-110 transition-transform">
                  <Database className="w-5 h-5 text-indigo-600" />
                </div>
              </div>

              {/* Orbiting Tech Node 4: Agentic AI */}
              <div className="absolute inset-0 animate-orbit-reverse pointer-events-none">
                <div className="absolute top-1/2 -left-3 -translate-y-1/2 bg-white border border-blue-200 p-2.5 rounded-2xl shadow-md text-emerald-600 pointer-events-auto hover:scale-110 transition-transform">
                  <Cpu className="w-5 h-5 text-emerald-600" />
                </div>
              </div>

              {/* Center Profile Card with Photo */}
              <div className="relative z-10 w-52 h-56 sm:w-60 sm:h-64 rounded-3xl bg-gradient-to-tr from-white to-blue-50/80 p-3 shadow-xl border border-blue-100 flex flex-col items-center justify-center text-center">
                {/* Profile Photo — set via personalInfo.profilePhoto in portfolioData.js */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-400 p-0.5 shadow-md mb-2 overflow-hidden">
                  {personalInfo.profilePhoto ? (
                    <img
                      src={personalInfo.profilePhoto}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover rounded-[14px]"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-white text-2xl font-bold tracking-wide">
                      MM
                    </div>
                  )}
                </div>

                <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-tight">
                  Mangesh Mali
                </h3>
                <p className="text-[11px] sm:text-xs text-blue-600 font-medium mt-0.5">
                  B.E. Information Technology
                </p>
                <div className="mt-1.5 inline-flex items-center gap-1 px-2.5 py-0.5 bg-blue-100/70 text-blue-800 rounded-full text-[10px] font-semibold">
                  <Sparkles className="w-2.5 h-2.5 text-blue-600" />
                  AI & Full Stack
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
