import { Link } from 'react-router-dom';
import { Code2, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'; // Added Phone and MapPin
import { personalInfo, navLinks } from '../data/portfolio';

// Custom SVG icon that matches Lucide styles perfectly without package errors
function CustomLinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 bg-dark-950">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Sana Khan<span className="text-primary-400">.</span>
              </span>
            </Link>
            <p className="text-dark-400 text-sm leading-relaxed max-w-xs">
              {personalInfo?.role}. Building modern, responsive, and scalable
              web and mobile applications.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-dark-400 hover:text-primary-400 text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Me</h3>
            <div className="space-y-3">
              {/* Email */}
              {personalInfo?.email && (
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-dark-400 hover:text-primary-400 text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary-400" />
                  {personalInfo.email}
                </a>
              )}

              {/* Phone */}
              {personalInfo?.phone && (
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-3 text-dark-400 hover:text-primary-400 text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary-400" />
                  {personalInfo.phone}
                </a>
              )}

              {/* LinkedIn */}
              {personalInfo?.linkedin && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-dark-400 hover:text-primary-400 text-sm transition-colors"
                >
                  <CustomLinkedinIcon className="w-4 h-4 text-primary-400" />
                  LinkedIn Profile
                </a>
              )}

              {/* Address / Location */}
              {personalInfo?.location && (
                <div className="flex items-center gap-3 text-dark-400 text-sm">
                  <MapPin className="w-4 h-4 text-primary-400" />
                  {personalInfo.location}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-sm flex items-center gap-1">
            &copy; {new Date().getFullYear()} Sana. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-white/5 text-dark-400 hover:text-white hover:bg-primary-500/20 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}