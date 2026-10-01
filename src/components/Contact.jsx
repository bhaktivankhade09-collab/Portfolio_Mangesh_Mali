import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, MapPin, Sparkles, ArrowUpRight, Clock, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50/70 border-t border-slate-200/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Mail className="w-3.5 h-3.5" />
            Contact Information
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-base text-slate-600"
          >
            Interested in collaborating, discussing an opportunity, or exploring AI engineering? Reach out directly via email or connect on professional platforms.
          </motion.p>
        </div>

        {/* Highlighted Email Card & Contact Channels */}
        <div className="space-y-8">
          
          {/* Main Prominently Highlighted Email Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-white via-blue-50/40 to-white p-8 sm:p-12 rounded-3xl border-2 border-blue-200/80 shadow-lg shadow-blue-500/5 text-center overflow-hidden"
          >
            {/* Background Decorative Accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

            <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-4">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Primary Email Channel</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                Connect Directly via Email
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Copy my verified email address below to compose a message from your preferred email service (Gmail, Outlook, etc.).
              </p>

              {/* Big Highlighted Email Address Display Box */}
              <div className="w-full bg-white border-2 border-blue-300/80 hover:border-blue-400 p-4 sm:p-5 rounded-2xl shadow-sm mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all">
                <div className="flex items-center gap-3 text-left overflow-hidden">
                  <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Email Address
                    </span>
                    <span className="text-base sm:text-lg font-mono font-bold text-slate-900 select-all tracking-tight break-all">
                      {personalInfo.email}
                    </span>
                  </div>
                </div>

                {/* Prominent Copy Button */}
                <button
                  onClick={handleCopyEmail}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer shadow-sm shrink-0 ${
                    copied
                      ? 'bg-emerald-600 text-white shadow-emerald-500/20'
                      : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20 hover:scale-[1.02]'
                  }`}
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              {/* Trust & Response Info */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-blue-500" />
                  Typical response: Within 24 hours
                </span>
                <span className="text-slate-300">•</span>
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  Direct inbox delivery
                </span>
              </div>

            </div>
          </motion.div>

          {/* Social Profiles & Location Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* LinkedIn Card */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:border-blue-300 hover:shadow-md transition-all group flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <LinkedinIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors">
                    LinkedIn
                  </h4>
                  <p className="text-xs text-slate-500">
                    Connect professionally
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
            </a>

            {/* GitHub Card */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:border-slate-400 hover:shadow-md transition-all group flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 bg-slate-100 text-slate-800 rounded-xl group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <GithubIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm group-hover:text-slate-900 transition-colors">
                    GitHub
                  </h4>
                  <p className="text-xs text-slate-500">
                    Inspect repositories & code
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
            </a>

            {/* Location Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs flex items-center gap-3">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">
                  Location
                </h4>
                <p className="text-xs text-slate-600 font-medium">
                  {personalInfo.location}
                </p>
                <p className="text-[11px] text-slate-400">
                  IST (UTC+05:30)
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
