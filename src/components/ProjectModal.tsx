import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Check } from 'lucide-react';
import type { Project } from '../data/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="glass-strong rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-video object-cover rounded-t-2xl"
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-dark-950/60 text-white hover:bg-dark-950/80 backdrop-blur-sm transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-500/20 text-primary-300 border border-primary-500/30 backdrop-blur-sm">
                  {project.category}
                </span>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-dark-300 mb-6 leading-relaxed">
                {project.longDescription}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-dark-200 uppercase tracking-wider mb-3">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm rounded-lg bg-primary-500/10 text-primary-300 border border-primary-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-semibold text-dark-200 uppercase tracking-wider mb-3">
                  Key Features
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-dark-300">
                      <Check className="w-4 h-4 text-accent-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={project.GitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm"
                >
                  {/* <Github className="w-4 h-4" />
                  View Code */}
                </a>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
