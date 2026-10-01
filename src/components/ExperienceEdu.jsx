import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { educationData, experienceData } from '../data/portfolioData';

export default function ExperienceEdu() {
  return (
    <section id="experience" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Briefcase className="w-3.5 h-3.5" />
            Timeline & Experience
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Education & Practical Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-base text-slate-600"
          >
            Verified academic milestones and hands-on technical assessments.
          </motion.p>
        </div>

        {/* Two Column Grid: Experience on left, Education on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Experience & Assessments
              </h3>
            </div>

            <div className="space-y-6">
              {experienceData.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-xs hover:border-blue-300 transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 bg-blue-50 text-blue-700 text-[11px] font-bold rounded-full">
                      {exp.type}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900">
                    {exp.role}
                  </h4>
                  <p className="text-sm font-semibold text-blue-600 mb-1">
                    {exp.company}
                  </p>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mb-4">
                    <MapPin className="w-3 h-3" />
                    {exp.location}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[11px] font-medium rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div id="education">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Education
              </h3>
            </div>

            <div className="space-y-6">
              {educationData.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-xs hover:border-blue-300 transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className={`px-2.5 py-0.5 text-[11px] font-bold rounded-full ${
                      edu.status === 'Current'
                        ? 'bg-blue-50 text-blue-700'
                        : 'bg-emerald-50 text-emerald-700'
                    }`}>
                      {edu.status === 'Current' ? '🎓 Current' : '✅ Completed'}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                      <Calendar className="w-3 h-3" />
                      {edu.duration}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900">
                    {edu.degree}
                  </h4>
                  <p className="text-sm font-semibold text-blue-600 mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mb-4">
                    <MapPin className="w-3 h-3" />
                    {edu.location}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Academic Highlights
                    </p>
                    {edu.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-1 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Engineering Focus Card */}
              <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 p-6 rounded-2xl border border-blue-100">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-4 h-4 text-blue-600" />
                  <h4 className="text-sm font-bold text-slate-900">
                    Continuous Learning Mindset
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Complementing university curriculum with intensive project-driven development in modern Agentic workflows, vector search architectures, and microservice containerization.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
