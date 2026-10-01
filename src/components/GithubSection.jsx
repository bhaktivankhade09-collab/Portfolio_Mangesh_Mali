import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, FolderGit2, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { githubProfileSummary } from '../data/portfolioData';

export default function GithubSection() {
  const verifiedRepos = [
    {
      name: "AI_Disease_Detection",
      desc: "End-to-end ML diagnostic system with Next.js 14, Node.js gateway, and FastAPI microservice.",
      lang: "Python / JavaScript",
      url: "https://github.com/MangeshMali18/AI_Disease_Detection"
    },
    {
      name: "Podcast-qa-bot",
      desc: "AI-powered RAG assistant using FAISS, LangChain, and Gemini 2.5 Flash with timestamp navigation.",
      lang: "Python",
      url: "https://github.com/MangeshMali18/Podcast-qa-bot"
    },
    {
      name: "room-finder",
      desc: "Vite + React single-page accommodation platform with Supabase backend and live Vercel deployment.",
      lang: "JavaScript",
      url: "https://github.com/MangeshMali18/room-finder"
    }
  ];

  return (
    <section id="github" className="py-20 bg-slate-50/60 border-t border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            GitHub Presence
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Open Source & Active Repositories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-base text-slate-600"
          >
            Public codebases demonstrating architecture, machine learning engineering, and clean commits.
          </motion.p>
        </div>

        {/* Profile Card Summary & Stats */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold text-xl shadow-md">
                <GithubIcon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  @{githubProfileSummary.username}
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-100">
                    Active
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  {githubProfileSummary.status}
                </p>
              </div>
            </div>

            <a
              href={githubProfileSummary.profileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl transition-all shadow-sm hover:shadow-md self-start md:self-auto"
            >
              <span>View GitHub Profile</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Metrics & Languages */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <span className="text-xs font-medium text-slate-500">Public Repositories</span>
              <div className="text-2xl font-extrabold text-slate-900 mt-1">
                {githubProfileSummary.publicReposCount}
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <span className="text-xs font-medium text-slate-500">Primary Focus</span>
              <div className="text-sm font-bold text-blue-600 mt-2">
                AI / ML & Full Stack
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <span className="text-xs font-medium text-slate-500">Core Languages</span>
              <div className="text-xs font-semibold text-slate-800 mt-2">
                Python, JavaScript, SQL
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <span className="text-xs font-medium text-slate-500">Deployments</span>
              <div className="text-sm font-bold text-emerald-600 mt-2 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Live on Vercel
              </div>
            </div>
          </div>
        </div>

        {/* Highlighted Repositories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {verifiedRepos.map((repo, idx) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-base group-hover:text-blue-600 transition-colors">
                    <FolderGit2 className="w-4 h-4 text-blue-600" />
                    <span>{repo.name}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {repo.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-medium text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  {repo.lang}
                </span>
                <span className="text-blue-600 font-medium group-hover:underline">
                  Inspect code →
                </span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
