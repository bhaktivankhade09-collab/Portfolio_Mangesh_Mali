import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AnimatedBeam from './components/AnimatedBeam';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceEdu from './components/ExperienceEdu';
import GithubSection from './components/GithubSection';
import CurrentFocus from './components/CurrentFocus';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans relative selection:bg-blue-100 selection:text-blue-900">
      {/* Top Navbar & Scroll Progress */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Visual Progression Connector */}
        <AnimatedBeam />

        {/* 3. About Section */}
        <About />

        {/* 4. Skills with Animated Category Tabs */}
        <Skills />

        {/* 5. Projects with Parallax Cards & Deep Dive Modal */}
        <Projects />

        {/* 6. Education & Practical Experience */}
        <ExperienceEdu />

        {/* 7. Dedicated GitHub Section */}
        <GithubSection />

        {/* 8. Current Focus / Trajectory */}
        <CurrentFocus />

        {/* 9. Contact & Social Channels */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}
