import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper, { SectionTitle } from '../components/SectionWrapper';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { projects, projectCategories } from '../data/portfolio.ts';
import type { Project } from '../data/portfolio.ts';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/20 rounded-full blur-[128px]" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-dark-400 text-lg max-w-2xl mx-auto">
              A showcase of my work spanning web, mobile, and API development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Filters & Grid */}
      <SectionWrapper id="projects-grid" className="bg-dark-900/50">
        <SectionTitle
          title="Project Showcase"
          subtitle="Browse and filter through my portfolio of work"
        />

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 justify-center mb-10"
        >
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-white/5 text-dark-400 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onSelect={setSelectedProject}
            />
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-dark-400 text-lg">
              No projects found in this category yet.
            </p>
          </div>
        )}
      </SectionWrapper>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
