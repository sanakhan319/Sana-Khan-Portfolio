import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import type { Project } from '../data/portfolio';

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass rounded-xl overflow-hidden card-hover cursor-pointer"
      onClick={() => onSelect(project)}
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-500/20 text-primary-300 border border-primary-500/30 backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-dark-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-md bg-white/5 text-dark-300 border border-white/5"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-xs rounded-md bg-white/5 text-dark-400">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <a
            href={project.GitHub}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-sm text-dark-400 hover:text-primary-400 transition-colors"
          >
            {/* <Github className="w-4 h-4" />
            Code */}
          </a>
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-sm text-dark-400 hover:text-accent-400 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}
