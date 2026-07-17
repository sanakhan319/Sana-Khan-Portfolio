import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence for popup transitions
import {
  Download,
  Eye,
  MessageCircle,
  ArrowRight,
  Sparkles,
  X, // Added close icon
  FileText // Added document icon
} from 'lucide-react';
import SectionWrapper, { SectionTitle } from '../components/SectionWrapper';
import TypingEffect from '../components/TypingEffect';
import AnimatedCounter from '../components/AnimatedCounter';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import {
  personalInfo,
  skillCategories,
  projects,
  whyHireMe,
  stats,
} from '../data/portfolio.ts';
import type { Project } from '../data/portfolio.ts';

// Resume image import so Vite handles the assets path correctly
import resumeImg from '../assets/images/Resume.png'; 

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // 1. Resume Popup toggle state
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 sm:pt-24 md:pt-0">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/20 rounded-full blur-[128px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[200px]" />

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6"
              >
                <Sparkles className="w-4 h-4 text-primary-400" />
                <span className="text-sm text-primary-300 font-medium">
                  Available for Opportunities
                </span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-[1.1]">
                Hi, I'm{' '}
                <span className="gradient-text">{personalInfo.name}</span>
              </h1>

              <div className="text-xl sm:text-2xl md:text-3xl text-dark-300 mb-6 h-[2.5rem]">
                I'm a <TypingEffect texts={personalInfo.typingTexts} />
              </div>

              <p className="text-dark-400 text-base md:text-lg leading-relaxed max-w-lg mb-8">
                {personalInfo.introduction.substring(0, 150)}...
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/projects" className="btn-primary">
                  <Eye className="w-4 h-4 sm:w-5 sm:h-6" />
                  View Projects
                </Link>
                <Link to="/contact" className="btn-outline">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-6" />
                  Contact Me
                </Link>
                
                {/* 2. Modified Resume Button to serve as click toggle popup */}
                <button 
                  onClick={() => setIsResumeOpen(true)}
                  className="btn-outline border-accent-500/50 text-accent-400 hover:bg-accent-500/10 hover:border-accent-400 cursor-pointer flex items-center gap-2"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-6" />
                  Resume
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="hidden md:flex justify-center"
            >
              <div className="relative">
                {/* Profile Image Placeholder */}
                <div className="w-72 h-72 rounded-full glass-strong p-1 animate-float">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
                    <span className="text-8xl font-bold gradient-text">S</span>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                  <span className="text-2xl font-mono text-primary-400">&lt;/&gt;</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                  <span className="text-lg font-mono text-accent-400">React</span>
                </div>
                <div className="absolute top-1/2 -right-12 w-14 h-14 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center animate-float" style={{ animationDelay: '3s' }}>
                  <span className="text-xs font-mono text-accent-400">Node</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-dark-500 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary-400"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 border-y border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 via-dark-950 to-accent-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <AnimatedCounter value={stat.value} />
                <p className="text-dark-400 text-sm mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <SectionWrapper id="about-preview">
        <SectionTitle
          title="About Me"
          subtitle="A brief introduction to who I am and what I do"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-8 md:p-10 max-w-3xl mx-auto text-center"
        >
          <p className="text-dark-300 leading-relaxed mb-6">
            {personalInfo.introduction}
          </p>
          <Link
            to="/about"
            className="btn-outline inline-flex items-center gap-2"
          >
            Read More
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </SectionWrapper>

      {/* Skills Section */}
      <SectionWrapper id="skills" className="bg-dark-900/50">
        <SectionTitle
          title="Technical Skills"
          subtitle="Technologies and tools I work with"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="glass rounded-xl p-6 card-hover"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}
                >
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-semibold">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-dark-300">{skill.name}</span>
                      <span className="text-dark-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-dark-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Experience Section */}
      <SectionWrapper id="experience">
        <SectionTitle
          title="My Journey"
          subtitle="Starting my career as a passionate self-taught developer"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { label: 'Fresher', desc: 'Eager to start my professional career' },
            { label: 'Self-Learning', desc: 'Continuously growing through practice' },
            { label: 'Personal Projects', desc: 'Building real-world applications' },
            { label: 'Always Learning', desc: 'Exploring new technologies daily' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6 text-center card-hover"
            >
              <div className="w-12 h-12 rounded-full bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-400 font-bold text-lg">{i + 1}</span>
              </div>
              <h3 className="text-white font-semibold mb-2">{item.label}</h3>
              <p className="text-dark-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Featured Projects */}
      <SectionWrapper id="featured-projects" className="bg-dark-900/50">
        <SectionTitle
          title="Featured Projects"
          subtitle="A selection of my recent work"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 6).map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link to="/projects" className="btn-outline inline-flex items-center gap-2">
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </SectionWrapper>

      {/* Why Hire Me */}
      <SectionWrapper id="why-hire-me">
        <SectionTitle
          title="Why Hire Me"
          subtitle="What makes me a great addition to your team"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyHireMe.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6 card-hover group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mb-4 group-hover:bg-primary-500/20 group-hover:border-primary-400/30 transition-all duration-300">
                <item.icon className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-dark-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Contact CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/30 via-dark-950 to-accent-900/30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-500/10 rounded-full blur-[200px]" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Let's Work <span className="gradient-text">Together</span>
            </h2>
            <p className="text-dark-400 text-lg mb-8 max-w-xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                <MessageCircle className="w-5 h-5" />
                Get In Touch
              </Link>
              <Link to="/projects" className="btn-outline text-lg px-8 py-4">
                <Eye className="w-5 h-5" /> My Work 
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* --- 3. NEW DYNAMIC RESUME MODAL POPUP LAYER --- */}
      <AnimatePresence>
        {isResumeOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            
            {/* Smooth Cinematic Backdrop Blur overlayer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsResumeOpen(false)} // Closes popup if click outside the card box
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Glass Panel Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative bg-dark-900/90 border border-white/10 w-full max-w-3xl max-h-[85vh] rounded-xl shadow-2xl overflow-hidden flex flex-col z-10 glass"
            >
              
              {/* Modal Control Toolbar */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-dark-800/60 backdrop-blur-md">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <FileText className="w-5 h-5 text-primary-400" />
                  <span>My Resume</span>
                </div>
                <div className="flex items-center gap-3">
                  {/* Option to direct download the image asset */}
                  <a 
                    href={resumeImg} 
                    download="Sana_Khan_Resume.png"
                    className="p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-all"
                    title="Download Resume"
                  >
                    <Download className="w-4 h-4 sm:w-5 h-5" />
                  </a>
                  {/* Main closing handler action */}
                  <button
                    onClick={() => setIsResumeOpen(false)}
                    className="p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-all cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* High-res Image render segment with native track wrapper padding */}
              <div className="overflow-y-auto p-4 flex justify-center items-start bg-dark-950/40 custom-scrollbar">
                <img 
                  src={resumeImg} 
                  alt="Resume Document" 
                  className="w-full h-auto object-contain rounded-lg shadow-xl border border-white/5 max-w-2xl"
                />
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}